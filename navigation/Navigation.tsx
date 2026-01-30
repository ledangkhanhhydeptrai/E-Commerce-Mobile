import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TabParamList } from "../rootStackParamList/TabParamList";
import ECommerceMobile from "../screens/home/Home";
import About from "../screens/about/About";

const Tab = createBottomTabNavigator<TabParamList>();

export const Tabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: React.ComponentProps<typeof Ionicons>["name"] = "home";

          const iconSize = focused ? 28 : 24;
          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },

        tabBarStyle: {
          backgroundColor: "#fe8a3cff",
          height: 70,
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ffe0b2",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 5
        },
        tabBarItemStyle: {
          borderRadius: 10,
          paddingVertical: 10,
          marginHorizontal: 5
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={ECommerceMobile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
