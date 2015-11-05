// js/controllers/main.js
angular.module('mainController', ['wu.masonry'])

    .controller('mainCtrl', function($scope, Drawings){
        $scope.drawings = [{url:"waiting.gif"}];
        $scope.categories = ["food", "feet", "form", "text", "threads", "people", "plumes", "other"];
        var random = Math.floor(Math.random() * $scope.categories.length);
        $scope.selected = $scope.categories[random];

        $scope.selectNav = function(index){
            $scope.drawings = [{url:"waiting.gif"}];
            $scope.selected = $scope.categories[index];
            console.log($scope.selected);
            Drawings.getCategory($scope.selected)
                .success(function(data){
                    $scope.drawings = data;
                });
        }

        Drawings.getCategory($scope.categories[random])
            .success(function(data){
                $scope.drawings = data;
            });
    })
    // inject the Todo service factory into our controller
    .controller('homeCtrl', function($scope, Drawings) {

        $scope.selectDrawing = function(id){
            Drawings.getDrawing(id)
                .success(function(data){
                    $scope.drawings = data;
                });
        }

    })

    .controller('itemCtrl', function($scope, Drawings, $routeParams){
        $scope.drawing = {
            name:"hold on",
            description:"for one more second",
            url:"waiting.gif",
            tags:["..."],
            tag:"..."
        };

        $scope.related = [
            {url:"waiting.gif"},
            {url:"waiting.gif"},
            {url:"waiting.gif"}
        ];

        Drawings.getDrawing($routeParams.id)
            .success(function(data){
                $scope.drawing = data;
                $scope.related[0] = data.full_image;
                var link = data.full_image.url.split("/");
                $scope.related[0].link = "full/" + link[0];
                $scope.drawing.tag = data.tags[Math.floor(Math.random() * data.tags.length)];
                Drawings.getRelatedCategory(data.category)
                    .success(function(data){
                        $scope.related[1] = data;
                        $scope.related[1].link = "item/" + data._id;
                        Drawings.getRandomDrawing()
                            .success(function(data){
                                $scope.related[2] = data[0];
                                $scope.related[2].link = "item/" + data[0]._id; 
                                
                            });
                    });
            });
    })

    .controller('tagCtrl', function($scope, Drawings, $routeParams){
        $scope.drawings = [{
            url:"waiting.gif",
            full_image:{
                url:"waiting.gif",
                name:"1 sec...",
                description:"one moment please"
            }
        }];
        
        Drawings.getTag($routeParams.tag)
            .success(function(data){
                $scope.drawings = data;
            });
    })

    .controller('subItemCtrl', function($scope, Drawings, $routeParams){
        $scope.drawings = [{
            url:"waiting.gif",
            full_image:{
                url:"waiting.gif",
                name:"1 sec...",
                description:"one moment please"
            }
        }];
        $scope.showParts = true;

        Drawings.getFull($routeParams.id)
            .success(function(data){
                $scope.drawings = data;
            });

        $scope.showFull = function(){
            $scope.showParts = !($scope.showParts);
        }
    });
