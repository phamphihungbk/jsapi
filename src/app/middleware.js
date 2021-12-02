import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fs from 'fs';

export default (app) => {
  const accessLogStream = fs.createWriteStream(
  	'./access.log',
    { flags: 'a' },
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(helmet());
  app.use(morgan('combined', { stream: accessLogStream }));
};
