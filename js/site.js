$("#menu-icon").on("click", function() {
    // $("header nav .links ul").css('display', 'flex');
    $("header nav .links ul").addClass("visible-menu");
});

$("header nav .links ul").on("click", function() {
    // $("header nav .links ul").css('display', 'none');
    $("header nav .links ul").removeClass("visible-menu");
});