const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const zoomableImages = document.querySelectorAll('.zoomable-img');

zoomableImages.forEach(img => {
    img.addEventListener('click', (e) => {
        // Bloque l'ouverture/fermeture du <details> parent lors du clic sur l'image
        e.preventDefault();
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.showModal();
    });
});

// Ferme la lightbox au clic n'importe où dessus (arrière-plan)
lightbox.addEventListener('click', () => {
    lightbox.close();
});