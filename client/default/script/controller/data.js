app.c.data = function () {
  var self = {
      
    /*
     * Store the inputted data in local storage
     */
    store: function () {
      var key = Ext.select('#data_setkey_field .x-input-text').first().getValue();
      var val = Ext.select('#data_setvalue_field .x-input-text').first().getValue();
      $fh.data({
        act: 'save',
        key: key,
        val: val
      });
      app.u.notify.alert('Stored key:' + key + ', val:' + val);
    },
    
    /*
     * Retrieve the data for the inputted string, and display it to user
     */
    retrieve: function () {
      var key = Ext.select('#data_getkey_field .x-input-text').first().getValue();
      $fh.data({
        key: key
      }, function (res) {
        var val = res.val;
        
        var el = Ext.select('#data_getvalue_field .x-input-text');
        el.set({
          placeholder: val
        });
      }, function (msg) {
        app.u.notify.alert(msg);
      });
    }
  };

  return {
    store: self.store,
    retrieve: self.retrieve
  };
}();