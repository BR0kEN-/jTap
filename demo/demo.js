(function($){
	'use strict';

	var DO = function(o, e){
		$(o).html('Event: '+ e.type +'.<br>Coordinates[x: '+ e.pageX +', y: '+ e.pageY +']');
	};

	$('.left').on('click', function(e){
		DO(this, e);
	});

	$('.right').on('tap', function(e){
		DO(this, e);
	});
})(jQuery);