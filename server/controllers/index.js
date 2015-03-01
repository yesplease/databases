var models = require('../models');
var bluebird = require('bluebird');
var msgGet = bluebird.promisify(models.messages.get);
var msgPost = bluebird.promisify(models.messages.post);

//console.log(models);

module.exports = {
  messages: {
    get: function (req, res) {
    msgGet()
      .then(function(x){
        res.send(x);
      }).catch(function(err){
        console.log('catch:', err);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("This is request body", req.body);
      msgPost(req.body)
        .then(function(x){
          res.send(x);
        }).catch(function(err){
          console.log(err);
        })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

