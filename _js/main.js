$(document).ready(function() {
	$(window).scroll (function(){
		if($(window).scrollTop() > 500){
			$('.mobileNav.white').addClass('show');
		} else {
			$('.mobileNav.white').removeClass('show');	
		}
	});
	$('.hmbgr').click(function(e){
		e.preventDefault();
		$('#menu').animate({'right':'0%'});
	});
	$('.closeMenu').click(function(){
		$('#menu').animate({'right':'100%'});
	});
	TweenMax.to('.tempImg',8, {rotation:60});
	TweenMax.fromTo('.tempImgSm.one',3, 
		{	
			opacity:0, 
			top:-50, 
			marginLeft:-10
		}, {
			opacity:1, 
			top:70, 
			marginLeft:20, 
			ease:Power0.easeNone
		});
	TweenMax.to('.tempImgSm.one',3, {opacity:0, top:130, marginLeft:10, delay:3});
	TweenMax.fromTo('.tempImgSm.two',3, 
		{
			opacity:0, 
			top:-50, 
			marginLeft:130
		}, {
			opacity:1, 
			top:70, 
			marginLeft:110, 
			ease:Power0.easeNone, 
			delay:2
		});
	TweenMax.to('.tempImgSm.two',3, {opacity:0, top:130, marginLeft:120, delay:5});
	
	TweenMax.to('.sunrays',8, {rotation:-45});
	TweenMax.from('.sunrays, .suncenter',1, {width:0, top:80, ease: Bounce.easeOut});
	//TweenMax.to('.sunrays',.25, {width:160, marginLeft:0, marginTop:0, delay:.5,ease:Power0.easeNone});
	
	
	var temp = Math.floor(Math.random()*(97-37+1)+37);
	$('.temp span').html(temp+'&deg;');
	var x = temp;
	if(temp < 72){
		$('.header').addClass('coldToHot');
		$('.iconHolder.hot').remove();
		while(x < 72){
			x = x + 1;
			$('.tempDial').append('<span>'+x+'&deg;</span>')	;
		}
	} else if(temp > 72) {
		$('.header').addClass('hotToCold');
		$('.iconHolder.cold').remove();
		while(x > 72){
			x = x - 1;
			$('.tempDial').append('<span>'+x+'&deg;</span>');	
		}
	} else {
		$('.header').addClass('insideTemp');
	
	}

  	
	setTimeout(function(){
		$('.tempLoc').animate({'opacity':'0'}, 1000);
		
		$('.tempImg, .tempImgSm, .suncenter, .sunrays').fadeOut(1000, function(){
			$('.tempIcon p').fadeIn(1000);	
		});
		$('.hotToCold').animate({});
		
		tempRotate = setInterval(function(){
			nextNumber();
		}, 100);
		
	}, 6000);
	
	function nextNumber() {
		$('.current').removeClass('current').addClass('done').next('span').addClass('current');
		if($('.current').text() == '72°'){
			clearInterval(tempRotate);
			$('.tempLoc').text('Inside').animate({'opacity':'1'}, 1000);
			$('.header').toggleClass('hot');		
		}
	}
});	