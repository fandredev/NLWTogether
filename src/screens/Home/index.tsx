import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Appointments } from "../../components/Appointments";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export function Home(): JSX.Element {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da MD10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleNavigateToAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }
  function handleNavigateToAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }
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
      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total: 6" />
        <FlatList
          data={appointments}
          keyExtractor={({ id }) => id}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => (
            <Appointments
              data={item}
              onPress={handleNavigateToAppointmentDetails}
            />
          )}
        />
      </View>
    </Background>
  );
}
