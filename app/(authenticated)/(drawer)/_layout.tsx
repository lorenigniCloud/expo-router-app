import Colors from "@/constants/Colors";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Settings } from "react-native";

const Layout = () => {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.dark.background,
        },
        headerTintColor: "#fff",
        drawerActiveBackgroundColor: Colors.dark.background,
        drawerActiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{ headerShown: false, drawerLabel: "Home" }}
      />
      <Drawer.Screen name="settings" options={{ title: "settings" }} />
    </Drawer>
  );
};

export default Layout;
