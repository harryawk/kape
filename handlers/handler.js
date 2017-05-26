'use strict';

module.exports.hello = (event, context, callback) => {
  console.log('---- Event --- ' + JSON.stringify(event, null, 2));
  console.log('---- context --- ' + JSON.stringify(context, null, 2));
  connectDb();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
  console.log('---- Callback --- ' + JSON.stringify(callback, null, 2));

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

function connectDb() {
  var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'kape_db'
    }
  });
  console.log("----- DB Ready -----");
}
