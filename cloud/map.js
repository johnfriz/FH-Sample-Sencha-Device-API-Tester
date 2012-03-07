exports.menuitem = {
  title: 'Map',
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  scroll: false,
  items: [
    {
      ui_type: 'Ext.Button',
      text: 'Show Map',
      margin: 5,
      ui: 'action',
      handler: 'map.show'
    },
    {
      flex: 1,
      ui_type: 'Ext.Panel',
      margin: 5,
      id: 'maps_div'
    }
  ]
};
