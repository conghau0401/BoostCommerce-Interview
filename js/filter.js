$(document).ready(function() {
    $(".filter-button").click(function() {
        $("#filter").toggleClass("active");
        $(".overlay").fadeIn();
    })
    $(".overlay, .close-button, .show-results").click(function() {
        $("#filter").toggleClass("active");
        $(".overlay").fadeOut();
    })
})
