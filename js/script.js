// Data Destinasi Wisata
const destinasiWisata = [
    {
        id: 1,
        nama: "Pantai Pangandaran",
        gambar: "images/pantai-pangandaran.jpg",
        deskripsi: "Pantai Pangandaran adalah pantai paling populer di Pangandaran dengan pasir putih dan ombak yang tenang. Tempat ini cocok untuk berenang, bermain air, atau sekadar berjemur menikmati matahari.",
        harga: "Rp 20.000/orang",
        fasilitas: ["Area parkir luas", "Toilet", "Warung makan", "Penyewaan pelampung"],
        lokasi: "Jl. Pantai Pangandaran, Desa Pangandaran",
        rating: 4.7,
        buka: "06:00 - 18:00 WIB"
    },
    {
        id: 2,
        nama: "Green Canyon",
        gambar: "images/green-canyon.jpg",
        deskripsi: "Green Canyon adalah destinasi alam yang menakjubkan dengan tebing hijau dan air sungai yang jernih. Pengunjung bisa menikmati pemandangan sambil berperahu atau berenang di air yang segar.",
        harga: "Rp 10.000/orang (Tidak termasuk perahu)",
        fasilitas: ["Perahu", "Pemandu wisata", "Area ganti pakaian", "Warung makan"],
        lokasi: "Desa Kertayasa, Kecamatan Cijulang",
        rating: 4.8,
        buka: "08:00 - 16:00 WIB"
    },
    {
        id: 3,
        nama: "Pantai Batu Hiu",
        gambar: "images/batu-hiu.jpg",
        deskripsi: "Pantai Batu Hiu menawarkan pemandangan tebing karang yang unik berbentuk seperti hiu. Tempat ini cocok untuk fotografi dan menikmati sunset yang spektakuler.",
        harga: "Rp 20.000/orang",
        fasilitas: ["Area parkir", "Spot foto", "Warung makan kecil"],
        lokasi: "Desa Ciliang, Kecamatan Parigi",
        rating: 4.5,
        buka: "07:00 - 17:00 WIB"
    },
    {
        id: 4,
        nama: "Taman Wisata Alam Pananjung",
        gambar: "images/pananjung.jpg",
        deskripsi: "Taman Wisata Alam Pananjung adalah cagar alam dengan hutan tropis, pantai yang indah, dan berbagai satwa liar. Pengunjung bisa trekking sambil menikmati alam yang masih alami.",
        harga: "Rp 16.000",
        fasilitas: ["Jalur trekking", "Pemandu wisata", "Toilet", "Area piknik"],
        lokasi: "Jl. Taman Wisata Alam Pananjung",
        rating: 4.6,
        buka: "07:00 - 17:00 WIB"
    },
    {
        id: 5,
        nama: "Pantai Barat Pangandaran",
        gambar: "images/pantai-barat.jpg",
        deskripsi: "Pantai Barat Pangandaran terkenal dengan ombaknya yang cocok untuk berselancar. Pantai ini lebih sepi dibanding Pantai Timur, cocok untuk yang ingin suasana lebih tenang.",
        harga: "Rp 20.000/orang",
        fasilitas: ["Area parkir", "Penyewaan papan selancar", "Warung makan"],
        lokasi: "Jl. Pantai Barat, Desa Pangandaran",
        rating: 4.4,
        buka: "24 jam"
    },
    {
        id: 6,
        nama: "Citumang River Tubing",
        gambar: "images/citumang.jpg",
        deskripsi: "Citumang River Tubing menawarkan petualangan menyusuri sungai dengan menggunakan ban dalam. Pengalaman seru dengan pemandangan tebing dan air jernih yang menyegarkan.",
        harga: "Rp 75.000 (termasuk peralatan dan pemandu)",
        fasilitas: ["Peralatan tubing", "Pemandu", "Area ganti pakaian", "Toilet"],
        lokasi: "Desa Bojong, Kecamatan Parigi",
        rating: 4.9,
        buka: "08:00 - 15:00 WIB"
    }
];

// Data Penginapan
const penginapan = [
    {
        id: 1,
        nama: "Horison Palma Hotel",
        gambar: "images/horison.jpg",
        deskripsi: "Terletak di di sisi barat Pantai Pangandaran, dan berhadapan langsung dengan pantai barat , berjarak sekitar 5 menit menuju Cagar Alam Pangandaran. Horison Palma Pangandaran adalah pilihan yang cocok untuk liburan maupun bisnis bersama keluarga , orang terkasih,ataupun mengadakan kegiatan gathring . Staf layanan 24 jam dan berbagai ukuran ruang pertemuan siap melayani Anda dan membuat menginap Anda tak terlupakan.",
        harga: "Rp 750.000 - Rp 1.050.000/malam",
        fasilitas: ["Kolam renang", "Restoran", "WiFi gratis", "Parkir"],
        lokasi: "Jalan Pantai Barat No. 91, Pangandaran, Kec. Pangandaran, Kab. Pangandaran, Jawa Barat 46596",
        rating: 4.5,
        jarak: "200 m dari Pantai Pangandaran"
    },
    {
        id: 2,
        nama: "Laut Biru Resort Hotel",
        gambar: "images/laut-biru.jpg",
        deskripsi: "Laut Biru Resort Hotel adalah hotel bintang 3 yang terletak di Pangandaran, Indonesia. Hotel ini menawarkan pengalaman liburan yang tak terlupakan dengan berbagai fasilitas dan pelayanan yang memuaskan. Dengan jumlah kamar sebanyak 208, hotel ini menyediakan akomodasi yang nyaman dan luas untuk para tamu. Hotel ini telah mengalami renovasi terakhir pada tahun 2015, sehingga tamu dapat menikmati suasana yang segar dan modern. Tersedia juga fasilitas check-in mulai dari pukul 02:00 PM dan check-out hingga pukul 12:00 PM, memberikan kenyamanan dan fleksibilitas bagi para tamu.",
        harga: "Rp 1.050.000 - Rp 2.293.202/malam",
        fasilitas: ["AC", "Restoran", "Kolam Renang", "Wi-FI"],
        lokasi: "Jl. E. Jaga Lautan No. 17-18, Pantai Barat Pangandaran, Kec. Pangandaran, Kab. Pangandaran, Jawa Barat 46596",
        rating: 4.2,
        jarak: "1.85 Km dari Pantai Pangandaran"
    },
    {
        id: 3,
        nama: "Pantai Indah Resort Hotel Timur",
        gambar: "images/pantai-indah.jpg",
        deskripsi: "Pantai Indah Resort Hotel Timur Pangandaran adalah tempat bermalam yang tepat bagi Anda yang berlibur bersama keluarga. Nikmati segala fasilitas hiburan untuk Anda dan keluarga.",
        harga: "Rp 900.901 - Rp 1.200.000/malam",
        fasilitas: ["Restoran", "AC", "Wi-Fi", "Supermarket"],
        lokasi: "Jl. Kidang Pananjung No. 151, Pantai Timur Pangandaran, Kec. Pangandaran, Kab. Pangandaran, Jawa Barat 46596",
        rating: 4.7,
        jarak: "1.67 Km dari Pantai Timur Pangandaran"
    }
];

// Fungsi untuk menampilkan destinasi wisata
function tampilkanDestinasiWisata() {
    const container = document.getElementById('wisata-container');
    
    destinasiWisata.forEach(wisata => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4';
        card.innerHTML = `
            <div class="card h-100">
                <img src="${wisata.gambar}" class="card-img-top" alt="${wisata.nama}">
                <div class="price-tag">${wisata.harga}</div>
                <div class="card-body">
                    <h5 class="card-title">${wisata.nama}</h5>
                    <p class="card-text text-muted">${wisata.deskripsi.substring(0, 100)}...</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-success">${wisata.rating} <i class="fas fa-star"></i></span>
                        <button class="btn btn-sm btn-outline-success" onclick="bukaModalWisata(${wisata.id})">Detail</button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Fungsi untuk menampilkan penginapan
function tampilkanPenginapan() {
    const container = document.getElementById('penginapan-container');
    
    penginapan.forEach(penginap => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4';
        card.innerHTML = `
            <div class="card h-100">
                <img src="${penginap.gambar}" class="card-img-top" alt="${penginap.nama}">
                <div class="card-body">
                    <h5 class="card-title">${penginap.nama}</h5>
                    <p class="card-text text-muted">${penginap.deskripsi.substring(0, 100)}...</p>
                    <p class="text-success fw-bold">${penginap.harga}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-success">${penginap.rating} <i class="fas fa-star"></i></span>
                        <span class="text-muted small">${penginap.jarak}</span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Fungsi untuk membuka modal detail wisata
function bukaModalWisata(id) {
    const wisata = destinasiWisata.find(w => w.id === id);
    const modalTitle = document.getElementById('wisataModalTitle');
    const modalBody = document.getElementById('wisataModalBody');
    
    modalTitle.textContent = wisata.nama;
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${wisata.gambar}" alt="${wisata.nama}" class="img-fluid rounded modal-image">
            </div>
            <div class="col-md-6">
                <h4>${wisata.nama}</h4>
                <p><span class="badge bg-success">${wisata.rating} <i class="fas fa-star"></i></span></p>
                <p><strong>Harga Tiket:</strong> ${wisata.harga}</p>
                <p><strong>Jam Buka:</strong> ${wisata.buka}</p>
                <p><strong>Lokasi:</strong> ${wisata.lokasi}</p>
                <hr>
                <h5>Deskripsi</h5>
                <p>${wisata.deskripsi}</p>
                <h5 class="mt-3">Fasilitas</h5>
                <ul>
                    ${wisata.fasilitas.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('wisataModal'));
    modal.show();
}

// Fungsi untuk mengubah navbar saat scroll
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Fungsi untuk smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Fungsi untuk menangani form kontak
function setupContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ambil nilai form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validasi sederhana
        if (!name || !email || !message) {
            alert('Harap isi semua field!');
            return;
        }
        
        // Simulasi pengiriman (dalam aplikasi nyata, ini akan mengirim ke server)
        alert(`Terima kasih ${name}, pesan Anda telah terkirim! Kami akan menghubungi Anda melalui email ${email} segera.`);
        form.reset();
    });
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    tampilkanDestinasiWisata();
    tampilkanPenginapan();
    setupNavbarScroll();
    setupSmoothScrolling();
    setupContactForm();
});