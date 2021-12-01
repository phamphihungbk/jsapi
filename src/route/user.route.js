import express from 'express';
import userCtrl from '../controller/user.controller';
const router = express.Router();

router.route('/')
	/** GET /api/v1/users - Get list of users */
	.get(userCtrl.list)

	/** POST /api/v1/users - Create new user */
	.post(userCtrl.create);

router.route('/:userId')
	/** GET /api/v1/users/:userId - Get user */
	.get(userCtrl.get)

	/** PUT /api/v1/users/:userId - Update user */
	.put(userCtrl.update)

	/** DELETE /api/v1/users/:userId - Delete user */
	.delete(userCtrl.remove);

module.exports = router;
