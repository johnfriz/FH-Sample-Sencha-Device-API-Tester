app.c.messaging = function () {
  var self = {
    /*
     * Get the email fields values from the relevant inputs and construct the email 
     * params. Then pass the params to the email api
     */
    email: function () {
      var to = Ext.select('#email_to_field .x-input-text').first().getValue();
      var subject = Ext.select('#email_subject_field .x-input-text').first().getValue();
      var body = Ext.select('#email_body_field .x-input-text').first().getValue();

      var params = {
        to: to,
        subject: subject,
        body: body
      };
      params.type = 'email';
      $fh.send(params, function () {
        // e-mail program has opened, so no need to do anything here
      }, function (code) {
        app.u.notify.alert(code);
      });
    },

    /*
     * Get the SMS number from the nubmer input component, and pass it to the SMS api, 
     * thereby opening the device SMS program pre-populated with the number
     */
    sms: function () {
      var to = Ext.select('#sms_to_field .x-input-text').first().getValue();

      var params = {
        to: to
      };
      params.type = 'sms';
      $fh.send(params, function () {
        // sms program has opened, so no need to do anything here
      }, function (code) {
        app.u.notify.alert(code);
      });
    }
  };

  return {
    email: self.email,
    sms: self.sms
  };
}();