Volunteer
=========

### What is Volunteer?

We at [Event Handler](http://www.eventhandler.co.uk) organise events, conferences and workshops regularly. One important aspect of any event is having enough people to help out on the day, enabling things to run smoothly. 

It can be quite hard to get people to volunteer at things. Volunteer is our way of helping other event organisers to find eager people to volunteer at their events. 

Those interested in volunteering can subscribe to a dedicated mailing list at volunteer.eventhandler.co.uk. Each month they receive an email displaying events that need volunteers in the areas they said they were interested in. 

### How do I submit my event?

Yay! Glad to see you're interested. You can submit an event in one of two ways.

- Submit a pull request to this repo, with the details of your event inserted into "controllers.js". We'll get these merged as quickly as possible. Your event should look something like the following:

<pre>{
"Country": "London",
"Event" : "Cats and Lasers",
"URL": "http://www.catsandlasers.com",
"Description": "We're going to strap lasers to cats and have a dance party! Laser professionals required.",
"Contact" : "hello@catsandlasers.co.uk",
"Date" : "25/12/2013"
},</pre>

The date of your event should be in a day/month/year format. 

-  Email us at contact@eventhandler.co.uk. Shoot us an email containing the location, name, URL, Description, contact details and date of your event. We'll do the rest. 

### How was Volunteer made?

- Volunteer is a [node.js](http://www.nodejs.org) app, using the [express](https://npmjs.org/package/express), [ejs](https://npmjs.org/package/ejs) and [mailchimp](https://npmjs.org/package/mailchimp) node modules. 
- There's also some [Angular.js](http://angularjs.org/) for the front-end event displays.
- [Arran](http://www.twitter.com/arranrp) came up with the idea, [Charlotte](http://www.twitter.com/charlotteis) executed it, [Alex](http://www.twitter.com/alexHacked) helped. 
- Also, Magic. 

