// js/services/todos.js
angular.module('commitService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Commits', function($http) {
        return {
            get : function() {
                return $http.get('/api/commits');
            },
            getOne : function(id){
                return $http.get('/api/commit/' + id);
            },
            create : function(commitData) {
                return $http.post('/api/commits', commitData);
            },
            update : function(id, commitData) {
                return $http.put('/api/commits/' + id, commitData);
            }
        }
    });