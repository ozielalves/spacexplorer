import React from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import IllustrationsImg from "../../assets/illustration.png";
import SpaceshipSvg from "../../assets/spaceship.svg";

import { RootStackParam } from "../../routes/auth.routes";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { styles } from "./styles";

type IntroScreenProp = StackNavigationProp<RootStackParam, "Intro">;

export function Intro() {
  const navigation = useNavigation<IntroScreenProp>();

  function handleIntro() {
    navigation.navigate("Home");
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationsImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Follow {"\n"} the latest {"\n"} SpaceX missions
          </Text>
          <Text style={styles.subtitle}>
            Keep updated with the {"\n"} the latest missions performed.
          </Text>
          <ButtonIcon
            icon={<SpaceshipSvg />}
            title="Check missions"
            onPress={handleIntro}
          />
        </View>
      </View>
    </Background>
  );
}
