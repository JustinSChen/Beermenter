$(document).ready(function() {
	loadBreweryData();
	initializePage();
});

function loadBreweryData() {
    var locations = new Set();
	for (b in breweries) {
		var location = breweries[b].location.toLowerCase();
		location = location.replace(/\s+/g, '');
		$('.brewery-list').append(
			'<div class="brewery ' + location + '">' +
			  '<a href="brewery_main.html">' +
			    '<img src="' + breweries[b].img + '">' +
			  '</a>' +
			  '<h3>' + breweries[b].name + '</h3>' +
			  '<p>' + breweries[b].address + '</p>' +
		    '</div>'
		);

		locations.add([location, breweries[b].location]);
	}

	for (l in locations) {
		$('#locations').append(
			'<option value="' + l[0] + '">' + l[1] + '</option>'
		);
	}
}

function initializePage() {
	$("#locations").change(function () {
	    var location = document.getElementById("locations");
		var loc = "." + location.options[location.selectedIndex].value;
		$("div.brewery-list").children().show();
		if (loc != ".all") {
			$("div.brewery-list").children().not(loc).hide();
		}
	});

	$(".open-nav").click(function () {
	    $(".sidenav").css("width", "250px");
	});

	$(".close-nav").click(function () {
	    $(".sidenav").css("width", "0");
	});

	$(".brewery a").click(function () {
	    localStorage.setItem('currentBrewery', $(this).next().text());
	});	

}
