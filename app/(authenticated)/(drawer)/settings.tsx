import { Button, Text, View } from "react-native";

import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { useNavigation } from "expo-router";

const Settings = () => {
  const navigation = useNavigation();

  const onClick = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View>
      <Text>settings</Text>
      <Button title="Toggle" onPress={onClick} />
    </View>
  );
};

export default Settings;
