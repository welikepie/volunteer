function ItemListCtrl ($scope) {
 $scope.london= [

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
  This is an AngularJS Controllers file. 
  It displays any events defined both here and in index.ejs on the events.ejs page
  If your scope does not already exist, you can create your own:

  e.g $scope.northeastengland [{
  
  }]

 	Obviously, if the scope already exists, just add your event object into that scope!
 	
 	If you'd like to submit any event, use the format below!

  IMPORTANT: Make sure you also enable the scopes in events.ejs, or else they will not show up!

  Example Scope & Event:
  
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