(function($){
	'use strict';

	$('.left').on('click', function(e){
		$(this).html('Event: '+ e.type +'.<br />Coordinates[x: '+ e.pageX +', y: '+ e.pageY +']');
	});

	$('.right').on('tap', function(e){
		var coords = e.pageX ? e : e.originalEvent.changedTouches[0];

		$(this).html('Event: '+ e.type +'.<br />Coordinates[x: '+ coords.pageX +', y: '+ coords.pageY +']');
	});
})(jQuery);