$(document).ready(function() {
    $("#iconWrapper").click(function() {
        $("aside nav").slideToggle();
    });

    $("nav li").click(function() {
        $(this).toggleClass("selected");
        var dataType = $(this).data("type");

        $("[data-"+dataType+"]").slideToggle();
    });

    $(".imageWrapper figure").click(function() {
        $("#lightbox-" + this.id).show();
    });

    $(".imageWrapper p").click(function() {
        $("#lightbox-" + this.parentElement.previousElementSibling.id).show();
    });

    $(".closeImage").click(function() {
        $(this.parentElement.parentElement.parentElement.parentElement).hide();
    });

    $(".blackOverlay").click(function() {
        $(this.parentElement).hide();
    });
});
