(function() {

  'use strict';

  angular.module('stadiumTest')
  .controller('ConferenceListController', function ($state, ConferencesService) {

    var vm = this;

    ConferencesService.getConferences().success(function(data) {
      vm.conferences = data;
    });

    vm.goConference = function (conference) {
      $state.go( 'conferences.schools', { conferenceId : conference.id } );
    };
  });
})();
