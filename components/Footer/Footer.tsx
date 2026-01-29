import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/components/Footer";

type TabItem = {
  id: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  iconOutline: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  badge?: number;
};

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs: TabItem[] = [
    {
      id: "home",
      icon: "home",
      iconOutline: "home-outline",
      label: "Trang chủ"
    },
    {
      id: "category",
      icon: "grid",
      iconOutline: "grid-outline",
      label: "Danh mục"
    },
    {
      id: "cart",
      icon: "cart",
      iconOutline: "cart-outline",
      label: "Giỏ hàng",
      badge: 3
    },
    {
      id: "favorite",
      icon: "heart",
      iconOutline: "heart-outline",
      label: "Yêu thích"
    },
    {
      id: "profile",
      icon: "person",
      iconOutline: "person-outline",
      label: "Tài khoản"
    }
  ];

  return (
    <View style={styles.footer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tabItem}
          onPress={() => setActiveTab(tab.id)}
          activeOpacity={0.7}
        >
          <View style={styles.iconContainer}>
            <Ionicons
              name={activeTab === tab.id ? tab.icon : tab.iconOutline}
              size={24}
              color={activeTab === tab.id ? "#FF6B6B" : "#999"}
            />
            {tab.badge && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{tab.badge}</Text>
              </View>
            )}
          </View>
          <Text
            style={[
              styles.tabLabel,
              activeTab === tab.id && styles.activeTabLabel
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Footer;
