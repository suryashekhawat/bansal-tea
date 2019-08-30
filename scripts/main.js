var navbar_state = false;
$(".nav-menu").on('click', function(e){
  console.log(e);
  if (navbar_state == false){
    $("#nav-menu-items").css("display", "flex");
    $(".navbar").css("background-color", "white");
    $("#nav-menu-image-btn").attr("src", "images/icons/cross-black.png");
    navbar_state = true;
  }else{
    $("#nav-menu-items").css("display", "none");
    $(".navbar").css("background-color", "transparent");
    $("#nav-menu-image-btn").attr("src", "images/icons/menu-white.png");
    navbar_state = false;
  }

})
