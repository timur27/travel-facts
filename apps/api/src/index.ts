import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import type { CitiesResponse, CityFactsResponse } from '@travel-facts/shared';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/cities', async (_req, res) => {
  try {
    const cities = await prisma.city.findMany({
      select: {
        id: true,
        name: true,
        _count: {
          select: { facts: true }
        }
      },
      orderBy: { name: 'asc' }
    });

    const response: CitiesResponse = { cities };
    res.json(response);
  } catch (error) {
    console.error('Error fetching cities:', error);
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
});

app.get('/api/cities/:id/facts', async (req, res) => {
  try {
    const { id } = req.params;
    const limit = parseInt(req.query.limit as string) || 5;

    const city = await prisma.city.findUnique({
      where: { id },
      include: {
        facts: {
          take: limit,
          orderBy: { createdAt: 'asc' }
        }
      }
    });

    if (!city) {
      return res.status(404).json({ error: 'City not found' });
    }

    const response: CityFactsResponse = {
      city: {
        id: city.id,
        name: city.name
      },
      facts: city.facts
    };
    res.json(response);
  } catch (error) {
    console.error('Error fetching facts:', error);
    res.status(500).json({ error: 'Failed to fetch facts' });
  }
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
