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



UserSchema.statics.login = async function (username, password) {
  const user = await this.findOne({username});
  if (user) {
    const auth = await user.comparePassword(password);
    if (auth) {
      return user;
    }
    throw Error('Incorrect password');
  }
  throw Error("Incorrect username or password");
};
UserSchema.methods.comparePassword = async function (password) {
  const user = this;
  return password === user.password;
};


const User = mongoose.model('User', UserSchema);
module.exports = User;