var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',

  initialize: function() {
    this.on('creating', function(model, attrs, options) {
     console.log(model.get('username'), model.get('password'));
     // needs to go to the correct page index page.
    })
  }
});

module.exports = User;

