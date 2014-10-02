var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.controller('homeCtrl', function($scope, $modal, Tiles, TileInfo) {
    $scope.infoToggle = true;
    $scope.data = {message: 'eternal peace'};
    $scope.tiles = [];
    $scope.tiles = Tiles;
    $scope.tileInfo = TileInfo;
    $scope.tileInfo.message = "";
    $scope.tileTap = function(tileName) {
        $scope.infoToggle = false;
        $scope.info = "you tapped " + tileName;
    };

    $scope.open = function(size) {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: ModalInstanceCtrl,
            resolve: {
                items: function() {
                    return $scope.userId;
                }
            }
        });
    };

    $scope.clearInfo = function() {
        $scope.infoToggle = true;
    };
});

var ModalInstanceCtrl = function($scope, $modalInstance, $timeout, Tiles, TileInfo) {
    $scope.tileInfo = TileInfo;
    $scope.tiles = Tiles;
    
    $scope.addItem = function() {
        $scope.tiles.details.push({message: $scope.tileInfo.message, url: 'img/ratatouille.jpg'});
        $timeout(initWookmark, 0);
        $modalInstance.close();
    };

    function initWookmark() {
        $(".container").shapeshift();
    }
    
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
};