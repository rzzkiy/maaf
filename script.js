document.addEventListener('DOMContentLoaded', () => {
    const btnNext = document.getElementById('btnNext');

    // Fungsi membuat love particle
    function createLoveParticle(isClick = false) {
        const particle = document.createElement('div');
        const emojis = ['❤️', '💖', '💗', '💘', '✨', '💕'];
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        particle.style.position = 'fixed';
        particle.style.fontSize = isClick ? '22px' : '16px';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = '105vh'; // mulai dari bawah
        particle.style.zIndex = '100';
        particle.style.pointerEvents = 'none';
        particle.style.opacity = isClick ? '0.95' : '0.75';
        particle.style.userSelect = 'none';
        
        document.body.appendChild(particle);

        const duration = isClick ? 
            (Math.random() * 2.5 + 3.5) : 
            (Math.random() * 4 + 5.5);

        const angle = Math.random() * 60 - 30; // gerakan sedikit miring

        particle.animate([
            { 
                transform: `translateY(0) rotate(0deg)`,
                opacity: particle.style.opacity 
            },
            { 
                transform: `translateY(-${window.innerHeight + 150}px) rotate(${angle}deg)`,
                opacity: 0 
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
        });

        setTimeout(() => particle.remove(), duration * 1000 + 100);
    }

    // Saat halaman dibuka → love particles otomatis muncul (loop lembut)
    function startFloatingHearts() {
        // Munculkan beberapa di awal
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                createLoveParticle(false);
            }, i * 120);
        }

        // Terus muncul secara berkala (setiap 600-900ms)
        setInterval(() => {
            if (Math.random() > 0.3) {  // tidak terlalu padat
                createLoveParticle(false);
            }
        }, 650);
    }

    // Saat tombol diklik → ledakan love particles yang lebih banyak & besar
    btnNext.addEventListener('click', () => {
        btnNext.style.transition = 'all 0.3s ease';
        btnNext.style.transform = 'scale(0.9)';
        btnNext.style.opacity = '0.75';
        // btnNext.innerText = 'Tunggu ya sayang... ❤️';

        // Ledakan cinta saat klik
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                createLoveParticle(true);
            }, i * 25);
        }

        setTimeout(() => {
            window.location.href = 'halaman2/index.html';
        }, 900);
    });

    // Jalankan efek flying hearts saat halaman load
    startFloatingHearts();
});