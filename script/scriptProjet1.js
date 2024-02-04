// Ajoutez ceci à votre script JavaScript
$(document).ready(function() {
    // Animation hover pour les projets
    $(".projets-container").hover(function() {
        $(this).css("border-color", "#fff");
    }, function() {
        $(this).css("border-color", "transparent");
    });

    // Afficher la fenêtre modale lorsqu'un projet est cliqué
    $(".projets-container").click(function() {
        var title = $(this).find("h2").text();
        var description = $(this).find(".description").text();

        $("#modal-title").text(title);
        $("#modal-description").text(description);

        $("#modal").css("display", "block");
    });

    // Fermer la fenêtre modale en cliquant sur la croix
    $(".close").click(function() {
        closeModal();
    });
});

// Fonction pour fermer la fenêtre modale
function closeModal() {
    $("#modal").css("display", "none");
}
