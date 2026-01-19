import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  HostGrotesk_700Bold
} from '@expo-google-fonts/host-grotesk'

import { View } from 'react-native';
import { useEffect } from 'react';

import './styles/global.css';
import { HomeHeader } from './components/home-header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DateSwitcher } from './components/date-switcher';
import { DailyStats } from './components/daily-stats';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    HostGrotesk_400Regular,
    HostGrotesk_500Medium,
    HostGrotesk_600SemiBold,
    HostGrotesk_700Bold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <View className="flex-1 bg-white">
      <SafeAreaProvider>
        <HomeHeader />
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
      </SafeAreaProvider>
    </View>
  );
}

