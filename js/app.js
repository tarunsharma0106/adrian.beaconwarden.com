//  initiate the ng app with two dependenct  

var pageController = angular.module('pageController', ['ngAnimate','ngRoute']);
	pageController.config(function($routeProvider, $locationProvider) {

		$routeProvider
	 .when('/', {
		
		controller: 'ListController'
	  }).
        
	   when('/', {
		
		controller: 'ListController0'
	  });
        
         })
  
//  page ctrl for the homw page  
    pageController.controller('ListController0', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.pages = data;
    $scope.pageOrder = 'pagename';
  });
}]);

// page ctrl for the sub folder page
  pageController.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('../js/data.json').success(function(data) {
    $scope.pages = data;
    $scope.pageOrder = 'pagename';
  });
}]);


/*  var boxitemCtrl = angular.module('boxitemCtrl',['ngAnimate','ngRoute']);
   boxitemCtrl.controller('bctrl',['$scope','$http',function($scope,$http){
    $http.get('js/item.json').success(function(data){
	  $scope.items = data;
	  
	
	});
   
   }]); */
   
   
   
     pageController.controller('bctrl', ['$scope', '$http', function($scope, $http) {
  $http.get('js/item.json').success(function(data) {
    $scope.items = data;
    
  });
}]);



// document.ready
  $(function() {
	  
	  // assign the  search bar elements in the jquery object to var 
  var $d = $("#date");
  var $i = $("#icon");
  var $s = $("#search");
  var $sinput = document.querySelector( '#search input' );
  var $c = $("#close");
  
  // calculate the width of the window
  var bodyW = $(".header .container").width();
  
  // this is for Mac Chrome only
  $c.css( "display", "none" );
  
  //  click the  search trigger event to expand 
  $s.find("input").on("click", function(e) {
     
    $s.removeClass("closing").addClass("expand");
	
	$c.css( "display", "visible" );
	$sinput.css("border","2px solid #f37021");
  });
  
  //  click the  search cross trigger event to close 
 $c.on("click", function(e) {
      
	    $s.removeClass("expand").addClass("closing");
	     $c.removeClass("hide");
    
	
	$sinput.value = '';
	 $c.css( "display", "none" );

	 $( "$sinput:focus" ).css(  'outline', '0');
  });
  
  
  // responvise design 
function centerHeader() {
    var winW = $(window).width();
    var dl =$('#header #date').css('left');
	var sr =$('#header #search').css('right');

	


	
     if($(window).width()<767){
	    $s.addClass("closings");
		 
	  }else{$s.removeClass("closings");}
	  
	//if(($window).width()<853)
	//{ $('#tyl').css('display','none').removeAttr("style");}
	

    

  }
  
 // detect windows size lll
  $(window).resize(function() {
    centerHeader();
  });
  centerHeader();
 
})
 




