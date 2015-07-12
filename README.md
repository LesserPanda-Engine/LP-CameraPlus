# Camera Extension

A simpler camera extension plugin for Panda Engine.

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
