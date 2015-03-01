var db = require('../db').connection;

db.connect();


module.exports = {
  messages: {
    get: function (cb) {
      db.query('select * from messages', cb);

    }, // a function which produces all the messages
    post: function (cb) {
      db.query('insert')
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (obj) {
      username = obj.username;
      db.query('insert into users (username) values ('+username+');');
    }
  }
};

