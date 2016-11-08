	
function creat(){
	  return {
	  	restrict:"A",//限定指令：E:element(元素);A:attribute(自定义);C:class(属性);
	  	link:function(scope,element){
			console.log(element.addClass("active"));
			var str="";
		   scope.data.forEach(function(v){
		   		str+="<span>"+v.name+"</span>"
		   	})
		   	element.append(str);
		}
	  }
		
	}

//(自定义)
angular.module('myapp')
		.directive('creatDom',creat)