import React from "react";
import { View, Image, Text } from "react-native";

import IllustrationsImg from "../../assets/illustration.png";
import SpaceshipSvg from "../../assets/spaceship.svg";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { styles } from "./styles";

export function Intro() {

  function handleIntro() {
    console.log('Home')
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
            See images, rocket names {"\n"} and other details.
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
