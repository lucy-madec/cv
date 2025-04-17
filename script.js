document.addEventListener('DOMContentLoaded', function() {
    // Animation pour le bouton de téléchargement
    const downloadBtn = document.querySelector('.download-btn a');
    
    downloadBtn.addEventListener('mouseover', function() {
        this.innerHTML = '<i class="fas fa-download"></i> Télécharger CV';
    });
    
    downloadBtn.addEventListener('mouseout', function() {
        this.innerHTML = '<i class="fas fa-download"></i> Télécharger mon CV';
    });
    
    // Animation pour les sections au scroll
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.8) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Appliquer les styles initiaux
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Vérifier le scroll initial et ajouter l'écouteur d'événement
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});
