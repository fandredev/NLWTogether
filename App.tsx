import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import { useFonts } from "expo-font";
import React from "react";
import { StatusBar, Text } from "react-native";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_700Bold,
  });
  if (!fontsLoaded) return <Text>Fonts nao foram carregadas</Text>;

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </>
  );
}
