exports.menuitem = {
  title: 'Photos',
  items: [
    {
      ui_type: 'Ext.Button',
      text: 'Use Camera',
      ui: 'action',
      margin: 5,
      handler: 'photo.camera'
    },
    {
      ui_type: 'Ext.Button',
      text: 'Use Photo Gallery',
      margin: 5,
      ui: 'action',
      handler: 'photo.gallery'
    },
    {
      ui_type: 'Ext.Container',
      margin: 5
    }
  ]
};
