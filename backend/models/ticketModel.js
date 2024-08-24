const mongoose = require('mongoose');
const { Schema } = mongoose;
const { clientSchema } = require('./clientModel');
const { agentSchema } = require('./agentModel');

const ticketSchema = new Schema(
  {
    client: {
      type: [clientSchema],
      required: true
    },
    agent: {
      type: [agentSchema],
      required: true
    },
    status: {
      type: Number,
      required: true
    },
    start: {
      type: Date,
      required: true
    },
    end: {
      type: Date,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const TicketData = mongoose.model('TicketData', ticketSchema, 'ticket');

module.exports = {
  TicketData,
  ticketSchema
}