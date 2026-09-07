# Devii React Template

A reusable React template for quickly building applications with Devii,
preconfigured with Apollo Client and GraphQL.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Development](#development)
- [Apollo Client Integration](#apollo-client-integration)
- [Devii Authentication](#devii-authentication)
- [Built With](#built-with)

## Getting Started

### Prerequisites

- Node.js 22
- npm

### Installation

Install the project dependencies:

```sh
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and configure your Devii connection.

```sh
cp .env.example .env
```

The following environment variables are required:

- VITE_DEVII_API_URL — Devii API base URL
- VITE_DEVII_TENANT_ID — Devii tenant ID

### Development

Start the development server:

```sh
npm run dev
```

## Apollo Client Integration

This template comes with Apollo Client and GraphQL preinstalled and configured for use with Devii.

The Apollo Client configuration:

- Uses the Devii API URL defined in the environment variables
- Reads the access token from `localStorage`
- Attaches the token to the `Authorization` header for authenticated requests
- Uses Apollo’s `InMemoryCache` for client-side caching

👉 [View Apollo Client configuration](src/api/apolloClient.ts)

Apollo Client and GraphQL are installed with:

```sh
npm install @apollo/client graphql
```

For additional information, see the [Apollo Client Documentation](https://www.apollographql.com/docs/react).

## Devii Authentication

This template includes a basic authentication flow for connecting to Devii.

Users sign in with their Devii username and password. The configured tenant ID is read from the environment variables and sent with the login request.

After successful authentication, the returned access token is stored in `localStorage` and automatically included in authenticated Apollo Client requests.

The template also includes logout functionality that removes the stored access token.

## Built With

This template is built with:

- React
- TypeScript
- Vite
- Apollo Client
- GraphQL
