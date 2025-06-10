document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuItems = document.querySelector('.menu-items');
    const video = document.querySelector('video');
    const volumeToggle = document.getElementById('volumeToggle');

    // Set initial video state
    video.muted = false;
    video.volume = 1;
    volumeToggle.textContent = '🔊';
    volumeToggle.classList.remove('muted');

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
            video.volume = 0;
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
            // If autoplay fails, show a play button
            const playButton = document.createElement('button');
            playButton.className = 'play-button';
            playButton.textContent = 'Play Video';
            playButton.onclick = async () => {
                try {
                    await video.play();
                    playButton.remove();
                } catch (err) {
                    console.error('Error playing video after click:', err);
                }
            };
            document.body.appendChild(playButton);
        }
    };

    playVideo();
});
