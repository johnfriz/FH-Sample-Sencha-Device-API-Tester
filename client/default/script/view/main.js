// Define the main Panel of the App
app.v.main = Ext.extend(Ext.Panel, {
  fullscreen: true,
  layout: 'card',
  backText: 'Back',
  items: [{
    html: 'loading...'
  }],
  prevCard: [],

  // Initialisation function that sets up the Panel configuration
  initComponent: function () {
    this.backButton = new Ext.Button({
      text: this.backText,
      ui: 'back',
      handler: this.onUiBack,
      hidden: true,
      scope: this
    });
    var btns = [];
    btns.unshift(this.backButton);

    this.navigationBar = new Ext.Toolbar({
      dock: 'top',
      title: 'API Tester',
      items: btns.concat(this.buttons || [])
    });

    this.dockedItems = this.dockedItems || [];
    this.dockedItems.unshift(this.navigationBar);

    this.apiItemList = new Ext.List({
      itemTpl: '{menuName}',
      store: inst.v.menuDef,
      allowDeselect: false,
      listeners: {
        itemtap: this.apiItemCallback,
        scope: this
      }
    });
    this.items = this.items || [];
    this.items.unshift(this.apiItemList);
    app.v.main.superclass.initComponent.call(this);
  },

  // When an Api Item it pressed, swap in the Card of the relevant Api Item 
  // and enable the back button
  apiItemCallback: function (subList, subIdx, el, e) {
    var store = subList.getStore(),
        record = store.getAt(subIdx),
        title = 'test',
        card;
    if (record) {
      card = record.get('card');
    }
    if (card) {
      this.prevCard.push(this.getActiveItem());
      this.setActiveItem(card, {
        type: 'slide'
      });
      this.currentCard = card;
    }
    this.enableUiBackButton();
  },

  enableUiBackButton: function () {
    this.backButton.show();
  },
    
  disableUiBackButton: function () {
    this.backButton.hide();
  },
  
  // Show or Hide the 'Back' button
  toggleUiBackButton: function () {
    if (this.backButton.isVisible()) {
      this.backButton.hide();
    }
    else {
      this.backButton.show();
    }
  },

  // When 'Back' is pressed, slide back the previous card, if necessary
  onUiBack: function () {
    var prev = this.prevCard.pop();
    this.setActiveItem(prev, {
      type: 'slide',
      reverse: true
    });
    if (prev === this.apiItemList) {
      this.disableUiBackButton();
    }
    else {
      this.enableUiBackButton();
    }
  }
});