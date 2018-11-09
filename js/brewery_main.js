$(document).ready(function() {
	initializePage();
  loadFavorite();
});

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

    /*        var modal = document.getElementById("myModal");
        var button = document.getElementById("filter");
        var span = document.getElementsByClassName("close")[0];
        button.onclick = function() {
          modal.style.display = "block";
        }
        span.onclick = function() {
          modal.style.display = "none";
        }
*/
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
/*
        var qmodal1 = document.getElementById("qModal1");
        var qbutton1 = document.getElementById("qm1");
        var qspan1 = document.getElementsByClassName("qclose")[0];
        qbutton1.onclick = function() {
          qmodal1.style.display = "block";
        }
        qspan1.onclick = function() {
          qmodal1.style.display = "none";
        }
        var qmodal2 = document.getElementById("qModal2");
        var qbutton2 = document.getElementById("qm2");
        var qspan2 = document.getElementsByClassName("qclose")[1];
        qbutton2.onclick = function() {
          qmodal2.style.display = "block";
        }
        qspan2.onclick = function() {
          qmodal2.style.display = "none";
        }
        var qmodal3 = document.getElementById("qModal3");
        var qbutton3 = document.getElementById("qm3");
        var qspan3 = document.getElementsByClassName("qclose")[2];
        qbutton3.onclick = function() {
          qmodal3.style.display = "block";
        }
        qspan3.onclick = function() {
          qmodal3.style.display = "none";
        }
*/
        $("img.beer").click(function() {
          var beer_id = $(this).attr('id'); //qm1
          var infomodal_id = "#infoModal" + beer_id[beer_id.length - 1];
          $(infomodal_id).fadeIn();
        });
        $("div.beer-info-modal div .close").click(function() {
          $(this).parent("div").parent("div").fadeOut();
        });
/*
        var bmodal1 = document.getElementById("infoModal1");
        var bimage1 = document.getElementById("beer1");
        var span1 = document.getElementsByClassName("close")[1];
        bimage1.onclick = function() {
          bmodal1.style.display = "block";
        }
        span1.onclick = function() {
          bmodal1.style.display = "none";
        }

        var bmodal2 = document.getElementById("infoModal2");
        var bimage2 = document.getElementById("beer2");
        var span2 = document.getElementsByClassName("close")[2];
        bimage2.onclick = function() {
          bmodal2.style.display = "block";
        }
        span2.onclick = function() {
          bmodal2.style.display = "none";
        }
        var bmodal3 = document.getElementById("infoModal3");
        var bimage3 = document.getElementById("beer3");
        var span3 = document.getElementsByClassName("close")[3];
        bimage3.onclick = function() {
          bmodal3.style.display = "block";
        }
        span3.onclick = function() {
          bmodal3.style.display = "none";
        }
        var bmodal4 = document.getElementById("infoModal4");
        var bimage4 = document.getElementById("beer4");
        var span4 = document.getElementsByClassName("close")[4];
        bimage4.onclick = function() {
          bmodal4.style.display = "block";
        }
        span4.onclick = function() {
          bmodal4.style.display = "none";
        }
        var bmodal5 = document.getElementById("infoModal5");
        var bimage5 = document.getElementById("beer5");
        var span5 = document.getElementsByClassName("close")[5];
        bimage5.onclick = function() {
          bmodal5.style.display = "block";
        }
        span5.onclick = function() {
          bmodal5.style.display = "none";
        }
        var bmodal6 = document.getElementById("infoModal6");
        var bimage6 = document.getElementById("beer6");
        var span6 = document.getElementsByClassName("close")[6];
        bimage6.onclick = function() {
          bmodal6.style.display = "block";
        }
        span6.onclick = function() {
          bmodal6.style.display = "none";
        }
        var bmodal7 = document.getElementById("infoModal7");
        var bimage7 = document.getElementById("beer7");
        var span7 = document.getElementsByClassName("close")[7];
        bimage7.onclick = function() {
          bmodal7.style.display = "block";
        }
        span7.onclick = function() {
          bmodal7.style.display = "none";
        }
        var bmodal8 = document.getElementById("infoModal8");
        var bimage8 = document.getElementById("beer8");
        var span8 = document.getElementsByClassName("close")[8];
        bimage8.onclick = function() {
          bmodal8.style.display = "block";
        }
        span8.onclick = function() {
          bmodal8.style.display = "none";
        }
        var bmodal9 = document.getElementById("infoModal9");
        var bimage9 = document.getElementById("beer9");
        var span9 = document.getElementsByClassName("close")[9];
        bimage9.onclick = function() {
          bmodal9.style.display = "block";
        }
        span9.onclick = function() {
          bmodal9.style.display = "none";
        }

        */

	$(".open-nav").click(function () {
		console.log("Hi");
	    $(".sidenav").css("width", "250px");
	});

	$(".close-nav").click(function () {
	    $(".sidenav").css("width", "0");

	});
}
