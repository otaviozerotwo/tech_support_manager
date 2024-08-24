const router = require('express').Router();
const agentController = require('../controllers/agentController');

router
  .route('/agent')
  .post((req, res) => agentController.create(req, res));

router
  .route('/agent')
  .get((req, res) => agentController.getAll(req, res));

router
  .route('/agent/:id')
  .get((req, res) => agentController.getOne(req, res));

router
  .route('/agent/:id')
  .delete((req, res) => agentController.delete(req, res));

router
  .route('/agent/:id')
  .put((req, res) => agentController.update(req, res));
  
module.exports = router;