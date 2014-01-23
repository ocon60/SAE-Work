/*----------------SWITCH CLASSES--------------*/
$(document).ready(function(){
  $(".button").click(function(){
    $("#currRos").fadeOut("slow",function() {
    	$("currRos").fadeIn("fast")
    });
  });
});

/*---------------PULL INFO---------------------*/
var imgURL = "img/";
var bioURL = "bios/";

var dest = ".carousel-inner";

$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: imgURL,
    success: function (data) {
        //List all png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
            $("body").append($("<img src=" + Dir + filename + "></img>"));
        });
    }
});
