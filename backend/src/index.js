import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

dotenv.config();

const { PORT, DB_CONN } = process.env;

const server = express();

mongoose
  .connect(DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database!'))
  .catch(err => console.error('Error in connecting to database', err));

server.use(express.json());
server.use(routes);

server.listen(PORT, () => console.log(`Server listening on ${PORT}...`));
