'use strict';

const AWS = require('aws-sdk');

// Twilio Credentials
const accountSid = 'AC34dbd0b67bd9367a7bf4334445ff9b25';
const authToken = 'e757520032d8eb8c89095409ec8ca169';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

module.exports.twil = (event, context, callback) =>{
	 console.log('notification')
	  // const data = JSON.parse(event);
	  console.log(event)

	client.messages
	  .create({
	    to: '+17788967809',
	    from: '+16042433911',
	    body: 'An S3 item is uploaded'
	  })
	  .then(message => console.log(message.sid));
};
