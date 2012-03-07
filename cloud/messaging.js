exports.menuitem = {
  title: 'Messaging',
  items: [{
    ui_type: 'Ext.Panel',
    id: 'sms_form',
    xtype: 'form',
    items: [{
      xtype: 'fieldset',
      margin: 5,
      title: 'SMS',
      items: [{
        xtype: 'textfield',
        id: 'sms_to_field',
        label: 'To',
        placeHolder: '<enter number>'
      }]
    }]
  }, {
    ui_type: 'Ext.Button',
    text: 'Send SMS',
    margin: 5,
    ui: 'action',
    handler: 'messaging.sms'
  }, {
    ui_type: 'Ext.Panel',
    xtype: 'form',
    items: [{
      xtype: 'fieldset',
      margin: 5,
      title: 'E-mail',
      items: [{
        xtype: 'textfield',
        id: 'email_to_field',
        label: 'To',
        placeHolder: '<enter address>'
      }, {
        xtype: 'textfield',
        id: 'email_subject_field',
        label: 'Subject',
        placeHolder: '<enter subject>'
      }, {
        xtype: 'textareafield',
        id: 'email_body_field',
        label: 'Message',
        placeHolder: '<enter message>'
      }]
    }]
  }, {
    ui_type: 'Ext.Button',
    text: 'Send E-mail',
    margin: 5,
    ui: 'action',
    handler: 'messaging.email'
  }]
};