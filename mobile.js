$(function(){
	
	$.fn.mobileNav = function() {
		return this.each(function() {
			var el = $(this);
			$('.toggle-button', this).on('click', function(){
				(el.hasClass('open')) ? el.removeClass('open').addClass('closed') : el.removeClass('closed').addClass('open'); 
				return false;
			});
		});
	};
	$('.mobile-nav').mobileNav();
	
});