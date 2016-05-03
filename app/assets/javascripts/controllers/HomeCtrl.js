blog.controller('HomeCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $scope.init = function() {
      $rootScope.title = 'Home';
    };

    $scope.init();

  }]);