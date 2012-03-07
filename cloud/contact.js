exports.menuitem = {
  title: 'Contacts',
  items: [{
    ui_type: 'Ext.Button',
    text: 'List Contacts',
    margin: 5,
    ui: 'action',
    handler: 'contact.list' // Controller endpoint to callback to 
  }, {
    ui_type: 'Ext.Panel',
    id: 'contact_form',
    xtype: 'form',
    items: [{
      xtype: 'fieldset',
      margin: 5,
      title: 'Create Contact',
      items: [{
        xtype: 'textfield',
        id: 'contact_first_field',
        label: 'First',
        placeHolder: '<enter name>'
      }, {
        xtype: 'textareafield',
        id: 'contact_last_field',
        label: 'Last',
        placeHolder: '<enter name>'
      }, {
        xtype: 'textareafield',
        id: 'contact_number_field',
        label: 'Number',
        placeHolder: '<enter number>'
      }]
    }]
  }, {
    ui_type: 'Ext.Button',
    text: 'Create',
    ui: 'confirm',
    margin: 5,
    handler: 'contact.create'
  }, {
    ui_type: 'Ext.Button',
    text: 'On-Device Contacts GUI',
    ui: 'action',
    margin: 5,
    handler: 'contact.createGui'
  }]
};