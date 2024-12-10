import { Link, Tabs } from "expo-router";

import { Alert } from "react-native";
import Colors from "@/constants/Colors";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.dark.background,
        },
        headerTintColor: "#fff",
        headerRight: () => (
          <Link style={{ paddingRight: 10 }} href={"/"} replace asChild>
            <Ionicons name="log-out-outline" size={24} color="#fff" />
          </Link>
        ),
        headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "My Homefeed",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="action"
        options={{
          // the following line allows to make the tab disappear
          // href: null,
          tabBarLabel: "Action",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alert-circle-outline" color={color} size={size} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            Alert.alert("Alert", "this is an alert");
          },
        })}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "My Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
