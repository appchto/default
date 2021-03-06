const mongoose = require('mongoose');
var passportlocalmongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String, 
    required: true, 
    unique: true, 
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
},
  password: {
    type: String,
    required: true
  },
  manager: {
    type: Boolean 
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  last_access: {
    type: Date
  }

});
UserSchema.plugin(passportlocalmongoose);

const User = mongoose.model('user', UserSchema);

module.exports = User;
