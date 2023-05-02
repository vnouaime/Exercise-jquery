// Part 1

// Question 1
$(function() {
    console.log("Let's get ready to party with JQuery");
})

// Question 2
$("img").addClass("image-center");

// Question 3
$("p:last").remove();

// Question 4
const ranNum = Math.floor(Math.random() * 100);
$("#title").css("font-size", ranNum);

// Question 5
$("ol").append("<li>My favorite Color is Blue</li>");

// Question 6
$("aside").empty();
$("aside").append("<p>Apologies for the list's existence<p>");

// Question 7
$(".form-control").on('keyup blur change', function() {
    let red = $(".form-control").eq(0).val();
    let green = $(".form-control").eq(1).val();
    let blue = $(".form-control").eq(2).val();
    // $("body").css("background-color", "rgb(red, green, blue)")
    $("body").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
});

// Quesiton 8
$("img").on("click", function() {
    $("img").remove();
});


