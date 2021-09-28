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

import { getFormatedDate } from "../../utils/getFormatedDate";
import { GET_ALL_MISSIONS } from "./queries";
import { Mission } from "../../models/mission";
import { Alert } from "react-native";

interface MissionsContextProviderProps {
  children: ReactNode;
}

interface MissionsContextValues {
  loading: boolean;
  error: ApolloError | undefined;
  missions: Mission[] | undefined;
  likedImages: string[];
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<APIResponse>>;
  toggleLikeImage: (urlImage: any) => void;
}

export interface APIResponse {
  launchesPast: Mission[];
}

export const MissionsContext = createContext({} as MissionsContextValues);

export function MissionsContextProvider({
  children,
}: MissionsContextProviderProps) {
  const [likedImages, setLikedImage] = useState([] as string[]);

  const { loading, error, data, refetch } = useQuery<
    APIResponse,
    OperationVariables
  >(GET_ALL_MISSIONS);

  useEffect(() => {
    if (error) {
      Alert.alert(error.message);
    }
  }, [error]);

  function getParsedData() {
    if (!data) {
      return [] as Mission[];
    }

    const serializedData = data.launchesPast.map((mission) => {
      return {
        ...mission,
        launch_date_local: getFormatedDate(new Date(mission.launch_date_local)),
      };
    });

    return serializedData;
  }

  const toggleLikeImage = useCallback(
    (urlImage) => {
      setLikedImage((prev) =>
        prev.includes(urlImage)
          ? prev.filter((url) => url !== urlImage)
          : [...prev, urlImage]
      );
    },
    [setLikedImage]
  );

  return (
    <MissionsContext.Provider
      value={{
        loading,
        error,
        missions: getParsedData(),
        likedImages,
        refetch,
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
