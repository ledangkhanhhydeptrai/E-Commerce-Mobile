import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./style";
import { screens } from "../screens";

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabBarContainer}>
      {/* Gradient Overlay */}
      <View style={styles.tabBarGradient} />

      <View style={styles.tabBarInner}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? route.name;
          const isFocused = state.index === index;

          // Get screen config
          const screenConfig = screens.find((s) => s.name === route.name);
          const icon = screenConfig?.icon || "📱";

          // Color scheme per tab
          const tabColors: Record<
            string,
            { primary: string; glow: string; gradient: [string, string] }
          > = {
            Home: {
              primary: "#F59E0B",
              glow: "rgba(245, 158, 11, 0.4)",
              gradient: ["#F59E0B", "#D97706"]
            },
            Categories: {
              primary: "#8B5CF6",
              glow: "rgba(139, 92, 246, 0.4)",
              gradient: ["#8B5CF6", "#7C3AED"]
            },
            Cart: {
              primary: "#EF4444",
              glow: "rgba(239, 68, 68, 0.4)",
              gradient: ["#EF4444", "#DC2626"]
            },
            Favorite: {
              primary: "#EC4899",
              glow: "rgba(236, 72, 153, 0.4)",
              gradient: ["#EC4899", "#DB2777"]
            },
            Profile: {
              primary: "#3B82F6",
              glow: "rgba(59, 130, 246, 0.4)",
              gradient: ["#3B82F6", "#2563EB"]
            }
          };

          const colors = tabColors[route.name] || tabColors.Home;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
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
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
              activeOpacity={0.7}
            >
              {/* Active Indicator */}
              {isFocused && (
                <View
                  style={[
                    styles.activeIndicator,
                    {
                      backgroundColor: colors.primary,
                      shadowColor: colors.glow
                    }
                  ]}
                />
              )}

              {/* Icon Container */}
              <View
                style={[
                  styles.iconContainer,
                  isFocused && {
                    backgroundColor: `${colors.primary}20`,
                    borderWidth: 1,
                    borderColor: `${colors.primary}30`,
                    shadowColor: colors.glow,
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
                  {icon}
                </Text>
              </View>

              {/* Label */}
              <Text
                style={[
                  styles.labelText,
                  {
                    color: isFocused ? colors.primary : "#666",
                    fontWeight: isFocused ? "700" : "500",
                    marginTop: isFocused ? 6 : 4
                  }
                ]}
              >
                {label}
              </Text>

              {/* Badge for Cart (example) */}
              {route.name === "Cart" && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>3</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;
