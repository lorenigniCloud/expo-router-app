import "react-native-reanimated";

import * as SplashScreen from "expo-splash-screen";

import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useFonts } from "expo-font";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.dark.background,
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="register"
          options={{ title: "Create Account", headerBackTitle: "Login" }}
        />
        <Stack.Screen
          name="privacy"
          options={{
            title: "Privacy Policy",
            headerBackTitle: "Login",
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="(authenticated)/(drawer)"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
};

// Perfect place to put contexts
export default function RootLayoutNav() {
  return <InitialLayout />;
}
