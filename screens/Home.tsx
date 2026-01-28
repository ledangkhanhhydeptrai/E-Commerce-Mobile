import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ActivityIndicator,
  RefreshControl
} from "react-native";
import { styleHome } from "../styles/home/home";
import { Home, HomeResponse } from "../types/homeTypes";
import { fetchBaseResponse } from "../config/api.config";
import { AxiosError } from "axios";
import { useFocusEffect } from "@react-navigation/native";

export default function ECommerceMobile() {
  const [activeTab, setActiveTab] = React.useState<string>("home");
  const [likedItems, setLikedItems] = React.useState<Set<string>>(new Set());
  const [products, setProducts] = React.useState<Home[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await fetchBaseResponse<HomeResponse>(
        "/api/public/product",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log("Response:", response);

      if (Array.isArray(response.data.data)) {
        setProducts(response.data.data);
      } else {
        console.warn("API trả về không đúng format:", response);
        setProducts([]);
      }
    } catch (error) {
      const errors = error as AxiosError;
      console.log("Error", errors);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchProducts();
    }, [])
  );

  const onRefresh = () => {
    setRefreshing(true);
    fetchProducts();
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

  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(price);
  };

  // Get stock status color and text
  const getStockStatus = (status: string) => {
    switch (status) {
      case "IN_STOCK":
        return { text: "Còn hàng", color: "#10B981" };
      case "OUT_OF_STOCK":
        return { text: "Hết hàng", color: "#EF4444" };
      case "LOW_STOCK":
        return { text: "Sắp hết", color: "#F59E0B" };
      default:
        return { text: "Liên hệ", color: "#6B7280" };
    }
  };

  const categories = [
    { id: 1, name: "iPhone", emoji: "📱", colors: ["#60A5FA", "#818CF8"] },
    { id: 2, name: "Samsung", emoji: "📲", colors: ["#34D399", "#10B981"] },
    { id: 3, name: "Laptop", emoji: "💻", colors: ["#A78BFA", "#8B5CF6"] },
    { id: 4, name: "Phụ kiện", emoji: "🎧", colors: ["#FB923C", "#F97316"] }
  ];

  const deals = [
    {
      id: 1,
      title: "Giảm Sốc",
      discount: "40% OFF",
      colors: ["#FDE047", "#FB923C", "#EF4444"]
    },
    {
      id: 2,
      title: "Flash Sale",
      discount: "Mua 2 Tặng 1",
      colors: ["#A78BFA", "#E879F9", "#F472B6"]
    }
  ];

  return (
    <View style={styleHome.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={styleHome.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#F59E0B"
          />
        }
      >
        {/* Header */}
        <View style={styleHome.header}>
          <View style={styleHome.headerContent}>
            <View>
              <Text style={styleHome.headerTitle}>Tech Store</Text>
              <Text style={styleHome.headerSubtitle}>Công nghệ hàng đầu</Text>
            </View>
            <View style={styleHome.cartContainer}>
              <View style={styleHome.cartIcon}>
                <Text style={styleHome.cartEmoji}>🛒</Text>
              </View>
              <View style={styleHome.cartBadge}>
                <Text style={styleHome.cartBadgeText}>3</Text>
              </View>
            </View>
          </View>

          {/* Search Bar */}
          <View style={styleHome.searchContainer}>
            <Text style={styleHome.searchIcon}>🔍</Text>
            <TextInput
              style={styleHome.searchInput}
              placeholder="Tìm kiếm sản phẩm..."
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
            />
          </View>
        </View>

        {/* Flash Deals */}
        <View style={styleHome.section}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styleHome.dealsScroll}
          >
            {deals.map((deal) => (
              <TouchableOpacity
                key={deal.id}
                style={[
                  styleHome.dealCard,
                  {
                    backgroundColor: deal.colors[0]
                  }
                ]}
                activeOpacity={0.8}
              >
                <Text style={styleHome.dealTitle}>{deal.title}</Text>
                <Text style={styleHome.dealDiscount}>{deal.discount}</Text>
                <View style={styleHome.dealButton}>
                  <Text style={styleHome.dealButtonText}>Xem ngay →</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Categories */}
        <View style={styleHome.section}>
          <Text style={styleHome.sectionTitle}>Danh mục</Text>
          <View style={styleHome.categoriesGrid}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={styleHome.categoryItem}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styleHome.categoryIcon,
                    {
                      backgroundColor: cat.colors[0]
                    }
                  ]}
                >
                  <Text style={styleHome.categoryEmoji}>{cat.emoji}</Text>
                </View>
                <Text style={styleHome.categoryName}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Products from API */}
        <View style={[styleHome.section, { paddingBottom: 100 }]}>
          <View style={styleHome.sectionHeader}>
            <Text style={styleHome.sectionTitle}>Sản phẩm nổi bật</Text>
            <TouchableOpacity>
              <Text style={styleHome.seeAllText}>Xem tất cả →</Text>
            </TouchableOpacity>
          </View>

          {loading ? (
            <View style={styleHome.loadingContainer}>
              <ActivityIndicator size="large" color="#F59E0B" />
              <Text style={styleHome.loadingText}>Đang tải sản phẩm...</Text>
            </View>
          ) : products.length === 0 ? (
            <View style={styleHome.emptyContainer}>
              <Text style={styleHome.emptyText}>Không có sản phẩm nào</Text>
            </View>
          ) : (
            <View style={styleHome.productsGrid}>
              {products.map((product) => {
                const stockInfo = getStockStatus(product.stockStatus);

                return (
                  <TouchableOpacity
                    key={product.id}
                    style={styleHome.productCard}
                    activeOpacity={0.8}
                  >
                    {/* Product Image Area */}
                    <View style={styleHome.productImageContainer}>
                      {/* Stock Status Tag */}
                      <View
                        style={[
                          styleHome.productTag,
                          { backgroundColor: stockInfo.color }
                        ]}
                      >
                        <Text style={styleHome.productTagText}>
                          {stockInfo.text}
                        </Text>
                      </View>

                      {/* Like Button */}
                      <TouchableOpacity
                        style={styleHome.likeButton}
                        onPress={() => toggleLike(product.id)}
                        activeOpacity={0.7}
                      >
                        <Text style={styleHome.likeIcon}>
                          {likedItems.has(product.id) ? "❤️" : "🤍"}
                        </Text>
                      </TouchableOpacity>

                      {/* Product Image */}
                      <Image
                        source={{ uri: product.image }}
                        style={styleHome.productImage}
                        resizeMode="contain"
                      />
                    </View>

                    {/* Product Info */}
                    <View style={styleHome.productInfo}>
                      <Text style={styleHome.productName} numberOfLines={2}>
                        {product.name}
                      </Text>

                      {/* Price */}
                      <View style={styleHome.productFooter}>
                        <View>
                          <Text style={styleHome.productPrice}>
                            {formatPrice(product.price)}
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={styleHome.addButton}
                          activeOpacity={0.8}
                          disabled={product.stockStatus === "OUT_OF_STOCK"}
                        >
                          <Text style={styleHome.addButtonText}>
                            {product.stockStatus === "OUT_OF_STOCK" ? "×" : "+"}
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
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styleHome.bottomNav}>
        {[
          { icon: "🏠", label: "Trang chủ", id: "home" },
          { icon: "📱", label: "Danh mục", id: "categories" },
          { icon: "🔔", label: "Thông báo", id: "offers" },
          { icon: "👤", label: "Tài khoản", id: "profile" }
        ].map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styleHome.navItem}
            onPress={() => setActiveTab(item.id)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styleHome.navIcon,
                activeTab === item.id && styleHome.navIconActive
              ]}
            >
              {item.icon}
            </Text>
            <Text
              style={[
                styleHome.navLabel,
                activeTab === item.id && styleHome.navLabelActive
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
