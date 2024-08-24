const mongoose = require('mongoose');
const { Schema } = mongoose;
const { userSchema } = require('./userModel');

const agentSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    user: {
      type: [userSchema],
      required: true
    }
  },
  {
    timestamps: true
  }
);

const agentData = mongoose.model('AgentData', agentSchema, 'agent');

module.exports = {
  agentData,
  agentSchema
};