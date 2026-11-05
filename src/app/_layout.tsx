import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { fonts } from '@/constants/fonts';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    [fonts.regular]: require('@/assets/fonts/inter/Inter_18pt-Regular.ttf'),
    [fonts.bold]: require('@/assets/fonts/inter/Inter_18pt-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Stack />
      <StatusBar style="auto" />
    </>
  );
}
