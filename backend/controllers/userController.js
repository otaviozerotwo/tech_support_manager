const { UserData } = require('../models/userModel');

const userController = {
  create: async (req, res) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password
      };

      const newUser = await UserData.create(user);

      res.status(201).json({ newUser, message: 'user created succesfully!' });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const users = await UserData.find();

      res.json(users);
    } catch (error) {
      console.log(error);
    }
  },

  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserData.findById(id);

      if (!user) {
        res.status(404).json({ message: 'user not found!' });
        return;
      }

      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserData.findById(id);

      if (!user) {
        res.status(404).json({ message: 'user not found!' });
      }

      const deletedUser = await UserData.findByIdAndDelete(id);

      res.status(200).json({ deletedUser, message: 'user deleted succesfully!' });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const user = {
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password
      };

      const updatedUser = await UserData.findByIdAndUpdate(id, user);

      if (!updatedUser) {
        res.status(404).json({ message: 'user not found!' });
      }

      res.status(201).json({ user, message: 'user updated succesfully!' });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = userController;