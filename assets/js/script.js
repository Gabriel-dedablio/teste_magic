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
  $('.cada-projeto').slick({
          dots: false,
          infinite: false,
          arrows: true,
          autoplay: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          responsive:[
            {
              breakpoint: 1000,
              autoplaySpeed: 3000,
              autoplay: true,
              settings:{
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 801,
              autoplaySpeed: 3000,
              autoplay: true,
              settings:{
                slidesToShow: 1,
              }
            },
          ]
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
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1026,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 801,
        settings:{
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 601,
        settings:{
          slidesToShow: 1,
        }
      },
    ]
  });

  $("a#cada-foto").fancybox();

});

$(function() {
  $('a').bind('click',function(event){
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'swing');
  });
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