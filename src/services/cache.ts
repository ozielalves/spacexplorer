import { InMemoryCache } from "@apollo/client";
import { Mission } from "../models/mission";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        launchesPast: {
          keyArgs: false,
          merge(
            existing: Mission[] = [],
            incoming: Mission[],
            { args: { offset = 0 } }: any
          ) {
            const merged = existing ? existing.slice(0) : [];
            for (let i = 0; i < incoming.length; ++i) {
              merged[offset + i] = incoming[i];
            }
            
            return merged;
          },
        },
      },
    },
  },
});
