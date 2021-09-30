import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ImageBackground,
} from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import SpaceshipSvg from "../../assets/spaceship.svg";

import { useMissions } from "../../hooks/useMissions";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

const { width } = Dimensions.get("window");
const height = (width * 100) / 60;

interface ImageSliderProps {
  title: string;
  data: string[];
  onPress: (urlImage: string) => void;
}

export function ImageSlider({ title, data, onPress }: ImageSliderProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeImageUrl, setActiveImageUrl] = useState<string>(data[0]);
  const [scrollOffsetX, setScrollOffsetX] = useState(0);
  const [scrollRef, setScrollRef] = useState<ScrollView | null>(null);

  const { likedImages, toggleLikeImage } = useMissions();

  const { secondary100, primary } = theme.colors;

  useEffect(() => {
    scrollRef?.scrollTo({ x: scrollOffsetX, y: 0, animated: true });
  }, [scrollOffsetX]);

  const handleImageChange = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { contentOffset, layoutMeasurement } = event.nativeEvent;

      const slide = Math.ceil(contentOffset.x / layoutMeasurement.width);

      setActiveImageIndex((prev) => (prev !== slide ? slide : prev));
      setActiveImageUrl(data[slide]);
    },
    [setActiveImageIndex]
  );

  function handleNextImage() {
    setScrollOffsetX((prev) => prev + width);
  }

  function handlePreviousImage() {
    setScrollOffsetX((prev) => prev - width);
  }

  return (
    <View style={[styles.container]}>
      <ScrollView
        ref={(ref) => setScrollRef(ref)}
        pagingEnabled
        horizontal
        onScroll={handleImageChange}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {data.length ? (
          data.map((image, index) => (
            <RectButton key={index} onPress={() => onPress(image)}>
              <ImageBackground
                source={{ uri: image }}
                resizeMode="cover"
                style={{ width, height }}
              >
                <LinearGradient
                  style={styles.bannerContent}
                  colors={[
                    secondary100,
                    "transparent",
                    "transparent",
                    secondary100,
                  ]}
                />
              </ImageBackground>
            </RectButton>
          ))
        ) : (
          <LinearGradient
            style={styles.bannerEmptyState}
            colors={[secondary100, "transparent", "transparent", secondary100]}
          >
            <SpaceshipSvg width={80} height={80} />
          </LinearGradient>
        )}
      </ScrollView>
      {data.length > 0 && activeImageIndex !== 0 && (
        <BorderlessButton
          onPress={handlePreviousImage}
          style={styles.previousImageController}
        >
          <MaterialIcons name="arrow-back-ios" size={30} color={primary} />
        </BorderlessButton>
      )}
      {data.length > 0 && activeImageIndex < data.length - 1 && (
        <BorderlessButton
          onPress={handleNextImage}
          style={styles.nextImageController}
        >
          <MaterialIcons name="arrow-forward-ios" size={30} color={primary} />
        </BorderlessButton>
      )}
      <View style={styles.bannerDescription}>
        <Text style={styles.title}>{title}</Text>
        {data.length > 0 && (
          <BorderlessButton onPress={() => toggleLikeImage(activeImageUrl)}>
            <AntDesign
              name={likedImages.includes(activeImageUrl) ? "heart" : "hearto"}
              size={30}
              color={primary}
            />
          </BorderlessButton>
        )}
      </View>
    </View>
  );
}
