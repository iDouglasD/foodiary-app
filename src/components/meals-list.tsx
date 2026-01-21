import { FlatList, Text, View } from "react-native";
import { MealCard } from "./meal-card";
import { MealsListHeader } from "./meals-list-header";
import { Separetor } from "./separator";


export function MealsList() {

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