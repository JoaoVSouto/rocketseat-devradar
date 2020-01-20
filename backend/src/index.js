import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import cors from 'cors';

import { setUpWebSocket } from './websocket';
import routes from './routes';

dotenv.config();

const { PORT, DB_CONN } = process.env;

const app = express();
const server = http.Server(app);

setUpWebSocket(server);

mongoose
  .connect(DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database!'))
  .catch(err => console.error('Error in connecting to database', err));

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(PORT, () => console.log(`Server listening on ${PORT}...`));
