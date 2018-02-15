var app = angular.module('app');

app.service('dataService', function($http) {
    var data = [];

    var getData = function(){
        return $http.get('db/test.json')
            .then(function (response) {
                return response.data;
            });
    };
  
    return {
        getData: getData
    };
  
});