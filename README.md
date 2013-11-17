jTap
=============

**jTap** - additional event for jQuery processing touching to screen on touch devices.

Those who are faced with adaptation of web-based applications for mobile devices knows that the event "click"
is triggered with a delay of 300ms, observe which not very pleasant. In addition, click on non-delegated place of
document will not work. To solve these problems and was designed by **jQuery Tap Event**.

Usage
-------

Include the plugin file on the page:
```html
<script src="jquery.tap.min.js"></script>
```
and then, after initialization, can set handler as follows:
```javascript
$('selector').tap(handler);
$('selector').on('tap', handler);
```

**Note**: if using "tap" method, you can check the existence of him:
```javascript
$.isFunction($.fn.tap);
```
and even protect themselves in so doing:
```javascript
var clickEvent = $.isFunction($.fn.tap) ? 'tap' : 'click';

$('selector')[clickEvent](handler);
```
But, of course, better to just use delegation event by means of jQuery method `.on('tap', handler)`

**Note**: A noteworthy feature of plugin is a versatility. No matter where you are using the "tap" event :
on a device with a touch screen or on a desktop computer - the handler will be executed disparately.

Changelog
-------
**Version [0.2.5](https://github.com/BR0kEN-/jTap/tree/v0.2.5)**, November 17, 2013:
- fixed an [issue #1](https://github.com/BR0kEN-/jTap/issues/1): method preventdefault doesn't worked,
because the tap event constructed by mousedown/mouseup or touchstart/touchend events and they can not to be prevented.

**Version [0.2.4](https://github.com/BR0kEN-/jTap/tree/v0.2.4)**, August 22, 2013:
- first public version.

Thank you
-------
- [Vasily Asakasinsky (asakasinsky)](https://github.com/asakasinsky), for the [bug report #1](https://github.com/BR0kEN-/simpleTooltip/issues/1) - *November 17, 2013*.

Licence
-------
**jTap** is licensed under the [MIT license](http://opensource.org/licenses/mit-license.html).

Links
-------
- **Demonstration:** http://firstvector.org/jTap
- **Plugin page:** http://plugins.jquery.com/jTap/
- **Presentational publication (ru):** http://habrahabr.ru/post/191078/