app.c.map = function () {
  var self = {
     /*
      * Use the Geolocation API to get the device current location, then initialise a 
      * Map at that location. 
      */
    show: function () {
      // Get location using Geolocation API
      $fh.geo({
        // setting an interval of 0 will only perform a single geolocation lookup
        interval: 0
      }, function (res) {
        // Got geolocation details in response. 
        self.initMap(res.lat, res.lon);
      }, function (error) {
        // Problem getting geolocation details, so fallback to hardcoded values
        self.initMap(53.5, -7.5);
      });
    },
    
    initMap: function (lat, lon) {
      //Pass lat & lon into map api, initialising map at that point
      $fh.map({
        target: '#maps_div',
        lat: lat,
        lon: lon,
        zoom: 15
      }, function (res) {
        // Map is being shown, no need to do anything here
      }, function (error) {
        // something seriously wrong here. Show error
        app.u.notify.alert(error);
      });
    }
  };

  return {
    show: self.show
  };
}();