$(function(){
    //키워드 이미지 변경
    $(".img1").mouseenter(function(){
        $(".img1").attr("src", "img/sub1_hoverkeyword1.png");
    });
    $(".img1").mouseleave(function(){
        $(".img1").attr("src", "img/sub1_keyword1.png");
    });

    $(".img2").mouseenter(function(){
        $(".img2").attr("src", "img/sub1_hoverkeyword2.png");
    });
    $(".img2").mouseleave(function(){
        $(".img2").attr("src", "img/sub1_keyword2.png");
    });

    $(".img3").mouseenter(function(){
        $(".img3").attr("src", "img/sub1_hoverkeyword3.png");
    });
    $(".img3").mouseleave(function(){
        $(".img3").attr("src", "img/sub1_keyword3.png");
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
