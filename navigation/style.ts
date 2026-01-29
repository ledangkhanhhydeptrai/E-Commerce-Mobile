import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute" as "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(10, 10, 10, 0.98)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.05)",
    paddingBottom: Platform.OS === "ios" ? 25 : 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 24
  },
  tabBarGradient: {
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "rgba(245, 158, 11, 0.3)"
  },
  tabBarInner: {
    flexDirection: "row" as "row",
    justifyContent: "space-around" as "space-around",
    alignItems: "center" as "center",
    paddingTop: 12,
    paddingHorizontal: 16,
    position: "relative" as "relative"
  },
  tabItem: {
    flex: 1,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    paddingVertical: 8,
    position: "relative" as "relative"
  },
  activeIndicator: {
    position: "absolute" as "absolute",
    top: -12,
    width: 40,
    height: 4,
    borderRadius: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: "center" as "center",
    alignItems: "center" as "center",
    backgroundColor: "transparent"
  },
  iconText: {},
  labelText: {
    fontSize: 11,
    letterSpacing: 0.3,
    textAlign: "center" as "center"
  },
  badge: {
    position: "absolute" as "absolute",
    top: 4,
    right: "50%" as any,
    marginRight: -18,
    backgroundColor: "#EF4444",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center" as "center",
    alignItems: "center" as "center",
    paddingHorizontal: 6,
    borderWidth: 2,
    borderColor: "#0A0A0A",
    shadowColor: "#EF4444",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 8
  },
  badgeText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "700" as "700",
    letterSpacing: 0.3
  }
});

export default styles;
