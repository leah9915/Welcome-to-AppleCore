$(".login").click(function() {
    $("h3").show();
    $(".row").show();
    $(".login").hide();
});

$("#about").click(function() {
    $(".row").hide();
    $("h3").hide();
    $(".about-us").show();
});

$("#home").click(function() {
    $(".about-us").hide();
    $("h3").show();
    $(".row").show();
});