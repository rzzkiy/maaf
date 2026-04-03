document.addEventListener('DOMContentLoaded', () => {
    const btnWA = document.getElementById('btnWA');

    // Fungsi membuat love particle yang berterbangan
    function createLoveParticle(isClick = false) {
        const particle = document.createElement('div');
        const emojis = ['❤️', '💖', '💗', '💘', '💕', '✨'];
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        particle.style.position = 'fixed';
        particle.style.fontSize = isClick ? '25px' : '17px';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = '105vh';
        particle.style.zIndex = '100';
        particle.style.pointerEvents = 'none';
        particle.style.opacity = isClick ? '0.95' : '0.78';
        particle.style.userSelect = 'none';
        
        document.body.appendChild(particle);

        const duration = isClick ? 
            (Math.random() * 2.6 + 3.4) : 
            (Math.random() * 4.8 + 6.2);

        const angle = Math.random() * 55 - 27;

        particle.animate([
            { 
                transform: `translateY(0) rotate(0deg)`,
                opacity: particle.style.opacity 
            },
            { 
                transform: `translateY(-${window.innerHeight + 200}px) rotate(${angle}deg)`,
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
        for (let i = 0; i < 15; i++) {
            setTimeout(() => createLoveParticle(false), i * 100);
        }

        setInterval(() => {
            if (Math.random() > 0.33) {
                createLoveParticle(false);
            }
        }, 650);
    }

    // Event klik tombol WA
    btnWA.addEventListener('click', () => {
        btnWA.style.transition = 'all 0.3s ease';
        btnWA.style.transform = 'scale(0.9)';
        btnWA.innerText = "tapi boong wkwk... ❤️";

        // Ledakan love particles yang lebih romantis
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createLoveParticle(true);
            }, i * 24);
        }

        const phoneNumber = "6285732453220";
        const message = "iya aku maafin kamu, tapi jangan di ulangi lagi";
        const encodedMessage = encodeURIComponent(message);
        const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        setTimeout(() => {
            window.location.href = waLink;
        }, 950);
    });

    // Jalankan flying hearts
    startFloatingHearts();
});