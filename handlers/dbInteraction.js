'use strict';

var asdf;

module.exports.insertRecord = (event, context, callback) => {
	hello();
	console.log('---- Event --- ' + JSON.stringify(event, null, 2));
	console.log('---- context --- ' + JSON.stringify(context, null, 2));
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Record inserted',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

function hello () {
	console.log("Hello");
}