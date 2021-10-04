(function ($) {
	"use strict";
	
	$(window).on("load resize orientationChange", (function(_this) {
		return function(e) {
			return $(document.body).trigger("sticky_kit:recalc");
		};
	})(this));
	
	const activeStickyKit = function() {
		$(document).find('[data-sticky_column]').stick_in_parent({
			parent: '[data-sticky_parent]',
			offset_top: 69
		});
		
		// bootstrap col position
		$(document).find('[data-sticky_column]')
			.on('sticky_kit:bottom', function(e) {
				$(this).parent().css('position', 'relative');
			})
			.on('sticky_kit:unbottom', function(e) {
				$(this).parent().css('position', 'relative');
			});
	};
	activeStickyKit();
	
	const detachStickyKit = () => {
		const sticky_column = $(document).find('[data-sticky_column]');
		sticky_column.length > 0 && sticky_column.trigger("sticky_kit:detach");
	};
	
	//  based on your window width
	const screen = 940;
	let windowHeight, windowWidth = $(window).width();
	//  stop sticky kit
	if ((windowWidth < screen)) {
		detachStickyKit();
	} else {
		activeStickyKit();
	}
	
	// windowSize
	
	const windowSize =() => {
		windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
		windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
	};
	windowSize();
	
	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds. If `immediate` is passed, trigger the function on the
	// leading edge, instead of the trailing.
	const debounce = function(func, wait, immediate) {
		let timeout;
		return function() {
			let later = function() {
				timeout = null;
				if (!immediate) func.apply(this, arguments);
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (immediate && !timeout) func.apply(this, arguments);
		};
	};
	
	
	$(window).resize(debounce(function(){
		windowSize();
		$(document.body).trigger("sticky_kit:recalc");
		if (windowWidth < screen) {
			detachStickyKit();
		} else {
			activeStickyKit();
		}
	}, 1));
	
})(jQuery);
