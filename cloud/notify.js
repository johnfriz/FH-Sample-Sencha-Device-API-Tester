exports.menuitem = {
  title: 'Notify', // Title as it should appear in Menu
  
  // Array of items that should be in the Notify menu item
  items: [{
    ui_type: 'Ext.Button', // Simple button
    text: 'Vibrate', // Button text
    ui: 'action', // UI Type
    margin: 5,
    handler: 'notify.vibrate' // Controller endpoint to callback to
  }, {
    ui_type: 'Ext.Button',
    text: 'Beep (Android Only)',
    margin: 5,
    ui: 'action',
    handler: 'notify.beep'
  }]
};