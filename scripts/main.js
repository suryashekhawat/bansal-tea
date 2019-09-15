$(document).ready(function(e){
  $("#navbar-content").load("navbar.html");
  $("#footer-content").load("footer.html");
});
var deviceWidth;
$(document).ready(function(e){
  deviceWidth = $(window).width();
  if (deviceWidth <= 500){

    $(".navbar").css("display", "none");
  }

  $(window).scroll(function() {
    var pos = $(this).scrollTop();
    deviceWidth = $(window).width();
    console.log(pos);
    if (pos>348 && deviceWidth > 500){
      $(".navbar").css("background-color", "white");
      $("#nav-menu-image-btn").attr("src", "images/icons/cross-black.png");
      $("#nav-menu-items").css("display", "flex");
      $(".navbar").removeClass( "navbar-white-color" );
    }
    if (pos<348  && deviceWidth > 500){
      $(".navbar").css("background-color", "transparent");
      $("#nav-menu-image-btn").attr("src", "images/icons/menu-white.png");
      $(".navbar").addClass( "navbar-white-color" );
    }
  });

});
