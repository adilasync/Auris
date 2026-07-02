# Contributing Guide

## Coding Standards

- prefer TypeScript and keep components typed
- follow the existing feature-based folder structure
- keep UI primitives in [src/components/ui](src/components/ui)
- place feature-specific logic close to the feature under [src/features](src/features)
- use Zod for input validation when introducing new request contracts

## Branch Naming

Use short, descriptive branch names such as:

- feature/voice-upload-improvements
- fix/billing-redirect
- chore/update-docs

## Commit Message Conventions

Use clear, action-oriented commit messages such as:

- feat: add voice history panel
- fix: resolve org-scoped voice deletion
- docs: add architecture guide

## Pull Request Process

1. Create a branch from main.
2. Make focused changes.
3. Run the relevant build or lint checks.
4. Update documentation when behavior changes.
5. Open a pull request with a clear summary and testing notes.

## Testing Before Merging

The repository does not currently include an established test suite. Before merging, verify that the relevant flows still work locally and that linting passes.

## Project Structure Guidelines

- use route files for Next.js route handlers
- use tRPC routers for typed application APIs
- keep shared integration logic under [src/lib](src/lib)
- keep feature UI components under the matching feature folder
