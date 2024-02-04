document.addEventListener('DOMContentLoaded', function () {
    var loader = document.getElementById('loader');
    var body = document.body;
    var gif = document.querySelector('#loader img');

    // Vérifier si l'animation a déjà été déclenchée pour éviter la boucle
    var animationTriggered = false;

    function startAnimation() {
        // Masquer l'écran de chargement avec fondu
        loader.style.transition = 'opacity 2s ease-in-out';
        loader.style.opacity = 0;

        // Rétablir le défilement et cacher le loader après le fondu
        setTimeout(function () {
            body.classList.remove('loading'); /* Rétablit le défilement après le chargement */
            loader.style.visibility = 'hidden';
        }, 3000); // Vous pouvez ajuster la durée selon vos besoins
    }

    // Attacher un événement de fin de lecture du GIF
    gif.addEventListener('load', function () {
        if (!animationTriggered) {
            animationTriggered = true;
            startAnimation();
        }
    });

    if (body.classList.contains('home-page')) {
        // Pour la page d'accueil, attendez 2 secondes avant de montrer le GIF
        setTimeout(function () {
            gif.style.display = 'block';
        }, 2000);
    } else if (body.classList.contains('projects-page')) {
        // Pour la page des projets, attendez 1 seconde avant de montrer le GIF
        setTimeout(function () {
            gif.style.display = 'block';
        }, 1000);
    }
});

$(window).on("load", function () {
    $("#loader").fadeOut(2000, function () {
        // Animation terminée, masquer le loader
        $("#loader").hide();
    });
});