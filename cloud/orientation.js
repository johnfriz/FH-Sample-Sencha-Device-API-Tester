exports.menuitem = {
  title: 'Orientation',
  items: [{
    ui_type: 'Ext.Panel',
    xtype: 'form',
    items: [{
      xtype: 'fieldset',
      id: 'ori_fieldset',
      margin: 5,
      title: 'Orientation Reading',
      instructions: 'Rotate device to see orientation reading above',
      items: [{
        xtype: 'textfield',
        id: 'ori_value_field',
        label: 'Value',
        placeHolder: '<no reading>',
        disabled: true
      }]
    }]
  }]
};
