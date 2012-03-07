exports.menuitem = {
  title: 'Accelerometer',
  items: [{
    ui_type: 'Ext.Panel',
    xtype: 'form',
    items: [{
      xtype: 'fieldset',
      id: 'acc_fieldset',
      margin: 5,
      title: 'Accelerometer Reading',
      items: [{
        xtype: 'textfield',
        id: 'acc_timevalue_field',
        label: 'Time',
        placeHolder: '<no reading>',
        disabled: true
      }, {
        xtype: 'textfield',
        id: 'acc_xvalue_field',
        label: 'X',
        placeHolder: '<no reading>',
        disabled: true
      }, {
        xtype: 'textfield',
        id: 'acc_yvalue_field',
        label: 'Y',
        placeHolder: '<no reading>',
        disabled: true
      }, {
        xtype: 'textfield',
        id: 'acc_zvalue_field',
        label: 'Z',
        placeHolder: '<no reading>',
        disabled: true
      }]
    }]
  }, {
    ui_type: 'Ext.Button',
    text: 'Get Reading',
    margin: 5,
    ui: 'action',
    handler: 'accelerometer.get'
  }, {
    ui_type: 'Ext.Panel',
    xtype: 'form',
    items: [{
      xtype: 'fieldset',
      margin: 5,
      items: [{
        xtype: 'selectfield',
        id: 'acc_monitor_select',
        label: 'Interval',
        hiddenName: 'acc_monitor_field',
        options: [{
          text: '100 ms',
          value: '100'
        }, {
          text: '200 ms',
          value: '200'
        }, {
          text: '500 ms',
          value: '500'
        }, {
          text: '1 second',
          value: '1000'
        }]
      }]
    }]
  }, {
    ui_type: 'Ext.Button',
    id: 'monitor_button',
    text: 'Monitor',
    ui: 'action',
    margin: 5,
    handler: 'accelerometer.monitor'
  }]
};