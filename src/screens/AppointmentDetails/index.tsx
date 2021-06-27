import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import * as Linking from "expo-linking";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  ImageBackground,
  Platform,
  Share,
  Text,
  View,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import BannerImg from "../../assets/banner.png";
import { AppointmentProps } from "../../components/Appointments";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Load } from "../../components/Load";
import { Member, MemberProps } from "../../components/Member";
import { theme } from "../../global/styles/theme";
import { api } from "../../services/api";
import { styles } from "./styles";

type Params = {
  guildSelected: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export function AppointmentDetails(): JSX.Element {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchWidget() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );
      setWidget(response.data);
    } catch (error) {
      Alert.alert(
        "Verifique as configurações do servidor. Será que o Widget está habilitado?"
      );
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  }
  function handleOpenLinking() {
    Linking.openURL(widget.instant_invite);
  }
  useEffect(() => {
    fetchWidget();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total: ${widget.members.length}`}
          />
          <FlatList
            data={widget.members}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
            renderItem={({ item }) => <Member data={item} />}
          />
        </>
      )}
      {guildSelected.guild.owner && (
        <View style={styles.footer}>
          <ButtonIcon onPress={handleOpenLinking} title="Entrar na partida" />
        </View>
      )}
    </Background>
  );
}
