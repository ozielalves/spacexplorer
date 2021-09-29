import React, { useCallback, useState } from "react";
import { Linking, ScrollView, Share } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { DetailItem } from "../../components/DetailItem";
import { ImageModal } from "../../components/ImageModal";
import { ImageSlider } from "../../components/ImageSlider";
import { LaunchDetailsProps } from "../../routes/auth.routes";

import { theme } from "../../global/styles/theme";
import LaunchRocketSvg from "../../assets/launch-rocket.svg";

export function LaunchDetails() {
  const route = useRoute();
  const { data } = route.params as LaunchDetailsProps;

  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const articleDomainUrl = data.links.article_link
    ? getUrlDomain(data.links.article_link)
    : "";

  const toggleImageModalVisibility = useCallback(() => {
    setImageModalVisible((prev) => !prev);
  }, [setImageModalVisible]);

  const handlePressImage = useCallback(
    (imageUrl: string) => {
      setSelectedImage(imageUrl);
      toggleImageModalVisibility();
    },
    [setSelectedImage, toggleImageModalVisibility]
  );

  function getUrlDomain(url: string) {
    const pathArray = url.split("/");
    const domain = pathArray[2];

    return domain;
  }

  function handleShareMission() {
    if (data.links.article_link) {
      const message = `See mission SpaceX ${data.mission_name} article at ${articleDomainUrl}`;

      Share.share({
        message,
        url: data.links.article_link,
      });
    }
  }

  return (
    <Background>
      <Header
        title="Mission"
        action={
          data.links.article_link && (
            <BorderlessButton onPress={handleShareMission}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />

      <ImageSlider
        title={data.mission_name}
        data={data.links.flickr_images}
        onPress={handlePressImage}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ListHeader title="Launch Details" />
        <DetailItem
          icon={<LaunchRocketSvg />}
          title="Rocket Name"
          description={data.rocket.rocket_name}
        />
        <ListDivider />
        <DetailItem
          icon={
            <MaterialCommunityIcons
              name="calendar-today"
              size={24}
              color={theme.colors.primary}
            />
          }
          title="Lauch Date"
          description={data.launch_date_local}
        />
        <ListDivider />
        {data.links.article_link && (
          <>
            <RectButton
              onPress={() => Linking.openURL(data.links.article_link!)}
            >
              <DetailItem
                icon={
                  <MaterialIcons
                    name="article"
                    size={24}
                    color={theme.colors.primary}
                  />
                }
                title="Article"
                description={`${articleDomainUrl} - Click to view`}
              />
            </RectButton>
            <ListDivider />
          </>
        )}
      </ScrollView>
      <ImageModal
        urlImage={selectedImage}
        visible={imageModalVisible}
        onRequestClose={toggleImageModalVisibility}
      />
    </Background>
  );
}
