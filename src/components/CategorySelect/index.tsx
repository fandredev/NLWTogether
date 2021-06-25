import React from "react";
import { ScrollView } from "react-native";
import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { styles } from "./styles";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({
  categorySelected,
  setCategory,
}: Props): JSX.Element {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(({ id, icon, title }) => (
        <Category
          key={id}
          title={title}
          icon={icon}
          checked={id === categorySelected}
          onPress={() => setCategory(id)}
        />
      ))}
    </ScrollView>
  );
}
