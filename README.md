# jTap

Additional event for jQuery processing touching to screen on touch devices.

Those who are faced with adaptation of web-based applications for mobile devices knows that the event "click" is triggered with a delay of 300ms, observe which not very pleasant. In addition, click on non-delegated place of document will not work. To solve these problems and was designed by **jQuery Tap Event**.

## Usage

Include the plugin file on the page:

```html
<script src="jquery.tap.js"></script>
```

and set an event handler as follows:

```javascript
$('selector').on('tap', handler);
```

**Note**: A noteworthy feature of plugin is a versatility. No matter where you are using the "tap" event: on a device with a touch screen or on a desktop computer - the handler will be executed disparately.

## Changelog

**Version [0.3.1](https://github.com/BR0kEN-/jTap/tree/v0.3.1)**, February 7, 2016:
- fixed an issue when `mousedown` and `mouseup` events is triggering on mobile devices;
- plugin is available as NPM package now.

**Version [0.3.0](https://github.com/BR0kEN-/jTap/tree/v0.3.0)**, January 31, 2016:
- fixed an [issue #1](https://github.com/BR0kEN-/jTap/issues/1): redesigned `preventDefault` handling.

**Version [0.2.9](https://github.com/BR0kEN-/jTap/tree/v0.2.9)**, June 2, 2014:
- fixed an [issue #2](https://github.com/BR0kEN-/jTap/issues/2): undelegate event works incorrect.

**Version [0.2.8](https://github.com/BR0kEN-/jTap/tree/v0.2.8)**, May 27, 2014:
- was removed the checking of "ontouchstart" in document, because newest versions of browsers contains this property in document for any format of the computer;
- the library was oriented for jQuery 1.6 or higher.

**Version [0.2.7](https://github.com/BR0kEN-/jTap/tree/v0.2.7)**, March 17, 2014:
- added support of jQuery >= 1.4.x

**Version [0.2.6](https://github.com/BR0kEN-/jTap/tree/v0.2.6)**, March 14, 2014:
- made the code refactoring;
- updated the license and demonstration.

**Version [0.2.5](https://github.com/BR0kEN-/jTap/tree/v0.2.5)**, November 17, 2013:
- fixed an [issue #1](https://github.com/BR0kEN-/jTap/issues/1): method `preventDefault` doesn't worked, because the tap event constructed by mousedown/mouseup or touchstart/touchend events and they can not to be prevented.

**Version [0.2.4](https://github.com/BR0kEN-/jTap/tree/v0.2.4)**, August 22, 2013:
- first public version.

## Thank you

- [@asakasinsky](https://github.com/asakasinsky), for the [bug report #1](https://github.com/BR0kEN-/jTap/issues/1) - *November 17, 2013*.
- [@egorogl](https://github.com/egorogl), for the [bug report #2](https://github.com/BR0kEN-/jTap/issues/2) - *May 29, 2014*.
- [@manchunw](https://github.com/manchunw), for the [bug report #1](https://github.com/BR0kEN-/jTap/issues/1) - *January 31, 2016*.

## Licence

**jTap** is licensed under the [MIT license](http://opensource.org/licenses/mit-license.html).

## Links

- **Demonstration:** http://BR0kEN-.github.io/jTap
- **Plugin page:** http://plugins.jquery.com/jTap
- **Presentational publication (ru):** http://habrahabr.ru/post/191078
