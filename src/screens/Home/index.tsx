import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import { AppointmentProps, Appointments } from "../../components/Appointments";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Load } from "../../components/Load";
import { Profile } from "../../components/Profile";
import { COLLECTION_APPOINTMENTS } from "../../configs/storage";
import { styles } from "./styles";

export function Home(): JSX.Element {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleNavigateToAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate("AppointmentDetails", { guildSelected });
  }

  function handleNavigateToAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else setAppointments(storage);

    setLoading(false);
  }
  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );
  // useEffect(() => {
  //   async function clearStorage() {
  //     await AsyncStorage.removeItem(COLLECTION_APPOINTMENTS);
  //   }
  //   clearStorage();
  // });
  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleNavigateToAppointmentCreate} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total: ${appointments.length}`}
          />
          <FlatList
            data={appointments}
            keyExtractor={({ id }) => id}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 69 }}
            renderItem={({ item }) => (
              <Appointments
                data={item}
                onPress={() => handleNavigateToAppointmentDetails(item)}
              />
            )}
          />
        </>
      )}
    </Background>
  );
}
