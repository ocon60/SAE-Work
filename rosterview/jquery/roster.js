$(document).ready(function() {

//-----------Darken DIV on mouseenter, lighten on mouseout========//
//----------------------#roster-frame-----------------------------//
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
//---------------#infopane-container--------------------------------//
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
//======Shadow on mouseenter, disappear on mouseout=============//
//-------------------#roster-frame------------------------------//
$("#roster-frame").on("mouseenter", function() {
    $(this).css("box-shadow", "15px 15px 10px #060606");
});
$("#roster-frame").on("mouseout", function() {
    $(this).css("box-shadow", "none");
});
//-----------------#infopane-container--------------------------//
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
//======Reveal infopane sections on mouseenter, disappear on mouseout====//
$("#infopane-container").on("mouseenter",function() {
    $("#thepicture").css("visibility", "visible");
    $("#theinfo").css("visibility", "visible");
    $("#pic-container").css("box-shadow", "15px 15px 10px #060606");
    $("#links-container").css("box-shadow", "15px 15px 10px #060606");
});
//===============Resize elements to fit a laptop resolution===============//
var windH = $(window).height();
var windL = $(window).width();
//------------------#roster-frame-----------------------------------------//
if (windH <= 700 && windL <= 1300) {
	$("#roster-frame").css("margin-top", "100px");
	$("#roster-frame").css("margin-left", "30px");
	$("#roster-frame").css("margin-bottom", "20px");
	$("#roster-frame").css("height", "65%");

//------------------#infopane-container and children----------------------//
	$("#infopane-container").css("margin-top", "100px");
	$("#infopane-container").css("height", "80%");
	$("#pic-container").css("margin-right", "30px");
	$("#theinfo").css("width", "50%");
	$("#bio-container").css("margin-right", "30px");
	$("#links-container").css("margin-right", "30px");
	$("#links-container").css("width", "85%");
};	
});
