import { View } from "react-native";
import { MealsList } from "../../components/meals-list";
import { HomeHeader } from "./_components/home-header";
import { CreateMealBottomBar } from "../../components/create-meal-bottom-bar";

export function Home() {
  return (
    <View className="flex-1">
      <HomeHeader />
      <MealsList />
      <CreateMealBottomBar />
    </View>
  )
}