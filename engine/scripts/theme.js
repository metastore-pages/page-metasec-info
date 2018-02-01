'use strict';

/**
 * ScrollToID.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_scrollToID() {
	let aID;

	aID = 'a[href^="#"]';

	$(aID).on('click', function (event) {
		let target;

		target = $(this.getAttribute('href'));

		if (target.length) {
			event.preventDefault();

			let page;

			page = 'html, body';

			$(page).stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

	$(window).on('scroll', function () {
		let item;

		item = '#scrollToTop';

		if ($(this).scrollTop() > 400) {
			$(item).fadeIn();
		} else {
			$(item).fadeOut();
		}
	});
}

/**
 * Loading functions.
 * ---------------------------------------------------------------------------------------------------------------------
 */

$(function () {
	$(window).on('load', function () {
	});
	extJS_scrollToID();
});