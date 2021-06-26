import React from "react";
import { ActivityIndicator, Alert, Image, Text, View } from "react-native";
import IllustrationImg from "../../assets/illustration.png";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";
import { styles } from "./styles";

export function SignIn() {
  const { signIn, loading } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          resizeMode="stretch"
          source={IllustrationImg}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"} e organize suas{"\n"} jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{"\n"} favoritos com seus amigos
          </Text>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
          )}
        </View>
      </View>
    </Background>
  );
}
