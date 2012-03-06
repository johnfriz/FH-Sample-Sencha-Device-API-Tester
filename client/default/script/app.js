/*
 * Contains App initialisation functions
 */
app = function () {  
  var self = {
    init: function () {
      // Get the latest UI definition from server
      $fh.act({
        act: 'getUI',
        req: {}
      }, function (res) {
        // Returned object is our menu definition, so we can use it to initialise the menu, but lets save it locally first
        $fh.data({
          act: 'save',
          key: 'menu_definition',
          val: JSON.stringify(res)
        });
        self.initialiseMenu(res);
      }, function (code, errorprops, params) {
        // If there's a problem getting defintion from server, fall back to a locally stored definition
        $fh.data({
          key: 'menu_definition'
        }, function (data) {
          var menu = JSON.parse(data);
          self.initialiseMenu(menu);
        }, function () {
          // If we don't have a locally stored definition, fall back to definition stored in shared files
          // TODO: shared files currently not supported, hardcode definition for now
          var menu = [{"items":[{"handler":"contact.list","margin":5,"text":"List Contacts","ui_type":"Ext.Button"},{"id":"contact_form","items":[{"items":[{"id":"contact_first_field","label":"First","placeHolder":"<enter name>","xtype":"textfield"},{"id":"contact_last_field","label":"Last","placeHolder":"<enter name>","xtype":"textareafield"},{"id":"contact_number_field","label":"Number","placeHolder":"<enter number>","xtype":"textareafield"}],"margin":5,"title":"Create Contact","xtype":"fieldset"}],"ui_type":"Ext.Panel","xtype":"form"},{"handler":"contact.create","margin":5,"text":"Create","ui_type":"Ext.Button"},{"handler":"contact.createGui","margin":5,"text":"On-Device Contacts GUI","ui_type":"Ext.Button"}],"title":"Contacts"},{"items":[{"items":[{"id":"log_fieldset","instructions":"Use the Organiser in xCode to read the console log","items":[{"id":"log_text_field","label":"Message","placeHolder":"<enter message>","xtype":"textfield"}],"margin":5,"title":"Log Message (iOS Only)","xtype":"fieldset"}],"ui_type":"Ext.Panel","xtype":"form"},{"handler":"log.send","margin":5,"text":"Log","ui_type":"Ext.Button"}],"title":"Log Message"},{"items":[{"items":[{"items":[{"id":"data_setkey_field","label":"Key","placeHolder":"<enter key>","xtype":"textfield"},{"id":"data_setvalue_field","label":"Value","placeHolder":"<enter value>","xtype":"textfield"}],"margin":5,"title":"Store","xtype":"fieldset"}],"ui_type":"Ext.Panel","xtype":"form"},{"handler":"data.store","margin":5,"text":"Store Data","ui_type":"Ext.Button"},{"items":[{"items":[{"id":"data_getkey_field","label":"Key","placeHolder":"<enter key>","xtype":"textfield"},{"disabled":true,"id":"data_getvalue_field","label":"Value","placeHolder":"<no data>","xtype":"textfield"}],"margin":5,"title":"Retrieve","xtype":"fieldset"}],"ui_type":"Ext.Panel","xtype":"form"},{"handler":"data.retrieve","margin":5,"text":"Retrieve Data","ui_type":"Ext.Button"}],"title":"Data Storage"},{"items":[{"items":[{"items":[{"disabled":true,"id":"geo_timevalue_field","label":"Time","placeHolder":"<no reading>","xtype":"textfield"},{"disabled":true,"id":"geo_lonvalue_field","label":"Longitude","placeHolder":"<no reading>","xtype":"textfield"},{"disabled":true,"id":"geo_latvalue_field","label":"Latitude","placeHolder":"<no reading>","xtype":"textfield"},{"disabled":true,"id":"geo_altvalue_field","label":"Altitude (m)","placeHolder":"<no reading>","xtype":"textfield"},{"disabled":true,"id":"geo_accvalue_field","label":"Accuracy (m)","placeHolder":"<no reading>","xtype":"textfield"},{"disabled":true,"id":"geo_speedvalue_field","label":"Speed (m/s)","placeHolder":"<no reading>","xtype":"textfield"}],"margin":5,"title":"Location","xtype":"fieldset"}],"ui_type":"Ext.Panel","xtype":"form"},{"handler":"geolocation.get","margin":5,"text":"Get Current Location","ui_type":"Ext.Button"}],"title":"Geolocation"},{"items":[{"items":[{"id":"acc_fieldset","items":[{"disabled":true,"id":"acc_timevalue_field","label":"Time","placeHolder":"<no reading>","xtype":"textfield"},{"disabled":true,"id":"acc_xvalue_field","label":"X","placeHolder":"<no reading>","xtype":"textfield"},{"disabled":true,"id":"acc_yvalue_field","label":"Y","placeHolder":"<no reading>","xtype":"textfield"},{"disabled":true,"id":"acc_zvalue_field","label":"Z","placeHolder":"<no reading>","xtype":"textfield"}],"margin":5,"title":"Accelerometer Reading","xtype":"fieldset"}],"ui_type":"Ext.Panel","xtype":"form"},{"handler":"accelerometer.get","margin":5,"text":"Get Reading","ui_type":"Ext.Button"},{"items":[{"items":[{"hiddenName":"acc_monitor_field","id":"acc_monitor_select","label":"Interval","options":[{"text":"100 ms","value":"100"},{"text":"200 ms","value":"200"},{"text":"500 ms","value":"500"},{"text":"1 second","value":"1000"}],"xtype":"selectfield"}],"margin":5,"xtype":"fieldset"}],"ui_type":"Ext.Panel","xtype":"form"},{"handler":"accelerometer.monitor","id":"monitor_button","margin":5,"text":"Monitor","ui_type":"Ext.Button"}],"title":"Accelerometer"},{"items":[{"handler":"notify.vibrate","margin":5,"text":"Vibrate","ui_type":"Ext.Button"},{"handler":"notify.beep","margin":5,"text":"Beep (Android Only)","ui_type":"Ext.Button"}],"title":"Notify"},{"items":[{"handler":"photo.camera","margin":5,"text":"Use Camera","ui_type":"Ext.Button"},{"handler":"photo.gallery","margin":5,"text":"Use Photo Gallery","ui_type":"Ext.Button"},{"margin":5,"ui_type":"Ext.Container"}],"title":"Photos"},{"items":[{"id":"sms_form","items":[{"items":[{"id":"sms_to_field","label":"To","placeHolder":"<enter number>","xtype":"textfield"}],"margin":5,"title":"SMS","xtype":"fieldset"}],"ui_type":"Ext.Panel","xtype":"form"},{"handler":"messaging.sms","margin":5,"text":"Send SMS","ui_type":"Ext.Button"},{"items":[{"items":[{"id":"email_to_field","label":"To","placeHolder":"<enter address>","xtype":"textfield"},{"id":"email_subject_field","label":"Subject","placeHolder":"<enter subject>","xtype":"textfield"},{"id":"email_body_field","label":"Message","placeHolder":"<enter message>","xtype":"textareafield"}],"margin":5,"title":"E-mail","xtype":"fieldset"}],"ui_type":"Ext.Panel","xtype":"form"},{"handler":"messaging.email","margin":5,"text":"Send E-mail","ui_type":"Ext.Button"}],"title":"Messaging"},{"items":[{"items":[{"id":"ori_fieldset","instructions":"Rotate device to see orientation reading above","items":[{"disabled":true,"id":"ori_value_field","label":"Value","placeHolder":"<no reading>","xtype":"textfield"}],"margin":5,"title":"Orientation Reading","xtype":"fieldset"}],"ui_type":"Ext.Panel","xtype":"form"}],"title":"Orientation"},{"items":[{"handler":"map.show","margin":5,"text":"Show Map","ui_type":"Ext.Button"},{"flex":1,"id":"maps_div","margin":5,"ui_type":"Ext.Panel"}],"layout":{"align":"stretch","type":"vbox"},"scroll":false,"title":"Map"},{"items":[{"handler":"audio.beat","margin":5,"text":"Play BEAT Radio (iOS only)","ui_type":"Ext.Button"},{"handler":"audio.rte","margin":5,"text":"Play RTE Radio (Android only)","ui_type":"Ext.Button"},{"disabled":true,"handler":"audio.pause","id":"audio_pause","margin":5,"text":"Pause Audio Stream","ui_type":"Ext.Button"},{"disabled":true,"handler":"audio.stop","id":"audio_stop","margin":5,"text":"Stop Audio Stream","ui_type":"Ext.Button"},{"handler":"audio.volumeUp","margin":5,"text":"Turn Up Volume (Android Only)","ui_type":"Ext.Button"},{"handler":"audio.volumeDown","margin":5,"text":"Turn Down Volume (Android Only)","ui_type":"Ext.Button"}],"title":"Audio"},{"items":[{"handler":"webview.homepage","margin":5,"text":"Open FeedHenry Homepage","ui_type":"Ext.Button"},{"handler":"webview.google","margin":5,"text":"Open Google","ui_type":"Ext.Button"},{"margin":5,"ui_type":"Ext.Container"}],"title":"Webview"}];
          self.initialiseMenu(menu);
        });
        
      });
    },
    
    initialiseMenu: function (definition) {
      inst.v.menuDef = app.v.parser.parseMenuDef(definition.menu);
      
      // initialise the main View
      inst.v.mainPanel = new app.v.main({
        useTitleAsBackText: false
      });
      
      // setup orientation callback
      app.c.orientation.setup();
    } 
  }; 
  
  return {
    init: self.init
  };
}();
