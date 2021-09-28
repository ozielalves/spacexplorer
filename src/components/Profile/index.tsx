import React from "react";
import { View, Text } from "react-native";

import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/ozielalves.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>Oziel</Text>
        </View>
        <Text style={styles.message}>Let's go to the moon with us</Text>
      </View>
    </View>
  );
}
