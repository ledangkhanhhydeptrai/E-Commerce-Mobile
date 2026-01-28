import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screens } from "../screens";
const Tab = createBottomTabNavigator();
const getTabIcon = (routeName: string, focused: boolean) => {
  const icons: Record<string, string> = {
    Home: "🏠",
    Categories: "📱",
    Cart: "🛒",
    Favorite: "❤️",
    Profile: "👤"
  };

  const colors: Record<string, string> = {
    Home: "#F59E0B",
    Categories: "#8B5CF6",
    Cart: "#EF4444",
    Favorite: "#EC4899",
    Profile: "#3B82F6"
  };

  return (
    <View
      style={{
        backgroundColor: focused ? colors[routeName] : "transparent",
        padding: 10,
        borderRadius: 20
      }}
    >
      <Text style={{ fontSize: 18, color: focused ? "#fff" : "#555" }}>
        {icons[routeName]}
      </Text>
    </View>
  );
};
const Navigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5
        },
        tabBarIcon: ({ focused }) => getTabIcon(route.name, focused),
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#888"
      })}
    >
      {screens
        .filter((s) => s.isTab)
        .map((screen) => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              tabBarLabel: screen.label,
              tabBarIcon: () => <Text>{screen.icon}</Text>
            }}
          />
        ))}
    </Tab.Navigator>
  );
};

export default Navigation;
