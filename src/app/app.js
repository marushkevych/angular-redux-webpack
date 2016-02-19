import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router'
import routing from './app.config';
import home from './features/home';

angular.module('app', [uiRouter, home])
  .config(routing);