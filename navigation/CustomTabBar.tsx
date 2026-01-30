import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import styles from "./style";
import { TabParamList } from "../rootStackParamList/TabParamList";

type TabName = keyof TabParamList;

const TAB_CONFIG: Record<
  TabName,
  {
    icon: string;
    colors: {
      primary: string;
      glow: string;
      gradient: [string, string];
    };
  }
> = {
  Home: {
    icon: "📱",
    colors: {
      primary: "#F59E0B",
      glow: "rgba(245, 158, 11, 0.4)",
      gradient: ["#F59E0B", "#D97706"]
    }
  },
  Detail: {
    icon: "🔍",
    colors: {
      primary: "#3B82F6",
      glow: "rgba(59, 130, 246, 0.4)",
      gradient: ["#3B82F6", "#1D4ED8"]
    }
  },
  About: {
    icon: "ℹ️",
    colors: {
      primary: "#8B5CF6",
      glow: "rgba(139, 92, 246, 0.4)",
      gradient: ["#8B5CF6", "#6D28D9"]
    }
  }
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation
}) => {
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBarGradient} />

      <View style={styles.tabBarInner}>
        {state.routes.map((route, index) => {
          const tabName = route.name as TabName;

          const config = TAB_CONFIG[tabName];

          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel ??
            options.title ??
            tabName;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(tabName);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
              activeOpacity={0.7}
            >
              {isFocused && (
                <View
                  style={[
                    styles.activeIndicator,
                    {
                      backgroundColor: config.colors.primary,
                      shadowColor: config.colors.glow
                    }
                  ]}
                />
              )}

              <View
                style={[
                  styles.iconContainer,
                  isFocused && {
                    backgroundColor: `${config.colors.primary}20`,
                    borderWidth: 1,
                    borderColor: `${config.colors.primary}30`,
                    shadowColor: config.colors.glow,
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 1,
                    shadowRadius: 12,
                    elevation: 8
                  }
                ]}
              >
                <Text
                  style={[
                    styles.iconText,
                    {
                      fontSize: isFocused ? 24 : 22,
                      transform: [{ scale: isFocused ? 1.1 : 1 }]
                    }
                  ]}
                >
                  {config.icon}
                </Text>
              </View>

              <Text
                style={[
                  styles.labelText,
                  {
                    color: isFocused
                      ? config.colors.primary
                      : "#666",
                    fontWeight: isFocused ? "700" : "500",
                    marginTop: isFocused ? 6 : 4
                  }
                ]}
              >
                {typeof label === "function"
                  ? label({
                      focused: isFocused,
                      color: isFocused ? config.colors.primary : "#666",
                      position: "below-icon",
                      children: tabName
                    })
                  : label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;
