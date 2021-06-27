import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { theme } from "../../global/styles/theme";
import { GuildIcon } from "../GuildIcon";
import { styles } from "./styles";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export function Guild({ data, ...rest }: Props): JSX.Element {
  const { name, owner } = data;
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon guildId={data.id} iconId={data.icon} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{name} </Text>
        </View>
        <Text style={styles.type}>{owner ? "Administrador" : "Convidado"}</Text>
      </View>
      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  );
}
