// js/controllers/main.js
angular.module('mainController', ['wu.masonry'])
    // inject the Todo service factory into our controller
    .controller('homeCtrl', function($scope, Drawings) {
        var categories = ["food", "feet", "form", "text", "threads", "people", "plumes", "other"];
        var random = Math.floor(Math.random() * categories.length);
        $('nav li:nth-child('+(random+1)+')').addClass('selected-nav');
        Drawings.getCategory(categories[random])
            .success(function(data){
                $scope.drawings = data;
            });
    });
