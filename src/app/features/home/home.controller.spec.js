import home from './index';

describe('Controller: Home', function() {
  let $controller;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('should initialize name to World', function() {
    let ctrl = $controller('HomeController');
    expect(ctrl.name).toBe('World');
  });

  it('should change name to "angular-tips" when changeName() is called', function() {
  	let ctrl = $controller('HomeController');
  	ctrl.changeName();
  	expect(ctrl.name).toBe('angular-tips');
  });
});