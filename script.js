// JavaScript for opening and closing the video modal
// JavaScript for Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

// Auto-slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);

// Dot click navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// JavaScript for Video Modal
const videoModal = document.getElementById('video-modal');
const videoPlayer = document.getElementById('video-player');
const closeModal = document.querySelector('.close-modal');
const movieCards = document.querySelectorAll('.movie-card');

// Show video modal and play selected video
movieCards.forEach(card => {
    card.addEventListener('click', () => {
        const videoSrc = card.getAttribute('data-video');
        videoPlayer.src = videoSrc;
        videoModal.classList.add('active');
        videoPlayer.play();
    });
});

// Close video modal
closeModal.addEventListener('click', () => {
    videoModal.classList.remove('active');
    videoPlayer.pause();
    videoPlayer.src = '';
});

// Close video modal when clicking outside of the video player
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        videoPlayer.pause();
        videoPlayer.src = '';
    }
});
