import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";
import { api } from "../../services/api";
import { styles } from "./styles";

type Guilds = {
  handleGuildSeleted: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSeleted }: Guilds) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api("/users/@me/guilds");
    console.log(response, "Response");

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={guilds}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSeleted(item)} />
          )}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          ListHeaderComponent={() => <ListDivider isCentered />}
          contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
          showsVerticalScrollIndicator={false}
          style={styles.guilds}
        />
      )}
    </View>
  );
}
