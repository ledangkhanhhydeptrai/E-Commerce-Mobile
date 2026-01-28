import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
export const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6"
  },
  scrollView: {
    flex: 1
  },

  // Header Styles
  header: {
    backgroundColor: "#1E293B",
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: -0.5
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#FCD34D",
    marginTop: 4
  },
  cartContainer: {
    position: "relative"
  },
  cartIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#FB923C",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  cartEmoji: {
    fontSize: 24
  },
  cartBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 20,
    height: 20,
    backgroundColor: "#EF4444",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  cartBadgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700"
  },

  // Search Bar
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)"
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 12
  },
  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 15
  },

  // Section
  section: {
    paddingHorizontal: 24,
    paddingVertical: 24
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B"
  },
  seeAllText: {
    fontSize: 14,
    color: "#F59E0B",
    fontWeight: "600"
  },

  // Deals
  dealsScroll: {
    marginHorizontal: -24,
    paddingHorizontal: 24
  },
  dealCard: {
    width: 200,
    padding: 20,
    borderRadius: 20,
    marginRight: 12
  },
  dealTitle: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "600",
    opacity: 0.9
  },
  dealDiscount: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
    marginTop: 4
  },
  dealButton: {
    marginTop: 12,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start"
  },
  dealButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600"
  },

  // Categories
  categoriesGrid: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  categoryItem: {
    alignItems: "center",
    width: (width - 72) / 4
  },
  categoryIcon: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8
  },
  categoryEmoji: {
    fontSize: 36
  },
  categoryName: {
    fontSize: 12,
    color: "#475569",
    fontWeight: "600",
    textAlign: "center"
  },

  // Loading & Empty States
  loadingContainer: {
    paddingVertical: 60,
    alignItems: "center"
  },
  loadingText: {
    marginTop: 16,
    fontSize: 14,
    color: "#64748B"
  },
  emptyContainer: {
    paddingVertical: 60,
    alignItems: "center"
  },
  emptyText: {
    fontSize: 14,
    color: "#64748B"
  },

  // Products
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  productCard: {
    width: (width - 60) / 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F1F5F9",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  productImageContainer: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    height: 180
  },
  productTag: {
    position: "absolute",
    top: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 2
  },
  productTagText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700"
  },
  likeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2
  },
  likeIcon: {
    fontSize: 18
  },
  productImage: {
    width: "100%",
    height: "100%"
  },
  productInfo: {
    padding: 16
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E293B",
    marginBottom: 12,
    minHeight: 40
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: "#EF4444"
  },
  addButton: {
    width: 32,
    height: 32,
    backgroundColor: "#FB923C",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700"
  },

  // Bottom Navigation
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    paddingVertical: 12,
    paddingHorizontal: 24,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  navItem: {
    flex: 1,
    alignItems: "center"
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4
  },
  navIconActive: {
    transform: [{ scale: 1.1 }]
  },
  navLabel: {
    fontSize: 11,
    color: "#94A3B8",
    fontWeight: "600"
  },
  navLabelActive: {
    color: "#F59E0B"
  }
});
