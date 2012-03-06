// Define what an API item is, i.e. a menu item e.g. 'Log Message'
app.m.apiitem = Ext.regModel('APIItem', {
  fields: [{
    name: 'menuName'
  }, {
    name: 'card'
  }]
});