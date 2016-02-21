import './home.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';

import randomNames from '../../services/randomNames.service';
import greeting from '../../components/greeting.component';
import counter from '../../components/counter';


export default angular.module('app.home', [uirouter, randomNames, greeting, counter])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;