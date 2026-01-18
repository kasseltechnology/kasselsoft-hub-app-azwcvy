
import { SystemBars } from "react-native-edge-to-edge";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme, Alert } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { useNetworkState } from "expo-network";
import { WidgetProvider } from "@/contexts/WidgetContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Stack, router } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  console.log('RootLayout: Component mounting');
  
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const { isConnected } = useNetworkState();

  useEffect(() => {
    console.log('RootLayout: Fonts loaded:', loaded);
    if (loaded) {
      console.log('RootLayout: Hiding splash screen');
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const colorScheme = useColorScheme();
  console.log('RootLayout: Color scheme:', colorScheme);

  if (!loaded) {
    console.log('RootLayout: Waiting for fonts to load...');
    return null;
  }

  console.log('RootLayout: Rendering app');
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LanguageProvider>
        <WidgetProvider>
          <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <SystemBars style={colorScheme === "dark" ? "light" : "dark"} />
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: "modal" }} />
              <Stack.Screen
                name="transparent-modal"
                options={{
                  presentation: "transparentModal",
                  animation: "fade",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="formsheet"
                options={{
                  presentation: "formSheet",
                  headerShown: false,
                }}
              />
            </Stack>
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
          </ThemeProvider>
        </WidgetProvider>
      </LanguageProvider>
    </GestureHandlerRootView>
  );
}
