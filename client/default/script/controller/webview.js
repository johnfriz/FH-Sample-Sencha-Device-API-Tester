app.c.webview = function () {
  var self = {
    // Open the specified URL in a Webview container and use the given page title
    open: function (name, url) {
      $fh.webview({
        url: url,
        title: name
      }, function (result) {
        // no need to do anything as webview is displayed
      }, function (err) {
        app.u.notify.error(err);
      });
    },

    /*
     * Open the FeedHenry homepage in a webview
     */
    homepage: function () {
      self.open('FeedHenry', 'http://www.feedhenry.com');
    },

    /*
     * Open the Google homepage in a webview
     */
    google: function () {
      self.open('Google', 'http://www.google.com');
    }
  };
  
  return {
    homepage: self.homepage,
    google: self.google
  };
}();
