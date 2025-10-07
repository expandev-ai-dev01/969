# Sistema de Gestão de Pessoas - Backend API

Backend REST API for Sistema de Gestão de Pessoas - Home Office Management System.

## Technology Stack

- **Runtime**: Node.js 20+ LTS
- **Language**: TypeScript 5.9.3
- **Framework**: Express 5.1.0
- **Database**: SQL Server
- **Validation**: Zod 4.1.11

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- SQL Server database
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your configuration

### Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000/api/v1`

### Building for Production

```bash
npm run build
npm start
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Linting

```bash
# Check for linting errors
npm run lint

# Fix linting errors
npm run lint:fix
```

## API Versioning

The API uses URL path versioning:

- **Current Version**: `/api/v1`
- **External Routes**: `/api/v1/external/...`
- **Internal Routes**: `/api/v1/internal/...`

## Environment Variables

See `.env.example` for all available configuration options.

## Features

This system manages remote workers with the following capabilities:

1. Employee Registration
2. Work Schedule Control
3. Task Management
4. Productivity Dashboard
5. Internal Communication
6. Performance Evaluation
7. Equipment Management
8. Well-being Monitoring
9. Document Management
10. Management Reports

## Health Check

Health check endpoint available at:
```
GET /health
```

## Contributing

Feature implementations should follow the established architecture patterns documented in the knowledge base.

## License

Private - All rights reserved