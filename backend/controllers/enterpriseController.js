const { EnterpriseData } = require('../models/enterpriseModel');

const enterpriseController = {
  create: async (req, res) => {
    try {
      const enterprise = {
        idEnterprise: req.body.idEnterprise,
        name: req.body.name
      };

      const newEnterprise = await EnterpriseData.create(enterprise);

      res.status(201).json({ newEnterprise, message: 'enterprise created succesfully!' });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const enterprises = await EnterpriseData.find();

      res.json(enterprises);
    } catch (error) {
      console.log(error);
    }
  },

  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const enterprise = await EnterpriseData.findById(id);

      if (!enterprise) {
        res.status(404).json({ message: 'enterprise not found!' });
        return;
      }

      res.json(enterprise);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const enterprise = await EnterpriseData.findById(id);

      if (!enterprise) {
        res.status(404).json({ message: 'enterprise not found!' });
      }

      const deletedEnterprise = await EnterpriseData.findByIdAndDelete(id);

      res.status(200).json({ deletedEnterprise, message: 'enterprise deleted succesfully!' });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const enterprise = {
        idEnterprise: req.body.idEnterprise,
        name: req.body.name
      };

      const updatedEnterprise = await EnterpriseData.findByIdAndUpdate(id, enterprise);

      if (!updatedEnterprise) {
        res.status(404).json({ message: 'enterprise not found!' });
      }

      res.status(201).json({ enterprise, message: 'enterprise updated succesfully!' });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = enterpriseController;