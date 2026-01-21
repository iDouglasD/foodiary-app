import { Text, View } from "react-native";
import { DateSwitcher } from "./date-switcher";
import { DailyStats } from "./daily-stats";

export function MealsListHeader() {

  return (
    <View>
      <DateSwitcher />
      <View className='mt-2'>
        <DailyStats
          calories={{ goal: 2000, current: 1350 }}
          proteins={{ goal: 150, current: 90 }}
          carbohydrates={{ goal: 250, current: 180 }}
          fats={{ goal: 70, current: 50 }}
        />
      </View>
      <View className='h-px mt-7 bg-gray-200' />
      <Text className="text-black-700 text-base font-sans-medium tracking-[1.28px] m-5">
        Refeições
      </Text>
    </View>
  )
}