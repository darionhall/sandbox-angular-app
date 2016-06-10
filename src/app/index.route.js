(function() {
  'use strict';

  angular
    .module('stadiumTest')
    .config(routerConfig);

   /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    var home = {
      name: 'home',
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    };
    var about = {
      name: 'about',
      url: '/about',
      templateUrl: 'app/about/about.html'
    };
    var conferences = {
      name: 'conferences',
      url: '/conferences',
      templateUrl: '/app/conferences/conference.list.html',
      controller: 'ConferenceListController',
      controllerAs: 'vm'
    };
    var schools = {
      name: 'conferences.schools',
      url: '/:conferenceId',
      templateUrl: '/app/conferences/school.list.html',
      controller: 'SchoolListController',
      controllerAs: 'vm'
    };
    var stadiums = {
      name: 'conferences.schools.stadiums',
      url: '/:schoolId',
      templateUrl: '/app/conferences/stadium.list.html',
      controller: 'StadiumListController',
      controllerAs: 'vm'
    };

    $stateProvider.state(home);
    $stateProvider.state(about);
    $stateProvider.state(conferences);
    $stateProvider.state(schools);
    $stateProvider.state(stadiums);

    $urlRouterProvider.otherwise('conferences');
    $locationProvider.html5Mode( { enabled: true, requireBase: true } );
  }
})();


//   /** @ngInject */
//   function routerConfig($stateProvider, $urlRouterProvider) {
//     $stateProvider
//       .state('home', {
//         url: '/',
//         templateUrl: 'app/main/main.html',
//         controller: 'MainController',
//         controllerAs: 'main'
//       });

//     $urlRouterProvider.otherwise('/');
//   }

// })();
