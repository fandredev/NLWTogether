import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import uuid from "react-native-uuid";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildProps } from "../../components/Guild";
import { GuildIcon } from "../../components/GuildIcon";
import { Header } from "../../components/Header";
import { ModalView } from "../../components/ModalView";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { COLLECTION_APPOINTMENTS } from "../../configs/storage";
import { theme } from "../../global/styles/theme";
import { Guilds } from "../Guilds";
import { styles } from "./styles";

export function AppointmentCreate(): JSX.Element {
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }
  function handleCloseGuildsModal() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setOpenGuildsModal(false);
    setGuild(guildSelected);
  }
  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }
  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    };
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS); // Existe algo antes?
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate("Home");
  }
  const { name, icon } = guild;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />
          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>
          <CategorySelect
            hasCheckbox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />
          <View style={styles.form}>
            <RectButton onPress={handleOpenGuildsModal}>
              <View style={styles.select}>
                {icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <View style={styles.image} />
                )}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {name ? name : "Selecione um servidor"}
                  </Text>
                </View>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>
            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} onChangeText={setDay} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} onChangeText={setMonth} />
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} onChangeText={setHour} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} onChangeText={setMinute} />
                </View>
              </View>
            </View>
            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caracteresLimit}>Max: 100 caracteres</Text>
            </View>
            <TextArea
              onChangeText={setDescription}
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect
            />
            <View style={styles.footer}>
              <Button onPress={handleSave} />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView
        visible={openGuildsModal}
        handleCloseGuildsModal={handleCloseGuildsModal}
      >
        <Guilds handleGuildSeleted={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
