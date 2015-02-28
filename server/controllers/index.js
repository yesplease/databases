var models = require('../models');
var bluebird = require('bluebird');
var messages = bluebird.promisify(models.messages.get);
//console.log(models);

module.exports = {
  messages: {
    get: function (req, res) {
    messages()
      .then(function(x){
        res.send(x);
      }).catch(function(err){
        console.dir();
        console.log('catch:', err);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

