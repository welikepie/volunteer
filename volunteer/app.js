
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

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

/* function checkbox() {
var tomerge = [];
  for (var i = 0; i < checkboxes.length; i++) {
        if (document.getElementById(checkboxes[i]).checked) {
            tomerge.push(document.getElementById(checkboxes[i]));
            console.log("Ello!");
        }

        return tomerge;
    }
} */

app.post('/', function(req, res){
    console.log(req);
    mcApi.listSubscribe({id: listID, email_address:req.body.email, merge_vars: {FNAME: req.body.FNAME, LNAME: req.body.LNAME}, double_optin: false}, function (error, data) {
        if (error){
            console.log(error);
            res.send("<p class='error'>Something went wrong. Please try again.</p>");
        }
        else {
            console.log(data);
            res.send("<p class='success'>Thanks for signing up!</p>");
        }
    });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
