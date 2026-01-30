import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const About = () => {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/120" }}
          style={styles.logo}
        />
        <Text style={styles.companyName}>ShopMart</Text>
        <Text style={styles.tagline}>Your Trusted Shopping Destination</Text>
      </View>

      {/* About Content */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.description}>
          ShopMart is a leading e-commerce platform dedicated to bringing you
          the best products at unbeatable prices. Since 2020, we've been
          committed to providing an exceptional shopping experience with quality
          products, fast delivery, and excellent customer service.
        </Text>
      </View>

      {/* Mission & Vision */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.description}>
          To make online shopping accessible, enjoyable, and trustworthy for
          everyone, while supporting local and international brands.
        </Text>
      </View>

      {/* Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Us?</Text>

        <View style={styles.featureItem}>
          <Ionicons name="shield-checkmark" size={24} color="#4CAF50" />
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Secure Shopping</Text>
            <Text style={styles.featureDescription}>
              100% secure payment and data protection
            </Text>
          </View>
        </View>

        <View style={styles.featureItem}>
          <Ionicons name="flash" size={24} color="#FF9800" />
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Fast Delivery</Text>
            <Text style={styles.featureDescription}>
              Quick shipping to your doorstep
            </Text>
          </View>
        </View>

        <View style={styles.featureItem}>
          <Ionicons name="return-up-back" size={24} color="#2196F3" />
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Easy Returns</Text>
            <Text style={styles.featureDescription}>
              30-day hassle-free return policy
            </Text>
          </View>
        </View>

        <View style={styles.featureItem}>
          <Ionicons name="headset" size={24} color="#9C27B0" />
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>24/7 Support</Text>
            <Text style={styles.featureDescription}>
              Always here to help you
            </Text>
          </View>
        </View>
      </View>

      {/* Contact Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>

        <TouchableOpacity style={styles.contactItem}>
          <Ionicons name="mail" size={20} color="#666" />
          <Text style={styles.contactText}>support@shopmart.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem}>
          <Ionicons name="call" size={20} color="#666" />
          <Text style={styles.contactText}>+1 (800) 123-4567</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem}>
          <Ionicons name="location" size={20} color="#666" />
          <Text style={styles.contactText}>
            123 Commerce Street, New York, NY 10001
          </Text>
        </TouchableOpacity>
      </View>

      {/* Social Media */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Follow Us</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#1877F2" }]}
            onPress={() => openLink("https://facebook.com")}
          >
            <Ionicons name="logo-facebook" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#E4405F" }]}
            onPress={() => openLink("https://instagram.com")}
          >
            <Ionicons name="logo-instagram" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#1DA1F2" }]}
            onPress={() => openLink("https://twitter.com")}
          >
            <Ionicons name="logo-twitter" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#0A66C2" }]}
            onPress={() => openLink("https://linkedin.com")}
          >
            <Ionicons name="logo-linkedin" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
        <Text style={styles.footerText}>
          © 2024 ShopMart. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  header: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0"
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15
  },
  companyName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5
  },
  tagline: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic"
  },
  section: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 10
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: "#666",
    textAlign: "justify"
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  featureText: {
    flex: 1,
    marginLeft: 15
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4
  },
  featureDescription: {
    fontSize: 14,
    color: "#666"
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0"
  },
  contactText: {
    fontSize: 15,
    color: "#666",
    marginLeft: 15,
    flex: 1
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  footer: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    marginTop: 10,
    marginBottom: 20
  },
  footerText: {
    fontSize: 12,
    color: "#999",
    marginVertical: 2
  }
});
