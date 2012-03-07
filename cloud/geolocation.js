exports.menuitem = {
  title: 'Geolocation',
  items: [{
    ui_type: 'Ext.Panel',
    xtype: 'form',
    items: [{
      xtype: 'fieldset',
      margin: 5,
      title: 'Location',
      items: [{
        xtype: 'textfield',
        id: 'geo_timevalue_field',
        label: 'Time',
        placeHolder: '<no reading>',
        disabled: true
      }, {
        xtype: 'textfield',
        id: 'geo_lonvalue_field',
        label: 'Longitude',
        placeHolder: '<no reading>',
        disabled: true
      }, {
        xtype: 'textfield',
        id: 'geo_latvalue_field',
        label: 'Latitude',
        placeHolder: '<no reading>',
        disabled: true
      }, {
        xtype: 'textfield',
        id: 'geo_altvalue_field',
        label: 'Altitude (m)',
        placeHolder: '<no reading>',
        disabled: true
      }, {
        xtype: 'textfield',
        id: 'geo_accvalue_field',
        label: 'Accuracy (m)',
        placeHolder: '<no reading>',
        disabled: true
      }, {
        xtype: 'textfield',
        id: 'geo_speedvalue_field',
        label: 'Speed (m/s)',
        placeHolder: '<no reading>',
        disabled: true
      }]
    }]
  }, {
    ui_type: 'Ext.Button',
    text: 'Get Current Location',
    margin: 5,
    ui: 'action',
    handler: 'geolocation.get'
  }]
};