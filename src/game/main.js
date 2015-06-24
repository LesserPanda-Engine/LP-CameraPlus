game.module(
    'game.main'
)
.body(function() { 'use strict';

  var Camera = game.Class.extend({
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

      this.setPosition(0, 0);

      return this;
    },
    setPosition: function(x, y) {
      // Save new position
      this.position.set(x, y);

      // Update offset to rendering canvas center
      this._positionOffset.copy(this.offset).add(game.system.width * 0.5, game.system.height * 0.5);
      this.container.position.copy(this._positionOffset);

      // Update camera position
      this.container.pivot.set(x, y);
    },
    setRotation: function(rotation) {
      // Save new rotation
      this.rotation = rotation;

      // Change container rotation
      this.container.rotation = -rotation;
    },
    setScale: function(newScale) {
      // Update offset of
      this._scaleOffset.subtract(this._positionOffset)
        .multiply(newScale / this.scale)
        .add(this._positionOffset);

      this.scale = newScale;

      this.container.scale.set(newScale, newScale);
      this.container.position.copy(this._scaleOffset);
    }
  });

  var Rect = game.Class.extend({
    g: null,
    init: function(x, y, container) {
      this.g = new game.Graphics().addTo(container);
      this.g.beginFill(0x2196f3);
      this.g.drawRect(-20, -20, 40, 40);
      this.g.endFill();

      this.g.position.set(x, y);
    }
  });

  game.createScene('Main', {
    backgroundColor: 0xb9bec7,
    init: function() {
      var entLayer = new game.Container().addTo(this.stage);
      var uiLayer = new game.Container().addTo(this.stage);

      var rect, text;
      for (var r = 1; r < 6; r++) {
        for (var q = 1; q < 8; q++) {
          rect = new Rect(q * 50, r * 50, entLayer);
          text = new game.Text(r + '-' + q, { font: '12px Verdana' }).addTo(rect.g);
        }
      }

      var c = new Camera().addTo(entLayer);
      c.setPosition();
      // c.setRotation(-Math.PI * 0.25);
      // c.setScale(2);
    }
  });

});
