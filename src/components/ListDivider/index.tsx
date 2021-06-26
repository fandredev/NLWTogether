import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

type Props = {
  isCentered?: boolean;
};

export function ListDivider({ isCentered }: Props): JSX.Element {
  return (
    <View
      style={[
        styles.container,
        isCentered
          ? {
              marginVertical: 12,
            }
          : { marginTop: 2, marginBottom: 31 },
      ]}
    ></View>
  );
}
