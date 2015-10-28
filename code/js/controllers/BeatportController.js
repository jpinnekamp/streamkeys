;(function() {
  "use strict";

  var controller = require("BaseController"),
      $ = require("jquery");

  var multiSelectors = {
    play: [".omniplayer button[title=Play]", ".video-btn.play-icon"],
    pause: [".omniplayer button[title=Pause]", ".video-btn.pause-icon"],
    playNext: [".omniplayer--next-icon", null],
    playState: [".omniplayer.is-playing", null],
    mute: [".omniplayer--volume-icon", "#mute"],
    like: [".omniplayer--heart-icon", null],
    song: [".omniplayer--title", ".stream-description .overview h1"],
    artist: [".omniplayer--artist", ".channel-text h1"]
  };

  controller.init({
    siteName: "Beatport"
  });

  controller.checkPlayer = function() {
    var that = this;

    if(document.querySelector(multiSelectors.play[0]) || document.querySelector(multiSelectors.pause[0])) {
      $.each(multiSelectors, function(key, value) {
        that.selectors[key] = value[0];
      });
    } else {
      $.each(multiSelectors, function(key, value) {
        that.selectors[key] = value[1];
      });
    }
  };

})();