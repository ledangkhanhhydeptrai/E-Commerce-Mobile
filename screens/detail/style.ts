import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#666"
  },
  errorIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ffebee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16
  },
  errorIconText: {
    fontSize: 40
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8
  },
  errorText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 20
  },
  retryButton: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8
  },
  retryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  imageContainer: {
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    marginBottom: 10
  },
  productImage: {
    width: width - 40,
    height: width - 40
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 10
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12
  },
  stockContainer: {
    marginBottom: 16
  },
  stockBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20
  },
  stockText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600"
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0"
  },
  priceLabel: {
    fontSize: 16,
    color: "#666",
    marginRight: 10
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e53935"
  },
  descriptionContainer: {
    marginTop: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12
  },
  specItem: {
    flexDirection: "row",
    paddingVertical: 8
  },
  specLabel: {
    fontSize: 15,
    color: "#666",
    width: 120
  },
  specValue: {
    fontSize: 15,
    color: "#333",
    flex: 1
  },
  actionContainer: {
    flexDirection: "row",
    padding: 20,
    gap: 12,
    backgroundColor: "#fff",
    marginTop: 10
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#2196F3"
  },
  addToCartText: {
    color: "#2196F3",
    fontSize: 16,
    fontWeight: "bold"
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: "#2196F3",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center"
  },
  buyNowText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});