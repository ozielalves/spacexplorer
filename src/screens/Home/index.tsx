import React, { useCallback } from "react";
import { FlatList, RefreshControl, View } from "react-native";

import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { ListItem, ListItemSkeleton } from "../../components/ListItem";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { useMissions } from "../../hooks/useMissions";
import { theme } from "../../global/styles/theme";
import { Mission } from "../../models/mission";

export function Home() {
  const { loading, missions, refetch } = useMissions();

  const handleLaunchDetails = useCallback(
    (data: Mission) => console.log('Details'),
    []
  );

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
      </View>

      <View>
        <ListHeader
          title="Last Missions"
          subtitle={`Total ${missions?.length}`}
        />
        <FlatList
          data={missions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            loading ? (
              <ListItemSkeleton />
            ) : (
              <ListItem data={item} onPress={() => handleLaunchDetails(item)} />
            )
          }
          style={styles.missions}
          ItemSeparatorComponent={() => <ListDivider />}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={refetch}
              colors={[theme.colors.primary]}
            />
          }
          contentContainerStyle={{ paddingBottom: 69 }}
        />
      </View>
    </Background>
  );
}
