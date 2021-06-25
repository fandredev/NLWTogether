import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile(): JSX.Element {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/flubyGit.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Felipe</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
