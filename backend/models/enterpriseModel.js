const mongoose = require('mongoose');
const { Schema } = mongoose;

const enterpriseSchema = new Schema(
  {
    idEnterprise: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const EnterpriseData = mongoose.model('EnterpriseData', enterpriseSchema, 'enterprise');

module.exports = {
  EnterpriseData,
  enterpriseSchema
};