import React from "react";
import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "react-native";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";
import { MissionsContextProvider } from "./src/hooks/useMissions";
import { client } from "./src/services/client";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={client}>
      <MissionsContextProvider>
        <Background>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Routes />
        </Background>
      </MissionsContextProvider>
    </ApolloProvider>
  );
}
