function service($http){

	function toStr(params){
		var arr=[];
			for(var i in params){
				arr.push(i+'='+params[i]);
			}
			  return '?'+arr.join('&');
			//console.log(arr.join('&'));
	}

	function transmit(url,params,method){
		var method=method.toUpperCase();
		if(method=='POST'){
			return $http.post(url,params);
		}else{
			var urlParams=toStr(params);
			//console.log(urlParems);
			return $http.get(url+urlParams);
		}
	}
	this.login=function(url,params,method){//params:参数;
		return transmit(url,params,method)
	}

	this.login2=function(url,params,method){//params:参数;
		return transmit(url,params,method)
	}
		
}

angular.module('myapp')
       .service('apiService',service)