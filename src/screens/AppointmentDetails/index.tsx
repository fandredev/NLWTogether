import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import BannerImg from "../../assets/banner.png";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function AppointmentDetails(): JSX.Element {
  const members = [
    {
      id: "1",
      username: "Felipe",
      avatarUrl: "https://github.com/flubyGit.png",
      status: "online",
    },
    {
      id: "2",
      username: "Diego",
      avatarUrl: "https://github.com/diego3g.png",
      status: "offline",
    },
    {
      id: "3",
      username: "Vitor",
      avatarUrl: "https://github.com/lourencovitor.png",
      status: "offline",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da MD10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total: 3" />
      <FlatList
        data={members}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
        renderItem={({ item }) => <Member data={item} />}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
