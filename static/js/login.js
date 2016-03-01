var userTasks = angular.module('userTasks', ["ui.router"]).controller('userController', 
["$http", UserController]);

function UserController($http) {
    var that = this;
    that.firstName = "";
    that.lastName = "";
    that.email = "";
    that.register = function() {
        $http.post('http://localhost:8080/user', 
            { firstName: that.firstName, 
              lastName: that.lastName, 
              email: that.email })
            .then(function(response) {
                console.log("Success ", response);  
                that.Id = response.data;      
            }, 
            function(err) {
                console.log(err);
            });               
    };
}

userTasks.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /login
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html"
    })
    .state('myTasks', {
      url: "/myTasks",
      templateUrl: "partials/userTasks.html"
    })
    .state('myTasks.list', {
      url: "/listTasks",
      templateUrl: "partials/myTasks.list.html",
      controller: function($scope) {
        $scope.tasks = ["A", "Set", "Of", "Tasks"];
      }
    });
});