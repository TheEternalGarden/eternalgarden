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

    // Video and audio controls
    const video = document.querySelector('video');
    const volumeToggle = document.getElementById('volumeToggle');
    
    // Set initial state
    video.muted = true;
    volumeToggle.textContent = '🔇';
    volumeToggle.classList.add('muted');

    // Ensure video is playing
    const playVideo = async () => {
        try {
            await video.play();
        } catch (error) {
            console.log("Video autoplay failed:", error);
        }
    };
    playVideo();

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