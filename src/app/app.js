import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router'
import config from './app.config';
import home from './features/home';
import ngRedux from 'ng-redux';

angular.module('app', [uiRouter, ngRedux, home])
  .config(config);