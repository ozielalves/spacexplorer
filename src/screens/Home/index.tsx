import React from "react";
import { FlatList, View } from "react-native";

import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { ListItem } from "../../components/ListItem";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { missionsMock } from "./constants";

export function Home() {
  return (
    <Background>
      <View style={styles.header}>
        <Profile />
      </View>

      <View>
        <ListHeader
          title="Last Missions"
          subtitle={`Total ${missionsMock.launchesPast.length}`}
        />
        <FlatList
          data={missionsMock.launchesPast}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem data={item} onPress={() => console.log("Details")} />
          )}
          style={styles.missions}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
        />
      </View>
    </Background>
  );
}
