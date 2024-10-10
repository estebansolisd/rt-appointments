import { Client, cacheExchange, fetchExchange } from 'urql';

export const client = new Client({
  url: "http://localhost:3000/graphql", // your GraphQL endpoint
  exchanges: [cacheExchange, fetchExchange],
});
