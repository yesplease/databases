var db = require('../db').connection;

db.connect();


module.exports = {
  messages: {
    get: function (cb) {
      db.query('select * from messages', cb);

    }, // a function which produces all the messages
    post: function (data, cb) {
      console.log(data);
      db.query('insert into users (username) value ("'+data.username+'");', function(err){
        console.log(err);
      });
      db.query('insert into messages (text, timestamp, username, roomName)\
       value ("'+data.text+'", NOW(),"'+data.username+'","'+data.roomname+'");', cb);
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

