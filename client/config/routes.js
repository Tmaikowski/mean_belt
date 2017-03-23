var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/partials/login.html',
    controller: 'UsersController as UC'
  })
  .when('/register', {
    templateUrl: '/partials/register.html',
    controller: 'UsersController as UC'
  })
  .when('/dashboard', {
    templateUrl: '/partials/dashboard.html',
    controller: 'DashboardController as DC'
  })
  .when('/poll/new', {
    templateUrl: '/partials/pollNew.html',
    controller: 'PollsController as PC'
  })
  .when('/poll/:id', {
    templateUrl: '/partials/pollShow.html',
    controller: 'PollsController as PC'
  })
  .otherwise({
    redirectTo: '/'
  });
});
