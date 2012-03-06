/*
 * Menu definition is stored in the menu object, so simply return that
 */
var getUI = function (params, callback) {
  var menu = [];
  
  console.log('constructing menuitem array');

  menu.push(require('contact.js').menuitem);
  menu.push(require('log.js').menuitem);
  menu.push(require('data.js').menuitem);
  menu.push(require('geolocation.js').menuitem);
  menu.push(require('accelerometer.js').menuitem);
  menu.push(require('notify.js').menuitem);
  menu.push(require('photo.js').menuitem);
  menu.push(require('messaging.js').menuitem);
  menu.push(require('orientation.js').menuitem);
  menu.push(require('map.js').menuitem);
  menu.push(require('audio.js').menuitem);
  menu.push(require('webview.js').menuitem);

  console.log('num. menuitems = ' + menu.length);

  return callback(null, {menu: menu});
};

exports.getUI = getUI;