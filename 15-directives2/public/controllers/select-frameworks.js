'use strict';

angular.module('directivesApp').controller('SelectFrameworkController', function($scope) {
    
    $scope.frameworks = ['AngularJS', 'ExpressJS', 'Meteor', 'ReactJS', 'Ember', 'jQuery', 'Polymer', 'Bootstrap', 'Backbone'];
    
});