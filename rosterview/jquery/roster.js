$(document).ready(function() {

//-----------Darken DIV on mouseenter, lighten on mouseout--------//
//#roster-frame
$("#roster-frame").on("mouseenter",function() {
    $(this).fadeTo("fast", 0.9, function() {
        console.log("roster-frame darkened to 1.0");
    });
});
$("#roster-frame").on("mouseout",function() {
    $(this).fadeTo("fast", 0.5, function() {
        console.log("roster-frame lightened back to 0.5");
    });
});
//#infopane-container
$("#infopane-container").on("mouseenter",function() {
    $("#bio-container").fadeTo("fast",0.9,function() {
        console.log("bio-container darkened to 1.0")
    });
    $("#pic-container").fadeTo("fast", 0.9, function() {
        console.log("pic-container darkened to 1.0");
    });
    $("#links-container").fadeTo("fast", 0.9, function() {
        console.log("links-container darkened to 1.0");
    });
});
$("#infopane-container").on("mouseout",function() {
    $("#bio-container").fadeTo("fast",0.5,function() {
        console.log("bio-container lightened back to 0.5");
    });
    $("#pic-container").fadeTo("fast", 0.5, function() {
        console.log("pic-container lightened back to 0.5");
    });
    $("#links-container").fadeTo("fast", 0.5, function() {
        console.log("links-container lightened back to 0.5");
    });
});
//------Shadow on mouseenter, disappear on mouseout----//
//#roster-frame
$("#roster-frame").on("mouseenter", function() {
    $(this).css("box-shadow", "15px 15px 10px #0c0c0c");
});
$("#roster-frame").on("mouseout", function() {
    $(this).css("box-shadow", "none");
});
//#infopane-container
$("#infopane-container").on("mouseenter",function() {
    $("#bio-container").css("box-shadow", "15px 15px 10px #060606");
    $("#pic-container").css("box-shadow", "15px 15px 10px #060606");
    $("#links-container").css("box-shadow", "15px 15px 10px #060606");
});
$("#infopane-container").on("mouseout",function() {
    $("#bio-container").css("box-shadow", "none");
    $("#pic-container").css("box-shadow", "none");
    $("#links-container").css("box-shadow", "none");
});


});
