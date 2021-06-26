import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

export function SmallInput({ ...rest }: TextInputProps): JSX.Element {
  return (
    <TextInput style={styles.container} keyboardType="numeric" {...rest} />
  );
}
