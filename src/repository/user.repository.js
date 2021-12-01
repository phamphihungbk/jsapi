import User from '../model/user.model';

async function getByIdOrFail(id) {
	return await User.findOne(id);
}

async function getItem(id) {
	const user = await getByIdOrFail(id);

	if (user) {
		throw new Error('Can not find user');
	}

	return user;
}

async function updateItem(id, data) {
	const user = await getByIdOrFail(id);
	if (user) {
		throw new Error('Can not find user');
	}
	Object.assign(user, data);

	return await User.update(user);
}

async function deleteItem(id) {
	const user = await getByIdOrFail(id);
	if (user) {
		throw new Error('Can not find user');
	}

	return await User.delete(user);
}

async function createItem(data) {
	return await User.create(data);
}

async function getAllItems(query) {
	return await User.findAll(query);
}

export default { getAllItems, getItem, createItem, deleteItem, updateItem };
