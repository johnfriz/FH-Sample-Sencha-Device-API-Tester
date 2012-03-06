app.c.accelerometer = function () {
  var self = {
      
    /*
     * Get the current accelerometer reading, displaying each data field to the user
     */
    get: function () {
      $fh.acc({
        interval: 0
      }, function (accel) {
        var el = Ext.select('#acc_timevalue_field .x-input-text');
        var time = new Date(accel.when).toTimeString().substring(0, 8);
        el.set({
          placeholder: time
        });
        el = Ext.select('#acc_xvalue_field .x-input-text');
        el.set({
          placeholder: accel.x
        });
        el = Ext.select('#acc_yvalue_field .x-input-text');
        el.set({
          placeholder: accel.y
        });
        el = Ext.select('#acc_zvalue_field .x-input-text');
        el.set({
          placeholder: accel.z
        });

      }, function (msg) {
        app.u.notify.error(msg);
      });
    },

    // Start monitoring the accelerometer values at the interval specified by the user,
    // and set the button text to 'Stop'
    start: function () {
      var interval = Ext.select('[name=acc_monitor_field]').first().getValue();
      self.monitorInterval = setInterval(function () {
        app.c.accelerometer.get();
      }, interval);
      Ext.select('#monitor_button .x-button-label').update('Stop');
    },

    // Stop monitoring the accelerometer and set the button text back to 'Montor'
    stop: function () {
      clearInterval(self.monitorInterval);
      self.monitorInterval = null;
      Ext.select('#monitor_button .x-button-label').update('Monitor');
    },

    /*
     * Start monitoring the accelerometer if not already montioring it, 
     * otherwise, stop monitoring it
     */
    monitor: function () {
      if (self.monitorInterval) {
        self.stop();
      } else {
        self.start();
      }
    }
  };

  return {
    get: self.get,
    monitor: self.monitor
  };
}();