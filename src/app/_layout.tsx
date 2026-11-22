import "@/global.css";

import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CACHE_VERSION, ONE_DAY, queryClient, queryPersister } from "@/shared/api/query-client";
import { fonts } from "@/shared/constants/fonts";
import { DarkTheme } from "@/shared/theme/dark-theme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  const [loaded, error] = useFonts({
    [fonts.regular]: require("@/shared/assets/fonts/inter/Inter_18pt-Regular.ttf"),
    [fonts.bold]: require("@/shared/assets/fonts/inter/Inter_18pt-Bold.ttf"),
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
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister: queryPersister, maxAge: ONE_DAY, buster: CACHE_VERSION }}>
      <StatusBar style="light" />
      <View style={{ flex: 1, paddingTop: insets.top }}>
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: DarkTheme.colors.background } }} />
      </View>
    </PersistQueryClientProvider>
  );
}
