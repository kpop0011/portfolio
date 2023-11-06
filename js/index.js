const swiper1 = new Swiper('.mainNikon .slide', {
    // 옵션 설정
    direction: 'vertical',
    slidesPerView: 1,
    speed: 500,
    autoplay: {
        delay : 1500,
        disableOnInteraction: false, 
    },
});
const swiper2 = new Swiper('.mainJaguar .slide', {
    // 옵션 설정
    direction: 'vertical',
    slidesPerView: 1,
    speed: 500,
    autoplay: {
        delay : 1500,
        disableOnInteraction: false, 
    },
});

const swiper3 = new Swiper('.mainDokdo .slide', {
    // 옵션 설정
    direction: 'vertical',
    slidesPerView: 1,
    speed: 500,
    autoplay: {
        delay : 1500,
        disableOnInteraction: false, 
    },
});

const swiper4 = new Swiper('.mainDokdo .moslide', {
    // 옵션 설정
    direction: 'vertical',
    slidesPerView: 1,
    speed: 500,
    autoplay: {
        delay : 1500,
        disableOnInteraction: false, 
    },
});


// $('.mouseContrl').children('section').mousewheel(function(e,d){
//     let winWidth = $(window).width();
//     let winScr = $(window).scrollTop();
//     let bodyHeight = $("body").height();
//     if(d>0 && winWidth >= 1200 && !$("html, body").is(":animated")){
//         // let offTopPrev = $(this).prev().offset().top;
//         // // is(상태); 해당 상태를 true / false 판별
//         // $('html,body').stop().animate({
//         //     'scrollTop':offTopPrev
//         // });

//         for(i=0; i < $("section").length; i++) {
//             if(winScr >= $("section").eq(i).offset().top && winScr < $("section").eq(i+1).offset().top){
//                 $('html,body').stop().animate({
//                     'scrollTop': $("section").eq(i-1).offset().top
//                 });
//             } 
//         }

//     } else if(d<0 && winWidth >= 1200 && !$("html, body").is(":animated")){
//         // let offTopNext = $(this).next().offset().top;
//         // $('html,body').stop().animate({
//         //     'scrollTop':offTopNext
//         // });
//         for(i=0; i < 9; i++) {
//             if(winScr >= $("section").eq(i).offset().top && winScr < $("section").eq(i+1).offset().top){
//                 $('html,body').stop().animate({
//                     'scrollTop': $("section").eq(i+1).offset().top
//                 });
//             } 
//         }
//     }
// });

window.onload = function () {
    let winWidth = $(window).width();
    if(winWidth >= 770){
        var elm = "section";
        $(elm).each(function (index, elem) {
            // 개별적으로 Wheel 이벤트 적용
            $(this).on("mousewheel DOMMouseScroll", function (e) {
                e.preventDefault();
                var delta = 0;
                if (!event) {
                    event = window.event;
                }
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } 
                else if (event.detail){
                    delta = -event.detail / 3;
                }
                var moveTop = $(window).scrollTop();
                var elmSelecter = $(elm).eq(index);
                // 마우스휠을 위에서 아래로
                if (delta < 0) {
                    if ($(elmSelecter).next() != undefined) {
                        moveTop = $(elmSelecter).next().offset().top;

                        swiper1.slideTo(0);
                        swiper2.slideTo(0);
                        swiper3.slideTo(0);
                        swiper4.slideTo(0);
                    }
                // 마우스휠을 아래에서 위로
                } else {
                    if ($(elmSelecter).prev() != undefined) {
                        moveTop = $(elmSelecter).prev().offset().top;

                        swiper1.slideTo(0);
                        swiper2.slideTo(0);
                        swiper3.slideTo(0);
                        swiper4.slideTo(0);
                    }
                }

                // 화면 이동 0.3초(300)
                $("html,body").stop().animate({
                    scrollTop: moveTop + 'px'
                }, {
                    duration: 300, complete: function () {
                    }
                });
            });
        });
    }
} //else {
//     $('.gnb li').click(function(){
//         let i = $(this).index();
//         let hig = $('section').eq(i).offset().top;
//         $('html,body').animate({
//             'scrollTop':i*hig,
//         });
        // if(i === 0){
        //     $('html,body').animate({
        //         'scrollTop':i*hig,
        //     });
        //     console.log(i*hig);
        // } else if(i === 1){
        //     $('html,body').animate({
        //         'scrollTop':i*hig,
        //     });
        //     console.log(i*hig);
        // } else if(i === 2){
        //     $('html,body').animate({
        //         'scrollTop':i*hig,
        //     });
        //     console.log(i*hig);
        // } else if(i === 3){
        //     $('html,body').animate({
        //         'scrollTop':(i+1)*hig,
        //     });
        // } else if(i === 4){
        //     $('html,body').animate({
        //         'scrollTop':(i+2)*hig,
        //     });
        // }
//     });
// }

$(".gnb li").click(function(){
    let i = $(this).index();
    let h = $("section").height();
    let o = $("section").eq(i).offset().top;
    let winWidth = $(window).width();
    let scr = $(window).scrollTop();
    if(winWidth >= 770) {
        if(i === 0){
            $('html,body').animate({
                'scrollTop':i*h,
            });
        } else if(i === 1){
            $('html,body').animate({
                'scrollTop':i*h,
            });
        } else if(i === 2){
            $('html,body').animate({
                'scrollTop':i*h,
            });
        } else if(i === 3){
            $('html,body').animate({
                'scrollTop':(i+1)*h,
            });
        } else{
            $('html,body').animate({
                'scrollTop':(i+2)*h,
            });
        }
    } else {
        if(i === 0){
            $('html,body').animate({
                'scrollTop':o,
            });
        } else if(i === 1){
            $('html,body').animate({
                'scrollTop':o,
            });
        } else if(i === 2){
            $('html,body').animate({
                'scrollTop':o,
            });
        } else if(i === 3){
            $('html,body').animate({
                'scrollTop':$("section").eq(i+1).offset().top,
            });
        } else{
            $('html,body').animate({
                'scrollTop':$("section").eq(i+2).offset().top,
            });
        }
    }
});

$(window).scroll(function(){
    let h = $("section").height();
    // let o = $("section").eq(i).offset().top;
    let winWidth = $(window).width();
    let scr = $(window).scrollTop();
    if(winWidth >= 770){
        if(scr >= 0 && scr < h){
            $('.gnb li').eq(0).addClass('active')
            .siblings().removeClass('active');
        } else if (scr >= h && scr < h*2){
            $('.gnb li').eq(1).addClass('active')
            .siblings().removeClass('active');
        } else if (scr >= h*2 && scr < h*4){
            $('.gnb li').eq(2).addClass('active')
            .siblings().removeClass('active');
        } else if (scr >= h*4 && scr < h*6){
            $('.gnb li').eq(3).addClass('active')
            .siblings().removeClass('active');
        } else if (scr >= h*6 && scr < h*8){
            $('.gnb li').eq(4).addClass('active')
            .siblings().removeClass('active');
        } else {
            $('.gnb li').removeClass('active');
        }
    } else {
    }
});