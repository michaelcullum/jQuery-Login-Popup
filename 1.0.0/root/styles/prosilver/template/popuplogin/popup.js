//Popup Disabled/Enabled Status
var popupStatus = 0;  

//loading popup
function loadPopup(){  
//loads popup only if it is disabled  
if(popupStatus==0){  
$("#backgroundPopup").css({  
"opacity": "0.7"  
});  
$("#backgroundPopup").fadeIn("slow");  
$("#popupContact").fadeIn("slow");  
popupStatus = 1;  
}  
}  

//disabling popup 
function disablePopup(){  
//disables popup only if it is enabled  
if(popupStatus==1){  
$("#backgroundPopup").fadeOut("slow");  
$("#popupContact").fadeOut("slow");  
popupStatus = 0;  
}  
} 

//centering popup  
function centerPopup(){  
//request data for centering  
var windowWidth = document.documentElement.clientWidth;  
var windowHeight = document.documentElement.clientHeight;  
var popupHeight = $("#popupContact").height();  
var popupWidth = $("#popupContact").width();  
//centering  
$("#popupContact").css({  
"position": "absolute",  
"top": windowHeight/2-popupHeight/2,  
"left": windowWidth/2-popupWidth/2  
});    
}  

$(document).ready(function(){  
//Load Popup
//Load Popup on Page Load
loadPopup()
//Load Popup on Login button click
$("[href='#loginpop']").click(function() {
loadPopup()
)}
//Close Popup 
//Click the x event!  
$("#popupContactClose").click(function(){  
disablePopup();  
});  
//Click out event!  
$("#backgroundPopup").click(function(){  
disablePopup();  
});  
});  