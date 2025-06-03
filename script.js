document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuItems = document.querySelector('.menu-items');
    const video = document.querySelector('video');
    const playButton = document.getElementById('playButton');
    const volumeToggle = document.getElementById('volumeToggle');

    // Set initial video state
    video.muted = true;
    video.volume = 1;

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

    // Play button functionality
    playButton.addEventListener('click', async () => {
        try {
            // Start video with sound
            video.muted = false;
            video.volume = 1;
            await video.play();
            
            // Hide play button and show volume toggle
            playButton.classList.add('hidden');
            volumeToggle.style.display = 'block';
            
            console.log('Video started with sound');
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
            console.log('Unmuted video');
        } else {
            video.muted = true;
            volumeToggle.textContent = '🔇';
            volumeToggle.classList.add('muted');
            console.log('Muted video');
        }
    });

    // Ensure video is playing
    video.play().catch(error => {
        console.error('Error playing video:', error);
    });
});
