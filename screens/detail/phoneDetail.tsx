import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import React from "react";
import useDetail from "../../features/detail/hooks/useDetail";
import { styles } from "./style";
import { TabParamList } from "../../rootStackParamList/TabParamList";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
type Props = BottomTabScreenProps<TabParamList, "Detail">;

const PhoneDetail: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const { product, loading, error } = useDetail(id);
  console.log("ROUTE:", route);
  console.log("PARAMS:", route.params);

  // Format giá tiền VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(price);
  };

  // Format trạng thái
  const getStockStatusText = (status: string) => {
    return status === "IN_STOCK" ? "Còn hàng" : "Hết hàng";
  };

  // Loading State
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
        <Text style={styles.loadingText}>Đang tải...</Text>
      </View>
    );
  }

  // Error State
  if (error) {
    return (
      <View style={styles.centerContainer}>
        <View style={styles.errorIcon}>
          <Text style={styles.errorIconText}>⚠️</Text>
        </View>
        <Text style={styles.errorTitle}>Oops!</Text>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Thử lại</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Success State - Hiển thị sản phẩm
  if (!product) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Không tìm thấy sản phẩm</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Hình ảnh sản phẩm */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.image }}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.infoContainer}>
        {/* Tên sản phẩm */}
        <Text style={styles.productName}>{product.name}</Text>

        {/* Trạng thái kho */}
        <View style={styles.stockContainer}>
          <View
            style={[
              styles.stockBadge,
              {
                backgroundColor:
                  product.stockStatus === "IN_STOCK" ? "#4CAF50" : "#F44336"
              }
            ]}
          >
            <Text style={styles.stockText}>
              {getStockStatusText(product.stockStatus)}
            </Text>
          </View>
        </View>

        {/* Giá */}
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Giá:</Text>
          <Text style={styles.price}>{formatPrice(product.price)}</Text>
        </View>

        {/* Mô tả */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Thông số kỹ thuật</Text>
          <View style={styles.specItem}>
            <Text style={styles.specLabel}>• Dung lượng:</Text>
            <Text style={styles.specValue}>256GB</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specLabel}>• Màn hình:</Text>
            <Text style={styles.specValue}>6.7 inch Super Retina XDR</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specLabel}>• Chip:</Text>
            <Text style={styles.specValue}>A18 Pro Bionic</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specLabel}>• Camera:</Text>
            <Text style={styles.specValue}>48MP + 12MP + 12MP</Text>
          </View>
        </View>
      </View>

      {/* Nút hành động */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PhoneDetail;
