# 🔐 AuthFlow: React Native Authentication

<p align="center">
  <img src="https://img.shields.io/badge/Framework-React_Native-blue.svg" alt="React Native"/>
  <img src="https://img.shields.io/badge/Platform-iOS%20%7C%20Android-green.svg" alt="Platform"/>
  <img src="https://img.shields.io/github/last-commit/CodeSmithAditya/react-native-auth-flow-template" alt="Last Commit"/>
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License"/>
</p>

**AuthFlow** is a comprehensive and secure boilerplate for a user authentication system built with React Native and Expo. It provides a complete, multi-screen user experience for registration, login, and account management, serving as a perfect starting point for any mobile application.

---

## ✨ Features

- 📱 **Cross-Platform** – Built with Expo to run seamlessly on both iOS and Android from a single codebase.
- 👤 **Full Authentication Flow** – Complete user journey from a Welcome screen to Sign-Up, Login, Password Reset, and a private Home screen.
- 🔐 **Robust Validation** – Client-side checks for valid email formats, strong password requirements, and matching fields to ensure data integrity.
- ⚙️ **Global State Management** – Uses React's Context API to manage authentication status and user data across the entire app.
- 🧭 **Modern UI/UX** – Clean, intuitive, and consistent design across all screens, featuring iconography and responsive layouts.
- ⌨️ **Keyboard Handling** – Implements `KeyboardAvoidingView` and `ScrollView` to provide a smooth, professional form-filling experience.

---

## 📸 Screenshots

### 🔹 Core Authentication Screens
Here’s a preview of the main user authentication flow:

<p float="left">
  <img src="screenshots/welcome-screen.jpg" width="18%" alt="Welcome Screen"/>
  &nbsp;&nbsp;
  <img src="screenshots/login-screen.jpg" width="18%" alt="Login Screen"/>
  &nbsp;&nbsp;
  <img src="screenshots/signup-screen.jpg" width="18%" alt="Sign-Up Screen"/>
  &nbsp;&nbsp;
  <img src="screenshots/reset-password-screen.jpg" width="18%" alt="Reset Password Screen"/>
</p>

### 🔹 Authenticated Home Screen
A preview of the private dashboard screen visible after a successful login:

<p float="left">
  <img src="screenshots/home-screen.jpg" width="18%" alt="Home Screen"/>
</p>

---

## 🚀 Tech Stack

| Tech                  | Description                                      |
| --------------------- | ------------------------------------------------ |
| **React Native** | Primary framework for building the application.  |
| **Expo** | Toolchain for building and running the app.      |
| **React Navigation** | For handling routing and navigation.             |
| **React Context API** | For global state management of user auth.        |
| **Vector Icons** | Used for UI elements like password visibility.   |
| **JavaScript (ES6+)** | Core programming language.                       |
| **Git & GitHub** | Version control and collaboration.               |

---

## 🧩 Folder Structure

LoginScreenApp/ ├── assets/                  # Static assets like the logo │   └── logo.png ├── screenshots/             # App screenshots for the README ├── node_modules/            # Project dependencies (ignored by Git) ├── App.js                   # Main navigator and app entry point ├── AuthContext.js           # Global state and logic for authentication ├── WelcomeScreen.js         # Initial landing screen component ├── LoginScreen.js           # Login screen component ├── SignUpScreen.js          # User registration screen component ├── ForgotPasswordScreen.js  # Password reset screen component ├── HomeScreen.js            # Private dashboard screen component ├── .gitignore               # Specifies files for Git to ignore ├── package.json             # Project metadata and dependencies └── README.md
---

## 📥 How to Contribute

1. 🍴 Fork the repository
2. 🛠️ Make your changes
3. 🔁 Create a Pull Request
4. 💬 Let's review and merge!
5. 📌 Check [Issues](https://github.com/CodeSmithAditya/react-native-auth-flow-template/issues) and contribute!
6. ✨ Suggestions for improvements and new features are always welcome!

---

## 👤 Author

**Aditya Das**
<br/>
🔗 [LinkedIn](https://www.linkedin.com/in/adadityadas)
<br/>
🐙 [GitHub](https://github.com/CodeSmithAditya)
<br/>
📧 [adadityadas99@gmail.com](mailto:adadityadas99@gmail.com)

---

## 📄 License

This project is protected under the **MIT License** – see the [LICENSE](LICENSE) file for details.
