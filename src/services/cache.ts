import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        mission(_, { args, toReference }) {
          return toReference({
            __typename: "Mission",
            id: args?.id,
          });
        },
      },
    },
  },
});
