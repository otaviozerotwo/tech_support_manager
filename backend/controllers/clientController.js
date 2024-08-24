const { clientData } = require('../models/clientModel');

const clientController = {
  create: async (req, res) => {
    try {
      const client = {
        name: req.body.name,
        enterprise: req.body.enterprise
      };

      const newClient = await clientData.create(client);

      res.status(201).json({ newClient, message: 'client created succesfully!' });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const clients = await clientData.find();

      res.json(clients);
    } catch (error) {
      console.log(error);
    }
  },

  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const client = await clientData.findById(id);

      if (!client) {
        res.status(404).json({ message: 'client not found! '});
        return;
      }

      res.json(client);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const client = await clientData.findById(id);

      if (!client) {
        res.status(404).json({ message: 'client not found!' });
        return;
      }

      const deletedClient = await clientData.findByIdAndDelete(id);

      res.status(200).json({ deletedClient, message: 'client deleted succesfully!' });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      const client = {
        name: req.body.name,
        enterprise: req.body.enterprise
      };

      const updatedClient = await clientData.findByIdAndUpdate(id, client);

      if (!updatedClient) {
        res.status(404).json({ message: 'client not found!' });
        return;
      }

      res.status(201).json({ updatedClient, message: 'client updated succesfully!' });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = clientController;