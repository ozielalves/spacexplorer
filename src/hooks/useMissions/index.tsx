import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  useQuery,
  OperationVariables,
  ApolloError,
  ApolloQueryResult,
} from "@apollo/client";

import { Mission } from "../../models/mission";
import { getFormatedDate } from "../../utils/getFormatedDate";
import { GET_ALL_MISSIONS } from "./queries";
import { variables } from "./constants";

interface MissionsContextProviderProps {
  children: ReactNode;
}

interface MissionsContextValues {
  loading: boolean;
  error: ApolloError | undefined;
  missions: Mission[] | [];
  likedImages: string[];
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<APIResponse>>;
  loadMore: () => void;
  canLoadMore: boolean;
  toggleLikeImage: (urlImage: string) => void;
}

export interface APIResponse {
  launchesPast: Mission[];
}

export interface GetAllMissionsVars {
  limit: number;
  offset: number;
}

export const MissionsContext = createContext({} as MissionsContextValues);

export function MissionsContextProvider({
  children,
}: MissionsContextProviderProps) {
  const [likedImages, setLikedImage] = useState([] as string[]);
  const [canLoadMore, setCanLoadMore] = useState(true);

  const { loading, error, data, refetch, fetchMore } = useQuery<
    APIResponse,
    GetAllMissionsVars
  >(GET_ALL_MISSIONS, {
    variables,
  });

  useEffect(() => {
    if (data) {
      setCanLoadMore(data.launchesPast.length % variables.limit === 0);
    }
  }, [data]);

  function getParsedData() {
    if (!data) {
      return [] as Mission[];
    }

    const serializedData = data.launchesPast.map((mission) => {
      return {
        ...mission,
        launch_date_local: getFormatedDate(new Date(mission.launch_date_local)),
        links: {
          ...mission.links,
          flickr_images: mission.links.flickr_images
            ? mission.links.flickr_images.slice(0, 3)
            : [],
        },
      };
    });

    return serializedData;
  }

  const toggleLikeImage = useCallback(
    (urlImage: string) => {
      setLikedImage((prev) =>
        prev.includes(urlImage)
          ? prev.filter((url) => url !== urlImage)
          : [...prev, urlImage]
      );
    },
    [setLikedImage]
  );

  const loadMore = useCallback(() => {
    fetchMore({
      variables: {
        offset: data ? data.launchesPast.length : 0,
      },
    });
  }, [fetchMore, data]);

  return (
    <MissionsContext.Provider
      value={{
        loading,
        error,
        missions: getParsedData(),
        likedImages,
        refetch,
        loadMore,
        canLoadMore,
        toggleLikeImage,
      }}
    >
      {children}
    </MissionsContext.Provider>
  );
}

export function useMissions() {
  const missionsContext = useContext(MissionsContext);

  if (!missionsContext) {
    throw new Error(
      "useMissions must be used within a MissionsContextProvider"
    );
  }

  return missionsContext;
}
