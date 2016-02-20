// app.config.js
import * as reducers from './reducers'
import { combineReducers } from 'redux';
import createLogger from 'redux-logger';

export default function config($urlRouterProvider, $locationProvider, $ngReduxProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  const logger = createLogger();
  let reducer = combineReducers(reducers);
  $ngReduxProvider.createStoreWith(reducer, [logger]);

}