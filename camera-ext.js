game.module(
  'plugins.camera-ext'
)
.body(function() { 'use strict';

  game.Camera.inject({
    isShaking: false,
    _shakeOffset: null,
    _shakeForce: null,
    _shakeDurationTimer: -1,
    _shakeBetween: -1,
    init: function(x, y) {
      this.super(x, y);
      this._shakeOffset = new game.Point();
    },
    zoomIn: function(s, time) {
      var scale = this.container.scale.clone().multiply(s);
      new game.Tween(this.container.scale)
        .to(scale, time)
        .easing(game.Tween.Easing.Cubic.Out)
        .start();
    },
    moveCamera: function() {
      this.speed.x = (this.position.x - this.sensorPosition.x + this.offset.x).limit(-this.maxSpeed, this.maxSpeed);
      this.speed.y = (this.position.y - this.sensorPosition.y + this.offset.y).limit(-this.maxSpeed, this.maxSpeed);

      if (this.speed.x > this.threshold ||
        this.speed.x < -this.threshold ||
        this.speed.y > this.threshold ||
        this.speed.y < -this.threshold
      ) {
        this.setPosition(
          this.position.x + this.offset.x - this.speed.x * this.acceleration * game.system.delta,
          this.position.y + this.offset.y - this.speed.y * this.acceleration * game.system.delta
        );
      }
      else {
        this.speed.set(0, 0);
      }

      // Shake
      if (this.isShaking) {
        this._shakeDurationTimer -= game.system.delta;

        if (this._shakeDurationTimer < 0) {
          this._shakeOffset.x = this._shakeOffset.y = 0;
          this.isShaking = false;
        }
        else {
          this._shakeBetweenTimer -= game.system.delta;
          if (this._shakeBetweenTimer < 0) {
            this._shakeBetweenTimer = this._shakeBetween;

            this._shakeOffset.x = game.rnd.between(this._shakeForward ? 0 : -this._shakeForce.x, this._shakeForce.x);
            this._shakeOffset.y = game.rnd.between(this._shakeForward ? 0 : -this._shakeForce.y, this._shakeForce.y);
          }
        }
      }

      this.container.pivot.copy(this.target.position)
        .multiply(this.container.scale.x - 1, this.container.scale.y - 1)
        .divide(this.container.scale)
        .add(this._shakeOffset);
    },

    /**
     * Shake camera
     * @param  {game.Vector|Number} force Max shake distance
     *                                               in pixel
     * @param  {Number} duration  How long will the camera shake
     * @param  {Number} count How many times will the camera shake
     * @param  {Boolean} forward ONLY shake forward or not
     */
    shake: function(force, duration, count, forward) {
      if (typeof force === 'number') {
        this._shakeForce = { x: force, y: force };
      }
      else {
        this._shakeForce = { x: force.x, y: force.y };
      }
      this._shakeDurationTimer = duration;
      this._shakeBetween = duration / count;
      this._shakeBetweenTimer = duration / count;
      this._shakeForward = forward;

      this.isShaking = true;
    }
  });

});
