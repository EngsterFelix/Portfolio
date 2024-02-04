
    document.addEventListener('DOMContentLoaded', function () {
    var loader = document.getElementById('loader');
    var body = document.body;
    var gif = document.querySelector('#loader img');

    setTimeout(function () {
        gif.style.display = 'block';
    }, 2000);

    gif.addEventListener('load', function () {
        loader.style.transition = 'opacity 2s ease-in-out';
        loader.style.opacity = 0;
        
        setTimeout(function () {
            body.classList.remove('loading'); 
            loader.style.visibility = 'hidden';
        }, 6000); 
    });
});
$(window).on("load", function () {
    $("#loader").fadeOut(6000, function () {
        $("#loader").hide();
    });
});

