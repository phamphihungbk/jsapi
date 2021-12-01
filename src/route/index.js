import express from 'express';
import userCtrl from '../controller/user.controller';
import userRoute from '../controller/user.route';
const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));
router.use('/users', userRoute);

export default router;
