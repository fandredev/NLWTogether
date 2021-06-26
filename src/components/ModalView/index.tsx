import React, { ReactNode } from "react";
import {
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Background } from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
  children: ReactNode;
  handleCloseGuildsModal: () => void;
};

export function ModalView({
  children,
  handleCloseGuildsModal,
  ...rest
}: Props): JSX.Element {
  return (
    <Modal statusBarTranslucent transparent animationType="slide" {...rest}>
      <TouchableWithoutFeedback onPress={handleCloseGuildsModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
