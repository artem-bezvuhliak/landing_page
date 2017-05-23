$(window).scroll(function () {
	var st = $(this).scrollTop();

	$(".header-text, .header-content h3, .header-content ul").css({
	 	"transform" : "translate(0%, -" + st/4 +  "%"
	 });
});