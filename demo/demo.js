(function($) {
  'use strict';

  var callback = function(event) {
    $(this).html('Event: ' + event.type + '.<br>x: ' + event.pageX + ', y: ' + event.pageY);
  };

  $('.left').on('click', callback);
  $('.right').on('tap', callback);
})(jQuery);
