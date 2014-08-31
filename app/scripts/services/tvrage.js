angular.module('showrunnerClientApp.services', ['ngResource'])
  .factory('fullShowInfo', function($resource){
    return $resource('http://services.tvrage.com/feeds/full_show_info.php?sid=2930', {})
  })
  .value('version', '0.1');