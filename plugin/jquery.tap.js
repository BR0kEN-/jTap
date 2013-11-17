/**
 *	Follow us on Twitter: https://twitter.com/firstvector
 *	Visit our website: http://firstvector.org/
 *	See information about our team: http://firstvector.org/humans.txt
 *
 *	@author BR0kEN
 *	@depend jQuery
 *	@version 0.2.5
 *	@update November 17, 2013
 */

;(function($){
	'use strict';

	/**
	 *	@param (bool) enable - check the availability of touch events in browser.
	 *	@param (object) tap - extending object, which contain event properties.
	 *		- (string) start - start event depending of @enable.
	 *		- (string) end - start event depending of @enable.
	 */
	var enable = 'ontouchstart' in document, tap = {
		start: enable ? 'touchstart' : 'mousedown',
		end: enable ? 'touchend' : 'mouseup'
	};

	$.fn.tap = function(fn){
		return this[fn ? 'bind' : 'trigger']('tap', fn);
	};

	$.event.special.tap = {
		setup: function(){
			$(this).bind(tap.start +' '+ tap.end, function(e){

				/**
				 *	Adding jQuery event to @tap object depending of @enable.
				 *
				 *	Attention: value of this property will change two time
				 *	per event: first time - on start, second - on end.
				 */
				tap.E = enable ? e.originalEvent.changedTouches[0] : e;

			}).bind(tap.start, function(e){

				/**
				 *	Function stop if event is simulate by mouse.
				 */
				if (e.which && e.which !== 1) return;

				/**
				 *	Extend @tap object from event properties of initial phase.
				 */
				tap.target = e.target;
				tap.time = new Date().getTime();
				tap.X = tap.E.pageX;
				tap.Y = tap.E.pageY;

			}).bind(tap.end, function(e){

				/**
				 *	Compare property values of initial phase with properties
				 *	of this, final, phase. Execute event if values will be
				 *	within the acceptable and set new properties for event.
				 */
				if (tap.target == e.target && ((new Date().getTime() - tap.time) < 750) && (tap.X == tap.E.pageX && tap.Y == tap.E.pageY)) {

					/**
					 * @since 0.2.5: added the preventDefault
					 */
					var t = $(this);

					e.preventDefault = function(){
						t.bind('click', false);
					};

					e.type = 'tap';
					e.pageX = tap.E.pageX;
					e.pageY = tap.E.pageY;

					$.event.dispatch.call(this, e);
				}

			});
		},

		/**
		 *	Disassembling event.
		 */
		remove: function(){
			$(this).unbind(tap.start, false).unbind(tap.end, false);
		}
	};
})(jQuery);
