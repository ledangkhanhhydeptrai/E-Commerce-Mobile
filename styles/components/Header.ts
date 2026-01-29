import { StyleSheet, Platform, StatusBar } from "react-native";

// 🎨 PURPLE PREMIUM COLORS
const COLORS = {
  violet: "#8B5CF6",
  purple: "#A855F7",
  hotPink: "#EC4899",
  darkBase: "#1A0B2E", // Changed!
  darkSurface: "#2D1B4E", // Changed!
  darkElevated: "#3D2A5C", // Changed!
  text: "#FFFFFF",
  textSecondary: "#A1A1AA"
};

export const styles = StyleSheet.create({
  // MAIN CONTAINER
  container: {
    backgroundColor: COLORS.darkBase,
    paddingTop:
      Platform.OS === "android" ? (StatusBar.currentHeight || 0) + 16 : 54,
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(139, 92, 246, 0.2)",
    shadowColor: COLORS.violet,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10
  },

  // COMPACT CONTAINER
  containerCompact: {
    backgroundColor: COLORS.darkBase,
    paddingTop:
      Platform.OS === "android" ? (StatusBar.currentHeight || 0) + 12 : 48,
    paddingBottom: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(139, 92, 246, 0.15)",
    shadowColor: COLORS.violet,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8
  },

  // TOP ROW - Logo Left, Icons Right
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  // LOGO CONTAINER - Centered
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },

  // LOGO CONTAINER - Horizontal (Compact)
  logoContainerHorizontal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8
  },

  // LOGO ICON - Large
  logoIcon: {
    fontSize: 32,
    textShadowColor: "rgba(139, 92, 246, 0.4)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8
  },

  // LOGO ICON - Small (Compact)
  logoIconSmall: {
    fontSize: 24,
    textShadowColor: "rgba(139, 92, 246, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6
  },

  // LOGO TEXT - Large
  logoText: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.text,
    letterSpacing: -0.8,
    textTransform: "uppercase",
    textShadowColor: "rgba(139, 92, 246, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10
  },

  // LOGO TEXT - Small (Compact)
  logoTextSmall: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
    letterSpacing: -0.5,
    textTransform: "uppercase",
    textShadowColor: "rgba(139, 92, 246, 0.4)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 8
  },

  // ICONS CONTAINER
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },

  // ICON BUTTON
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(139, 92, 246, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    position: "relative",
    shadowColor: "rgba(139, 92, 246, 0.4)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 6
  },

  // ICON TEXT
  iconText: {
    fontSize: 20
  },

  // BADGE - Notification Counter
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: COLORS.hotPink,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
    borderWidth: 2,
    borderColor: COLORS.darkBase,
    shadowColor: COLORS.hotPink,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8
  },

  // BADGE TEXT
  badgeText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.3
  },

  // GRADIENT UNDERLINE (Optional)
  gradientUnderline: {
    position: "absolute",
    bottom: 0,
    left: "25%",
    width: "50%",
    height: 3,
    backgroundColor: COLORS.violet,
    borderRadius: 2,
    shadowColor: "rgba(139, 92, 246, 0.6)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10
  }
});
