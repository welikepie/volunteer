function ItemListCtrl ($scope) {
 $scope.london= [

 {
  "Country": "London",
  "Event" : "GeekyConf",
  "URL": "http://www.geekyconf.com",
  "Description": "GeekyConf is a day of lightning talks on science, art and culture. Looking for helpful volunteers!",
  "Contact" : "contact@eventhandler.co.uk",
  "Date" : "21/11/2013"
 },

 {
 	"Country": "London",
  "Event" : "UX Camp London",
  "URL": "http://www.uxcamplondon.org",
  "Description": "A barcamp dedicated to User Experience. Looking for room chaperones, sketchnoters and other awesome helpers",
  "Contact": "contact@eventhandler.co.uk",
  "Date" : "22/03/2014"
 },

 ];

 /*
  Scopes currently available: 
 	$scope.northeastengland,
 	$scope.northwestengland,
 	$scope.yorkshireandhumber,
 	$scope.eastofengland,
 	$scope.london,
 	$scope.southeastengland,
 	$scope.southwestengland,
 	$scope.eastmidlands,
 	$scope.westmidlands,

 	$scope.northernireland,
 	$scope.scotland,
 	$scope.wales,

 	Obviously, if the scope already exists, just add your event object into that scope!
 	
 	If you'd like to submit any event, use the format below!

  IMPORTANT: Make sure you also enable the scopes in events.ejs, or else they will not show up!

  $scope.scotland= [
 
 {
 	"Country": "London",
  "Event" : "UX Camp London",
  "URL": "http://www.uxcamplondon.org",
  "Description": "A barcamp dedicated to User Experience. Looking for room chaperones, sketchnoters and other awesome helpers",
  "Contact": "contact@eventhandler.co.uk",
  "Date" : "22/03/2014"
 },
 ]; */
}