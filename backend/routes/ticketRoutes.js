const router = require('express').Router();
const ticketController = require('../controllers/ticketController');

router
  .route('/ticket')
  .post((req, res) => ticketController.create(req, res));

router
  .route('/ticket')
  .get((req, res) => ticketController.getAll(req, res));

router
  .route('/ticket/:id')
  .get((req, res) => ticketController.getOne(req, res));

router
  .route('/ticket/:id')
  .delete((req, res) => ticketController.delete(req, res));

router
  .route('/ticket/:id')
  .put((req, res) => ticketController.update(req, res));
  
module.exports = router;