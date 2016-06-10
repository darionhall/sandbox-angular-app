(function() {

  'use strict';

  angular.module('stadiumTest')
  .controller('StadiumListController', function ($stateParams, ConferencesService) {

    var vm = this;

    ConferencesService.getConferences().success(function() {
      vm.conference = ConferencesService.getConferenceById($stateParams.conferenceId);
      vm.school = ConferencesService.getSchoolById($stateParams.schoolId);
    });
  });
})();
