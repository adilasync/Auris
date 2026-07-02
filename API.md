# API Reference

## Table of Contents

- [Overview](#overview)
- [Authentication](#authentication)
- [tRPC Endpoints](#trpc-endpoints)
- [Route Handlers](#route-handlers)

## Overview

Resonance exposes a mix of typed tRPC procedures and Next.js route handlers. The majority of application interactions use tRPC, while audio-serving and voice upload routes are implemented as standard route handlers.

## Authentication

All protected endpoints require a Clerk-authenticated user and an organization context. Requests without either will fail with 401 or 403 errors depending on the route.

## tRPC Endpoints

### voices.getAll

- Method: query
- Purpose: fetch the current organization’s custom voices and the built-in system voices
- Authentication: required
- Request body: optional object with query string
- Response: `{ custom: Voice[], system: Voice[] }`
- Error responses: 401, 403, 500

Example:

```ts
trpc.voices.getAll.queryOptions({ query: "anna" })
```

### voices.delete

- Method: mutation
- Purpose: delete a custom voice belonging to the current organization
- Authentication: required
- Request body: `{ id: string }`
- Response: `{ success: true }`
- Error responses: 401, 403, 404, 500

### generations.getById

- Method: query
- Purpose: fetch one generation record and its audio URL
- Authentication: required
- Request body: `{ id: string }`
- Response: generation metadata plus `audioUrl`
- Error responses: 401, 403, 404

### generations.getAll

- Method: query
- Purpose: list generation history for the current organization
- Authentication: required
- Request body: none
- Response: array of generations
- Error responses: 401, 403

### generations.create

- Method: mutation
- Purpose: create a new generation and trigger speech synthesis
- Authentication: required
- Request body:

```json
{
  "text": "Hello world",
  "voiceId": "voice_123",
  "temperature": 0.8,
  "topP": 0.95,
  "topK": 1000,
  "repetitionPenalty": 1.2
}
```

- Response: `{ id: string }`
- Error responses: 400, 401, 403, 404, 412, 500

### billing.createCheckout

- Method: mutation
- Purpose: create a Polar checkout session
- Authentication: required
- Request body: none
- Response: `{ checkoutUrl: string }`
- Error responses: 401, 403, 500

### billing.createPortalSession

- Method: mutation
- Purpose: create a billing portal session
- Authentication: required
- Request body: none
- Response: `{ portalUrl: string }`
- Error responses: 401, 403, 500

### billing.getStatus

- Method: query
- Purpose: retrieve current billing state for the organization
- Authentication: required
- Request body: none
- Response: `{ hasActiveSubscription, customerId, estimatedCostCents }`
- Error responses: 401, 403

## Route Handlers

### GET /api/audio/[generationId]

- Purpose: return a signed audio stream for a generation
- Authentication: required
- Request body: none
- Response: binary audio payload with content type audio/wav
- Error responses: 401, 404, 409, 502

### POST /api/voices/create

- Purpose: create a custom voice from an uploaded audio file
- Authentication: required
- Request body: binary audio file plus query parameters
- Query parameters:
  - name
  - category
  - language
  - description
- Response: `{ name, message: "Voice created successfully" }`
- Error responses: 400, 401, 403, 413, 422, 500

### GET /api/voices/[voiceId]

- Purpose: return a signed audio stream for a voice
- Authentication: required
- Request body: none
- Response: binary audio payload
- Error responses: 401, 404, 409, 502

### POST /api/trpc

- Purpose: serve tRPC requests over HTTP
- Authentication: handled per procedure
- Request body: tRPC batch or single request payload
- Response: tRPC response payload
