const router = require('express').Router();
const clientController = require('../controllers/clientController');

router
  .route('/client')
  .post((req, res) => clientController.create(req, res));

router
  .route('/client')
  .get((req, res) => clientController.getAll(req, res));

router
  .route('/client/:id')
  .get((req, res) => clientController.getOne(req, res));

router
  .route('/client/:id')
  .delete((req, res) => clientController.delete(req, res));

router
  .route('/client/:id')
  .put((req, res) => clientController.update(req, res));
  
module.exports = router;