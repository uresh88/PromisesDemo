
var app = angular.module("phoneDetail", []); 


app.controller("phoneDetailsController", ['$scope', '$http', '$q', function($scope, $http, $q) {
	var phoneList = [
						'https://raw.githubusercontent.com/uresh88/PromisesDemo/master/index1.json',
						'https://raw.githubusercontent.com/uresh88/PromisesDemo/master/index2.json',
						'https://raw.githubusercontent.com/uresh88/PromisesDemo/master/index3.json',
						'https://raw.githubusercontent.com/uresh88/PromisesDemo/master/index4.json',
						'https://raw.githubusercontent.com/uresh88/PromisesDemo/master/index5.json',
						'https://raw.githubusercontent.com/uresh88/PromisesDemo/master/index6.json',
						'https://raw.githubusercontent.com/uresh88/PromisesDemo/master/index7.json',
						'https://raw.githubusercontent.com/uresh88/PromisesDemo/master/index8.json',
						'https://raw.githubusercontent.com/uresh88/PromisesDemo/master/index6.json',
						'https://raw.githubusercontent.com/uresh88/PromisesDemo/master/index7.json',
						'https://raw.githubusercontent.com/uresh88/PromisesDemo/master/index8.json',
					];

	$scope.init = function(){
		phoneList.forEach(mapPhoneDetail);
	} 

	var mapPhoneDetail = function(url){
		var promise = $q.resolve();

		promise = promise.then(function(){
			return getPhoneDetails(url)
		}).then(function(phone){
			$scope.phoneDetailList.push(phone);
			console.log($scope.phoneDetailList);
		})
		
	}

	$scope.phoneDetailList = []; // store detail object array of the phone list


	/*
	returns phone data 
	*/
	var getPhoneDetails =  function(url){
		return $http({method: 'get', url:url})
          .then(function(response) {
           return response.data;
          }, function(response) {
           return null;
        });
	}

    
}]);

