const Ticket = require('../models/ticketModel');
const Contact = require('../models/contactModel');

const ticketController = {
  create: async (req, res) => {
    try {
      const { phoneNumber, callStartTime, callEndTime } = req.body;

      const contact = await Contact.findOne({ phoneNumber });
      if (!contact) {
        res.status(404).json({ error: 'Contact not found!'});
        return;
      }

      const newTicket = new Ticket({
        contact: contact._id,
        callStartTime,
        callEndTime,
      });

      await newTicket.save();

      res.status(201).json({ newTicket, message: 'ticket created succesfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create ticket!' });
    }
  },

  getAll: async (req, res) => {
    try {
      const tickets = await Ticket.find();

      res.json(tickets);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tickets!' });
    }
  },

  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const ticket = await Ticket.findById(id);

      if (!ticket) {
        res.status(404).json({ message: 'ticket not found!' });
        return;
      }

      res.json(ticket);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const ticket = await Ticket.findById(id);

      if (!ticket) {
        res.status(404).json({ message: 'ticket not found!' });
      }

      const deletedTicket = await Ticket.findByIdAndDelete(id);

      res.status(200).json({ deletedTicket, message: 'ticket deleted succesfully!' });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const ticket = {
        contact: req.body.contact,
        callStartTime: req.body.callStartTime,
        callEndTime: req.body.callEndTime
      };

      const updatedTicket = await Ticket.findByIdAndUpdate(id, ticket);

      if (!updatedTicket) {
        res.status(404).json({ message: 'ticket not found!' });
      }

      res.status(201).json({ ticket, message: 'ticket updated succesfully!' });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = ticketController;