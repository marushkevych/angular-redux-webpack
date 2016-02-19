export default class HomeController {
  constructor(randomNames) { 'ngInject';
    this.name = 'World';
    this.random = randomNames;
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.random.getName();
  }
}