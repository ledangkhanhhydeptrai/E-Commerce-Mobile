import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  RefreshControl,
  Animated
} from "react-native";
import { styles } from "../../styles/home/home";
import Header from "../../components/Header/Header";
import useHome from "../../features/home/hooks/useHome";

export default function ECommerceMobile() {
  const [likedItems, setLikedItems] = React.useState<Set<string>>(new Set());
  const { data, loading, error } = useHome();
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 800);
  };
  const toggleLike = (id: string) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(price);
  };

  const getStockStatus = (status: string) => {
    switch (status) {
      case "IN_STOCK":
        return {
          text: "Còn hàng",
          color: "#10B981",
          glow: "rgba(16, 185, 129, 0.5)"
        };
      case "OUT_OF_STOCK":
        return {
          text: "Hết hàng",
          color: "#EF4444",
          glow: "rgba(239, 68, 68, 0.5)"
        };
      case "LOW_STOCK":
        return {
          text: "Sắp hết",
          color: "#F59E0B",
          glow: "rgba(245, 158, 11, 0.5)"
        };
      default:
        return {
          text: "Liên hệ",
          color: "#71717A",
          glow: "rgba(113, 113, 122, 0.3)"
        };
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <Animated.ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#8B5CF6"
            colors={["#8B5CF6"]}
          />
        }
      >
        <View style={styles.content}>
          {/* Promo Banner */}
          <View style={styles.promoBanner}>
            <View style={styles.promoGradient}>
              <View style={styles.promoContent}>
                <Text style={styles.promoTitle}>🎉 Flash Sale</Text>
                <Text style={styles.promoSubtitle}>Giảm giá lên đến 50%</Text>
                <Text style={styles.promoDescription}>
                  Hàng ngàn sản phẩm chính hãng
                </Text>
                <TouchableOpacity style={styles.promoButton}>
                  <Text style={styles.promoButtonText}>Mua ngay</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.promoImageContainer}>
                <Text style={styles.promoEmoji}>🎁</Text>
              </View>
            </View>
          </View>

          {/* data */}
          <View style={[styles.section, { paddingBottom: 100 }]}>
            <View style={styles.sectionHeader}>
              <View>
                <Text style={styles.sectionTitle}>Sản phẩm nổi bật</Text>
                <Text style={styles.sectionSubtitle}>
                  {data.length} sản phẩm
                </Text>
              </View>
              <TouchableOpacity style={styles.viewModeButton}>
                <Text style={styles.viewModeIcon}>⋮⋮</Text>
              </TouchableOpacity>
            </View>

            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#8B5CF6" />
                <Text style={styles.loadingText}>Đang tải sản phẩm...</Text>
              </View>
            ) : data.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyEmoji}>📦</Text>
                <Text style={styles.emptyText}>Không có sản phẩm nào</Text>
                <Text style={styles.emptySubtext}>Hãy quay lại sau nhé!</Text>
              </View>
            ) : (
              <View style={styles.productsGrid}>
                {data.map((product, index) => {
                  const stockInfo = getStockStatus(product.stockStatus);
                  const isOutOfStock = product.stockStatus === "OUT_OF_STOCK";

                  return (
                    <TouchableOpacity
                      key={product.id}
                      style={[
                        styles.productCard,
                        { marginRight: index % 2 === 0 ? 12 : 0 }
                      ]}
                      activeOpacity={0.9}
                    >
                      {/* Product Image */}
                      <View
                        style={[
                          { width: "100%" },
                          isOutOfStock && styles.productImageDisabled
                        ]}
                      >
                        {/* Stock Badge */}
                        <View
                          style={[
                            styles.stockBadge,
                            {
                              backgroundColor: stockInfo.color,
                              shadowColor: stockInfo.glow
                            }
                          ]}
                        >
                          <Text style={styles.stockBadgeText}>
                            {stockInfo.text}
                          </Text>
                        </View>

                        {/* Like Button */}
                        <TouchableOpacity
                          style={styles.likeButton}
                          onPress={() => toggleLike(product.id)}
                          activeOpacity={0.7}
                        >
                          <Text style={styles.likeIcon}>
                            {likedItems.has(product.id) ? "❤️" : "🤍"}
                          </Text>
                        </TouchableOpacity>

                        <Image
                          source={{ uri: product.image }}
                          style={{ width: "100%", height: 200 }}
                          resizeMode="contain"
                        />

                        {isOutOfStock && (
                          <View style={styles.outOfStockOverlay}>
                            <Text style={styles.outOfStockText}>HẾT HÀNG</Text>
                          </View>
                        )}
                      </View>

                      {/* Product Info */}
                      <View style={styles.productInfo}>
                        <Text style={styles.productName} numberOfLines={2}>
                          {product.name}
                        </Text>

                        <View style={styles.productFooter}>
                          <View style={styles.priceContainer}>
                            <Text style={styles.productPrice}>
                              {formatPrice(product.price)}
                            </Text>
                          </View>

                          <TouchableOpacity
                            style={[
                              styles.addToCartButton,
                              isOutOfStock && styles.addToCartButtonDisabled
                            ]}
                            activeOpacity={0.8}
                            disabled={isOutOfStock}
                          >
                            <Text style={styles.addToCartIcon}>
                              {isOutOfStock ? "✕" : "🛒"}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
