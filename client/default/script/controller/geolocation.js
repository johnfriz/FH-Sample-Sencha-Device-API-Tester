app.c.geolocation = function () {
  var self = {
    successCalled: false,
    
    /*
     * Get the device location details and display them to the user
     */
    get: function () {
      $fh.geo({
        interval: 0
      }, function (geo) {
        self.successCalled = true;
        
        // Update all the relevant UI components
        var el = Ext.select('#geo_timevalue_field .x-input-text');
        var time = new Date(geo.when).toTimeString().substring(0, 8);
        el.set({
          placeholder: time
        });
        el = Ext.select('#geo_latvalue_field .x-input-text');
        el.set({
          placeholder: geo.lat
        });
        el = Ext.select('#geo_lonvalue_field .x-input-text');
        el.set({
          placeholder: geo.lon
        });
        el = Ext.select('#geo_altvalue_field .x-input-text');
        var altitude = Math.round(geo.alt);
        el.set({
          placeholder: altitude
        });
        el = Ext.select('#geo_accvalue_field .x-input-text');
        var accuracy = Math.round(geo.acc);
        el.set({
          placeholder: accuracy
        });
        el = Ext.select('#geo_speedvalue_field .x-input-text');
        var speed = Math.round(geo.speed);
        // allow for -1 on android
        speed = speed < 0 ? 0 : speed;
        el.set({
          placeholder: speed
        });

      }, function (msg) {
        // There's an issue observed on HTC Legend running 2.1-1 
        // where the geo registration makes BOTH a success and fail callback.
        // Workaround for this is to set a timeout and also track if the 
        // success function was called. If after the timeout, success was
        // also called, no need to run our failure callback code
        setTimeout(function () {
          if (!self.successCalled) {
            app.u.notify.error(msg);
          }
        }, 100);
      });
    }
  };

  return {
    get: self.get
  };
}();