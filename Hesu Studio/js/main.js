
// Đây là code mở ảnh thumb của collection
$(document).ready(function () {
  $(".collection-1-thumbnail").hover(
    function () {
      $(".collection-1-thumbnail img").css("opacity", "0.7");
      $(".collection-1-thumbnail img").css("transition", "200ms");
    },
    function () {
      $(".collection-1-thumbnail img").css("opacity", "1");
    }
  );
});

$(document).ready(function () {
  $(".collection-1-title").hover(
    function () {
      $(".collection-1-thumbnail img").css("opacity", "0.7");
      $(".collection-1-thumbnail img").css("transition", "200ms");
    },
    function () {
      $(".collection-1-thumbnail img").css("opacity", "1");
    }
  );
});

$(document).ready(function () {
  $(".article-button-right p").hover(
    function () {
      $(".collection-1-thumbnail img").css("opacity", "0.7");
      $(".collection-1-thumbnail img").css("transition", "200ms");
    },
    function () {
      $(".collection-1-thumbnail img").css("opacity", "1");
    } 
  );
});

$(document).ready(function () {
  $(".collection-2-thumbnail").hover(
    function () {
      $(".collection-2-thumbnail img").css("opacity", "0.7");
      $(".collection-2-thumbnail img").css("transition", "200ms");
    },
    function () {
      $(".collection-2-thumbnail img").css("opacity", "1");
    }
  );
});

$(document).ready(function () {
  $(".collection-2-title").hover(
    function () {
      $(".collection-2-thumbnail img").css("opacity", "0.7");
      $(".collection-2-thumbnail img").css("transition", "200ms");
    },
    function () {
      $(".collection-2-thumbnail img").css("opacity", "1");
    }
  );
});

$(document).ready(function () {
  $(".article-button-left p").hover(
    function () {
      $(".collection-2-thumbnail img").css("opacity", "0.7");
      $(".collection-2-thumbnail img").css("transition", "200ms");
    },
    function () {
      $(".collection-2-thumbnail img").css("opacity", "1");
    } 
  );
});

$(document).ready(function () {
  $(".collection-3-thumbnail").hover(
    function () {
      $(".collection-3-thumbnail img").css("opacity", "0.7");
      $(".collection-3-thumbnail img").css("transition", "200ms");
    },
    function () {
      $(".collection-3-thumbnail img").css("opacity", "1");
    }
  );
});

$(document).ready(function () {
  $(".collection-3-title").hover(
    function () {
      $(".collection-3-thumbnail img").css("opacity", "0.7");
      $(".collection-3-thumbnail img").css("transition", "200ms");
    },
    function () {
      $(".collection-3-thumbnail img").css("opacity", "1");
    }
  );
});

$(document).ready(function () {
  $(".article-button-right p").hover(
    function () {
      $(".collection-3-thumbnail img").css("opacity", "0.7");
      $(".collection-3-thumbnail img").css("transition", "200ms");
    },
    function () {
      $(".collection-3-thumbnail img").css("opacity", "1");
    } 
  );
});

// Đây là code mở submenu
function openSubmenu() {
  document.getElementById("submenu").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("category-submenu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};




// Đây là code mở menu
$(".menu-wrap .toggler").on("click", function () {
  if (!$(this).data("clicked")) {
    //do your stuff here if the button is not clicked
    $(".menu-wrap .menu").toggle("slow");
    $(".menu-wrap .menu").css("display", "flex");
    $("body").css("overflow", "hidden");
    $(".navbar-search-wrap .search").css("display","none")
    $(".navbar-cart-wrap .cart").css("display","none")
    $(this).data("clicked", true);
  } else {
    //do your stuff here if the button is clicked
    $(".menu-wrap .menu").toggle("slow");
    $("body").css("overflow", "scroll");
    $(this).data("clicked", false);
  }
});


// Đây là code mở search
$(document).ready(function () {
  $(".navbar-search-wrap img").click(function(){
    $(".navbar-search-wrap .search").show("fast");
    $(".navbar-cart-wrap .cart").hide("fast");
    $("body").css("overflow", "hidden")
    $(".overlay-body").css("display","block")
  });
});

// Đây là code đóng search
$(".exit-search").on("click", function(){
  $(".navbar-search-wrap .search").hide("fast");
    $(this).data("clicked", true);
    $("body").css("overflow", "scroll");
    $(".overlay-body").css("display","none")
})

// Đây là code mở cart
$(document).ready(function () {
  $(".navbar-cart-wrap img").click(function(){
    $(".navbar-cart-wrap .cart").show("fast");
    $(".navbar-search-wrap .search").hide("fast");
    $("body").css("overflow", "hidden")
    $(".overlay-body").css("display","block")
  });
});

// Đây là code đóng cart
$(".exit-cart").on("click", function(){
    $(".navbar-cart-wrap .cart").hide("fast");
    $(this).data("clicked", true);
    $("body").css("overflow", "scroll");
    $(".overlay-body").css("display","none")
})