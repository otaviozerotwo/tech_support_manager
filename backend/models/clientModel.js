const mongoose = require('mongoose');
const { Schema } = mongoose;
const { enterpriseSchema } = require('./enterpriseModel');

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    enterprise: {
      type: [enterpriseSchema],
      required: true
    }
  },
  {
    timestamps: true
  }
);

const clientData = mongoose.model('ClientData', clientSchema, 'client');

module.exports = {
  clientData,
  clientSchema
};