import angular from 'angular';
import CounterController from './counter.controller'
import template from './counter.html'


const options = {
  bindings: {
    step: '<'
  },
  controller: CounterController,
  template
}

export default angular.module('components.counter', [])
  .component('counter', options)
  .name;