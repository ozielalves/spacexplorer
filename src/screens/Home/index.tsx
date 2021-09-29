import React, { useCallback } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { ListItem } from "../../components/ListItem";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { MissionsEmptyState } from "../../components/MissionsEmptyState";
import { ListSkeleton } from "../../components/ListSkeleton";

import { styles } from "./styles";
import { useMissions } from "../../hooks/useMissions";
import { theme } from "../../global/styles/theme";
import { Mission } from "../../models/mission";
import { RootStackParam } from "../../routes/auth.routes";
import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenProp = StackNavigationProp<RootStackParam, "Home">;

export function Home() {
  const navigation = useNavigation<HomeScreenProp>();
  const { loading, error, missions, refetch } = useMissions();

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

      {error ? (
        <MissionsEmptyState />
      ) : loading ? (
        <ListSkeleton />
      ) : (
        <View>
          <ListHeader
            title="Last Missions"
            subtitle={`Total ${missions?.length}`}
          />
          <FlatList
            data={missions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListItem data={item} onPress={() => handleLaunchDetails(item)} />
            )}
            style={styles.missions}
            ItemSeparatorComponent={() => <ListDivider />}
            refreshing={loading}
            onRefresh={refetch}
            /* refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={refetch}
                colors={[theme.colors.primary]}
              />
            } */
            contentContainerStyle={{ paddingBottom: 69 }}
            /* onEndReached={fetchMore} */
            onEndReachedThreshold={0.1}
            /* ListFooterComponent={loading ? <LoadingFooter /> : null} */
          />
        </View>
      )}
    </Background>
  );
}
