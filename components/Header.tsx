import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const cartItemCount = 3; // Số lượng sản phẩm trong giỏ hàng

  return (
    <View style={styles.container}>
      {/* Top Row - Logo & Icons */}
      <View style={styles.topRow}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>👜</Text>
          <Text style={styles.logoText}>LuxeBag</Text>
        </View>

        {/* Right Icons */}
        <View style={styles.iconsContainer}>
          {/* Notifications */}
          <Pressable style={styles.iconButton}>
            <Text style={styles.icon}>🔔</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </Pressable>

          {/* Cart */}
          <Pressable style={styles.iconButton}>
            <Text style={styles.icon}>🛒</Text>
            {cartItemCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartItemCount}</Text>
              </View>
            )}
          </Pressable>

          {/* Profile */}
          <Pressable style={styles.profileButton}>
            <Text style={styles.profileText}>A</Text>
          </Pressable>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm túi xách, thương hiệu..."
          placeholderTextColor="#8e8e93"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <Pressable onPress={() => setSearchQuery("")}>
            <Text style={styles.clearIcon}>✕</Text>
          </Pressable>
        )}
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <Pressable style={[styles.categoryChip, styles.categoryActive]}>
          <Text style={[styles.categoryText, styles.categoryTextActive]}>
            Tất cả
          </Text>
        </Pressable>
        <Pressable style={styles.categoryChip}>
          <Text style={styles.categoryText}>Túi xách</Text>
        </Pressable>
        <Pressable style={styles.categoryChip}>
          <Text style={styles.categoryText}>Ví</Text>
        </Pressable>
        <Pressable style={styles.categoryChip}>
          <Text style={styles.categoryText}>Balo</Text>
        </Pressable>
        <Pressable style={styles.categoryChip}>
          <Text style={styles.categoryText}>Sale</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  logoIcon: {
    fontSize: 28,
    marginRight: 8
  },
  logoText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1c1c1e",
    letterSpacing: -0.5
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  iconButton: {
    position: "relative",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 20
  },
  icon: {
    fontSize: 20
  },
  badge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#ff3b30",
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: "#fff"
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "800"
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#007aff",
    justifyContent: "center",
    alignItems: "center"
  },
  profileText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700"
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#1c1c1e",
    padding: 0
  },
  clearIcon: {
    fontSize: 16,
    color: "#8e8e93",
    fontWeight: "600",
    marginLeft: 8
  },
  categoriesContainer: {
    flexDirection: "row",
    gap: 8
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "transparent"
  },
  categoryActive: {
    backgroundColor: "#1c1c1e",
    borderColor: "#1c1c1e"
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e"
  },
  categoryTextActive: {
    color: "#fff"
  }
});
