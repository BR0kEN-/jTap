/**
 *  Follow us on Twitter: https://twitter.com/firstvector
 *  Visit our website: http://firstvector.org/
 *  See information about our team: http://firstvector.org/humans.txt
 *
 *  @author Sergey Bondarenko (BR0kEN), Propeople Ukraine
 *  @update March 14, 2014
 *  @version 0.2.6
 */
(function($, name) {
  'use strict';

  /**
   *  @param (bool) isTap - check the availability of touch events in browser.
   *  @param (object) ev - extending object, which contain event properties.
   *    - (string) start - start event depending of @isTap.
   *    - (string) end - start event depending of @isTap.
   */
  var isTap = 'ontouchstart' in document,
      ev = {
        start: isTap ? 'touchstart' : 'mousedown',
        end: isTap ? 'touchend' : 'mouseup'
      };

  $.fn[name] = function(fn) {
    return this[fn ? 'bind' : 'trigger'](name, fn);
  };

  $.event.special[name] = {
    setup: function(){
      $(this).bind(ev.start + ' ' + ev.end, function(e) {
        /**
         *  Adding jQuery event to @ev object depending of @isTap.
         *
         *  Attention: value of this property will change two time
         *  per event: first time - on start, second - on end.
         */
        ev.E = isTap ? e.originalEvent.changedTouches[0] : e;
      }).bind(ev.start, function(e) {
        /**
         *  Function stop if event is simulate by mouse.
         */
        if (e.which && e.which !== 1) {
          return;
        }
        /**
         *  Extend @ev object from event properties of initial phase.
         */
        ev.target = e.target;
        ev.time = new Date().getTime();
        ev.X = ev.E.pageX;
        ev.Y = ev.E.pageY;
      }).bind(ev.end, function(e) {
        /**
         *  Compare property values of initial phase with properties
         *  of this, final, phase. Execute event if values will be
         *  within the acceptable and set new properties for event.
         */
        if (
          ev.target == e.target &&
          ((new Date().getTime() - ev.time) < 750) &&
          (ev.X == ev.E.pageX && ev.Y == ev.E.pageY)
        ) {
          /**
           * @since 0.2.5: added the preventDefault
           */
          var t = $(this);
          e.preventDefault = function() {
            t.bind('click', false);
          };

          e.type = name;
          e.pageX = ev.E.pageX;
          e.pageY = ev.E.pageY;
          /**
           * @since 0.2.7: added support of the jQuery 1.4
           */
          $.event.trigger(name);
        }
      });
    },

    /**
     *  Disassembling event.
     */
    remove: function() {
      $(this).unbind(ev.start, false).unbind(ev.end, false);
    }
  };
})(jQuery, 'tap');
