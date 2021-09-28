import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";

const { API_URL } = process.env;

export const client = new ApolloClient({
  uri: API_URL,
  cache,
});
