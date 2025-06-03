document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuItems = document.querySelector('.menu-items');
    const video = document.querySelector('video');
    const volumeToggle = document.getElementById('volumeToggle');
    const startOverlay = document.getElementById('startOverlay');
    const startButton = document.getElementById('startButton');

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

    // Start button functionality
    startButton.addEventListener('click', async () => {
        try {
            // Start video with sound
            video.muted = false;
            video.volume = 1;
            await video.play();
            
            // Update volume toggle state
            volumeToggle.textContent = '🔊';
            volumeToggle.classList.remove('muted');
            
            // Hide overlay
            startOverlay.classList.add('hidden');
        } catch (error) {
            console.error('Error starting video:', error);
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