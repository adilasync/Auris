# Performance Guide

## Overview

Resonance is a web application that combines server-rendered Next.js pages with dynamic data fetching and media delivery. The main performance considerations are audio generation latency, API responsiveness, and frontend rendering around large voice lists or generation histories.

## Current Observations

- audio files are served through signed URLs rather than embedded in the database
- generation requests call an external API and therefore depend on network latency
- the app uses React Query to cache server state and reduce unnecessary requests

## Improvement Opportunities

- add caching for frequently requested voice and generation metadata
- move long-running generation tasks to background jobs if traffic grows
- add CDN or edge delivery for audio assets
- monitor generation latency and storage request failures
