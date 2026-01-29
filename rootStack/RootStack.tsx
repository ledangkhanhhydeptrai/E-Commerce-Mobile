import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "../screens";
const Stack = createNativeStackNavigator();
const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      {screens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{ headerShown: false }} // ✅ boolean
        />
      ))}
    </Stack.Navigator>
  );
};

export default RootStack;
