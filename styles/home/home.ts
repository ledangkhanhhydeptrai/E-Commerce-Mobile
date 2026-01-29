import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 40) / 2;

// 🎨 PURPLE PREMIUM COLOR PALETTE
const COLORS = {
  // Primary
  violet: "#8B5CF6",
  purple: "#A855F7",
  deepPurple: "#7C3AED",
  
  // Accents
  hotPink: "#EC4899",
  fuchsia: "#D946EF",
  cyan: "#06B6D4",
  skyBlue: "#38BDF8",
  
  // Status
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
  
  // Backgrounds
  darkBase: "#0A0A0F",
  darkSurface: "#1A1A24",
  darkElevated: "#25253A",
  
  // Text
  textPrimary: "#FFFFFF",
  textSecondary: "#A1A1AA",
  textTertiary: "#71717A"
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBase
  },
  
  scrollView: {
    flex: 1
  },
  
  content: {
    paddingTop: 20
  },

  // PROMO BANNER
  promoBanner: {
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: COLORS.darkSurface,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.2)"
  },
  
  promoGradient: {
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.violet
  },
  
  promoContent: {
    flex: 1
  },
  
  promoTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FFF",
    marginBottom: 4,
    letterSpacing: -0.5
  },
  
  promoSubtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFF",
    marginBottom: 4,
    opacity: 0.95
  },
  
  promoDescription: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 16
  },
  
  promoButton: {
    backgroundColor: "#FFF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8
  },
  
  promoButtonText: {
    color: COLORS.violet,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.5
  },
  
  promoImageContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  
  promoEmoji: {
    fontSize: 64
  },

  // SECTIONS
  section: {
    marginBottom: 24
  },
  
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16
  },
  
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.textPrimary,
    letterSpacing: -0.5
  },
  
  sectionSubtitle: {
    fontSize: 13,
    color: COLORS.textTertiary,
    marginTop: 4
  },
  
  seeAllText: {
    fontSize: 14,
    color: COLORS.violet,
    fontWeight: "600"
  },
  
  viewModeButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)"
  },
  
  viewModeIcon: {
    fontSize: 18,
    color: COLORS.textSecondary
  },

  // CATEGORIES
  categoriesContainer: {
    paddingHorizontal: 20
  },
  
  categoryCard: {
    alignItems: "center",
    width: 90
  },
  
  categoryIconContainer: {
    width: 72,
    height: 72,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    shadowColor: COLORS.violet,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)"
  },
  
  categoryIcon: {
    fontSize: 32
  },
  
  categoryName: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.textPrimary,
    textAlign: "center"
  },

  // PRODUCTS GRID
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20
  },
  
  productCard: {
    width: CARD_WIDTH,
    backgroundColor: COLORS.darkSurface,
    borderRadius: 20,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8
  },
  
  productImageDisabled: {
    opacity: 0.5
  },

  // STOCK BADGE
  stockBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    zIndex: 10
  },
  
  stockBadgeText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.5
  },

  // LIKE BUTTON
  likeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)"
  },
  
  likeIcon: {
    fontSize: 18
  },

  // OUT OF STOCK
  outOfStockOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center"
  },
  
  outOfStockText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 2
  },

  // PRODUCT INFO
  productInfo: {
    padding: 16
  },
  
  productName: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginBottom: 12,
    lineHeight: 20,
    height: 40
  },
  
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  
  priceContainer: {
    flex: 1
  },
  
  productPrice: {
    fontSize: 17,
    fontWeight: "800",
    color: COLORS.violet,
    letterSpacing: -0.5
  },

  // ADD TO CART BUTTON
  addToCartButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.violet,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(139, 92, 246, 0.5)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 8
  },
  
  addToCartButtonDisabled: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    shadowOpacity: 0
  },
  
  addToCartIcon: {
    fontSize: 20
  },

  // LOADING & EMPTY STATES
  loadingContainer: {
    paddingVertical: 60,
    alignItems: "center"
  },
  
  loadingText: {
    marginTop: 16,
    fontSize: 15,
    color: COLORS.textTertiary,
    fontWeight: "500"
  },
  
  emptyContainer: {
    paddingVertical: 60,
    alignItems: "center",
    paddingHorizontal: 40
  },
  
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16
  },
  
  emptyText: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 8,
    textAlign: "center"
  },
  
  emptySubtext: {
    fontSize: 14,
    color: COLORS.textTertiary,
    textAlign: "center"
  }
});