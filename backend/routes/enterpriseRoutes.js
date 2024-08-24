const router = require('express').Router();
const enterpriseController = require('../controllers/enterpriseController');

router
  .route('/enterprise')
  .post((req, res) => enterpriseController.create(req, res));

router
  .route('/enterprise')
  .get((req, res) => enterpriseController.getAll(req, res));

router
  .route('/enterprise/:id')
  .get((req, res) => enterpriseController.getOne(req, res));

router
  .route('/enterprise/:id')
  .delete((req, res) => enterpriseController.delete(req, res));

router
  .route('/enterprise/:id')
  .put((req, res) => enterpriseController.update(req, res));
  
module.exports = router;