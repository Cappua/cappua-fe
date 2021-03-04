import { ApolloClient, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

export const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://cappua-be-dev.us-west-1.elasticbeanstalk.com/graphql",
});
