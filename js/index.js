$(function(){
    var swiper = new Swiper(".beer", {
        navigation: {
             nextEl: ".swiper-button-next",
             prevEl: ".swiper-button-prev",
            },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
          loop: true,
      });

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
      });

      $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 973) {//아이콘이 나타나길 원하는 높이를 설정하세요
            $('.top').fadeIn();//나타날 아이콘 클래스 수정!
        } else {
            $('.top').fadeOut();//나타날 아이콘 클래스 수정!
        }
    });
});