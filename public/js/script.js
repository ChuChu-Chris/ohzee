const images = [
  './img/FM-1849-04.jpg',
  './img/FM-1849-09.jpg',
  './img/FM-1849-06.jpg',
  './img/FM-1849.jpg',
  './img/IMG_20231215_120658.jpg',
  './img/IMG_20240109_032501.jpg',
  './img/IMG_20231215_120843.jpg',
];
let currentImageIndex = 0;
const transitionDuration = 500; // in milliseconds
const displayDuration = 3000; // in milliseconds

function showNextImage() {
  const heroImage = document.getElementById('hero-image');

  // Fade out current image
  heroImage.style.transition = `opacity ${transitionDuration}ms`;
  heroImage.style.opacity = 0;

  // After fade out, update image source and fade back in
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroImage.src = images[currentImageIndex];
    heroImage.style.opacity = 1;
  }, transitionDuration);

  // Schedule next transition
  setTimeout(showNextImage, displayDuration);
}

// Start slideshow on page load
window.onload = showNextImage;
