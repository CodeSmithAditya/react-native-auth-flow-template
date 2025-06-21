/**
 * @file LoginScreen.js
 * @description This screen provides a form for existing users to log in.
 * It handles client-side validation for input formats and uses the global
 * AuthContext to perform the actual login verification.
 */

import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { AuthContext } from "./AuthContext";
import Icon from "react-native-vector-icons/Ionicons";

/**
 * @component LoginScreen
 * @description The main component for the user login screen.
 */
export default function LoginScreen({ navigation }) {
  // State variables for the email and password input fields.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State to toggle password visibility.
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Access the login function from the global authentication context.
  const { login } = useContext(AuthContext);

  /**
   * @function handleLogin
   * @description Handles the login process when the user presses the "Log In" button.
   * Performs client-side format validation before calling the global login function.
   */
  const handleLogin = () => {
    // 1. Client-side validation for email format.
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Format", "Please enter a valid email address.");
      return;
    }

    // 2. Client-side validation for password format.
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Invalid Password Format",
        "Your password does not meet the required format.\n\nRequired:\n- At least 8 characters\n- One uppercase letter\n- One lowercase letter\n- One number\n- One special character (!@#$%)"
      );
      return;
    }

    // 3. If formats are valid, pass credentials to the context's login function.
    login(email, password, navigation);
  };

  return (
    // KeyboardAvoidingView ensures the form adjusts when the keyboard is open.
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 60}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Image source={require("./assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Log In Now</Text>
        <Text style={styles.subtitle}>
          Please login to continue using our app
        </Text>

        {/* Email Input Field */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input Field with Visibility Toggle */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.eyeIcon}
          >
            <Icon
              name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        {/* Main action button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        {/* Link to Forgot Password screen */}
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Link to Sign Up screen */}
        <View style={styles.signUpContainer}>
          <Text style={styles.dontHaveAccountText}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// StyleSheet for the LoginScreen component
const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: 10,
  },
  subtitle: {
    color: "#555",
    marginBottom: 30,
    fontSize: 16,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  eyeIcon: {
    padding: 10,
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#1e3a8a",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPasswordButton: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#1e3a8a",
    fontSize: 16,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dontHaveAccountText: {
    color: "#555",
    fontSize: 16,
  },
  signUpText: {
    color: "#1e3a8a",
    fontSize: 16,
    fontWeight: "bold",
  },
});
