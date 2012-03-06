/*
 * Notification utilities, such as showing alerts and errors
 */
app.u.notify = function () {
  var self = {
    error: function (msg) {
      alert(msg);
    },
    
    alert: function (msg, title, callback) {
      title = 'string' === typeof title ? title : undefined;
      callback = 'function' === typeof title ? title : callback;
      Ext.Msg.alert(title || 'Alert', msg, callback || Ext.emptyFn);
    }
  };
  
  return {
    alert: self.alert,
    error: self.error
  };
}();