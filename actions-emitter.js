import pubsub from './pubsub';
let emitter = new pubsub();

export default function actionEmitter1() {
  emitter.emit('foo', {
    a: 'bar',
    b: 'baz'
  });
}
