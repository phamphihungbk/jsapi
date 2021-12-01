import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

export default (app) => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cors());
	app.use(helmet());
};
