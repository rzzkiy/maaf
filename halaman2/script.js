document.addEventListener('DOMContentLoaded', () => {
    const btnNo = document.getElementById('btnNo');
    const btnYes = document.getElementById('btnYes');

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
        // Awal muncul banyak
        for (let i = 0; i < 14; i++) {
            setTimeout(() => createLoveParticle(false), i * 110);
        }

        // Terus muncul pelan
        setInterval(() => {
            if (Math.random() > 0.35) {
                createLoveParticle(false);
            }
        }, 680);
    }

    // Fungsi memindahkan tombol "No" (tetap sama seperti sebelumnya)
    const moveButton = () => {
        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight;

        const buttonWidth = btnNo.offsetWidth;
        const buttonHeight = btnNo.offsetHeight;

        const randomX = Math.floor(Math.random() * (maxWidth - buttonWidth));
        const randomY = Math.floor(Math.random() * (maxHeight - buttonHeight));

        btnNo.style.position = 'fixed';
        btnNo.style.left = randomX + 'px';
        btnNo.style.top = randomY + 'px';
        btnNo.style.transition = 'none';
    };

    // Event untuk tombol No
    btnNo.addEventListener('mouseover', moveButton);
    btnNo.addEventListener('click', moveButton);

    // Event untuk tombol Yes
    btnYes.addEventListener('click', () => {
        btnYes.innerText = 'Makasih Cimit Cantik! ❤️';
        btnYes.style.backgroundColor = '#4CAF50';
        btnYes.style.transform = 'scale(1.05)';

        // Ledakan love saat klik Yes
        for (let i = 0; i < 28; i++) {
            setTimeout(() => {
                createLoveParticle(true);
            }, i * 22);
        }

        setTimeout(() => {
            window.location.href = '../halaman3/index.html';
        }, 1300);
    });

    // Jalankan flying hearts saat halaman load
    startFloatingHearts();
});