import React, { useCallback } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";
import { Missions } from "../../components/Missions";

import { styles } from "./styles";
import { Mission } from "../../models/mission";
import { RootStackParam } from "../../routes/auth.routes";
import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenProp = StackNavigationProp<RootStackParam, "Home">;

export function Home() {
  const navigation = useNavigation<HomeScreenProp>();

  const handleLaunchDetails = useCallback(
    (data: Mission) => {
      return navigation.navigate("LaunchDetails", { data });
    },
    [navigation]
  );

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
      </View>

      <Missions goToLauchDetails={handleLaunchDetails} />
    </Background>
  );
}
