import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import { Home } from "../screens/Home";
import { LaunchDetails } from "../screens/LaunchDetails";
import { Intro } from "../screens/Intro";
import { ParamListBase } from "@react-navigation/routers";
import { Mission } from "../models/mission";

export interface LaunchDetailsProps {
  data: Mission;
}

export interface RootStackParam extends ParamListBase {
  Intro: undefined;
  Home: undefined;
  LaunchDetails: LaunchDetailsProps;
}

const { Navigator, Screen } = createStackNavigator<RootStackParam>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.secondary100 },
        headerShown: false,
      }}
    >
      <Screen name="Intro" component={Intro} />
      <Screen name="Home" component={Home} />
      <Screen name="LaunchDetails" component={LaunchDetails} />
    </Navigator>
  );
}
