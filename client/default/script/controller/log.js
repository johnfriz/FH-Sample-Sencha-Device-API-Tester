app.c.log = function () {
  var self = {
    /*
     * Send a message to the debug console.
     * The console used is different depending on desktop browser or device
     * i.e. Firebug/Web Inspector console or xCode console
     */
    send: function () {
      // get message to display from input
      var message = Ext.select('#log_text_field .x-input-text').first().getValue();
      if (message === "") {
        app.u.notify.alert("Please enter a message");
      } else {
        $fh.log({
          message: message
        });
        app.u.notify.alert("Message logged. Please check the console log");
      }
    }
  };

  return {
    send: self.send
  };
}();