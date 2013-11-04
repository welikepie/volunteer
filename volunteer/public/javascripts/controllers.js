function ItemListCtrl ($scope) {
 $scope.london= [
 { "Country": "London", "Event" : "London JS", "URL": "http://www.eventhandler.co.uk"},
 { "Country": "London", "Event" : "GeekyScience", "URL": "http://www.geekyscience.com"},
 { "Country": "London", "Event" : "GeekyConf", "URL": "http://www.geekyconf.com"},
 { "Country": "London", "Event" : "London JS Conf", "URL": "http://www.londonjsconf.com"}
 ];

 $scope.scotland= [
 { "Country": "Scotland", "Event" : "Scotch on the Rocks", "URL": "http://www.sotr.eu/"},
 { "Country": "Scotland", "Event" : "Scottish Ruby Conference", "URL": "http://2014.scottishrubyconference.com/"},
 { "Country": "Scotland", "Event" : "State of Map", "URL": "http://2013.stateofthemap.org/"},
 ];
}