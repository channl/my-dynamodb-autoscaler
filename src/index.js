/* @flow */
import type { LambdaContext, LambdaCallbackFunc } from './FlowTypes';
import LambdaMiddleware from 'lambda-middleware';

const app = new LambdaMiddleware();
app.use((ctx, next) => {
  return { result: 'HelloWorld'};
});

exports.handler = app.handler;
