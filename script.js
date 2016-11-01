$(document).ready(function(){
    $("p").click(function(){
        $(this).toggleClass("highlight");
    });
    $("#smallLetter").click(function(){
        $("#text").css("font-size", "1em");
    });
    $("#mediumLeter").click(function(){
        $("#text").css("font-size", "1.5em");
    });
    $("#lagreLetter").click(function(){
        $("#text").css("font-size", "2em");
    });
    $("#buttonPOne").click(function(){
        $("#pOne").toggleClass("circle");
    });
    $("#buttonPTwo").click(function(){
        $("#pTwo").toggleClass("circle");
    });
    $("#buttonPThree").click(function(){
        $("#pThree").toggleClass("circle");
    });
    $("#buttonG").click(function(){
        $(".header").css("background-color","pink");
        $("h1").html("IT'S A GIRL! :)");
    });
    $("#boldText").click(function(){
        $("p").toggleClass("bold");
    });
    $("#printButton").click(function() {
        window.print();
    });
});