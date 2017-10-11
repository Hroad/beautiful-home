$(document).ready(function(){
	var i=0;
	$(".navBtn").click(function(){
		$(".navBtn img").attr("src","img/nav-btn2.png");
		$("nav ul").slideToggle(300);
		i++;
		if(i%2==0){
			$(".navBtn img").attr("src","img/nav-btn.png");
		}
	});
//	nav    END

	var mySwiper = new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay : 2000,
		    autoplayDisableOnInteraction : false,
		    keyboardControl : true,
		    // 如果需要分页器
		    pagination : '.swiper-pagination',
			paginationClickable :true,
		    
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		  
		  });  
//		banner     END

});
