$(".nav-menu").on('click', function(e){
  console.log(e);
  var navbar = $(".navbar");
  navbar.css("background-color", "transparent");
  $("#nav-menu-items").css("display", "none");
  $("#nav-menu-image-btn").attr("src", "images/icons/menu-white.png");
  
})
