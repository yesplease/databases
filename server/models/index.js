var db = require('../db').connection;

db.connect();


module.exports = {
  messages: {
    get: function (cb) {
      var results;
      // db.query('show databases;', function(err, rows){
      //   if(err){
      //     console.log('db err:' + err);
      //     throw err;
      //   }else{
      //     console.log('db:', rows);
      //     cb(rows);
      //   }
      // });
      db.query('show databases;', cb)

    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (obj) {
      username = obj.username;
      db.query('insert into users (username) values ('+username+');')
    }
  }
};

