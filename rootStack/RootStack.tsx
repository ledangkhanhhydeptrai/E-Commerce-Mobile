import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../rootStackParamList/RootStackParamList";
import { Tabs } from "../navigation/Navigation";
import PhoneDetail from "../screens/detail/phoneDetail";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />

      <Stack.Screen name="Detail" component={PhoneDetail} />
    </Stack.Navigator>
  );
};

export default RootStack;
