const AWS = require('aws-sdk');

// Twilio Credentials
const accountSid = '';
const authToken = '';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

module.exports.twilio = (event) =>{
	client.messages
	  .create({
	    to: '+17788967809',
	    from: '+16042433911',
	    body: 'An S3 item is uploaded',
	  })
	  .then(message => console.log(message.sid));
};
