import { DataTypes } from 'sequelize';
import db from '../app/database';

const model = db.define(
	'User',
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	}
);

export default model;
