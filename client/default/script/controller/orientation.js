app.c.orientation = function () {
  var self = {
    setup: function () {
      $fh.ori(function (reading) {
        var el = Ext.select('#ori_value_field .x-input-text');
        el.set({
          placeholder: reading
        });
      }, function (msg) {
        var err_msg = 'Orientation feature not supported on this device';
      });
    }
  };

  return {
    setup: self.setup
  };
}();