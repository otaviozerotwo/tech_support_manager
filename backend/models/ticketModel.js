const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema(
  {
    contact: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Contact', 
      required: true 
    },
    callStartTime: {
      type: Date,
      required: true
    },
    callEndTime: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Ticket = mongoose.model('Ticket', ticketSchema, 'ticket');

module.exports = Ticket;
  