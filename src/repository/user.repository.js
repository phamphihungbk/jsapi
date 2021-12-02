import User from '../model/user.model.js';

async function getByIdOrFail(id) {
	const user = await User.findByPk(id);
	if (!user) {
		throw new Error('Can not find user');
	}

	return user;
}

async function getItem(id) {
	return await getByIdOrFail(id);
}

async function updateItem(id, data) {
	const user = await getByIdOrFail(id);
	return await user.update(data);
}

async function deleteItem(id) {
	const user = await getByIdOrFail(id);
	return await user.destroy();
}

async function createItem(data) {
	return await User.create(data);
}

async function getAllItems(query) {
	return await User.findAll(query);
}

export default { getAllItems, getItem, createItem, deleteItem, updateItem };
