import { FlatList, Text, View } from "react-native";
import { MealCard } from "./meal-card";
import { MealsListHeader } from "./meals-list-header";
import { Separetor } from "./separator";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export function MealsList() {
  const { bottom } = useSafeAreaInsets();

  const meals = [
    {
      id: '1',
      name: 'Café da manhã',
    },
    {
      id: '2',
      name: 'Almoço',
    },
    {
      id: '3',
      name: 'Jantar',
    },
  ]

  return (
    <FlatList
      data={meals}
      keyExtractor={meal => meal.id}
      ListHeaderComponent={<MealsListHeader />}
      ItemSeparatorComponent={Separetor}
      contentContainerStyle={{ paddingBottom: 80 + bottom + 16 }}
      renderItem={({ item }) => (
        <View className="mx-5">
          <MealCard
            id={item.id}
            name={item.name}
          />
        </View>
      )}
    />
  )
}