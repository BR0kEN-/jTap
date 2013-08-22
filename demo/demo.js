(function($){
	'use strict';

	$(document).tap(function(e){
		e = e.pageX ? e : e.originalEvent.changedTouches[0];

		$('section').html('Event: '+ e.type +'. Coordinates[x: '+ e.pageX +', y: '+ e.pageY +']');
	});
})(jQuery);