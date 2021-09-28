import React from "react";
import {
  Modal,
  ModalProps,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import { styles } from "./styles";

interface ImageModalProps extends ModalProps {
  urlImage: string;
}

export function ImageModal({ urlImage, ...props }: ImageModalProps) {
  return (
    <Modal {...props} animationType="fade" transparent animated>
      <TouchableOpacity
        onPressOut={props.onRequestClose}
        activeOpacity={1}
        style={styles.container}
      >
        <TouchableWithoutFeedback>
          <Image
            source={{ uri: urlImage }}
            style={styles.image}
            resizeMode="center"
          />
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}
