// --- KONFIGURASI EFEK SALJU ---
const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];
// Mengurangi jumlah salju agar lebih elegan dan tidak "ramai"
const maxSnowflakes = 70; 

class Snowflake {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * -1;
        // Salju lebih halus (ukuran kecil)
        this.size = Math.random() * 2 + 0.5; 
        // Kecepatan lambat (slow motion luxury feel)
        this.speed = Math.random() * 0.5 + 0.2; 
        this.drift = Math.random() * 0.5 - 0.25;
    }

    update() {
        this.y += this.speed;
        this.x += this.drift;
        if (this.y > canvas.height) this.reset();
    }

    draw() {
        // Opacity 80% (atas) -> 10% (bawah)
        let opacity = 0.8 - (this.y / canvas.height) * 0.7;
        if (opacity < 0.1) opacity = 0.1;

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initSnow() {
    for (let i = 0; i < maxSnowflakes; i++) {
        snowflakes.push(new Snowflake());
        snowflakes[i].y = Math.random() * canvas.height;
    }
}

function animateSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(flake => {
        flake.update();
        flake.draw();
    });
    requestAnimationFrame(animateSnow);
}

// Handle Resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// --- ANIMASI SCROLL REVEAL (Mewah) ---
// Ini membuat elemen muncul perlahan saat di-scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Stop observing once revealed (optional, biar tidak animasi ulang)
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.15 // Muncul ketika 15% elemen terlihat
});

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Jalankan sistem
initSnow();
animateSnow();

let currentVideo = 0;
const videos = document.querySelectorAll('.video-box');

function changeVideo(n) {
    // 1. Hentikan video yang sedang berjalan
    const currentVidElement = videos[currentVideo].querySelector('video');
    currentVidElement.pause();
    currentVidElement.currentTime = 0;

    // 2. Hapus semua class status dari video saat ini
    videos[currentVideo].classList.remove('active', 'slide-next', 'slide-prev');

    // 3. Hitung index video berikutnya
    currentVideo = (currentVideo + n + videos.length) % videos.length;

    // 4. Tentukan arah animasi
    if (n > 0) {
        // Jika klik Next (n = 1)
        videos[currentVideo].classList.add('active', 'slide-next');
    } else {
        // Jika klik Prev (n = -1)
        videos[currentVideo].classList.add('active', 'slide-prev');
    }
}

/* --- SISTEM GALERI YANG BENAR --- */
let galleryIndex = 0;

function moveGallery(direction) {
    const track = document.getElementById('galleryTrack');
    const cards = document.querySelectorAll('.gallery-card');
    const totalCards = cards.length;
    
    // Update Index
    galleryIndex += direction;

    // Logika Loop (Muter balik)
    if (galleryIndex < 0) {
        galleryIndex = totalCards - 1;
    } else if (galleryIndex >= totalCards) {
        galleryIndex = 0;
    }

    // 1. Ambil lebar kartu yang SEBENARNYA dari browser
    // Ini menangani responsif HP vs Laptop secara otomatis
    const cardWidth = cards[0].clientWidth;

    // 2. Geser Track
    track.style.transform = `translateX(-${galleryIndex * cardWidth}px)`;
}

// Opsional: Reset posisi saat layar di-resize agar tidak berantakan
window.addEventListener('resize', () => {
    const track = document.getElementById('galleryTrack');
    track.style.transform = `translateX(0px)`;
    galleryIndex = 0;
});
