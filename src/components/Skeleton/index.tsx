import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { View, Dimensions, Animated } from "react-native";
import { theme } from "../../global/styles/theme";

const { width } = Dimensions.get("window");

import { styles } from "./styles";

interface SkeletonProps {
  height?: number;
}

export function Skeleton({ height = 70 }: SkeletonProps) {
  const AnimatedValue = new Animated.Value(0);

  const { secondary70 } = theme.colors;

  useEffect(() => {
    circleAnimated();

    return () => circleAnimated();
  }, []);

  const circleAnimated = () => {
    AnimatedValue.setValue(0);
    Animated.timing(AnimatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        circleAnimated();
      }, 300);
    });
  };

  const translateX = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View style={[styles.container, { height }]}>
      <Animated.View style={[styles.skeleton, { transform: [{ translateX }] }]}>
        <LinearGradient
          style={styles.container}
          colors={["transparent", secondary70, "transparent"]}
          start={[0, 1]}
          end={[1, 0]}
        />
      </Animated.View>
    </View>
  );
}
