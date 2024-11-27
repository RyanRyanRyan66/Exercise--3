


$(document).ready(function() {
   
    const images = {
        classic: "images/classic.png", 
        fancy: "images/fancy.png",
        wizard: "images/wizard.png",
        festive: "images/festive.png",
        stealth: "images/stealth.png",
        cactus: "images/cactus.png"
    };
$("#outfitImage").attr("src", images.classic);
    $("#classic").addClass("active");

   
    $(".button").click(function() {
    $(".button").removeClass("active");
$(this).addClass("active");

      var buttonId = $(this).attr("id");
 $("#outfitImage").attr("src", images[buttonId]);
    });
});