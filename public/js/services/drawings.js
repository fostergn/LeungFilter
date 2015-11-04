// js/services/todos.js
angular.module('drawingService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Drawings', function($http) {
        return {
            getAll : function() {
                return $http.get('/api/drawings');
            },
            getCategory : function(category){
                return $http.get('/api/drawings/' + category);
            },
            getSearch : function() {
                return $http.get('/api/drawings/search');
            },
            getDrawing : function(id){
                return $http.get('/api/drawings/' + id);
            }
        }
    });