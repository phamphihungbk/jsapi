import express from 'express';
import sequelize from './app/database';
import routes from './route/index';
import middleware from './app/middleware';
import './app/database';
const app = express();
const port = 3000;

app.use('/api/v1/', routes);
middleware(app);
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
