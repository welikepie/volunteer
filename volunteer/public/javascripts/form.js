//SETUP MAILCHIMP API - You must replace your API Key and List ID which you can find in your Mailchimp Account
var MailChimpAPI = require('mailchimp').MailChimpAPI;
var apiKey = 'ee0a7bbcca4a288c0da80ad86b7c9d24-us2';  // Change this to your Key
var listID = '9ad5bd699e';  // Change this to your List ID
var merge_vars = {
    FNAME : "Charlotte",
    LNAME : "Spencer"
};


// See Mailchimp Node Module - https://github.com/gomfunkel/node-mailchimp
try {
    var mcApi = new MailChimpAPI(apiKey, { version : '1.3', secure : false });
} catch (error) {
    console.log(error.message);
}

// Accept the Post from the Form on the Index page and use listSubscribe from API
// Turn the Double Optin off and send messages back

app.post('/', function(req, res){
    console.log(req);
    mcApi.listSubscribe({id: listID, email_address:req.body.email, merge_vars: merge_vars, double_optin: false}, function (error, data) {
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