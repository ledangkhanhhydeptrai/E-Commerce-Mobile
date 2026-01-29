import { Text, View } from "react-native";
import React from "react";
import { styles } from "../../styles/components/Header";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoIcon}>🛍️</Text>
        <Text style={styles.logoText}>Mobile E-Commerce</Text>
      </View>
    </View>
  );
};

export default Header;