(function() {

  'use strict';

  angular.module('stadiumTest')
  .service('ConferencesService', function($http) {

    var that = this;

    that.conferences = [];

    that.promise = undefined;

    that.getConferences = function() {
      if (!that.promise) {
        that.promise = $http.get('assets/data/conferences.json').success(function(data) {
          that.conferences = data;
        });
      }
      return that.promise;
    };

    that.getConferenceById = function(id) {
      return _.find(that.conferences, function(conference) {
        return conference.id === parseInt(id);
      });
    };

    var findSchool = function(conference, schoolId) {
      return _.find(conference.schools, function(school) {
        return school.id === parseInt(schoolId);
      });
    };

    that.getSchoolById = function(schoolId) {
      var result;
      _.each(that.conferences, function(conference) {
        var school = findSchool(conference, schoolId);
        if (school) {
          result = school;
        }
      });
      return result;
    };
  });
})();
