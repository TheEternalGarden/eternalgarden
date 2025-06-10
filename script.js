document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuItems = document.querySelector('.menu-items');
    const video = document.querySelector('#introVideo');
    const volumeToggle = document.getElementById('volumeToggle');

    console.log('Video element:', video);
    console.log('Video source:', video.querySelector('source').src);

    // Set initial video state
    video.muted = true; // Start muted for autoplay
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
    const playVideo = async () => {
        try {
            await video.play();
            console.log('Video started playing');
        } catch (error) {
            console.error('Error playing video:', error);
            // Try playing again after user interaction
            document.addEventListener('click', () => {
                video.play().catch(e => console.error('Still cannot play video:', e));
            }, { once: true });
        }
    };

    playVideo();
});
