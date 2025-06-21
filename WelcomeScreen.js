/**
 * @file WelcomeScreen.js
 * @description This is the initial landing screen of the application. It presents the
 * app's logo and a call to action to get started, leading users to the login screen.
 */

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

/**
 * @component WelcomeScreen
 * @description The main component for the welcome/landing screen.
 * @param {{ navigation: object }} props - The navigation prop provided by React Navigation.
 */
export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* This content view groups all UI elements to be centered together. */}
      <View style={styles.content}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
          resizeMode="contain" // Ensures the logo scales correctly without distortion
        />
        <Text style={styles.title}>Welcome To</Text>
        <Text style={styles.subtitle}>
          Create an account and access thousands of cool stuffs
        </Text>

        {/* The "Get Started" button navigates the user to the Login flow. */}
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// StyleSheet for the WelcomeScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center", // Vertically centers the content block on the screen
    padding: 20,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: '100%', // Ensures the content view uses the full width for button styling
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1e3a8a",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginTop: 15,
    paddingHorizontal: 20,
  },
  getStartedButton: {
    width: "100%",
    backgroundColor: "#1e3a8a",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40, // Adds space between the subtitle and the button
  },
  getStartedButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
