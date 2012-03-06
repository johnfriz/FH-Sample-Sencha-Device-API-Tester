//Define some namespaces we'll use
Ext.ns('app.c', 'app.m', 'app.v', 'app.u', 'app.h', 'inst', 'inst.v');

Ext.setup({
  onReady: function () {
    // Some sencha overrides
    Ext.form.Field.prototype.labelWidth = "38%";
    Ext.EventManager.onWindowResize(app.h.fixes.phonegapOrientation);
    
    // initialise the main application
    app.init();
  }
});