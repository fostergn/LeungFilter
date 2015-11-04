// js/controllers/main.js
angular.module('mainController', ['wu.masonry'])
    // inject the Todo service factory into our controller
    .controller('homeCtrl', function($scope, Drawings) {
        $scope.categories = ["food", "feet", "form", "text", "threads", "people", "plumes", "other"];
        var random = Math.floor(Math.random() * $scope.categories.length);
        $scope.selected = $scope.categories[random];

        $scope.selectNav = function(index){
            $scope.selected = $scope.categories[index];
            console.log($scope.selected);
            Drawings.getCategory($scope.selected)
                .success(function(data){
                    $scope.drawings = data;
                });
        }

        $scope.selectDrawing = function(id){
            Drawings.getDrawing(id)
                .success(function(data){
                    $scope.drawings = data;
                });
        }
        
        Drawings.getCategory($scope.categories[random])
            .success(function(data){
                $scope.drawings = data;
            });

    });
