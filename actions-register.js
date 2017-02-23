import pubsub from './pubsub';

export default function actionRegister1() {
  pubsub.on('foo', console.log);
}
