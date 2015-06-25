game.module(
  'game.main'
)
.require(
  'plugins.mad-camera'
)
.body(function() { 'use strict';

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

      var c = new game.MadCamera().addTo(entLayer);
      // c.setOffset(100, 0);
      // c.setPosition();
      // c.setPosition(100, 100);
      // c.setPosition(game.system.width * 0.5, game.system.height * 0.5);
      // c.setRotation(-Math.PI * 0.25);
      // c.setScale(1);
      // c.setScale(1.2);
      // c.setScale(2);

      new game.Tween({ s: 1 }).to({ s: 2 }, 1000)
        .onUpdate(function(value) {
          c.setPosition(value * game.system.width, game.system.height * 0.5);
        })
        .start();
      new game.Tween({ s: 1 }).to({ s: 2 }, 1000)
        .delay(2000)
        .onUpdate(function(value) {
          c.setPosition((1 - value) * game.system.width, game.system.height * 0.5);
        })
        .start();

      new game.Tween({ s: 1 }).to({ s: 2 }, 2000)
        .onUpdate(function(value) {
          c.setScale(value * 2);
          // c.setRotation(value * Math.PI * 4);
        })
        .start();

      new game.Tween({ s: 1 }).to({ s: 2 }, 2000)
        .delay(2000)
        .onUpdate(function(value) {
          c.setScale((1 - value) * 2);
          // c.setRotation(value * Math.PI * 4);
        })
        .start();
    }
  });

});
