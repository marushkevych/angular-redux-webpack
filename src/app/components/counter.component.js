import angular from 'angular';
import * as CounterActions from '../actions/counter';

class CounterController {

  constructor($ngRedux, $scope) {
    'ngInject';

    /* ngRedux will merge the requested state's slice and actions onto this, 
    you don't need to redefine them in your controller */
    
    let unsubscribe = $ngRedux.connect(mapStateToThis, CounterActions)(this);
    $scope.$on('$destroy', unsubscribe);
  }

}

function mapStateToThis(state) {
  return {
    count: state.counter
  };
}

const options = {
  bindings: {
    count: '<'
  },
  controller: CounterController,
  template: [
    '<div class="todo">',
      '<input type="text" ng-model="$ctrl.count">',
      '<button type="button" ng-click="$ctrl.decrement();">-</button>',
      '<button type="button" ng-click="$ctrl.increment();">+</button>',
    '</div>'
  ].join('')
}

export default angular.module('components.counter', [])
  .component('counter', options)
  .name;