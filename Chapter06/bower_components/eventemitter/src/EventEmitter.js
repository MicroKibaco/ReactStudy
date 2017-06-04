function EventEmitter() {
  this._events = {};
}

EventEmitter.prototype = {
  on: function(name, listener) {
    if(!this._events.hasOwnProperty(name)) {
      this._events[name] = [];
    }

    this._events[name].push(listener);

    return this;
  },

  off: function(name, listener) {
    var listeners = this._events[name];
    var i;

    for(i = 0; i < listeners.length; i++) {
      if(listeners[i] == listener) {
        listeners.splice(i, 1);
      }
    }

    return this;
  },

  emit: function(name) {
    var args = toArray(arguments).slice(1);
    var i,
        results,
        listeners;

    if(this._events.hasOwnProperty(name)) {
      listeners = this._events[name];
      results = new Array(listeners.length);

      for(i = 0; i < listeners.length; i++) {
        results[i] = listeners[i].apply(this, args);
      }

      return results.every(function(result) {
        return isUndefined(result) ? true : result;
      });
    }

    return true;
  },

  removeAllListeners: function() {
    var eventNames = Object.keys(this._events);
    var i,
        j,
        ii = eventNames.length,
        jj,
        events,
        eventName;

    for(i = 0; i < ii; i++) {
      eventName = eventNames[i];
      
      this._events[eventName] = [];
    }
  }
};