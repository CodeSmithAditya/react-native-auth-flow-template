/**
 * @file HomeScreen.js
 * @description This screen is the main dashboard for an authenticated user.
 * It displays a personalized greeting, user profile information, and a logout button.
 */

import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView, // Ensures content renders within the device's safe area (e.g., below notches)
} from "react-native";
import { AuthContext } from "./AuthContext";
import Icon from "react-native-vector-icons/Ionicons";

/**
 * @component HomeScreen
 * @description The main component for the home screen.
 */
export default function HomeScreen() {
  // Retrieve the current user's data and the logout function from the global AuthContext.
  const { currentUser, logout } = useContext(AuthContext);

  /**
   * @function getGreeting
   * @description Generates a time-sensitive greeting.
   * @returns {string} "Good Morning", "Good Afternoon", or "Good Evening".
   */
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header section with logo and personalized greeting */}
        <View style={styles.header}>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
          <View>
            <Text style={styles.greetingText}>{getGreeting()},</Text>
            <Text style={styles.nameText}>{currentUser?.firstName}!</Text>
          </View>
        </View>

        {/* Profile information displayed in a styled card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Profile</Text>
          <View style={styles.infoRow}>
            <Icon name="person-circle-outline" size={24} color="#555" />
            <Text style={styles.infoText}>
              {currentUser?.firstName} {currentUser?.lastName}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="mail-outline" size={24} color="#555" />
            <Text style={styles.infoText}>{currentUser?.email}</Text>
          </View>
        </View>

        {/* Main content area */}
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Welcome to your dashboard. More features will be added here soon!
          </Text>
        </View>

        {/* Logout button */}
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// StyleSheet for the HomeScreen component
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f2f5", // Light gray background for the entire screen area
  },
  container: {
    flex: 1,
    padding: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30, // Provides space from the top of the screen
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  greetingText: {
    fontSize: 18,
    color: "#555",
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e3a8a",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 25,
    marginBottom: 30,
    // Shadow styles for a floating card effect
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5, // Elevation for Android shadow
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  content: {
    flex: 1, // This makes the content area take up available space, pushing the logout button down
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  logoutButton: {
    width: "100%",
    backgroundColor: "#d9534f", // A distinct red for a logout/destructive action
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
