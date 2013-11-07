function ItemListCtrl ($scope) {
 $scope.london= [
 {
 	"Country": "London",
 	"Event" : "London JS",
 	"URL": "http://www.eventhandler.co.uk",
 	"Description": "An awesome monthly JavaScript meet-up",
 	"Contact" : "contact@eventhandler.co.uk"
 },

 { 
 	"Country": "London",
 	"Event" : "GeekyScience",
 	"URL": "http://www.geekyscience.com",
 	"Description": "Geeky Science, Geeky Scientists! Looking for someone to help out with the checkin for the evening. Will be paid in love, hugs and kisses",
 	"Contact" : "charlotte@welikepie.com"
 },

 { "Country": "London", "Event" : "GeekyConf", "URL": "http://www.geekyconf.com"},
 { "Country": "London", "Event" : "London JS Conf", "URL": "http://www.londonjsconf.com"}
 ];

 $scope.scotland= [
 { "Country": "Scotland", "Event" : "Scotch on the Rocks", "URL": "http://www.sotr.eu/"},
 { "Country": "Scotland", "Event" : "Scottish Ruby Conference", "URL": "http://2014.scottishrubyconference.com/"},
 { "Country": "Scotland", "Event" : "State of Map", "URL": "http://2013.stateofthemap.org/"},
 ];
}