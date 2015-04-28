/**
 * Created by Gao  Zhiluo on 09/04/2015.
 */
var todos = angular.module('todos', ['ui.bootstrap']);



todos.controller('TodoController', function($scope,$http) {
    $scope.filteredTodos = []
        ,$scope.currentPage = 1
        ,$scope.numPerPage = 10
        ,$scope.maxSize = 5,




        $scope.todos = [];
        $http.get('customers.json').success(function (data) {
            $scope.todos = data;
            console.log($scope.todos);
            $scope.filteredTodos = $scope.todos.slice(0, 10);
        }).error(function () { alert('error'); });




    $scope.$watch('currentPage + numPerPage', function() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;

        $scope.filteredTodos = $scope.todos.slice(begin, end);
        console.log($scope.filteredTodos);
    });
});


todos.controller('SearchCtrl',function($scope,$http){
    $scope.choose = [],
  $scope.currentPage = 1
        ,$scope.numPerPage = 10
        ,$scope.maxSize = 5,
        $scope.chooseResult = [],
    $scope.showSearch=false,
        $scope.showAll=true;;




        $scope.todos = [];
    $http.get('customers.json').success(function (data) {
        $scope.todos = data;
        console.log($scope.todos);
    }).error(function () { alert('error'); });

$scope.searchByName=function(selected){
    $scope.chooseResult=[];

    for (i=0;i<=$scope.todos.length;i++) {
       if($scope.todos[i].first_name==selected.first_name||$scope.todos[i].last_name==selected.last_name){
           $scope.chooseResult.push($scope.todos[i]);
           $scope.choose = $scope.chooseResult.slice(0, 10);
           $scope.showSearch=true;
       }
    }


};
    $scope.searchByEmail=function(selected){
        $scope.chooseResult=[];

        for (i=0;i<=$scope.todos.length;i++) {
            if($scope.todos[i].email==selected.email){
                $scope.chooseResult.push($scope.todos[i]);
                $scope.choose = $scope.chooseResult.slice(0, 10);
                $scope.showSearch=true;
            }
        }


    };

    $scope.$watch('currentPage + numPerPage', function() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;

        $scope.choose = $scope.chooseResult.slice(begin, end);
        console.log($scope.filteredTodos);
    });

})