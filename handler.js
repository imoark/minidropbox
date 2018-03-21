'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

module.exports.postprocess = (event) => {
  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const filesize = record.s3.object.size;
	const eventTime = record.eventTime
    const eventName = record.eventName
    console.log(`New .png object has been created: ${filename} (${filesize} bytes)`);
    console.log(`The record.eventName is ${eventName}`)
    console.log(`The record.eventTime is ${eventTime}`)


    const params = {
		TableName: 'minidropbox',
		Item: {
			id: uuid.v1(),
			filename: filename,
			eventName: eventName,
			eventTime: eventTime
		}
	}

	dynamoDB.put(params, (error, result) => {
		if (error) {
			console.log(error);
			return;
		}

		console.log("Metadata uploaded to DynamoDB")
	})


  });
};
