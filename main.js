import pubsub from './pubsub';
let emitter = pubsub();

emitter.on('foo', alert);
emitter.emit('foo', {
  a: 'bar',
  b: 'baz'
});
