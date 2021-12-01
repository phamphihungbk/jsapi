import userRepo from '../repository/user.repository';

/**
 * Delete user.
 * @returns {User}
 */
async function remove(req, res) {
	const userId = req.body.id;
	await userRepo.deleteItem(userId);

	return res.status(200).json({ message: 'Successfully deleted' })
}

/**
 * Update existing user
 * @property {string} req.body.name - The username of user.
 * @returns {User}
 */
async function update(req, res) {
	const userId = req.body.id;
	const data = req.body.data;
	await userRepo.updateItem(userId, data);

	return res.status(200).json({ message: 'Successfully updated' })
}

/**
 * Get user list.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
async function list(req, res) {
	const query = {
		limit: (req.body.limit > 0) ? req.body.limit : 20
	};
	const data = await userRepo.getAllItems(query);

	return res.status(200).json({ data: data, message: 'Successfully found' })
}

/**
 * Get user
 * @returns {User}
 */
async function get(req, res) {
	const userId = req.body.id;
	const data = await userRepo.getItem(userId);

	return res.status(200).json({ data: data, message: 'Successfully found' })
}

/**
 * Create new user
 * @property {string} req.body.name - The username of user.
 * @returns {User}
 */
async function create(req, res) {
	const user = {
		name: req.body.name,
	};
	await userRepo.createItem(user);

	return res.status(201).json({ message: 'Successfully created' })
}

export default { create, update, remove, list, get };
