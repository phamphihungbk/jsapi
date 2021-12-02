import express from 'express';
import './app/database.js';
import routes from './route/index.js';
import middleware from './app/middleware.js';
const app = express();
const port = 3000;

app.use('/api/v1/', routes);
middleware(app);
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
