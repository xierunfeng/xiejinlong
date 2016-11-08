function main($scope,$rootScope){
    //console.log($scope);//打印一个对象

    var str="I am here!"

    $scope.getParent=function(){
       $scope.$broadcast('parentData',str);
    }

    $scope.a=function(value){
      console.log(value.name);
    }

    $scope.keyup=function(txt){
      console.log(txt)
    }

    $scope.$on('childData',function(event,data){
      console.log(data);
    })

    $scope.abc='123';
    $scope.msg=false;
    $scope.arr=[
        {"name":"wang","age":"18"},
        {"name":"qin","age":"18"},
        {"name":"chen","age":"18"},
        {"name":"xie","age":"18"}
    ]

    $scope.add=function(){
      if(!$scope.name && !$scope.age){
        alert("请填写姓名和年龄才可以添加");
        return;
      }
      $scope.arr.push({"name":$scope.name,"age":$scope.age});
      $scope.name="";
      $scope.age="";
    }
  }

function son($scope){
     // console.log($scope.$parent.abc);
      $scope.msg="son";
      $scope.$on("parentData",function(event,data){
        console.log(data);
      })
  }

function list($scope){
      //console.log($scope.$parent.abc);
      $scope.msg="list";
      var str="list data";
      $scope.$emit("childData",str)
  }

  function login($scope,$location,apiService){
   // console.log(apiService);
    apiService.login('./data/login.json',{key:'123',name:'zhangsan'},'get')
              .success(function(res){
                  console.log(res);
                   $location.path('/index/home')
              })
    /*$scope.login=function(){
      $http({
        method:"post",
        url:"../data/login.json",
        data:{key:'name'}
      }).success(function(res){
          //console.log(res);
          if(res.code==0){
            console.log(res.msg);
            $location.path('/index/home');
          }
      })
    
    }*/

  }

  angular.module('myapp')
          .controller('main',main)
          .controller("son",son)
          .controller("list",list)
          .controller("login",login)