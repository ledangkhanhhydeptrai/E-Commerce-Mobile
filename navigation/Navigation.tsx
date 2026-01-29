import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screens } from "../screens";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

// Custom Tab Bar Component

export const Navigation: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false
      }}
    >
      {screens
        .filter((s) => s.isTab)
        .map((screen) => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              tabBarLabel: screen.label
            }}
          />
        ))}
    </Tab.Navigator>
  );
};
