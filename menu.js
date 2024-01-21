$(document).ready(function(){
    $(".burger-nav").on("click", function(){
        //console.log("Burger nav clicked");
        $("header nav ul").toggleClass("open");
    });
});
