// Tambahkan interaktivitas, seperti smooth scroll atau animasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Jika ada animasi AOS, tambahkan: AOS.init();