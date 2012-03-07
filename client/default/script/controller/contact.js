app.c.contact = function () {
  var self = {
      
    /*
     * Use the Contacts api to get a list of all contacts, and display them to user.
     * The contacts are displayed inside a Sencha grouped list. This requires setting 
     * up a Contact model (see /script/model/contact.js) and a template for displaying
     * each Contact in the list. 
     * It also requires defining a 'group by' function for how each contact should be grouped
     */
    list: function (b, e) {
      // Get contacts from device
      $fh.contacts({
        act: 'list'
      }, function (data) {
        // get the contacts array from data returned
        var contacts = data.list;

        // create the data store, passing in the contacts list
        var store = new Ext.data.JsonStore({
          model: app.m.contact, // the contact model that is registered in /script/models/contact.js
          sorters: 'last', // sort by 'last' field
          getGroupString: self.getGroupString, // the grouping callback for each item
          data: contacts// contacts array
        });
        
        // create the Sencha list by passing in the data store containing the contacts
        inst.v.cList = new Ext.List({
          itemTpl: '{first} {last}', // template for displaying each contact e.g. 'George Washington'
          grouped: true,
          indexBar: true,
          store: store
        });

        // Setup the container for our List
        inst.v.cCard = new Ext.Container({
          layout: 'card',
          items: [inst.v.cList]
        });

        // Swap in our List container so it's visible
        inst.v.mainPanel.prevCard.push(inst.v.mainPanel.getActiveItem());
        inst.v.mainPanel.setActiveItem(inst.v.cCard, {
          type: 'slide'
        });
        inst.v.cList.show();

      }, function (e) {
        // problem listing contacts, show error
        alert('List contacts error: ' + e);
      });
    },

    /*
     * Create and save a contact using the input values 
     */
    create: function () {
      var firstName = Ext.select('#contact_first_field .x-input-text').first().getValue();
      var lastName = Ext.select('#contact_last_field .x-input-text').first().getValue();
      var phone = Ext.select('#contact_number_field .x-input-text').first().getValue();

      if (firstName === "" && lastName === "") {
        app.u.notify.alert("Please enter contact name");
      } else {
        var contact = {
          first: firstName,
          last: lastName,
          phone: {
            'main': phone
          }
        };
        $fh.contacts({
          act: 'add',
          contact: contact
        }, function (contact) {
          app.u.notify.alert('Contact added');
        }, function (code) {
          app.u.notify.alert('Error adding contact:' + code);
        });
      }
    },

    /*
     * Display the on-device GUI for creating contacts
     */
    createGui: function () {
      $fh.contacts({
        act: 'add',
        gui: true
      }, function () {}, function (msg, p) {
        app.u.notify.alert(msg);
      });
    },
    
    /*
     * Returns a string for how a contact record should be grouped 
     */
    getGroupString: function (record) {
      // Have a fallback from last name to first name to no name
      // Important thing is to return something, otherwise the List
      // doesnt like it and freezes
      return record.get('last')[0] || record.get('first')[0] || '';
    }
  };

  return {
    list: self.list,
    create: self.create,
    createGui: self.createGui
  };
}();