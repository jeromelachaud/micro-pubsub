import pubsub from './pubsub';
let emitter = new pubsub();

export default function actionRegister1() {
  emitter.on('foo', console.log);
}
