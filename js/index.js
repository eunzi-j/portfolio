$(document).ready(function(){


    // up버튼 만들기
			$('#main_upbtn').click(function(){
				$('html, body').animate({
					scrollTop:0
				},1000);
			});

			/* up버튼 섹션1 지나서 보여짐 */
			$(window).scroll(function(){
				var sct = $(window).scrollTop();
				var hh=$('main .section').height();
				
			//스크롤바가 헤더의 높이값 보다 커지면
			if(sct>hh){
				$('#main_upbtn').css({
					opacity:1
				});
			}
			//스크롤바가 헤더의 높이값 보다 작아지면
			else if(sct<hh){
				$('#main_upbtn').css({
					opacity:0
				})
			}
			
			});



    // hidden menu 클릭시 section 페이지 이동
			var ww = $(window).width();
			var wh = $(window).height();
			
			$('.section').css({
				height:wh
			});
			
			
			//2. each로 li 순서지정
			$('#hid_menu>li').each(function(index){
				$(this).attr('data-a',index);
			}).click(function(){
				
				var i = $(this).attr('data-a');
				//스크롤이 이치값으로 가게 해달라고 변수지정
				
				$('html,body').animate({
					scrollTop:wh * i
				});
                $('#hid_menu_wrap').css({
                    display:'none'
                });
				
			});
			
			//스크롤이벤트
			$(window).scroll(function(){
				
				sct = $(window).scrollTop();
				//혹시모르니 전역변수로 잡아줌
				
				if(sct >=0 && sct < wh){
					$('#hid_menu>li').removeClass('activ');
					$('#hid_menu>li').eq(0).addClass('activ');
                }else if(sct >= wh && sct < wh*2){
					$('#hid_menu>li').removeClass('activ');
					$('#hid_menu>li').eq(1).addClass('activ');
				}else if(sct >= wh*2 && sct < wh*3){
					$('#hid_menu>li').removeClass('active');
					$('#hid_menu>li').eq(2).addClass('activ');
                }else if(sct >= wh*3 && sct < wh*4){
					$('#hid_menu>li').removeClass('activ');
					$('#hid_menu>li').eq(3).addClass('activ');
                }else if(sct >= wh*4 && sct < wh*5){
					$('#hid_menu>li').removeClass('activ');
					$('#hid_menu>li').eq(4).addClass('activ')
				}else if(sct >= wh*5){
					$('#hid_menu>li').removeClass('activ');
					$('#hid_menu>li').eq(5).addClass('activ');
				}
				
			});    



/* hidden menu start */

//메뉴클릭 숨김메뉴 보여지도록
$('#menu').click(function(){
    $('#hid_menu_wrap').css({
        display:'block'
    });
    /*$('body').css({
        position:'fixed'
    });*/
});

//클릭엑스 숨김메뉴 사라지도록
    $('#hid_btn').click(function(){
        $('#hid_menu_wrap').css({
            display:'none'
        });
        /*$('body').css({
            position:'relative'
        });*/
    });

/* hidden menu end */





    

    /* man */    
        const p1 = $(".section.p1").offset().top - 400;
        const p2 = $(".section.p2").offset().top - 400;
        const p3 = $(".section.p3").offset().top - 400;
        const p4 = $(".section.p4").offset().top - 400;
        
        const tr = "translate(-50%,-50%)";
        
        
        $(window).scroll(function(){
            const top = $(this).scrollTop();
            
        if(top > p2){
            const t1 = top - p2;
            $(".section.p2 .man").css("transform", tr + "translateY(" + (t1*2) + "px)");
        }
        if(top > p3){
            const t2 = top - p3;
            $(".section.p3 .man").css("transform", tr + "translateX(" + (t2*2) + "px)");
        }
            
        });
        /* man end */






/* page5_portfolio start */ 

    $('#btn_wrap>li').each(function(index){
        $(this).attr('data-a',index)
    });
    
    $('#text_wrap>li').each(function(index){
        $(this).attr('data-a',index)
    });

    //sec5자료참고
    $('#btn_wrap>li').click(function(){
        
        i = $(this).index();

        $('#page5_img_wrap>li').fadeOut();
        $('#page5_img_wrap>li').eq(i).fadeIn();

        // removeClass와 addClass => class속성(.찍지말기)
        $('#btn_wrap>li').removeClass('sec5_menu_on');
        $('#btn_wrap>li').eq(i).addClass('sec5_menu_on');

        $('#text_wrap>li').removeClass('activer');
        $('#text_wrap>li').eq(i).addClass('aciver');
    
        $('#text_wrap>li').animate({
            left: -250
            
        },500);
        $('#text_wrap>li').eq(i).animate({
            left:0
        },500);   
    });

   

    //일정시간동안 반복되는 이벤트 setInterval
    //강제 이벤트 trigger
        click=0;
    setInterval(function(){
        click++;
        if(click>2){
            click=0
        }
        $('.slide_btn').eq(click).trigger('click');
    },1500);

    /* page5_portfolio end */






});//end