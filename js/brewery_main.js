$(document).ready(function() {
  loadBeerData();
	initializePage();
  loadFavorite();
});

function loadBeerData() {
  $(".brewery-header").text(localStorage.getItem('currentBrewery'));
  var beerID = 0;
  for (b in beers) {
    var filters = "";
    for (t in beers[b].traits) {
      filters += " " + beers[b].traits[t];
    }
    $('#' + beers[b].style + 'section').append('<div class="filterDiv beer' + filters + '"><figure><img ' + 'id="beer' + beerID + '" class="beer" src="' + beers[b].img + '" alt="Name of Beer"><figcaption>' + beers[b].name + '</figcaption></figure></div></div>');
    beerID += 1;
  }

  for (var x = 0; x < beerID; x++) {
    var bstyle;
    if (beers[x].style == 'ipa') {
      bstyle = 'India Pale Ale';
    }
    if (beers[x].style == 'lager') {
      bstyle = 'Lager';
    }
    if (beers[x].style == 'kolsch') {
      bstyle = 'Kolsch';
    }
    if (beers[x].style == 'porter') {
      bstyle = 'Porter';
    }
    if (beers[x].style == 'blonde') {
      bstyle = 'Blonde';
    }
    $('#modals').append('<div id="infoModal' + x + '" class="beer-info-modal"><div class="beer-modal-content"><span class="close">&times;</span><img class="beerinfo" src="' + beers[x].img + '" alt="' + beers[x].name + '"><p class="beername">' + beers[x].name + '</p><p class="beertype">' + bstyle + '</p><p class="abv">' + beers[x].abv + '% Alcohol Content</p><p class="beerdesc">' + beers[x].info + '</p><div id="traits' + x + '"></div><a class="fav-btn"></a></div></div>');

    for (var t = 0; t < beers[x].traits.length; t++) {
      $("#traits" + x).append('<div class="trait"><label><input type="checkbox" value="1"><span>' + beers[x].traits[t] + '</span></label></div>');
    }
  }
}

function loadFavorite() {
  var user = localStorage.getItem("currentUser");
  var allfavlist = localStorage.getItem("favorite"); //will be JSON later
  if (allfavlist) {
      allfavlist = JSON.parse(allfavlist);
      if (allfavlist[user]) {
        favlist = allfavlist[user];
        var i;
        for (i = 0; i < favlist.length; i++)  {
          var beer_id = "#infoModal" + favlist[i];
          $(beer_id + " div .fav-btn").addClass("liked");
        }
      }
  }
}

function initializePage() {

  $('input').click(function() {
    var category = $(this).val();

    var matchedItems = $('.' + category).each(function () {
      var anyChecked = false;
      var classArray = this.className.split(/\s+/);

      for(idx in classArray)
      {
        if ($('#filter-' + classArray[idx]).is(":checked"))
        {
          anyChecked = true;
          break;
        }
      }
      if (! anyChecked) $(this).hide();
      else $(this).show();
    });
  });

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

  $("#filter").click(function() {
    $("#myModal").fadeIn();
  });
  $("#finish").click(function() {
    $("#myModal").fadeOut();
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
	    $(".sidenav").css("width", "250px");
	});

	$(".close-nav").click(function () {
	    $(".sidenav").css("width", "0");

	});
}
