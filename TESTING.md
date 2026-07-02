# Testing Guide

## Overview

The repository currently does not include a dedicated automated test suite or CI workflow. This document captures the current state and the recommended next steps for validating changes.

## Current State

- no test files were found in the repository
- linting is available through npm run lint
- manual verification is the current default for UI and API behavior

## Recommended Validation Steps

- run linting before merging changes
- verify key flows locally: sign-in, organization selection, voice creation, speech generation, and billing redirect
- test both happy path and error path behavior for uploads and generation requests

## Suggested Next Steps

- add unit tests for validation utilities and business rules
- add integration tests around tRPC procedures
- add end-to-end browser tests for the core user journeys
