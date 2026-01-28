import { StyleSheet } from "react-native";

export const TabStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    paddingBottom: 8,
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: "hidden"
  },
  waveBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: "#F3F4F6"
  },
  navContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 8
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingVertical: 8
  },
  activeBackground: {
    position: "absolute",
    top: 0,
    left: 4,
    right: 4,
    bottom: 0,
    borderRadius: 16
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    backgroundColor: "transparent"
  },
  iconContainerActive: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5
  },
  icon: {
    fontSize: 24
  },
  iconActive: {
    fontSize: 26
  },
  label: {
    fontSize: 11,
    fontWeight: "600",
    color: "#9CA3AF",
    marginTop: 2
  },
  labelActive: {
    fontWeight: "700",
    fontSize: 11
  },
  activeDot: {
    position: "absolute",
    bottom: 2,
    width: 4,
    height: 4,
    borderRadius: 2
  }
});
