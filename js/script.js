$(document).ready(function() {
    $("#iconWrapper").click(function() {
        $("aside nav").slideToggle();
    });

    $("nav li").click(function() {
        $(this).toggleClass("selected");
        var dataType = $(this).data("type");

        $("[data-"+dataType+"]").slideToggle();
    });

    $(".imageWrapper").click(function() {
        var id = this.getElementsByTagName("figure").id;
        $("lightbox-"+id).show();
    });
});
