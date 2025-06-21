/**
 * @file App.js
 * @description This is the root component of the application.
 * It sets up the navigation structure and wraps the entire app in the AuthProvider
 * to make authentication state available globally.
 */

import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider, AuthContext } from "./AuthContext";

// Import screen components
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import HomeScreen from "./HomeScreen";

// Initialize the stack navigator
const Stack = createNativeStackNavigator();

/**
 * @component AuthStack
 * @description Defines the navigation stack for unauthenticated users.
 * This includes screens like Welcome, Login, and Sign Up.
 */
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      {/* The Welcome and Login screens have their headers hidden for a custom UI experience. */}
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "Create Account" }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: "Reset Password" }}
      />
    </Stack.Navigator>
  );
}

/**
 * @component AppStack
 * @description Defines the navigation stack for authenticated (logged-in) users.
 * This is where the main content of the app resides.
 */
function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

/**
 * @component AppNavigator
 * @description This component acts as the main router. It checks the authentication
 * status from the AuthContext and conditionally renders the appropriate navigator stack.
 */
function AppNavigator() {
  const { currentUser } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {/* If a currentUser exists, show the main app; otherwise, show the authentication screens. */}
      {currentUser ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

/**
 * @component App
 * @description The main entry point of the application.
 * It wraps the AppNavigator with the AuthProvider so all components can access auth state.
 */
export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
