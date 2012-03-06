exports.menuitem = {
  title: 'Log Message',
  items: [{
    ui_type: 'Ext.Panel',
    xtype: 'form',
    items: [{
      xtype: 'fieldset',
      id: 'log_fieldset',
      margin: 5,
      title: 'Log Message (iOS Only)',
      instructions: 'Use the Organiser in xCode to read the console log',
      items: [{
        xtype: 'textfield',
        id: 'log_text_field',
        label: 'Message',
        placeHolder: '<enter message>'
      }]
    }]
  }, {
    ui_type: 'Ext.Button',
    text: 'Log',
    margin: 5,
    ui: 'action',
    handler: 'log.send'
  }]
};
