const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true,"Username is required"],
    unique: true,
  }, 
  password: {
    type: String,
    required: [true,"Password is required"],
    // lenght between 8 and 20
    minlength: [8,"Password must be at least 8 characters"],
    maxlength: [20,"Password must be at most 20 characters"],
  },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;