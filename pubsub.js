const pubsub = {
  events: {},

  on: function(event, handler) {
    // create the event if not yet created
    if (!this.events[event]) this.events[event] = [];

    // add the handler
    this.events[event].push(handler);
    console.log(handler + ' has registered to ' + event);
  },

  off: function(event, handler) {
    if (this.events[event]) {
      for (var i = 0; this.events[event].length; i++) {
        if (this.events[event][i] === handler) {
          this.events[event].splice(i, 1);
          break;
        }
      }
    }
  },

  emmit: function(event, data) {
    // return if the event doesn't exist, or there are no handlers
    if (!this.events[event] || this.events[event].length < 1) return;

    // send the event to all handlers
    this.events[event].forEach(function(handler) {
      handler(data || {});
    });
  }
};

export default pubsub;
