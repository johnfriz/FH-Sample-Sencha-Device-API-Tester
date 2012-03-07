app.c.photo = function () {
  // private members
  var self = {
    // Call camera api with specified type i.e. photo or camera,
    // and place the picture in the callback parameters into the app.
    // If there's a problem, alert a message
    picture: function (type) {
      $fh.cam({
        act: 'picture',
        source: type
      }, function (picdata) {
        // get the format of the image and base64 data from the returned picdata
        var resultHtml = "<img src='data:image/" + picdata.format + ";base64," + picdata.b64 + "' width='300px' height='300px' ></img>";
        // get the last item below the buttons, which should be a container,
        // and update it with the image
        var items = inst.v.mainPanel.getActiveItem().items;
        items.get(items.length - 1).update({
          html: resultHtml
        });
      }, function (msg) {
        // only alert if message isn't cam_error as this error happens if 
        // no picture is selected from photo gallery
        if ('cam_error' !== msg) {
          app.u.notify.error(msg);
        }
      });
    },

    /*
     * Read an image using the camera
     */
    camera: function () {
      return self.picture('camera');
    },

    /*
     * Read an image by choosing one from the photo gallery
     */
    gallery: function () {
      return self.picture('photo');
    }
  };
  
  // return public interface
  return {
    camera: self.camera,
    gallery: self.gallery
  };
}();
