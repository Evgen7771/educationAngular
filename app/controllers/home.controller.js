var app = angular.module('app');

app.controller('HomeController', ['$scope','dataService','$rootScope','$http', function ($scope, dataService, $rootScope, $http) {
    $scope.products = [];        // массив наших обьектов
    $scope.sortType     = false; // значение сортировки по умолчанию, false - по желанию, можно и по name
    $scope.sortReverse  = false;  // обратная сортривка
    $scope.searchText   = {};     // значение поиска по умолчанию

    $scope.init = function(){
        dataService.getData()
            .then(function(response){
                $scope.products = response;
            });
    }

    $scope.getTotal = function(res) {
        if(res){ 
            return res.reduce(function (prev, item) {
                return prev + parseInt(item.currency);
            }, 0);
        }
    }

    // Для директивы
    $scope.updateTodo = function(value) {
        console.log('Сохраняем ' + value);
        // Рисуем в сервисе метод и будет счастье
    };
      
    $scope.cancelEdit = function(value) {
        console.log('Закрыть ', value);
        // Рисуем в сервисе метод и будет счастье
    };

}]);