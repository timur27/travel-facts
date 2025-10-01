# Travel Facts

A modular monolith for discovering historical travel facts.

## Structure

```
travel-facts/
├── apps/
│   ├── api/          # Express backend
│   └── web/          # React frontend
└── packages/
    └── shared/       # Shared TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL

### Installation

```bash
npm install
```

### Database Setup

1. Create a PostgreSQL database
2. Copy `apps/api/.env.example` to `apps/api/.env`
3. Update `DATABASE_URL` with your database credentials
4. Run migrations:

```bash
cd apps/api
npx prisma migrate dev --name init
```

### Development

Run both frontend and backend:

```bash
npm run dev
```

Or run individually:

```bash
npm run dev:api   # Backend on http://localhost:3000
npm run dev:web   # Frontend on http://localhost:5173
```

### Build

```bash
npm run build
```
