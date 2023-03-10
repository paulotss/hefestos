import express from 'express';
import ErrorHandle from './middlewares/ErrorHandle';
import routes from './routes/routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(ErrorHandle.handle);

export default app;