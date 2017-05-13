// JavaScript Document

$(document).ready(function () {
	$(function (){
	   $('a[href^=#]').click(function() {
		  var href= $(this).attr("href");
		  var target = $(href == "#" || href == "" ? 'html' : href);
		  var position = target.offset().top - 65;
		  $('#button').animate({top: 18}, 700, 'swing');		  
		  $('body, html').animate({scrollTop:position}, 700, 'swing');
		  return false;
	   });
	});
	if(scroll<10) {
		$('#button').animate({top: 380}, 700, 'swing');
	};
	
});
