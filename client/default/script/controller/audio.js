app.c.audio = function () {
  var self = {
   
    // Start playing the specified url stream/file
    play: function (url) {
      Ext.getCmp('play_rte').disable();
      Ext.getCmp('play_beat').disable();
      app.u.notify.alert('Buffering Stream. Please wait...');
      $fh.audio({
        act: 'play',
        path: url
      }, function () {
        app.u.notify.alert('Playing audio');
        // enable the pause and stop buttons
        Ext.getCmp('audio_pause').enable();
        Ext.getCmp('audio_stop').enable();
      }, function () {
        app.u.notify.error('Audio play failed');
        Ext.getCmp('play_rte').enable();
        Ext.getCmp('play_beat').enable();
      });
    },
    
    /*
     * Start playing beat radio stream
     */
    beat: function () {
      return self.play('http://streaming.planetwideradio.com:8090');
    },
    
    /*
     * start playing rte radio stream
     */
    rte: function () {
      return self.play('rtsp://wmsrtsp1.rte.ie/live/radio1');
    },
    
    /*
     * Pause the currently playing item
     */
    pause: function () {
      $fh.audio({
        act: 'pause'
      }, function () {
        app.u.notify.alert('Audio paused');
      }, function () {
        app.u.notify.error('Pause failed');
      });
      // also disable the pause and stop buttons as no audio is playing
      Ext.getCmp('audio_pause').disable();
      Ext.getCmp('audio_stop').disable();
      Ext.getCmp('play_rte').enable();
      Ext.getCmp('play_beat').enable();
    },
    
    /*
     * Stop the currently playing item
     */
    stop: function () {
      $fh.audio({
        act: 'stop'
      }, function () {
        app.u.notify.alert('Audio stopped');
      }, function (e) {
        app.u.notify.error('Audio stop failed');
      });
      // also disable the pause and stop buttons as no audio is playing
      Ext.getCmp('audio_pause').disable();
      Ext.getCmp('audio_stop').disable();
      Ext.getCmp('play_rte').enable();
      Ext.getCmp('play_beat').enable();
    },
        
    /*
     * Increase the volume by 0.1 unit
     */
    volumeUp: function () {
      $fh.audio({
        act: 'getvolume'
      }, function (vol_value) {
        var current_vol = parseFloat(vol_value);
        app.u.notify.alert("Current volume:" + vol_value);
        var new_vol = (current_vol + 0.1) >= 1.0 ? 1.0 : (current_vol + 0.1);
        $fh.audio({
          act: 'setvolume',
          level: new_vol
        }, function () {
          app.u.notify.alert("New volume: " + new_vol);
        }, function (msg) {
          app.u.notify.error("error turning up volume:" + msg);
        });
      }, function (msg) {
        app.u.notify.error("error reading volume:" + msg);
      });
    },
      
    /*
     * Decrease the volume by 0.1 unit
     */
    volumeDown: function () {
      $fh.audio({
        act: 'getvolume'
      }, function (vol_value) {
        var current_vol = parseFloat(vol_value);
        app.u.notify.alert("Current volume:" + vol_value);
        var new_vol = (current_vol - 0.1) <= 0.0 ? 0.0 : (current_vol - 0.1);
        $fh.audio({
          act: 'setvolume',
          level: new_vol
        }, function () {
          app.u.notify.alert("New volume: " + new_vol);
        }, function (msg) {
          app.u.notify.error("error turning down volume:" + msg);
        });
      }, function (msg) {
        app.u.notify.error("error reading volume:" + msg);
      });
    }
  };

  return {
    beat: self.beat,
    rte: self.rte,
    pause: self.pause,
    stop: self.stop,
    volumeUp: self.volumeUp,
    volumeDown: self.volumeDown
  };
}();