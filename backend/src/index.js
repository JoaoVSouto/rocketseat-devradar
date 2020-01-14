import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const { PORT, DB_CONN } = process.env;

const app = express();

mongoose
  .connect(DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database!'))
  .catch(err => console.error('Error in connecting to database', err));

app.use(express.json());

app.post('/', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));
