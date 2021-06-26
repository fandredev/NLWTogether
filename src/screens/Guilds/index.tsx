import React from "react";
import { FlatList, View } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";

type Guilds = {
  handleGuildSeleted: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSeleted }: Guilds) {
  const guilds = [
    { id: "1", name: "Lendários", icon: "image.png", owner: true },
    { id: "2", name: "Galera do Game", icon: "image.png", owner: true },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSeleted(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
