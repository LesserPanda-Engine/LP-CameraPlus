# Camera Extension (Deprecated)

This is deprecated since all functionalities are merged
into LesserPanda engine.

## Features

- Zoom
- Shake

## APIs

```javascript
/**
 * Zoom camera to a specific scale
 * @param {Object|game.Vector}  scale   Target scale
 * @param {Number}              time    Zoom time
 * @param {Function}            easing  Easing function
 */
zoom: function(scale, time, easing)

/**
 * Zoom camera by a scale factor
 * @param {Object|game.Vector}  scale   Scale factor
 * @param {Number}              time    Zoom time
 * @param {Function}            easing  Easing function
 */
zoomBy: function(scale, time, easing)

/**
 * Shake camera
 * @param  {game.Vector|Number} force Max shake distance
 *                                               in pixel
 * @param  {Number} duration  How long will the camera shake
 * @param  {Number} count How many times will the camera shake
 * @param  {Boolean} forward ONLY shake forward or not
 */
shake: function(force, duration, count, forward)
```


## ChangeLog

### 0.1.0

- Add basic shake and zoom methods

---

The MIT License (MIT)

Copyright (c) 2015 Sean Bohan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

