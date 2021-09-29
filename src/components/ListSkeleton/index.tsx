import React from "react";

import { Skeleton } from "../Skeleton";
import { ListDivider } from "../ListDivider";

import { styles } from "./styles";
import { ScrollView, View } from "react-native";

export function ListSkeleton() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Skeleton height={30} />
      </View>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <>
            <Skeleton key={index} />
            <ListDivider />
          </>
        ))}
    </ScrollView>
  );
}
