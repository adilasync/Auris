# Security Guide

## Authentication

Authentication is handled by Clerk. Protected routes rely on the Clerk middleware in [src/proxy.ts](src/proxy.ts) and the auth helpers in [src/trpc/init.ts](src/trpc/init.ts).

## Authorization

The application uses Clerk organization context to scope data. Custom voices and generations must belong to the current organization.

## Secrets Management

Sensitive values should be supplied through environment variables and never committed to source control. The runtime configuration is validated in [src/lib/env.ts](src/lib/env.ts).

## Input Validation

Zod is used for request validation in the server procedures and route handlers. This is especially important for voice creation and generation requests.

## Common Attack Prevention

- validate file size and audio type before storing uploads
- restrict access to storage and audio routes by organization
- avoid trusting client-side values for object ownership or billing actions

## Security Best Practices

- rotate API keys regularly
- keep dependencies updated
- monitor billing and storage errors for abuse patterns
- review access to object storage buckets and related permissions

## Responsible Disclosure

If you discover a security issue, report it privately rather than opening a public issue. The project maintainers should be contacted through the repository’s preferred contact channel.
