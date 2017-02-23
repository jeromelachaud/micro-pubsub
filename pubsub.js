function pubsub(all) {
  all = all || {};

  function list(event) {
    let e = event.toLowerCase();
    return all[e] || (all[e] = []);
  }

  return {

    on(event, handler) {
      list(event).push(handler);
    },

    emit(event, eventObj) {
      list('*')
        .concat(list(event))
        .forEach( f => {
          f(eventObj);
        });
    }
  };
}

export default new pubsub();
