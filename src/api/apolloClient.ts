import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";

const baseUrl = import.meta.env.VITE_DEVII_API_URL; // Devii API URL

const httpLink = new HttpLink({
  uri: baseUrl, // GraphQL endpoint
});

const authLink = new SetContextLink((prevContext) => {
  const token = localStorage.getItem("access_token"); // Read latest token for each request

  return {
    headers: {
      ...prevContext.headers, // Preserve existing headers
      Authorization: token ? `Bearer ${token}` : "", // Attach Devii auth token
    },
  };
});

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    authLink, // Add authentication first
    httpLink, // Send request to Devii
  ]),
  cache: new InMemoryCache(), // Apollo normalized cache
});
