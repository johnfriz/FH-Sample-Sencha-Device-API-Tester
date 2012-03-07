app.c.notify = function () {
  var self = {
    doNotify: function (method) {
      $fh.notify({
        type: method
      }, function () {
        // no need to do anything here
      }, function (msg) {
        app.u.notify.error('Device doesn\'t support this feature (Error: ' + msg);
      });
    },
    
    /*
     * Play a beep noise, if available (Not currently working in iOS)
     */
    beep: function () {
      self.doNotify('beep');
    },
    
    /*
     * Vibrate device for a few seconds
     */
    vibrate: function () {
      self.doNotify('vibrate');
    }
  };

  return {
    beep: self.beep,
    vibrate: self.vibrate
  };
}();