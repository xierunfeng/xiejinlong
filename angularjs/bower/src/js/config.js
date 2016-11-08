function config($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
	//console.log($ocLazyLoadProvider);
	$urlRouterProvider.otherwise("login");
	$stateProvider
		.state("index",{
			url:"/index",
			templateUrl:"views/main.html"
		})
		.state("index.home", {
			url: "/home",
			templateUrl: "views/home.html",
			data:{
				title:"home页面"
			}
		})
		.state("index.computer", {
			url: "/computer",
			templateUrl: "views/computer.html",
			data:{
				title:"computer页面"
			}
		})
		.state("index.list", {
			url: "/list",
			templateUrl: "views/list.html",
			data:{
				title:"list页面"
			},
			resolve:{
				loadPlugin:function($ocLazyLoad){
					return $ocLazyLoad.load([
					{
						files:["../css/product.css"]
					}
				  ])
					
				}
			}
		})
		.state("login", {
			url: "/login",
			templateUrl: "views/login.html",
			controller:"login"
		})
}

angular.module("myapp")
	.config(config);