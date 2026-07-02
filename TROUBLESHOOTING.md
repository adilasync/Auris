# Troubleshooting Guide

## Common Problems

### Authentication loops

If the app keeps redirecting to sign-in or the org-selection page, verify that Clerk credentials are configured and that the user has an organization assigned.

### Voice upload errors

If a voice upload fails, check the file size, content type, audio duration, and storage credentials.

### Audio generation failures

If generation fails, confirm that the selected voice has an associated storage key and that the Chatterbox API key is valid.

### Database errors

If Prisma or the app cannot connect to Postgres, verify the DATABASE_URL and the database availability.

## General Advice

- read the server logs and browser console for detailed failure context
- confirm that migrations have been applied
- validate the environment variables before restarting the app
