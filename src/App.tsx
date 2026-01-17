import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  HostGrotesk_700Bold
} from '@expo-google-fonts/host-grotesk'

import { Text, View } from 'react-native';
import { useEffect } from 'react';

import './styles/global.css';

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
    <View className="bg-lime-500 flex-1 items-center justify-center">
      <Text className="text-base font-sans-semibold">Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

