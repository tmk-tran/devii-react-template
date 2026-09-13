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
- [Example GraphQL Query](#example-graphql-query)
- [Material UI](#material-ui)
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

## Example GraphQL Query

After authentication, the template runs an example GraphQL introspection query using Apollo Client.

The query retrieves the available queries exposed by your Devii GraphQL API:

```graphql
query GetAvailableQueries {
  __schema {
    queryType {
      fields {
        name
      }
    }
  }
}
```

The results are displayed under Available Queries after signing in.

This example demonstrates how to:

- Execute an authenticated GraphQL query with Apollo Client
- Access your Devii GraphQL schema
- Display query results in a React component

The example query is located at:

[`src/graphql/queries/getAvailableQueries.ts`](src/graphql/queries/getAvailableQueries.ts)

The component that executes and displays the query is located at:

[`src/components/AvailableQueries.tsx`](src/components/AvailableQueries.tsx)⁠￼

Use this example as a starting point for creating queries against your own connected data.

## Material UI

This template includes Material UI (MUI) for building and styling application components.

MUI and its required Emotion dependencies can be installed with:

```sh
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

MUI will be available as an optional feature when generating a project with the Devii CLI.

For additional information, see the [⁠Material UI Documentation](https://mui.com/material-ui/getting-started/)

## Built With

This template is built with:

- React
- TypeScript
- Vite
- Apollo Client
- GraphQL
- Material UI (MUI)
