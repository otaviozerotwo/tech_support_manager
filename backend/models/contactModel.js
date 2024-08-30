const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true
    },
    enterprise: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Contact = mongoose.model('Contact', contactSchema, 'contact');

module.exports = Contact;