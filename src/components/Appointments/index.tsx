import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import CalendarSvg from "../../assets/calendar.svg";
import PlayerSvg from "../../assets/player.svg";
import { theme } from "../../global/styles/theme";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";
import { styles } from "./styles";

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointments({ data, ...rest }: Props): JSX.Element {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playerInfo}>
              <PlayerSvg fill={owner ? primary : on} />
            </View>
            <Text style={[styles.player, { color: owner ? primary : on }]}>
              {owner ? "Anfitrião" : "Visitante"}
            </Text>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
