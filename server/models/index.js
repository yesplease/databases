var db = require('../db').connection;

db.connect();


module.exports = {
  messages: {
    get: function () {
      db.query()
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

