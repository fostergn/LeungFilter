// js/services/todos.js
angular.module('drawingService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Drawings', function($http) {
        return {
            getAll : function() {
                return $http.get('/api/drawings');
            },
            getFood : function() {
                return $http.get('/api/drawings/food');
            },
            getForm : function() {
                return $http.get('/api/drawings/form');
            },
            getText : function() {
                return $http.get('/api/drawings/text');
            },
            getThreads : function() {
                return $http.get('/api/drawings/threads');
            },
            getPeople : function() {
                return $http.get('/api/drawings/people');
            },
            getPlumes : function() {
                return $http.get('/api/drawings/plumes');
            },
            getOther : function() {
                return $http.get('/api/drawings/other');
            },
            getSearch : function() {
                return $http.get('/api/drawings/search');
            },
            getRandom : function(){
                return $http.get('/api/drawings/random');
            },
            getDrawing : function(id){
                return $http.get('/api/drawings/' + id);
            }
        }
    });