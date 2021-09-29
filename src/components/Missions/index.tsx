import React from "react";
import { FlatList, View, RefreshControl } from "react-native";

import { ListHeader } from "../ListHeader";
import { ListItem } from "../ListItem";
import { ListDivider } from "../ListDivider";
import { MissionsErrorState } from "../MissionErrorState";
import { ListSkeleton } from "../ListSkeleton";
import { Skeleton } from "../Skeleton";

import { useMissions } from "../../hooks/useMissions";
import { Mission } from "../../models/mission";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface MissionsProps {
  goToLauchDetails: (data: Mission) => void;
}

export function Missions({ goToLauchDetails }: MissionsProps) {
  const { loading, error, missions, refetch, loadMore, canLoadMore } =
    useMissions();

  return (
    <>
      {error ? (
        <MissionsErrorState />
      ) : loading ? (
        <ListSkeleton />
      ) : (
        <View>
          <ListHeader
            title="Last Missions"
            subtitle={`Total ${missions.length}`}
          />
          <FlatList
            data={missions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListItem data={item} onPress={() => goToLauchDetails(item)} />
            )}
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
            onEndReached={() => canLoadMore && loadMore()}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
              canLoadMore ? (
                <>
                  <ListDivider />
                  <Skeleton />
                </>
              ) : null
            }
          />
        </View>
      )}
    </>
  );
}
