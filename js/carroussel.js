document.addEventListener("DOMContentLoaded", () => {
    console.log("Script chargé");

    let items = document.querySelectorAll('.slider .list .item');
    let thumbnails = document.querySelectorAll('.thumbnail .item');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    if (!prev || !next) {
        console.error("Erreur: Les boutons 'prev' et/ou 'next' sont introuvables.");
        return;
    }

    let countItem = items.length;

    // 🔥 Récupérer l'image active stockée
    let storedIndex = localStorage.getItem("activeSlide");
    let itemActive = storedIndex ? parseInt(storedIndex) : 0;

    function showSlider() {
        let activeItem = document.querySelector('.slider .list .item.active');
        let activeThumbnail = document.querySelector('.thumbnail .item.active');

        if (activeItem) activeItem.classList.remove('active');
        if (activeThumbnail) activeThumbnail.classList.remove('active');

        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

        // 🔥 Sauvegarder l'index de l'image actuelle
        localStorage.setItem("activeSlide", itemActive);
    }

    next.addEventListener('click', () => {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
    });

    prev.addEventListener('click', () => {
        itemActive = (itemActive - 1 + countItem) % countItem;
        showSlider();
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        });
    });

    setInterval(() => {
        next.click();
    }, 9000);

    // 🔥 Charger directement l'image correcte au démarrage
    showSlider();
});