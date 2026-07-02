# Deployment Guide

## Overview

This project is a standard Next.js application and can be deployed to a host that supports Node.js, environment variables, and a PostgreSQL connection.

## Deployment Checklist

- provision PostgreSQL and confirm the connection string
- provision object storage and confirm credentials and bucket name
- configure Clerk keys and organization settings
- configure Polar credentials and product identifiers
- configure Chatterbox API credentials
- run Prisma migrations before the first deployment

## Recommended Steps

1. Build the application.
   ```bash
   npm run build
   ```
2. Start the production server.
   ```bash
   npm start
   ```
3. Ensure the runtime environment provides the required variables.
4. Run database migrations during deployment.

## Notes

The repository does not currently include deployment automation files such as Docker, GitHub Actions, or a platform-specific manifest. Needs Verification for the exact hosting target.
