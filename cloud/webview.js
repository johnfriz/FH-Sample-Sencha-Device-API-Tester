exports.menuitem = {
  title: 'Webview',
  items: [
    {
      ui_type: 'Ext.Button',
      text: 'Open FeedHenry Homepage',
      margin: 5,
      ui: 'action',
      handler: 'webview.homepage'
    },
    {
      ui_type: 'Ext.Button',
      text: 'Open Google',
      margin: 5,
      ui: 'action',
      handler: 'webview.google'
    },
    {
      ui_type: 'Ext.Container',
      margin: 5
    }
  ]
};
