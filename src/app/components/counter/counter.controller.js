import * as CounterActions from '../../actions/actions.counter';

export default class CounterController {

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


