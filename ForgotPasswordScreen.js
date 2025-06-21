/**
 * @file ForgotPasswordScreen.js
 * @description This screen allows a user to reset their password. It prompts for the user's
 * email and a new password, validates the input, and then uses the AuthContext to
 * update the user's credentials in the application's state.
 */

import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  TouchableWithoutFeedback, // Used to dismiss keyboard on tap outside inputs
  Keyboard
} from 'react-native';
import { AuthContext } from './AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * @component ForgotPasswordScreen
 * @description The main component for the password reset screen.
 */
export default function ForgotPasswordScreen({ navigation }) {
  // State variables for managing user input.
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // State variables for toggling password visibility.
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  // Access the resetPassword function from the global authentication context.
  const { resetPassword } = useContext(AuthContext);

  /**
   * @function handleResetPassword
   * @description Handles the password reset process. It validates all inputs
   * and then calls the context's resetPassword function.
   */
  const handleResetPassword = () => {
    // 1. Check for empty fields.
    if (!email || !newPassword || !confirmPassword) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }
    // 2. Validate new password strength using regex.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      Alert.alert("Invalid New Password", "Your new password does not meet the required format.");
      return;
    }
    // 3. Check if the new passwords match.
    if (newPassword !== confirmPassword) {
      Alert.alert("Validation Error", "New passwords do not match.");
      return;
    }

    // Attempt to reset the password using the function from the context.
    const success = resetPassword(email, newPassword);

    if (success) {
      // If successful, notify the user and navigate them to the Login screen.
      Alert.alert(
        "Success",
        "Your password has been reset successfully. Please log in with your new password.",
        [{ text: "OK", onPress: () => navigation.navigate('Login') }]
      );
    } else {
      // If the email was not found, inform the user.
      Alert.alert("Error", "No account was found with that email address.");
    }
  };

  return (
    // TouchableWithoutFeedback allows dismissing the keyboard by tapping anywhere on the screen.
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>Enter your email and a new password below.</Text>

        {/* User Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.passwordContainer}>
          <TextInput style={styles.passwordInput} placeholder="New Password" value={newPassword} onChangeText={setNewPassword} secureTextEntry={!isPasswordVisible} />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.eyeIcon}>
            <Icon name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'} size={24} color="#888" />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput style={styles.passwordInput} placeholder="Confirm New Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={!isConfirmPasswordVisible} />
          <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} style={styles.eyeIcon}>
            <Icon name={isConfirmPasswordVisible ? 'eye-outline' : 'eye-off-outline'} size={24} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Main action button */}
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>

        {/* Link to navigate back to the previous screen (Login) */}
        <TouchableOpacity style={styles.backToLoginButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backToLoginText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

// StyleSheet for the ForgotPasswordScreen component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        paddingBottom: 80, // Adds space at the bottom to push content up slightly
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e3a8a',
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
    },
    passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
    },
    passwordInput: {
        flex: 1,
        height: 50,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
    },
    eyeIcon: {
        padding: 10,
    },
    button: {
        width: '100%',
        backgroundColor: '#1e3a8a',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    backToLoginButton: {
        marginTop: 20,
    },
    backToLoginText: {
        fontSize: 16,
        color: '#1e3a8a',
        fontWeight: 'bold',
    },
});
