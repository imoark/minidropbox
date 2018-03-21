'use strict';

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();


module.exports.delete = (event) => {

	const params = {
		Bucket: "minidropbox-serverless-dev-serverlessdeploymentbucket",
		Key: event.pathParameters.name
	};

	s3.deleteObject(params, function(err, data) {
	   if (err) console.log(err, err.stack); // an error occurred
	   else     console.log(data);           // successful response
	   /*
	   data = {
	   }
	   */
	 });

};