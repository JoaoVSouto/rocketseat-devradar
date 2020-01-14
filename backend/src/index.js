import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.use(express.json());

app.post('/', (req, res) => res.json({ ok: true }));

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));
