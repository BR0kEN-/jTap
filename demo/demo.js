(function($){
	'use strict';

	$(document).tap(function(e){
		$('section').html('Event: '+ e.type +'. Coordinates[x: '+ e.pageX +', y: '+ e.pageY +']');
	});
})(jQuery);