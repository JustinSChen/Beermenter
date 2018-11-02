$(document).ready(function() {
	initializePage();
});
/*
function loadNav(){
    $("#included_nav").load('navigation.html'); 
}
*/
function initializePage() {
	$("#locations").change(function () {
	    var location = document.getElementById("locations");
		var loc = "." + location.options[location.selectedIndex].value;
		$("div.brewery-list").children().show();
		$("div.brewery-list").children().not(loc).hide();
	});
}
