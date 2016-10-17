(function() {
  'use strict';

  //Main module name must be defined in ngModules of the plugin manifest
  angular.module('myapp.helloworld', [])
    .config(config)
    .controller('mh_MainCtrl', MainController);

  function config(c8yNavigatorProvider, c8yViewsProvider) {
    c8yNavigatorProvider.addNavigation({
      name: 'New plugin',
      icon: 'cube',
      priority: 100000,
      path: 'hello'
    });

    c8yViewsProvider.when('/hello', {
      // Please use this string placeholder where you want to refer you plugin path.
      // This will be replaced automatically in the build and developement server.
      templateUrl: ':::PLUGIN_PATH:::/index.html',
      controller: 'mh_MainCtrl'
    });
  }

  function MainController($scope) {
    $scope.hello = 'Hello world!';
  }

}());


angular.module('myapp.helloworld', []).config(['c8yNavigatorProvider', 'c8yViewsProvider',
function (c8yNavigatorProvider, c8yViewsProvider) {
  'use strict';

  c8yNavigatorProvider.addNavigation({
    name: 'New plugin',
    icon: 'cube',
    priority: 100000,
    path: 'hello'
  });

  c8yViewsProvider.when('/hello', {
    // Please use this string placeholder where you want to refer you plugin path.
    templateUrl: ':::PLUGIN_PATH:::/views/index.html',
    controller: 'mh_MainCtrl'
  });

}]);

angular.module('myapp.helloworld').controller('mh_MainCtrl', ['$scope', function ($scope) {
  'use strict';

  $scope.hello = 'Hello world!';

}]);
