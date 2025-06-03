document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuItems = document.querySelector('.menu-items');
    const video = document.querySelector('video');
    const volumeToggle = document.getElementById('volumeToggle');

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

    // Volume toggle functionality
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
}); 