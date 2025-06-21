/**
 * @file AuthContext.js
 * @description This file defines the Authentication Context for the application.
 * It provides a global state for user authentication, including user data and functions
 * for sign-up, login, logout, and password reset. This acts as a temporary, in-memory "backend".
 */

import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

// Create a new context for authentication. This will be used by components to access auth state and functions.
export const AuthContext = createContext();

/**
 * @component AuthProvider
 * @description A component that wraps the application and provides the AuthContext value
 * to all child components. It contains the state and logic for authentication.
 * @param {{ children: React.ReactNode }} props The child components to be rendered within the provider.
 */
export const AuthProvider = ({ children }) => {
  // State to store the list of registered users. Acts as an in-memory database.
  const [users, setUsers] = useState([]);
  // State to store the currently authenticated user object. Null if no one is logged in.
  const [currentUser, setCurrentUser] = useState(null);

  // The value object that will be exposed to all components consuming this context.
  const authContextValue = {
    currentUser,
    users,

    /**
     * @function signUp
     * @description Registers a new user if their email does not already exist.
     * @param {string} firstName - The user's first name.
     * @param {string} lastName - The user's last name.
     * @param {string} email - The user's email address.
     * @param {string} password - The user's chosen password.
     * @returns {boolean} True if sign-up was successful, false otherwise.
     */
    signUp: (firstName, lastName, email, password) => {
      // Check if a user with the same email already exists (case-insensitive).
      const userExists = users.find(user => user.email.toLowerCase() === email.toLowerCase());
      if (userExists) {
        Alert.alert("Sign Up Failed", "A user with this email already exists.");
        return false;
      }
      // If the user is new, create a new user object and add it to the state.
      const newUser = { id: Date.now().toString(), firstName, lastName, email, password };
      setUsers([...users, newUser]);
      Alert.alert("Sign Up Successful", "You can now log in with your credentials.");
      return true;
    },

    /**
     * @function login
     * @description Attempts to log in a user by verifying their credentials.
     * @param {string} email - The user's email.
     * @param {string} password - The user's password.
     * @param {object} navigation - The navigation object to redirect the user upon failure.
     */
    login: (email, password, navigation) => {
      // Find the user by email (case-insensitive).
      const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      // Case 1: The user email does not exist in our list.
      if (!user) {
        Alert.alert(
          "User Not Found",
          "You are not registered. Would you like to sign up?",
          [
            { text: "Sign Up", onPress: () => navigation.navigate('SignUp') },
            { text: "Cancel", style: "cancel", onPress: () => navigation.navigate('Welcome') }
          ]
        );
        return;
      }
      // Case 2: The email exists, but the password does not match.
      if (user.password !== password) {
        Alert.alert(
          "Login Failed",
          "Wrong password. Try again or use the 'Forgot Password' option.",
          [
            { text: "Forgot Password", onPress: () => navigation.navigate('ForgotPassword') },
            { text: "Try Again", style: "cancel" }
          ]
        );
        return;
      }
      // Case 3: Success! Set the found user as the currently logged-in user.
      setCurrentUser(user);
    },

    /**
     * @function logout
     * @description Logs out the current user by clearing the currentUser state.
     */
    logout: () => {
      setCurrentUser(null);
    },
    
    /**
     * @function resetPassword
     * @description Finds a user by email and updates their password.
     * @param {string} email - The user's email.
     * @param {string} newPassword - The new password to set.
     * @returns {boolean} True if the password was reset, false if the user was not found.
     */
    resetPassword: (email, newPassword) => {
      // Find the index of the user to update.
      const userIndex = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());

      // If user is not found, return false.
      if (userIndex === -1) {
        return false;
      }

      // If user is found, create a new array with the updated user data.
      const updatedUsers = [...users];
      updatedUsers[userIndex].password = newPassword;
      setUsers(updatedUsers); // Update the state with the new users array.
      return true;
    },
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
