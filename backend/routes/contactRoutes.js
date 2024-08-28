const router = require('express').Router();
const contactController = require('../controllers/contactController');

router
  .route('/contacts')
  .post((req, res) => contactController.create(req, res));

router
  .route('/contacts')
  .get((req, res) => contactController.getAll(req, res));

router
  .route('/contacts/:phoneNumber')
  .get((req, res) => contactController.getOne(req, res));

router
  .route('/contacts/:id')
  .delete((req, res) => contactController.delete(req, res));

router
  .route('/contacts/:id')
  .put((req, res) => contactController.update(req, res));
  
module.exports = router;