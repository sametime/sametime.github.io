// JavaScript Document

$(document).ready(function () {
	
	$('.mini_nav').click(function() {
		alert("죄송합니다. 준비중입니다.");
	});
	
	$('#map_box').hide();
	$('#coming').hover(function() {
		$(this).css('color', '#fff');
		$('#map_box').stop().show('blind');
	}, function(){
		$(this).css('color', '#eac3c3');
		$('#map_box').stop().hide('blind');
	});
	
	
	$('.sub').hide();
	$('#h_mainnavi>li').hover(function(){
		$(this).find('.sub').stop().slideDown('slow');
	}, function(){
		$(this).find('.sub').stop().slideUp('slow');
	});	
	
	var visual_img=['images/spring_edit', 'images/summer_edit', 'images/night_edit', 'images/fall_edit', 'images/winter_edit'];
	var number;
	/*$('#visual>ul>li').each(function (index) {
				$(this).attr('width',  196);
	});*/
	visual();
	number = 0;
	function visual() {
	play = setInterval(function() {
		if(number!=5){
			$('#visual>ul>li').eq(number).children().attr({
				src: visual_img[number]+'.jpg'	
			});
			$('#visual>ul>li').eq(number).hide();	
			
			$('#visual>ul>li').eq(number).show('drop',1000);
			/*$('#visual>ul>li').eq(number).animate({
				opacity:0.8
			},1);
			$('#visual>ul>li').eq(number).animate({
		       opacity:1
			},2000);*/
		}
		number++;
		if(number==6) {
			$('#visual>ul>li').each(function (index) {
				$(this).children().attr('src',  visual_img[index]+'_b.jpg');
			});
			number=0;
			}		
		},2000);
	};
	
	$('#visual>ul>li').hover(function(){
		clearInterval(play);
		 number= $(this).index();
		$(this).children().attr('src', after[number]);
		}, function(){
		$(this).children().attr('src', before[number]);
		visual();
	});

	
	/*$('#spring').hover(function() {
		$('#spring_pic').attr('src', 'images/spring_edit.jpg');
		}, function() {
		$('#spring_pic').attr('src', 'images/spring_edit_b.jpg');
	});
	$('#summer').hover(function() {
		$('#summer_pic').attr('src', 'images/summer_edit.jpg');
		}, function() {
		$('#summer_pic').attr('src', 'images/summer_edit_b.jpg');
	});
	$('#night').hover(function() {
		$('#night_pic').attr('src', 'images/night_edit.jpg');
		}, function() {
		$('#night_pic').attr('src', 'images/night_edit_b.jpg');
	});
	$('#autumn').hover(function() {
		$('#autumn_pic').attr('src', 'images/fall_edit.jpg');
		}, function() {
		$('#autumn_pic').attr('src', 'images/fall_edit_b.jpg');
	});
	$('#winter').hover(function() {
		$('#winter_pic').attr('src', 'images/winter_edit.jpg');
		}, function() {
		$('#winter_pic').attr('src', 'images/winter_edit_b.jpg');
	});*/
	

	$('#content>ul>li').hover(function(){
		$(this).css('background', 'rgba(124,144,29,0.80)');
		}, function() {
		$(this).css('background', '');
	});
	
});


var before=['images/spring_edit_b.jpg', 'images/summer_edit_b.jpg', 'images/night_edit_b.jpg', 'images/fall_edit_b.jpg', 'images/winter_edit_b.jpg'];
var after=['images/spring_edit.jpg', 'images/summer_edit.jpg', 'images/night_edit.jpg', 'images/fall_edit.jpg', 'images/winter_edit.jpg'];
var number;


/*$('.h_nav_bar').hide();
	$('#main_menu1').hover(function() {
		$('.h_nav_bar').slideDown(2000);
		
	}, function() {
		$('.h_nav_bar').on('mouseleave',function() {
			$('.h_nav_bar').slideUp();
		});

	});*/