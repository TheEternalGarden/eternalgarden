# Eternal Garden Website Instructions

## Overview
The Eternal Garden website is a modern, immersive web experience featuring a fullscreen video background and a sleek navigation menu.

## File Structure
```
eternalgarden/
├── index.html          # Main homepage
├── styles.css          # Global styles
├── script.js           # JavaScript functionality
├── media/
│   └── videos/
│       └── gardenerintro.mp4  # Main background video
└── instructions.md     # This documentation file
```

## Features
1. **Fullscreen Video Background**
   - Autoplays on page load (muted by default)
   - Loops continuously
   - Responsive design that maintains aspect ratio
   - Volume toggle button in bottom right corner
   - Error handling for video loading issues

2. **Navigation Menu**
   - Hamburger menu in top right corner
   - Fullscreen overlay when opened
   - Smooth animations
   - Pages:
     - HOME
     - STORY
     - SOUNDTRACK
     - ZERO

## Technical Details

### Video Implementation
- Video is implemented using HTML5 `<video>` tag
- Autoplay is enabled with `autoplay` attribute
- Muted by default for autoplay compatibility
- Volume can be toggled using the button in bottom right
- Error handling displays a message if video fails to load

### Menu Implementation
- Hamburger icon transforms into an X when menu is open
- Menu slides in from the right
- Semi-transparent black background
- Centered menu items with hover effects
- Click outside menu to close

## Browser Compatibility
- Works in all modern browsers
- Video autoplay requires user interaction in some browsers
- Fallback message for browsers that don't support video

## Development Notes
1. To add new pages:
   - Create new HTML file
   - Add link to menu in `index.html`
   - Ensure consistent styling by using `styles.css`

2. To modify video:
   - Replace `media/videos/gardenerintro.mp4`
   - Maintain same filename or update source in `index.html`

3. To update menu items:
   - Edit the `<ul>` section in `index.html`
   - Update corresponding page files

## Deployment
- Site is deployed on Vercel
- Automatic deployments on push to main branch
- Production URL: [Your Vercel URL]

## Contact
For technical support or questions, contact [Your Contact Information] 
## STEP 1: 🏠 Home Page (`pages/index.tsx`)

- [ ] Display `gardenerintro.mp4` as full-width autoplay video (with sound, auto loop)
## STEP 2: 🏠 Zero Page (`pages/zero.tsx`)
Display zerocapsule.mp4, autoplay and autoloop on page one of the Zero page
## STEP 3: 🏠 Zero Page (`pages/zero.tsx`)
Display codex.mp4 on autoplay and autoloop on page two of the Zero page

