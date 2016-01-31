(function($, specialEventName) {
  'use strict';

  /**
   * Native event names for creating custom one.
   *
   * @type {{original: string, start: string, end: string}}
   */
  var nativeEvents = {
    original: 'click',
    start: 'touchstart mousedown',
    end: 'touchend mouseup'
  };

  var getTime = function() {
    return new Date().getTime();
  };

  $.event.special[specialEventName] = {
    setup: function(data, namespaces, eventHandle) {
      var $element = $(this);
      var eventData = {};

      $element
        // Remove all handlers that were set for an original event.
        .off(nativeEvents.original)
        // Prevent default actions.
        .on(nativeEvents.original, false)
        // Split original event by two different and collect an information
        // on every phase.
        .on(nativeEvents.start + ' ' + nativeEvents.end, function(event) {
          // Handle the event system of touchscreen devices.
          eventData.event = event.originalEvent.changedTouches ? event.originalEvent.changedTouches[0] : event;
        })
        .on(nativeEvents.start, function(event) {
          // Stop execution if an event is simulated.
          if (event.which && event.which !== 1) {
            return;
          }

          eventData.target = event.target;
          eventData.pageX = eventData.event.pageX;
          eventData.pageY = eventData.event.pageY;
          eventData.time = getTime();
        })
        .on(nativeEvents.end, function(event) {
          // Compare properties from two phases.
          if (
            // The target should be the same.
            eventData.target === event.target &&
            // Time between first and last phases should be less than 750 ms.
            getTime() - eventData.time < 750 &&
            // Coordinates, when event ends, should be the same as they were
            // on start.
            (
              eventData.pageX === eventData.event.pageX &&
              eventData.pageY === eventData.event.pageY
            )
          ) {
            event.type = specialEventName;
            event.pageX = eventData.event.pageX;
            event.pageY = eventData.event.pageY;

            eventHandle.call(this, event);

            // If an event wasn't prevented then execute original actions.
            if (!event.isDefaultPrevented()) {
              $element
                // Remove prevention of default actions.
                .off(nativeEvents.original)
                // Bring the action.
                .trigger(nativeEvents.original);
            }
          }
        });
    },

    remove: function() {
      $(this).off(nativeEvents.start + ' ' + nativeEvents.end);
    }
  };

  $.fn[specialEventName] = function(fn) {
    return this[fn ? 'on' : 'trigger'](specialEventName, fn);
  };
})(jQuery, 'tap');
