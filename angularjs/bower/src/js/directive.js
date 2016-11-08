  function createDom(){
    return{
      //restrict:'A',
      //scope:作用域;
      link:function(scope,element){
        element.addClass("active");
        var str="";
        scope.arr.forEach(function(v){
          str+='<span>'+v.name+'</span>';
        })
       
        element.append(str);
         console.log(str);
      }
    }
  }
//$rootScope:根作用域;
function pageTitle($rootScope){
  return{
    restrict:"A",
    link:function(scope,element){
      $rootScope.$on("$stateChangeStart",function(event,tostate){
        var tit="后台管理----";
        if(tostate.data&&tostate.data.title){
          tit+=tostate.data.title;
        }
        element.text(tit);
      })
    }
  }
}
angular.module('myapp')
      .directive('createDom',createDom)
      .directive('pageTitle',pageTitle)