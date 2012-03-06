exports.menuitem = {
  title: 'Audio',
  items: [{
    ui_type: 'Ext.Button',
    text: 'Play BEAT Radio (iOS only)',
    id: 'play_beat',
    margin: 5,
    ui: 'confirm',
    handler: 'audio.beat'
  }, {
    ui_type: 'Ext.Button',
    text: 'Play RTE Radio (Android only)',
    id: 'play_rte',
    margin: 5,
    ui: 'confirm',
    handler: 'audio.rte'
  }, {
    ui_type: 'Ext.Button',
    text: 'Pause Audio Stream',
    id: 'audio_pause',
    margin: 5,
    ui: 'decline',
    handler: 'audio.pause',
    disabled: true
  }, {
    ui_type: 'Ext.Button',
    text: 'Stop Audio Stream',
    id: 'audio_stop',
    margin: 5,
    ui: 'decline',
    handler: 'audio.stop',
    disabled: true
  }, {
    ui_type: 'Ext.Button',
    text: 'Turn Up Volume (Android Only)',
    margin: 5,
    ui: 'action',
    handler: 'audio.volumeUp'
  }, {
    ui_type: 'Ext.Button',
    text: 'Turn Down Volume (Android Only)',
    margin: 5,
    ui: 'action',
    handler: 'audio.volumeDown'
  }]
};