 function mains($scope,$rootScope){
		var str="你好，good";
		$scope.getParent=function(){
			$scope.$broadcast("parentData",str);
		}
		$scope.$on('childData',function(data,arr){
			console.log(data);
			console.log(arr);
		})
		$rootScope.username="老大";
		$scope.msg="main";
		$scope.abc="show";
		$scope.data=[
			{name:"zs",age:18},
			{name:"zs",age:19},
			{name:"zs",age:20},
			{name:"zs",age:21}
		]
		$scope.add=function(){
			if(!$scope.name&&!$scope.age){
				alert("不能为空");
			}else{
				var obj={name:$scope.name,age:$scope.age};
				$scope.data.push(obj);
				$scope.name="";
				$scope.age="";
			}
			
		}
	}

function tests($scope,$rootScope){
		console.log($rootScope.username);
		$scope.msg="test";
		$scope.b="test2"
		$scope.$on("parentData",function(data,str){
			console.log(data);
			console.log(str);
		})

	}
function lists($scope){
		$scope.msg="list";
		$scope.c="list";
		var arr="金黄色";
		$scope.$emit('childData',arr)//arr的类型不限。
	}

angular.module("myapp")
		.controller("main",mains)
		.controller("test",tests)
		.controller('list',lists);

