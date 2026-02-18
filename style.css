/* --- RESET & VARIABLES --- */
:root {
    --lapis-deep: #0f172a;    /* Sangat gelap */
    --lapis-mid: #1e3a8a;     /* Biru Lapis Lazuli */
    --lapis-accent: #3b82f6;  /* Highlight biru */
    
    /* Gradasi Emas Metalik Realistis */
    --gold-gradient: linear-gradient(135deg, #9ebbcc, #acc6d8, #94b1c2, #bcd6e6, #8fa9b9);
    --gold-solid: #acc6d8;
    
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --text-white: #ffffff;
    --text-grey: #cbd5e1;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background: radial-gradient(circle at 50% 30%, var(--lapis-mid), var(--lapis-deep) 80%);
    font-family: 'Montserrat', sans-serif;
    color: var(--text-white);
    overflow-x: hidden;
}

/* Canvas Salju (Background Layer Terbawah) */
#snowCanvas {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: -1;
    pointer-events: none;
}

/* --- TYPOGRAPHY & GOLD EFFECTS --- */
h1, h2, h3, .logo { font-family: 'Cinzel', serif; }

.gold-text {
    background: var(--gold-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
}

.gold-divider {
    height: 3px;
    width: 100px;
    background: var(--gold-gradient);
    margin: 20px auto;
    border-radius: 2px;
}

/* --- HEADER --- */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 8%;
    position: absolute;
    width: 100%;
    z-index: 10;
}

.logo {
    font-size: 1.8rem;
    letter-spacing: 2px;
    font-weight: bold;
}
.logo span { color: var(--gold-solid); }

nav ul { list-style: none; display: flex; gap: 40px; }
nav a {
    text-decoration: none;
    color: var(--text-white);
    font-size: 0.9rem;
    letter-spacing: 1px;
    position: relative;
    transition: 0.3s;
}

nav a::after {
    content: '';
    position: absolute;
    width: 0; height: 1px;
    bottom: -5px; left: 0;
    background: var(--gold-solid);
    transition: 0.3s;
}
nav a:hover::after { width: 100%; }

/* --- HERO SECTION --- */
#hero {
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 8%;
}

.hero-container h1 {
    font-size: 5rem;
    line-height: 1.1;
    margin-bottom: 20px;
}

.hero-container p {
    font-size: 1.2rem;
    color: var(--text-grey);
    letter-spacing: 1px;
    margin-bottom: 40px;
    max-width: 500px;
}

.gold-line {
    width: 60px; height: 2px;
    background: var(--gold-solid);
    margin-bottom: 20px;
}

/* Tombol Mewah */
.btn-royal {
    padding: 15px 40px;
    border: 1px solid var(--gold-solid);
    color: var(--gold-solid);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.4s;
    position: relative;
    overflow: hidden;
    display: inline-block;
}

.btn-royal:hover {
    background: var(--gold-gradient);
    color: var(--lapis-deep);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
    border-color: transparent;
}

/* --- ABOUT SECTION (Glassmorphism) --- */
#about {
    padding: 100px 8%;
    display: flex;
    justify-content: center;
}

.glass-card {
    display: flex;
    align-items: center;
    gap: 50px;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px); /* Safari support */
    border: 1px solid var(--glass-border);
    padding: 50px;
    border-radius: 20px;
    max-width: 1100px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

.about-img {
    position: relative;
    min-width: 300px;
    height: 400px;
}

.about-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    border-radius: 5px;
    position: relative;
    z-index: 2;
}

/* Border Emas Terpisah di belakang foto */
.img-border {
    position: absolute;
    top: 20px; left: 20px;
    width: 100%; height: 100%;
    border: 2px solid var(--gold-solid);
    z-index: 1;
    transition: 0.5s;
}

.glass-card:hover .img-border {
    top: 10px; left: 10px;
}

.about-content h2 { font-size: 3rem; margin-bottom: 20px; }
.highlight { 
    color: var(--gold-solid); 
    font-family: 'Cinzel', serif; 
    font-size: 1.2rem;
    margin-bottom: 20px;
}
.about-content p { color: var(--text-grey); line-height: 1.8; margin-bottom: 30px; }

.stats { display: flex; gap: 40px; }
.stats h3 { font-size: 2.5rem; color: var(--text-white); }
.stats span { font-size: 0.8rem; text-transform: uppercase; color: var(--gold-solid); }

/* --- PORTFOLIO SECTION UPDATED --- */
#work { padding: 100px 8%; text-align: center; }

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.portfolio-card {
    position: relative;
    height: 400px; /* Tinggi bingkai tetap seragam */
    overflow: hidden;
    cursor: pointer;
    border-radius: 12px;
    background: #050a18; /* Warna gelap agar ruang kosong foto tetap mewah */
    border: 1px solid rgba(172, 198, 216, 0.2); /* Sesuai var --gold-solid */
    transition: 0.4s ease;
}

.portfolio-card img {
    width: 100%;
    height: 100%;
    /* MENGUBAH COVER MENJADI CONTAIN AGAR FOTO UTUH */
    object-fit: contain; 
    padding: 10px; /* Memberi jarak agar foto tidak menempel ke tepi bingkai */
    transition: transform 0.6s ease;
}

/* Efek Hover Mengambang */
.portfolio-card:hover {
    transform: translateY(-10px); /* Efek bingkai terangkat */
    border-color: var(--gold-solid);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
}

.portfolio-card:hover img { 
    transform: scale(1.05); 
}

.card-info {
    position: absolute;
    bottom: 0; left: 0; width: 100%;
    padding: 20px;
    background: linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent);
    text-align: left;
    transform: translateY(100%); 
    transition: 0.4s;
}

.portfolio-card:hover .card-info { transform: translateY(0); }
.card-info h3 { color: var(--gold-solid); font-size: 1.3rem; margin-bottom: 5px; }
.card-info p { font-size: 0.8rem; color: #ccc; }

/* --- ANIMASI SCROLL (Reveal) --- */
.reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1s ease;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

footer {
    text-align: center;
    padding: 50px;
    font-size: 0.8rem;
    color: var(--gold-solid);
    border-top: 1px solid rgba(255,255,255,0.05);
}

/* Responsive */
@media (max-width: 900px) {
    .hero-container h1 { font-size: 3rem; }
    .glass-card { flex-direction: column; }
    .about-img { width: 100%; height: 300px; }
    header { padding: 20px; flex-direction: column; gap: 20px;}
}/* ... (Gunakan CSS sebelumnya, lalu tambahkan kode di bawah ini) ... */

#contact {
    padding: 100px 8%;
    background: linear-gradient(to bottom, transparent, rgba(10, 17, 40, 0.5));
}

.contact-container {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}

.contact-desc {
    color: var(--text-grey);
    margin-bottom: 50px;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 50px;
    text-align: left;
}

.info-item {
    margin-bottom: 30px;
}

.info-item span {
    font-family: 'Cinzel', serif;
    font-size: 0.8rem;
    letter-spacing: 2px;
    display: block;
    margin-bottom: 5px;
}

.info-item p {
    font-size: 1.2rem;
    font-weight: 300;
}

.social-links {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.social-icon {
    text-decoration: none;
    color: var(--text-white);
    font-size: 0.8rem;
    border-bottom: 1px solid var(--gold-solid);
    padding-bottom: 5px;
    transition: 0.3s;
}

.social-icon:hover {
    color: var(--gold-solid);
}

/* Form Styling */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-form input, 
.contact-form textarea {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(212, 175, 55, 0.2);
    padding: 15px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    border-radius: 5px;
    outline: none;
    transition: 0.3s;
}

.contact-form input:focus, 
.contact-form textarea:focus {
    border-color: var(--gold-solid);
    background: rgba(255, 255, 255, 0.1);
}

.contact-form .btn-royal {
    align-self: flex-start;
    cursor: pointer;
    background: transparent;
}

@media (max-width: 768px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }
}
.button-container {
    display: flex;
    justify-content: center; /* Menaruh konten di tengah secara horizontal */
    align-items: center;     /* Menaruh konten di tengah secara vertikal */
    margin-top: 50px;        /* Memberi jarak dari galeri di atasnya */
    width: 100%;             /* Memastikan kontainer selebar layar */
    .btn-royal {
    display: inline-block; /* Sangat penting agar tombol bisa digeser oleh flexbox */
    text-align: center;
}
}

/* Container Video Vertikal - Dipaksa Ramping */
.video-slider-container {
    width: 300px !important; /* Paksa lebar hanya 300px */
    max-width: 90% !important; 
    margin: 40px auto !important;
    position: relative !important;
    background: #000 !important;
    padding: 10px !important;
    border-radius: 25px !important;
    border: 2px solid var(--gold-solid) !important;
    overflow: hidden !important;
}

.vertical-video {
    width: 100% !important;
    height: auto !important;
    /* PAKSA RASIO 9:16 (Vertikal) */
    aspect-ratio: 9 / 16 !important; 
    border-radius: 18px !important;
    display: block !important;
    object-fit: cover !important; /* Menjamin video penuh tanpa gepeng */
}

/* Navigasi Slider di bawah kotak video */
.slider-nav {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.video-box {
    display: none;
}

.video-box.active {
    display: block;
    animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Container Utama agar tombol dan video sejajar horizontal */
.slider-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px; /* Jarak antara tombol dan kotak video */
    max-width: 1000px;
    margin: 0 auto;
}

.video-slider-container {
    width: 280px !important; /* Ukuran ramping sesuai keinginan */
    background: #000;
    border-radius: 25px;
    border: 2px solid var(--gold-solid);
    overflow: hidden;
    position: relative;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
}

.vertical-video {
    width: 100% !important;
    height: auto !important;
    aspect-ratio: 9 / 16 !important; /* Pastikan 9/16 agar vertikal */
    display: block;
    object-fit: cover; /* Di halaman web tetap penuh */
}

/* SOLUSI FULLSCREEN: Agar tidak terpotong saat layar penuh */
video:fullscreen {
    object-fit: contain !important; /* Memaksa video tampil utuh dengan bar hitam di samping */
}
video:-webkit-full-screen {
    object-fit: contain !important;
}

/* Style tombol baru di samping */
.nav-side-btn {
    background: transparent;
    border: 1px solid var(--gold-solid);
    color: var(--gold-solid);
    font-size: 2rem;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
}

.nav-side-btn:hover {
    background: var(--gold-gradient);
    color: #000;
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
}

/* Responsif untuk HP: Tombol kembali ke bawah agar tidak sempit */
@media (max-width: 600px) {
    .slider-wrapper {
        flex-direction: column;
    }
    .nav-side-btn {
        display: none; /* Atau bisa disesuaikan lagi */
    }
}

/* Container harus menyembunyikan elemen yang sedang 'mengantre' di luar */
.video-slider-container {
    overflow: hidden !important; 
    position: relative;
}

/* Animasi Slide dari Kanan (saat klik Next) */
@keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

/* Animasi Slide dari Kiri (saat klik Prev) */
@keyframes slideInLeft {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

/* Class tambahan yang akan dikontrol oleh JavaScript */
.video-box.slide-next {
    animation: slideInRight 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.video-box.slide-prev {
    animation: slideInLeft 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Pastikan video box aktif tetap terdisplay */
.video-box.active {
    display: block !important;
}

/* --- NEW GALLERY SYSTEM (FIXED) --- */
.gallery-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
}

.gallery-viewport {
    width: 600px; /* Lebar Jendela Tetap */
    height: 400px; /* Tinggi Jendela Tetap (Rasio 3:2 Standard DSLR) */
    overflow: hidden;
    border-radius: 12px;
    border: 2px solid var(--gold-solid);
    background: #000; /* Background hitam murni */
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.gallery-track {
    display: flex;
    height: 100%;
    /* Tidak ada gap di sini, kita atur via JS/Padding jika perlu */
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.gallery-card {
    /* PENTING: Flex-shrink 0 agar kartu tidak gepeng */
    flex: 0 0 600px; 
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gallery-card img {
    /* Logika: Foto akan pas di dalam kotak 600x400 */
    /* Jika foto 16:9, ada bar hitam atas-bawah (Cinematic) */
    /* Jika foto 3:2, FULL SCREEN */
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain; 
    display: block;
}

/* Tombol Navigasi yang Lebih Tegas */
.nav-btn {
    background: rgba(15, 23, 42, 0.8);
    color: var(--gold-solid);
    border: 1px solid var(--gold-solid);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s;
    z-index: 10;
}

.nav-btn:hover {
    background: var(--gold-solid);
    color: #000;
    transform: scale(1.1);
}

/* Responsif untuk HP (Penting agar tidak rusak di layar kecil) */
@media (max-width: 768px) {
    .gallery-viewport, .gallery-card {
        width: 100%; /* Full width di HP */
        height: 250px; /* Tinggi disesuaikan */
        flex-basis: 100%;
    }
}

/* Navigasi Tombol yang konsisten */
.nav-side-btn {
    background: transparent;
    border: 1px solid var(--gold-solid);
    color: var(--gold-solid);
    font-size: 1.5rem;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}
.nav-side-btn:hover { background: var(--gold-solid); color: #000; }

/* --- DRIVE MENU STYLING --- */
.drive-menu-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1100px;
    margin: 0 auto;
}

.drive-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--gold-solid);
    border-radius: 15px;
    padding: 40px 30px;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(10px);
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 20px;
    filter: drop-shadow(0 0 10px rgba(172, 198, 216, 0.3));
}

.drive-card h3 {
    font-family: 'Cinzel', serif;
    color: var(--gold-solid);
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.drive-card p {
    font-size: 0.9rem;
    color: var(--text-grey);
    margin-bottom: 25px;
    line-height: 1.6;
}

.view-btn {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--gold-solid);
    border-bottom: 1px solid transparent;
    transition: 0.3s;
}

/* Hover Effects */
.drive-card:hover {
    transform: translateY(-15px);
    background: rgba(172, 198, 216, 0.1);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-color: #fff;
}

.drive-card:hover .view-btn {
    border-color: var(--gold-solid);
    padding-bottom: 5px;
}

.marquee-container {
    padding: 60px 0;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.02);
    border-top: 1px solid var(--glass-border);
    border-bottom: 1px solid var(--glass-border);
    margin-top: 50px;
}

.marquee-content {
    display: flex;
    white-space: nowrap;
    animation: marquee 20s linear infinite;
}

.marquee-content span {
    font-family: 'Cinzel', serif;
    font-size: 5rem;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 1px rgba(172, 198, 216, 0.3); /* Outline emas tipis */
    padding-right: 50px;
}

@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

