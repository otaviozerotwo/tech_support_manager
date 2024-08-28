const router = require('express').Router();
const contactRouter = require('./contactRoutes');
const ticketRouter = require('./ticketRoutes');

router.use('/', contactRouter);
router.use('/', ticketRouter);

module.exports = router;