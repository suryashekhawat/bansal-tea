$(document).ready(function(e){
  $("#navbar-content").load("navbar.html");
  $("#footer-content").load("footer.html");
});

$(window).scroll(function() {
  var pos = $(this).scrollTop();
  console.log(pos);
  if (pos>348){
    $(".navbar").css("background-color", "white");
    $("#nav-menu-image-btn").attr("src", "images/icons/cross-black.png");
    $("#nav-menu-items").css("display", "flex");
    $(".navbar").removeClass( "navbar-white-color" );
  }
  if (pos<348){
    $(".navbar").css("background-color", "transparent");
    $("#nav-menu-image-btn").attr("src", "images/icons/menu-white.png");
    $(".navbar").addClass( "navbar-white-color" );
  }
});
