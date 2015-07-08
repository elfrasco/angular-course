'use strict';

angular.module('directivesApp').directive('centFindSelect', ['$filter', function($filter) {

    var link = function(scope, elm, attrs, ctrl) {

        scope.setFieldName = function(name) {
            scope.model = name;
            scope.query = '';
        };

        scope.tryToSetFieldName = function(query) {
            if (query) {
                var filtered = $filter('filter')(scope.list, query);
                if (filtered.length === 1) {
                    scope.setFieldName(filtered[0]);
                    scope.toggleOpen = false;
                }
            } else {
                scope.setFieldName('');
                scope.toggleOpen = false;
            }
        };

        scope.$on('clear', function() {
            scope.query = '';
        });
    };

    return {
        restrict: 'E',
        link: link,
        templateUrl: 'directives/cent-find-select.html',
        scope: {
            text: '@',
            model: '=',
            list: '=',
            required: '='
        }
    };
}]);