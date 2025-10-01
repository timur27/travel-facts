import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/cities', (req, res) => {
  res.json({ cities: [] });
});

app.get('/api/cities/:id/facts', (req, res) => {
  const { id } = req.params;
  res.json({ cityId: id, facts: [] });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
