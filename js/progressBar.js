document.addEventListener("DOMContentLoaded", () => {
    let steps = document.querySelectorAll(".step");
    let percentBar = document.querySelector(".percent");
    let currentPage = window.location.pathname.split("/").pop(); // Récupère la page actuelle

    let pages = ["index.html", "projets.html", "about.html", "contact.html"];
    let currentStep = pages.indexOf(currentPage); // Trouve l'index de la page actuelle

    function updateProgress(step) {
        let progressPercent = (step / (pages.length - 1)) * 100;
        percentBar.style.width = `${progressPercent}%`;

        steps.forEach((el, index) => {
            if (index < step) {
                el.classList.add("completed");
                el.classList.remove("selected");
            } else if (index === step) {
                el.classList.add("selected");
            } else {
                el.classList.remove("completed", "selected");
            }
        });
    }

    // Appliquer l'état actuel au chargement
    updateProgress(currentStep);

    // Rendre chaque étape cliquable
    steps.forEach((step, index) => {
        step.addEventListener("click", () => {
            window.location.href = pages[index];
        });
    });
});

