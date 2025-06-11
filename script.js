document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuItems = document.querySelector('.menu-items');
    const video = document.querySelector('video');
    const volumeToggle = document.getElementById('volumeToggle');

    // Only run video/volume code if both exist
    if (video && volumeToggle) {
        video.muted = true;
        video.volume = 1;
        volumeToggle.textContent = '🔇';
        volumeToggle.classList.add('muted');

        volumeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (video.muted) {
                video.muted = false;
                video.volume = 1;
                volumeToggle.textContent = '🔊';
                volumeToggle.classList.remove('muted');
            } else {
                video.muted = true;
                volumeToggle.textContent = '🔇';
                volumeToggle.classList.add('muted');
            }
        });

        video.play().catch(error => {
            console.error('Error playing video:', error);
        });
    }

    // Hamburger menu functionality
    hamburgerIcon.addEventListener('click', () => {
        menuItems.classList.toggle('active');
        hamburgerIcon.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburgerIcon.contains(e.target) && !menuItems.contains(e.target)) {
            menuItems.classList.remove('active');
            hamburgerIcon.classList.remove('active');
        }
    });
});
