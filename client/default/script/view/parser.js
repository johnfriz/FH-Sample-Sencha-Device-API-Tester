/*
 * Provides a function for parsing a menu definition into a Sencha Component definition
 */
app.v.parser = function () {
  var self = {
    // Format an item definition into a Sencha Component definition.
    // Very little has to be done for this. Really just removing the ui_type
    // as it's not recognised by Sencha, and turning the handler string into
    // a real client-side object reference.
    formatItem : function (item) {
      var temp_item = item;
    
      temp_item.ui_type = undefined;
    
      if (temp_item.handler) {
        // Create the reference to the relevant controller for handling calls
        temp_item.handler = self.getLocalObj('app.c.' + temp_item.handler);
      }
    
      return temp_item;
    },
  
    //Convert an object name into an actual object e.g. 'Ext.Panel' will return the Ext.Panel object
    getLocalObj: function (obj_str) {
      var str_arr = obj_str.split('.');
    
      var temp_ref = window;
      var si, sl;
      for (si = 0, sl = str_arr.length; si < sl; si++) {
        temp_ref = temp_ref[str_arr[si]];
        if (typeof temp_ref === 'undefined') {
          app.u.notify.error('Local object \'' + str_arr[si] + '\' not defined. (' + obj_str + ')');
          return null;
        }
      }
      
      return temp_ref;
    },
    
    /*
     * Parse the given menu definition, returning the Sencha Component definition for creating the App
     */
    parseMenuDef: function (menu) {
      var store_data = {
        model: 'APIItem',
        data: []
      };
    
      var data = store_data.data;
      var si, sl;
      for (si = 0, sl = menu.length; si < sl; si++) {
        var menu_item = menu[si],
            menu_title = menu_item.title,
            temp_items = menu_item.items,
            temp_card_items = [];
    
        var ci, cl;
        for (ci = 0, cl = temp_items.length; ci < cl; ci++) {
          var temp_item = temp_items[ci];
          var type = temp_item.ui_type;
          temp_item = self.formatItem(temp_item);
          var Obj = self.getLocalObj(type);
          temp_card_items.push(new Obj(temp_item));
        }
    
        var card_opts = {
          layout: {
            align: 'stretch',
            pack: 'start'
          },
          scroll: true,
          ui: 'light',
          flex: 1,
          items: temp_card_items
        };
        if (menu_item.layout) {
          card_opts.layout = menu_item.layout;
        }
        if ('boolean' === typeof menu_item.scroll) {
          card_opts.scroll = menu_item.scroll;
        }
        var temp_card = new Ext.Container(card_opts);
    
        var temp_data = {
          menuName: menu_title,
          card: temp_card
        };
    
        data.push(temp_data);
      }
      
      // initialise menu store with menu definition
      var menu_def = new Ext.data.JsonStore(store_data);
      
      return menu_def;
    }
  };
  
  return {
    parseMenuDef: self.parseMenuDef
  };
}();