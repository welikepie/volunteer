
/**
 * Module dependencies.
 */

var flash = require('connect-flash');
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var checkboxes = require('./public/javascripts/checkbox.js');
var returnedArr = checkboxes.england;

//SETUP MAILCHIMP API - You must replace your API Key and List ID which you can find in your Mailchimp Account
var MailChimpAPI = require('mailchimp').MailChimpAPI;
var apiKey = 'ee0a7bbcca4a288c0da80ad86b7c9d24-us2';  // Change this to your Key
var listID = '9ad5bd699e';  // Change this to your List ID
/* var merge_vars = {
    FNAME : req.query.FNAME,
    LNAME : req.query.LNAME,
};
*/

try {
    var mcApi = new MailChimpAPI(apiKey, { version : '1.3', secure : false });
} catch (error) {
    console.log(error.message);
}

var app = express();

app.configure(function() {
  app.use(express.cookieParser('volunteer'));
  app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/events', function(req, res) {
   res.render('events');
});


app.post('/', function(req, res){
    console.log(req.body);
    try{
    	var GROUPINGS = JSON.parse(req.body.GROUPINGS);
    	var FNAME = JSON.parse(req.body.FNAME);
    	var LNAME = JSON.parse(req.body.LNAME);
    	var EMAIL = JSON.parse(req.body.EMAIL);
    mcApi.listSubscribe({
    	id: listID, 
    	email_address:EMAIL, 
    	merge_vars: {
    		"FNAME": FNAME, 
    		"LNAME": LNAME, 
    		// Needed: Integration of Checkbox.js Function to retrieve groups ticked for England. 
    		"GROUPINGS": GROUPINGS}, 
    	"double_optin": false}, 

    	function (error, data) {
        if (error){
            res.send("<p class='error'>Something went wrong. Please try again.</p>");
        	//console.log(error); //this is now sent to the terminal of the browser.
        }
        else {
            // console.log(data);
            res.send("<p class='success'>Thanks for signing up!</p>");
        }
    });
    }catch(e){
    	console.log(e.stack);
    	//console.log("STUFF BE BROKE");
    }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
