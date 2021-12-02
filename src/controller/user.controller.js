import userRepo from '../repository/user.repository.js';

/**
 * Delete user.
 * @returns {string}
 */
async function remove(req, res) {
  const userId = req.params.id;
  await userRepo.deleteItem(userId);

  return res.status(200).json({ message: 'Successfully deleted' });
}

/**
 * Update existing user
 * @returns {User, string}
 */
async function update(req, res) {
  const userId = req.params.id;
  const updateInfo = req.body;
  const data = await userRepo.updateItem(userId, updateInfo);

  return res.status(200).json({ data: data, message: 'Successfully updated' });
}

/**
 * Get user list.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {[User], string}
 */
async function list(req, res) {
  const query = {
    offset: req.query.offset ?? 0,
    limit: req.query.limit ?? 20,
  };
  const data = await userRepo.getAllItems(query);

  return res.status(200).json({ data: data, message: 'Successfully found' });
}

/**
 * Get user
 * @returns {User, string}
 */
async function get(req, res) {
  const userId = req.params.id;
  const data = await userRepo.getItem(userId);

  return res.status(200).json({ data: data, message: 'Successfully found' });
}

/**
 * Create new user
 * @property {string} req.body.name - The username of user.
 * @returns {User, string}
 */
async function create(req, res) {
  const user = {
    name: req.body.name,
  };
  const data = await userRepo.createItem(user);

  return res.status(201).json({ data: data, message: 'Successfully created' });
}

export default { create, update, remove, list, get };
