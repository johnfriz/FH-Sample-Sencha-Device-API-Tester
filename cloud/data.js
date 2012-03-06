exports.menuitem = {
  title: 'Data Storage',
  items: [{
    ui_type: 'Ext.Panel',
    xtype: 'form',
    items: [{
      xtype: 'fieldset',
      margin: 5,
      title: 'Store',
      instructions: 'Data stored here is persistent across App launches',
      items: [{
        xtype: 'textfield',
        id: 'data_setkey_field',
        label: 'Key',
        placeHolder: '<enter key>'
      }, {
        xtype: 'textfield',
        id: 'data_setvalue_field',
        label: 'Value',
        placeHolder: '<enter value>'
      }]
    }]
  }, {
    ui_type: 'Ext.Button',
    text: 'Store Data',
    margin: 5,
    ui: 'action',
    handler: 'data.store'
  }, {
    ui_type: 'Ext.Panel',
    xtype: 'form',
    items: [{
      xtype: 'fieldset',
      margin: 5,
      title: 'Retrieve',
      items: [{
        xtype: 'textfield',
        id: 'data_getkey_field',
        label: 'Key',
        placeHolder: '<enter key>'
      }, {
        xtype: 'textfield',
        id: 'data_getvalue_field',
        label: 'Value',
        placeHolder: '<no data>',
        disabled: true
      }]
    }]
  }, {
    ui_type: 'Ext.Button',
    text: 'Retrieve Data',
    margin: 5,
    ui: 'action',
    handler: 'data.retrieve'
  }]
};