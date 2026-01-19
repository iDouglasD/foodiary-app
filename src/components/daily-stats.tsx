import { Text, View } from 'react-native';
import { Arc } from './arc';
import { MacroProgress } from '../types/macro';
import { calcMacroPercentage } from '../helper/macros';

interface DailyStatsProps {
  calories: MacroProgress;
  proteins: MacroProgress;
  carbohydrates: MacroProgress;
  fats: MacroProgress;
}

export function DailyStats({
  calories,
  carbohydrates,
  fats,
  proteins,
}: DailyStatsProps) {
  return (
    <View className="items-center justify-center">
      <View className="items-center relative min-h-[172px]">
        <Arc
          percentage={calcMacroPercentage(calories)}
          color="#FF5736"
          radius={160}
          strokeWidth={12}
        />
        <Arc
          percentage={calcMacroPercentage(proteins)}
          color="#2A9D90"
          radius={140}
          strokeWidth={12}
          className="absolute top-[20]"
        />
        <Arc
          percentage={calcMacroPercentage(carbohydrates)}
          color="#E8C468"
          radius={120}
          strokeWidth={12}
          className="absolute top-[40]"
        />
        <Arc
          percentage={calcMacroPercentage(fats)}
          color="#F4A462"
          radius={100}
          strokeWidth={12}
          className="absolute top-[60]"
        />

        <View className="-mt-16 items-center justify-center">
          <Text>
            <Text className="font-sans-bold text-support-tomato text-xl">
              {Math.round(calories.current)}
            </Text>
            <Text className="text-base text-gray-700"> / {calories.goal}</Text>
          </Text>

          <Text className="text-gray-700 mt-1 text-center font-sans-regular text-sm">
            Calorias
          </Text>
        </View>
      </View>

      <View className="p-4 w-full flex-row items-center justify-between">
        <View className="items-center w-1/3 justify-center">
          <Text className="font-sans-bold text-support-teal text-base">
            {Math.round(proteins.current)}g
            <Text className="text-sm text-gray-700"> / {proteins.goal}g</Text>
          </Text>
          <Text className="text-sm text-gray-700">Proteínas</Text>
        </View>

        <View className="items-center w-1/3 justify-center">
          <Text className="font-sans-bold text-support-yellow text-base">
            {Math.round(carbohydrates.current)}g
            <Text className="text-sm text-gray-700"> / {carbohydrates.goal}g</Text>
          </Text>
          <Text className="text-sm text-gray-700">Carboidratos</Text>
        </View>

        <View className="items-center w-1/3 justify-center">
          <Text className="font-sans-bold text-support-orange text-base">
            {Math.round(fats.current)}g
            <Text className="text-sm text-gray-700"> / {fats.goal}g</Text>
          </Text>
          <Text className="text-sm text-gray-700">Gorduras</Text>
        </View>
      </View>
    </View>
  );
}

