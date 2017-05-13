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
	
});