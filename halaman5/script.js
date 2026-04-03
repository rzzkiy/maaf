document.addEventListener('DOMContentLoaded', () => {
    const btnNext = document.getElementById('btnNext');

    // Fungsi membuat love particle yang berterbangan
    function createLoveParticle(isClick = false) {
        const particle = document.createElement('div');
        const emojis = ['❤️', '💖', '💗', '💘', '💕', '✨'];
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        particle.style.position = 'fixed';
        particle.style.fontSize = isClick ? '24px' : '17px';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = '105vh';
        particle.style.zIndex = '100';
        particle.style.pointerEvents = 'none';
        particle.style.opacity = isClick ? '0.95' : '0.78';
        particle.style.userSelect = 'none';
        
        document.body.appendChild(particle);

        const duration = isClick ? 
            (Math.random() * 2.8 + 3.2) : 
            (Math.random() * 4.5 + 6);

        const angle = Math.random() * 50 - 25;

        particle.animate([
            { 
                transform: `translateY(0) rotate(0deg)`,
                opacity: particle.style.opacity 
            },
            { 
                transform: `translateY(-${window.innerHeight + 180}px) rotate(${angle}deg)`,
                opacity: 0 
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
        });

        setTimeout(() => particle.remove(), duration * 1000 + 100);
    }

    // Flying hearts otomatis saat halaman dibuka
    function startFloatingHearts() {
        for (let i = 0; i < 13; i++) {
            setTimeout(() => createLoveParticle(false), i * 120);
        }

        setInterval(() => {
            if (Math.random() > 0.37) {
                createLoveParticle(false);
            }
        }, 700);
    }

    // Event klik tombol "hmmm"
    btnNext.addEventListener('click', () => {
        btnNext.style.transition = 'all 0.3s ease';
        btnNext.style.transform = 'scale(0.92)';
        btnNext.innerText = 'Hehe coba tebak dulu... ❤️';

        // Ledakan love saat klik
        for (let i = 0; i < 26; i++) {
            setTimeout(() => {
                createLoveParticle(true);
            }, i * 27);
        }

        setTimeout(() => {
            window.location.href = '../halaman6/index.html';
        }, 850);
    });

    // Jalankan flying hearts
    startFloatingHearts();
});