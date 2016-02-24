var firstApp = angular.module('firstApp', []).controller('FirstController', FirstController);

function FirstController() {
    this.first = "Some";
    this.last = "One";
    this.heading = "Message: ";
}

FirstController.prototype.updateMessage = function() {
    this.message = "Hello " + this.first + " " + this.last + "!";
}