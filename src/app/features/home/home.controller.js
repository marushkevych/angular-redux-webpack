export default class HomeController {
  constructor(randomNames, $ngRedux, $scope) { 'ngInject';
    this.name = 'World';
    this.random = randomNames;

    // subscribe for counter state changes
    let unsubscribe = $ngRedux.connect(state => {
      return { count: state.counter };
    })(this);
    $scope.$on('$destroy', unsubscribe);
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.random.getName();
  }
}

