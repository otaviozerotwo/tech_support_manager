const { agentData } = require('../models/agentModel');

const agentController = {
  create: async (req, res) => {
    try {
      const agent = {
        name: req.body.name,
        user: req.body.user
      };

      const newAgent = await agentData.create(agent);

      res.status(201).json({ newAgent, message: 'agent created succesfully!' });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const agents = await agentData.find();

      res.json(agents);
    } catch (error) {
      console.log(error);
    }
  },

  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const agent = await agentData.findById(id);

      if (!agent) {
        res.status(404).json({ message: 'agent not found! '});
        return;
      }

      res.json(agent);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const agent = await agentData.findById(id);

      if (!agent) {
        res.status(404).json({ message: 'agent not found!' });
        return;
      }

      const deletedAgent = await agentData.findByIdAndDelete(id);

      res.status(200).json({ deletedAgent, message: 'agent deleted succesfully!' });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      const agent = {
        name: req.body.name,
        user: req.body.user
      };

      const updatedAgent = await agentData.findByIdAndUpdate(id, agent);

      if (!updatedAgent) {
        res.status(404).json({ message: 'agent not found!' });
        return;
      }

      res.status(201).json({ updatedAgent, message: 'agent updated succesfully!' });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = agentController;