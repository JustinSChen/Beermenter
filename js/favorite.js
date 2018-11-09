$(document).ready(function() {
	initializePage();
	loadFavoriteBeers();
});

function loadFavoriteBeers() {
	$(".filterDiv").hide();
  	var user = localStorage.getItem("currentUser");
  	var allfavlist = localStorage.getItem("favorite"); //will be JSON later
  	if (allfavlist) {
    	allfavlist = JSON.parse(allfavlist);
      	if (allfavlist[user]) {
        	favlist = allfavlist[user];
        	var i;
        	for (i = 0; i < favlist.length; i++)  {
          		var beer_id = "#infoModal" + favlist[i];
          		var beer_pic_id = "#beer" + favlist[i];
          		$(beer_pic_id).parent().parent().show();

          		$(beer_id + " div .fav-btn").addClass("liked");
        	}
      	}
  	}
  	$("body").css("display","block")
}

function initializePage() {

	$(".fav-btn").click(function() {
	    var beer_id = $(this).parent().parent().attr('id'); //qm1
	    var beer_num = beer_id[beer_id.length - 1];
	          
	    var user = localStorage.getItem("currentUser");
	    var allfavlist = localStorage.getItem("favorite"); //will be JSON later
	    var favlist = [];
	    if (allfavlist) {
	      allfavlist = JSON.parse(allfavlist);
	      if (allfavlist[user])
	        favlist = allfavlist[user];
	    }   
	    else {
	      allfavlist = {};
	    }

	    if ($(this).hasClass("liked")) {
	      $(this).removeClass("liked");
	      favlist.splice(favlist.indexOf(beer_num), 1);
	    }
	    else {
	      $(this).addClass("liked");
	      favlist.push(beer_num);
	    }

	    allfavlist[user] = favlist;
	    localStorage.setItem("favorite", JSON.stringify(allfavlist));
	});


    $(".qm").click(function() {
        var qm_id = $(this).attr('id'); //qm1
        var qmodal_id = "#qModal" + qm_id[qm_id.length - 1];
        $(qmodal_id).fadeIn();
    });
    
    $(".qclose").click(function() {
        $(this).parent("div").parent("div").fadeOut();
    });

    $("img.beer").click(function() {
        var beer_id = $(this).attr('id'); //qm1
        var infomodal_id = "#infoModal" + beer_id[beer_id.length - 1];
        $(infomodal_id).fadeIn();
    });

    $("div.beer-info-modal div .close").click(function() {
        $(this).parent("div").parent("div").fadeOut();
    });

	$(".open-nav").click(function () {
		console.log("Hi");
	    $(".sidenav").css("width", "250px");
	});

	$(".close-nav").click(function () {
	    $(".sidenav").css("width", "0");

	});
}
