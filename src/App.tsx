import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
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
      </SafeAreaProvider>
    </View>
  );
}

