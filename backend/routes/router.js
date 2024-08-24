const router = require('express').Router();
const userRouter = require('./userRoutes');
const agentRouter = require('./agentRoutes');
const clientRouter = require('./clientRoutes');
const enterpriseRouter = require('./enterpriseRoutes');
const ticketRouter = require('./ticketRoutes');

router.use('/', userRouter);
router.use('/', agentRouter);
router.use('/', clientRouter);
router.use('/', enterpriseRouter);
router.use('/', ticketRouter);

module.exports = router;