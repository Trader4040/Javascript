document.addEventListener('DOMContentLoaded' , function () {
    // Récupération des éléments
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');

    // Fonction pour ouvrir une modale
    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    // Fonction pour fermer une modale
    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Ouverture de la modale
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    });

    // Fermeture via les boutons de fermeture
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    // Fermeture en cliquant sur l'overlay
    overlay.addEventListener('click', () => {
        const modals = documents.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            closeModal(modal);
        });
    });

    // Fermeture avec la touche "Echap"
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            const modals = document.querySelectorAll('.modal.active');
            modals.forEach(modal => {
                closeModal(modal);
            });
        }
    });
});