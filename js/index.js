// JavaScript Document
var f=[false,false,false,false,false];
$(document).ready(function () {
	//$('a[rel="myphoto"]').colorbox();

<!-- menu 이미지 변화 : hover 와 click Event -->
	$('#profile').hover(function(){
		$(this).attr('src','images/selelct_profile.png');
		$(this).css({ 	left: '0' });	
	}, function(){
		//console.log(f[0]);
		if(f[0]==false) {
			$(this).attr('src','images/index_profile.png');
			$(this).css({ 	left: '51px' });	
		}	
	});
	$('#profile').click(function() {
		menuicon();
		f[0]=true;
		$(this).attr('src','images/selelct_profile.png');
		$(this).css({ left: 0 });	
		$('#pro_s_content').css('left', '1920px');
	});

	$('#portfolio').hover(function(){
		$(this).attr('src','images/selelct_portfolio.png');
		$(this).css({ top: 0 });	
	}, function(){
		if(f[1]==false) {
			$(this).attr('src','images/index_portfolio.png');
			$(this).css({ top: '22px' });
		}
	});
	$('#portfolio').click(function() {
		menuicon();
		f[1]=true;
		$(this).attr('src','images/selelct_portfolio.png');	
		$(this).css({ top: 0 });	
		});
	
	$('#gallery').hover(function(){
		$(this).attr('src','images/selelct_gallery.png');
		$(this).css({ left: 0, top: 0 });	
	}, function(){
		if(f[2]==false) {
			$(this).attr('src','images/index_gallery.png');
			$(this).css({ left: '48px', top: '28px' });
		}
	});
	$('#gallery').click(function(){
		menuicon();
		f[2]=true;
		$(this).attr('src','images/selelct_gallery.png');
		$(this).css({ left: 0, top: 0 });
	});

	$('#ilove').hover(function(){
		$(this).attr('src','images/selelct_ilove.png');
		$(this).css({ left: 0, top: 0 });
	}, function(){
		if(f[3]==false) {
			$(this).attr('src','images/index_ilove.png');
			$(this).css({ left: 0, top: '13px' });
		}
	});
	$('#ilove').click(function(){
		menuicon();
		f[3]=true;
		$(this).attr('src','images/selelct_ilove.png');
		$(this).css({ left: 0, top: 0 });
	});
	
	$('#contact').hover(function(){
		$(this).attr('src','images/select_contact.png');
		$(this).css({
			top: '5px',
			left: '0'
		});	
	}, function(){
		if(f[4]==false){
			$(this).attr('src','images/index_contact.png');
			$(this).css({ 	top: '30px', left: '48px' });
		}
	});
	
	$('#contact').click(function() {
		menuicon();
		f[4]=true;
		$(this).attr('src','images/select_contact.png');
		$(this).css({ top: '5px', left: 0 });
		});
		
<!-- menu 클릭시 해당 페이지로 자연스럽게 넘어가는 Event -->
	$(function (){
	   $('a[href^=#]').click(function() {
		  var href= $(this).attr("href");
		  var target = $(href == "#" || href == "" ? 'html' : href);
		  var position = target.offset().top + 50;
		  $('body, html').animate({scrollTop:position}, 800, 'swing');
		  return false;
	   });
	});
	
<!-- 나뭇잎 클릭시 index page로 -->
	$(function (){
	   $('.home').click(function() {
		   menuicon();
		  $('body, html').animate({scrollTop: 0}, 800, 'swing');
		  return false;
	   });
	});
	
	
<!-- PROFILE -->
	$('#pro_name_i').hover(function(){
		$('.pro_name').show();
		}, function(){
		$('.pro_name').css('display', 'none');
	});
	$('#pro_birth_i').hover(function(){
		$('.pro_birth').show();
		}, function(){
		$('.pro_birth').css('display', 'none');
	});
	$('#pro_gradu_i').hover(function(){
		$('.pro_gradu').show();
		}, function(){
		$('.pro_gradu').css('display', 'none');
	});
	$('#pro_skill_i').hover(function(){
		$('.pro_skill').show();
		}, function(){
		$('.pro_skill').css('display', 'none');
	});	
	$('#pro_any_i').hover(function(){
		$('.pro_any').show();
		}, function(){
		$('.pro_any').css('display', 'none');
	});
	
	<!-- Skill Image Slide -->
	$('#skill').click(function() {
		$('#pro_s_content').stop().animate({
			left: 0
		},'slow');
		profilemove();
		setInterval(function(){
			profilemove();
		},10400);
	
	});
	
	<!-- profile로 돌아가기 event -->
	$('#pro_back_i').click(function() {
		$('#pro_s_content').stop().animate({
			left: '1920px'
			},'slow');		
		});
		
	<!-- I Love Calligraphy Image Slide -->
	var index=0;
	$('#slide_c_img').animate(function() {
		//clearInterval(s); //Interval을 제어함
		index = $(this).index();
		moveSlider(index);
		setTimeout(function () {
			autoMove();
		},1000);
	});
				
	$('#prev').click(function() {
		if(index>0) {
			index--;
			moveSlider(index);
		} else{
			index=4;
			moveSlider(index);
		}
	});
				
	$('#next').click(function() {
		if(index<4) {
			index++;
			moveSlider(index);
		} else{
			index=0;
			moveSlider(index);
		}
	});
	
	<!-- Gallery Lite Box -->
	
	//rel을 사용했을 때 버튼이 생김

	
});


function moveSlider(index){
	$('#slide_c_img').stop().animate({
		left: -(index*550) 
	},'slow');
};


function profilemove(){
$('.back_t').each(function(index) {
                $(this).delay(index*800).animate({
					top: 27
				},800).animate({
					top: 37
				},800);
			});
};


function menuicon() {
	for(var i=0; i<5; i++) {
		f[i]=false;
		}
		$('#profile').attr('src','images/index_profile.png');
		$('#profile').css({ left: '51px' });	
		$('#portfolio').attr('src','images/index_portfolio.png');
		$('#portfolio').css({ top: '22px' });
		$('#gallery').attr('src','images/index_gallery.png');
		$('#gallery').css({ left: '48px', top: '28px' });
		$('#ilove').attr('src','images/index_ilove.png');
		$('#ilove').css({ left: 0, top: 0 });
		$('#contact').attr('src','images/index_contact.png');
		$('#contact').css({ top: '30px', left: '48px' });
};


				//data-index를 쓰는 것이 훨씬 자연스러움
				/*$('.slider_text').animate({
					left : -390
				});
				$('.slider_text').eq(index).animate({
					left: 0
				});*/

