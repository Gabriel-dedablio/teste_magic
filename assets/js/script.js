$(document).ready(function () {

  $(".scroll").mCustomScrollbar({
    theme:"rounded-dots"
  });

  $('.banner-slick').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
  });

  $(".slick-galeria").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    responsive:[
      {
        breakpoint: 1367,
        settings:{
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 1025,
        settings:{
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1025,
        settings:{
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 801,
        settings:{
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 601,
        settings:{
          slidesToShow: 2,
        }
      },
    ]
  });

  $("a#cada-foto").fancybox();
    
});

//#region Modal
var modal = document.getElementById("modal");

var btn = document.getElementById("btn-modal");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//#endregion