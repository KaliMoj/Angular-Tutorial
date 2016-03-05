var userTasks = angular.module('userTasks', ['ui.router'])
    .controller('userController', ['$http', '$state', '$stateParams', UserController]);

function UserController($http, $state, $stateParams) {
    var that = this;
    if ($stateParams.data) {
        that.Id = $stateParams.data.id;
        that.firstName = $stateParams.data.firstName;
        that.lastName = $stateParams.data.lastName;
        that.email = $stateParams.data.email;
        that.tasks = $stateParams.data.tasks;         
    }
    that.register = function() {
        $http.post('http://localhost:8080/user', { 
                firstName: that.firstName,
                lastName: that.lastName, 
                email: that.email 
            })
            .then(function(response) {
                console.log("Success ", response);  
                that.Id = response.data;      
            }, ErrorCallback);
    }
    that.login = function() {
        $http.get('http://localhost:8080/user/' + that.Id)
        .then(function(response) {
            console.log("Success ", response);
            $state.go('myTasks.list', { data: response.data });
        }, ErrorCallback);
    }
    that.addTask = function(description) {
        $http.post('http://localhost:8080/user/' + that.Id + '/tasks', { 
            description: description
        })
        .then(function(response) {
            console.log("Success ", response); 
            that.tasks.push(response.data);  
        }, ErrorCallback);
    }
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
            templateUrl: "partials/userTasks.html",
            params: {
                data: null
            }
        })
        .state('myTasks.list', {
            url: "/listTasks",
            templateUrl: "partials/myTasks.list.html"
        });
});

function ErrorCallback(err) {
    console.log(err);
}