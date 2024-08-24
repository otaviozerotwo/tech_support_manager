const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    login: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    status: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

const UserData = mongoose.model('UserData', userSchema, 'user');

module.exports = {
  UserData,
  userSchema
};