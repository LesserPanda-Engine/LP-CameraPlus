game.module(
  'plugins.mad-camera'
)
.body(function() { 'use strict';

  game.createClass('MadCamera', {
    /**
     * Container, that the camera is moving.
     * @property {game.Container} container
     */
    container: null,

    /**
     * Position of the camera
     * @type {game.Vector}
     */
    position: null,
    /**
     * Offset of the camera to canvas center
     * @type {game.Vector}
     */
    offset: null,
    /**
     * Camera scale factor
     * @type {Number}
     */
    scale: 1,

    _positionOffset: null,
    _scaleOffset: null,

    init: function() {
      this.position = new game.Vector();
      this.offset = new game.Vector();

      this._positionOffset = new game.Vector();
      this._scaleOffset = new game.Vector();
    },
    addTo: function(container) {
      this.container = container;

      this.setPosition(game.system.width * 0.5, game.system.height * 0.5);

      return this;
    },
    setOffset: function(x, y) {
      this.offset.set(x, y);

      this.setPosition(this.position.x, this.position.y);
    },
    setPosition: function(x, y) {
      var x = x || 0;
      var y = y || 0;

      // Save new position
      this.position.set(x, y);

      // Update offset to center of rendering canvas
      this._positionOffset.copy(this.offset).add(game.system.width * 0.5, game.system.height * 0.5);
      this.container.position.copy(this._positionOffset);

      // Update camera position
      this.container.pivot.set(x, y);
    },
    setRotation: function(rotation) {
      // Save new rotation
      this.rotation = rotation || 0;

      // Rotate container
      this.container.rotation = -rotation;
    },
    setScale: function(newScale) {
      // Save new scale
      this.scale = newScale || 1;

      // Scale container
      this.container.scale.set(this.scale, this.scale);
    }
  });

});
