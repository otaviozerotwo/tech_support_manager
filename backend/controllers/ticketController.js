const { TicketData } = require('../models/ticketModel');

const ticketController = {
  create: async (req, res) => {
    try {
      const ticket = {
        client: req.body.client,
        agent: req.body.agent,
        status: req.body.status,
        start: req.body.start,
        end: req.body.end,
        title: req.body.title,
        description: req.body.description
      };

      const newTicket = await TicketData.create(ticket);

      res.status(201).json({ newTicket, message: 'ticket created succesfully!' });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const tickets = await TicketData.find();

      res.json(tickets);
    } catch (error) {
      console.log(error);
    }
  },

  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const ticket = await TicketData.findById(id);

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
      const ticket = await TicketData.findById(id);

      if (!ticket) {
        res.status(404).json({ message: 'ticket not found!' });
      }

      const deletedTicket = await TicketData.findByIdAndDelete(id);

      res.status(200).json({ deletedTicket, message: 'ticket deleted succesfully!' });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const ticket = {
        client: req.body.client,
        agent: req.body.agent,
        status: req.body.status,
        start: req.body.start,
        end: req.body.end,
        title: req.body.title,
        description: req.body.description
      };

      const updatedTicket = await TicketData.findByIdAndUpdate(id, ticket);

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