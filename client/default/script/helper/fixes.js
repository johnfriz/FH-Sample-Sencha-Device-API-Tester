app.h.fixes = function () {
  var self = {
    // Fix for issue where phonegap doesn't get sent updates about orientation switching because Sencha has bound to it also
    phonegapOrientation: function () {
      inst.v.mainPanel.setOrientation(Ext.getOrientation(), window.innerWidth, window.innerHeight);
    }
  };
    
  return {
    phonegapOrientation: self.phonegapOrientation
  };  
}();