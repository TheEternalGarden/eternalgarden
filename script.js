document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuItems = document.querySelector('.menu-items');

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

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    const volumeToggle = document.getElementById('volumeToggle');
    
    // Ensure video is playing
    video.play().catch(function(error) {
        console.log("Video autoplay failed:", error);
    });

    // Volume toggle functionality
    volumeToggle.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            volumeToggle.textContent = '🔊';
            volumeToggle.classList.remove('muted');
        } else {
            video.muted = true;
            volumeToggle.textContent = '🔇';
            volumeToggle.classList.add('muted');
        }
    });
}); 