'use strict';

const AWS = require('aws-sdk');

// Twilio Credentials
const accountSid = '';
const authToken = '';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

module.exports.twil = (event, context, callback) =>{
	 console.log('notification')
	  // const data = JSON.parse(event);
	  console.log(event)

	client.messages
	  .create({
	    to: '',
	    from: '',
	    body: 'An S3 item is uploaded'
	  })
	  .then(message => console.log(message.sid));
};
