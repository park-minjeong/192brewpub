$(function(){
    //라거 맥주 이미지 변경
    $(".product,.img1").mouseenter(function(){
        $(".product,.img1").attr("src", "img/sub3_beerhover1.png");
    });
    $(".product,.img1").mouseleave(function(){
        $(".product,.img1").attr("src", "img/sub3_beerbg.png");
    });

    //에일 맥주 이미지 변경
    $(".product1,.img2").mouseenter(function(){
        $(".product1,.img2").attr("src", "img/sub3_hoverale.png");
    });
    $(".product1,.img2").mouseleave(function(){
        $(".product1,.img2").attr("src", "img/sub3_beerbg.png");
    });

    //무알콜 맥주 이미지 변경
    $(".product2,.img3").mouseenter(function(){
        $(".product2,.img3").attr("src", "img/sub3_hovernon.png");
    });
    $(".product2,.img3").mouseleave(function(){
        $(".product2,.img3").attr("src", "img/sub3_beerbg.png");
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 150) {//아이콘이 나타나길 원하는 높이를 설정하세요
            $('.top').fadeIn();//나타날 아이콘 클래스 수정!
        } else {
            $('.top').fadeOut();//나타날 아이콘 클래스 수정!
        }
    });
});
