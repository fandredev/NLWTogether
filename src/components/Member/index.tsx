import React from "react";
import { Text, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export type MemberProps = {
  id: string;
  username: string;
  avatarUrl: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export function Member({ data }: Props): JSX.Element {
  const { avatarUrl, username } = data;
  const isOnline = data.status === "online";
  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar urlImage={avatarUrl} />
      <View>
        <Text style={styles.title}>{username}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : primary,
              },
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
}
