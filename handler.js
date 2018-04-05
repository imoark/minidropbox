'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();
const lambda = new AWS.Lambda({
  region: 'us-west-2'
});

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

		console.log("Metadata uploaded to DynamoDB");
		const invparams = {
	        FunctionName: 'upload-to-s3-and-postprocess-dev-twilio',
	        Payload: JSON.stringify({ filename: filename })
     	}
		lambda.invoke(invparams, (err, data) => {
			if(err) {
				console.log("Houston, we got a problem")
				console.log(err)
				return
			}
			console.log("Houston, we got a data")
			console.log(data)
		})
	})


  });
};
