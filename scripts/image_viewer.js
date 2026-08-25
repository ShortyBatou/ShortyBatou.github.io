const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption'); // 1. Récupération
const zoomableImages = document.querySelectorAll('.zoomable-img');

zoomableImages.forEach(img => {
    img.addEventListener('click', (e) => {
        e.preventDefault();
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = img.alt || '';

        lightbox.showModal();
    });
});

lightbox.addEventListener('click', () => {
    lightbox.close();
});