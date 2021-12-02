import express from 'express';
import userCtrl from '../controller/user.controller.js';
import userRoute from './user.route.js';
const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));
router.use('/users', userRoute);

export default router;
