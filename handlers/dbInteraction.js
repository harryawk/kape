'use strict';
require('knex');
var Promise = require('bluebird');
var bookshelf = require('bookshelf');

module.exports.insertRecord = (event, context, callback) => {
	hello();
  var cursor = connectDb();
  bookshelf = bookshelf(cursor);
  var Post = bookshelf.Model.extend({
    tableName: 'post'
  });
  var post_an = {
    title: 'Post ketujuh ?',
    author: 'Penulis ketujuh ?',
    content: 'Content ketujuh ?',
    created_at: new Date().toISOString()
  };
  var updated_post_an = {
    id: 7,
    title: 'Post ketujuh',
    author: 'Penulis ketujuh',
    content: 'Content ketujuh',
    created_at: new Date().toISOString()
  };

  Post.fetchAll()
    .then(function(post) {
      console.log(post.toJSON());
      var some = post.toJSON();
      console.log('SOMETHING ::: ' + some[0].id + ' | ' + some[0].title + ' | ' + some[0].author + ' | ' + some[0].content + ' | ' + some[0].created_at + ' | ' );
    })
    .catch(function(error) {
      console.error(error);
    });
	console.log('---- CURSOR --- ' + cursor.select().table('post'));
  // var something = cursor.transaction(function(trx) {
  //   // trx.select().table('post')
  //   //   .then(function(ids) {
  //   //     console.log('++++ ids ++++ ' + ids);
  //   //     console.log(ids[0].title);
  //   //     Promise.map(ids, function(post) {
  //   //       console.log('+++ POST +++' + post.title);
  //   //     })
  //   //     .then(function(asdf) {
  //   //       console.log(asdf);
  //   //       // trx.commit;
  //   //     })
  //   //     .catch(trx.rollback);
  //   //   })
  //   //   .catch(function(error) {
  //   //     console.error(error);
  //   //   });


  //   // Insert var post to database
  //   // cursor.insert(post_an).into('post')
  //   //   .then(function(ids) {
  //   //     Promise.map(ids, function(asdf) {
  //   //       console.log(ids);
  //   //     });
  //   //     trx.commit;
  //   //   })
  //   //   .catch(trx.rollback);

  //   // Update record with id == 7
  //   // cursor('post').where('id', '7')
  //   // // cursor('post').where('id', '9')
  //   //   // .update({created_at: new Date().toISOString()})
  //   //   .update(updated_post_an)
  //   //   .then(function(count) {
  //   //     console.log(count);
  //   //     trx.commit;
  //   //   })
  //   //   .catch(trx.rollback);

  //   // Delete 2nd from behind record
  //   // cursor('post').where('id', '7').del()
  //   //   .then(function(count) {
  //   //     console.log(count);
  //   //     trx.commit;
  //   //   })
  //   //   .catch(trx.rollback);

  //   })
  //   .then(function(selected) {
  //     console.log('Selected : ' + selected);
  //   })
  //   .catch(function(error) {
  //     console.error(error);
  //   });
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
  return knex;
}

function insertToDb() {

}