import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";
import { deviiConfig } from "../config";
import { getAccessToken } from "./tokenStorage";

const httpLink = new HttpLink({
  uri: `${deviiConfig.apiUrl}/query`, // GraphQL endpoint
});

const authLink = new SetContextLink((prevContext) => {
  const token = getAccessToken(); // Read latest token for each request

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
