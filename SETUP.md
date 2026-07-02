# Setup Guide

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Local Development](#local-development)
- [Production Setup](#production-setup)
- [Common Issues](#common-issues)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js 20 or newer
- npm
- PostgreSQL instance
- object storage bucket compatible with the AWS S3 API
- Clerk application credentials
- Polar account and product configuration
- Chatterbox API credentials

## Installation

```bash
npm install
npx prisma generate
npx prisma migrate dev
```

## Environment Variables

Create an environment file with the values described in [README.md](README.md).

The runtime config is validated in [src/lib/env.ts](src/lib/env.ts).

## Local Development

```bash
npm run dev
```

The app should be available at http://localhost:3000.

If the database is empty, you may need to seed system voices after the bucket and database are configured.

## Production Setup

For production, make sure all required environment variables are provided and that the database is reachable from the deployment environment. The application expects a standard Node.js runtime and should be deployed with sufficient memory for Next.js SSR and media handling.

## Common Issues

- Clerk redirects to sign-in because the app cannot resolve a valid session.
- organization selection page appears repeatedly because no organization is attached to the user.
- custom voice upload fails because the subscription state is missing or the storage credentials are invalid.
- audio generation fails when the selected voice has no storage key.

## Troubleshooting

- verify the environment variables before running the server
- ensure Prisma migrations are applied to the target database
- check storage bucket permissions for uploads and signed URL access
- inspect browser console and server logs for route-specific failures