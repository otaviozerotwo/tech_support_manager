const Contact = require('../models/contactModel');

const contactController = {
  create: async (req, res) => {
    try {
      const { name, phoneNumber, enterprise } = req.body;
      const newContact = new Contact({ name, phoneNumber, enterprise });
      await newContact.save();

      res.status(201).json({ newContact, message: 'contact created succesfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add contact'});
    }
  },

  getAll: async (req, res) => {
    try {
      const contacts = await Contact.find();

      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch contacts!' });
    }
  },

  getOne: async (req, res) => {
    try {
      const { phoneNumber } = req.params;
      const contact = await Contact.findOne({ phoneNumber });
      if (!contact) {
        res.status(404).json({ error: 'contact not found' });
        return
      }

      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch contact' });
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const contact = await Contact.findById(id);

      if (!contact) {
        res.status(404).json({ message: 'contact not found!' });
      }

      const deletedContact = await Contact.findByIdAndDelete(id);

      res.status(200).json({ deletedContact, message: 'contact deleted succesfully!' });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const contact = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        enterprise: req.body.enterprise
      };

      const updatedContact = await Contact.findByIdAndUpdate(id, contact);

      if (!updatedContact) {
        res.status(404).json({ message: 'contact not found!' });
      }

      res.status(201).json({ contact, message: 'contact updated succesfully!' });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = contactController;