<!--
title: AWS Upload a file to S3 to trigger a Lambda function example in NodeJS
description: This example shows how to upload a file to S3 using a HTML form, and have S3 trigger a lambda function.
layout: Doc
-->
# Mini DropBox

To upload, you just need to open `frontend/index.html`. There is a form to upload your file. If it is a success, it will give you the XML.

## To list

You need to use API endpoints.

```
Service Information
service: upload-to-s3-and-postprocess
stage: dev
region: us-west-2
stack: upload-to-s3-and-postprocess-dev
api keys:
  None
endpoints:
  GET - https://fhlttmuwm5.execute-api.us-west-2.amazonaws.com/dev/minidropbox
  DELETE - https://fhlttmuwm5.execute-api.us-west-2.amazonaws.com/dev/minidropbox/{name}
  ```

Use the `GET` endpoint on your `Postman` software.

## To delete

You need to use API endpoints.
Use the `DELETE` endpoint on your `Postman` software.

Afterthat, check the list again, and you will see the delete record.
