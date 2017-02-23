import pubsub from './pubsub';

export default function actionEmitter1() {
  pubsub.emit('foo', {
    a: 'bar',
    b: 'baz'
  });
}
