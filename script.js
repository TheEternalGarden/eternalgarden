document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuItems = document.querySelector('.menu-items');
    const video = document.querySelector('#introVideo');
    const volumeToggle = document.getElementById('volumeToggle');
    const videoError = document.querySelector('#videoError');

    // Debug video element
    console.log('Video element:', video);
    console.log('Video sources:', video.querySelectorAll('source'));

    // Video error handling
    video.addEventListener('error', (e) => {
        console.error('Video error:', e);
        const error = video.error;
        let message = 'Video error: ';
        
        switch (error.code) {
            case MediaError.MEDIA_ERR_ABORTED:
                message += 'You aborted the video playback.';
                break;
            case MediaError.MEDIA_ERR_NETWORK:
                message += 'A network error caused the video download to fail.';
                break;
            case MediaError.MEDIA_ERR_DECODE:
                message += 'The video playback was aborted due to a corruption problem.';
                break;
            case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                message += 'The video could not be loaded, either because the server or network failed or because the format is not supported.';
                break;
            default:
                message += 'An unknown error occurred.';
        }
        
        console.error(message);
        videoError.textContent = message;
        videoError.style.display = 'block';
    });

    // Video loading events
    video.addEventListener('loadedmetadata', () => {
        console.log('Video metadata loaded');
        console.log('Video duration:', video.duration);
        console.log('Video dimensions:', video.videoWidth, 'x', video.videoHeight);
    });

    video.addEventListener('loadeddata', () => {
        console.log('Video data loaded');
    });

    video.addEventListener('canplay', () => {
        console.log('Video can play');
    });

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
