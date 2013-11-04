var MailChimpAPI = require('mailchimp').MailChimpAPI;
var apiKey = 'ee0a7bbcca4a288c0da80ad86b7c9d24-us2';  // Change this to your Key
var listID = '9ad5bd699e';  // Change this to your List ID
var checkboxes = ["london"];
var returnedArr = checkbox();
var merge_vars = {
    FNAME : "Charlotte",
    LNAME : "Spencer",
    GROUPINGS: returnedArr
};


// See Mailchimp Node Module - https://github.com/gomfunkel/node-mailchimp
try {
    var mcApi = new MailChimpAPI(apiKey, { version : '1.3', secure : false });
} catch (error) {
    console.log(error.message);
}

function checkbox() {
var tomerge = [];
  for (var i = 0; i < checkboxes.length; i++) {
        if (document.getElementById(checkboxes[i]).checked) {
            tomerge.push(document.getElementById(checkboxes[i]));
            console.log("Ello!");
        }

        return tomerge;
    }
}

app.post('/javascripts/checkbox.js', function(req, res){
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

