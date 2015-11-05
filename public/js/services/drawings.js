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
            getSearch : function(searchStr) {
                return $http.get('/api/drawings/search/' + searchStr);
            },
            getFull : function(id){
                return $http.get('/api/drawings/full/' + id);
            },
            getDrawing : function(id){
                return $http.get('/api/drawings/' + id);
            },
            getRelatedCategory: function(category){
                return $http.get('/api/drawings/category/' + category);
            },
            getRandomDrawing: function(){
                return $http.get('/api/drawings/random');
            },
            getTag: function(tag){
                return $http.get('/api/drawings/tag/' + tag);
            }
        }
    });