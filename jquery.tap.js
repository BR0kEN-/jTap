/**
*	Follow us on Twitter: https://twitter.com/firstvector
*	Visit our website: http://firstvector.org/
*	See information about our team: http://firstvector.org/humans.txt
*
*   @author BR0kEN, Firstvector.org
*   @depend jQuery
*   @update August 21, 2013 by @author
*
*   Custom "tap" event for touch devices.
*/

(function($){
	'use strict';

	var tap = {};

	tap = {
		capable: 'ontouchstart' in document,
		destroy: {start: null, end: null},
		start: tap.capable ? 'touchstart' : 'mousedown',
		end: tap.capable ? 'touchend' : 'mouseup',
		target: null,
		state: false,
		time: 0,
		X: 0,
		Y: 0,
		e: null
	};

	$.fn.tap = function(fn){
		return fn ? this.bind('tap', fn) : this.trigger('tap');
	};

	$.event.special.tap = {
		setup: function(){
			$(this).bind(tap.start +' '+ tap.end, function(e){

				tap.e = tap.capable ? e.originalEvent.changedTouches[0] : e;

			}).bind(tap.start, function tapstart(e){

				tap.destroy.start = tapstart;

				if (e.which && e.which !== 1) return false;
				else {
					tap.state = true;
					tap.target = e.target;
					tap.time = new Date().getTime();
					tap.X = tap.e.pageX;
					tap.Y = tap.e.pageY;

					return true;
				}

			}).bind(tap.end, function tapend(e){

				tap.destroy.end = tapend;

				if (tap.target == e.target && tap.state && ((new Date().getTime() - tap.time) < 750) && (tap.X == tap.e.pageX && tap.Y == tap.e.pageY)) {
					e.type = 'tap';

					$.event.dispatch.call(this, e, {
						position: {
			  				x: tap.e.screenX,
			  				y: tap.e.screenY
						},
						offset: {
							x: tap.capable ? tap.e.pageX - tap.e.target.offsetLeft : e.offsetX,
							y: tap.capable ? tap.e.pageY - tap.e.target.offsetTop : e.offsetY
						},
						time: new Date().getTime(),
						target: e.target
					});
				}

			});
		},

		remove: function(){
			$(this).unbind(tap.start, tap.destroy.start).unbind(tap.end, tap.destroy.end);
		}
	};
})(jQuery);