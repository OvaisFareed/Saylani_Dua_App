 var app = angular.module("duaApp",["ngMaterial","ngNewRouter","firebase"]);


 app.controller("homepageCtrl",function($scope,$router){
     $router.config([
        { path: "/newdua", component: "newdua" }
     ]);
     var ref = new Firebase("https://saylaniduapp.firebaseio.com/");
var user1 = null;

     $scope.login = function(){

         ref.authWithOAuthPopup("facebook", function(error, authData) {
             if (error) {
                 console.log("Login Failed!", error);
             } else {
                 console.log("Authenticated successfully with payload:", authData);

                 user1 = authData;

                 alert("Authenticated successfully!"+user1);
             }
         });
     };
 });




