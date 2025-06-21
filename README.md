# React Native Login Screen & Authentication Flow

This is a comprehensive React Native mobile application built with Expo that demonstrates a complete, multi-screen authentication flow. It was developed to showcase core concepts of React Native, including UI/UX design, component structure, state management with Context, navigation, and user input validation.

## Features

This application includes a full suite of features expected in a modern authentication system:

-   **Welcome Screen:** An engaging initial landing page for new users.
-   **User Sign-Up:** A complete registration form with fields for first name, last name, email, and password.
    -   **Robust Validation:** Checks for empty fields, password matching, valid email format, and strong password requirements (uppercase, lowercase, number, special character).
-   **User Login:** A secure login screen for returning users.
    -   **Intelligent Error Handling:** Provides specific feedback for invalid format, non-existent users, or incorrect passwords, with actionable prompts (e.g., "Would you like to sign up?").
-   **Forgot / Reset Password:** A functional, real-time password reset screen that allows users to securely update their credentials.
-   **Authenticated Home Screen:** A private "dashboard" screen accessible only after a successful login.
    -   **Personalized Greeting:** Welcomes the user by name with a time-sensitive greeting (e.g., "Good Morning, Aditya!").
-   **Advanced UI/UX:**
    -   **Iconography:** Uses eye icons for password visibility toggles, enhancing user experience.
    -   **Keyboard Management:** Implements `KeyboardAvoidingView` to ensure forms are usable and not obscured by the keyboard.
-   **Global State Management:** Uses React's Context API (`AuthContext`) to manage user state and authentication logic across the entire application.
-   **Professional Navigation:** Built with React Navigation to handle the flow between all screens.

## Tech Stack

-   **Framework:** React Native (with Expo)
-   **Navigation:** React Navigation (`@react-navigation/native-stack`)
-   **State Management:** React Context API
-   **UI Components:** Core React Native components (`View`, `Text`, `TextInput`, `TouchableOpacity`, etc.)
-   **Icons:** React Native Vector Icons (`Ionicons`)

## Application Flow

1.  User is greeted by the **Welcome Screen**.
2.  User can navigate to the **Login Screen**.
3.  From the Login screen, the user can navigate to **Sign Up** or **Forgot Password**.
4.  After a successful **Sign Up**, the user is redirected to the Login screen.
5.  After a successful **Login**, the user is taken to the private **Home Screen**.
6.  The user can **Log Out** from the Home Screen, which returns them to the authentication flow.

## Setup and Installation

To run this project on your local machine, please follow these steps:

### Prerequisites

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [Expo Go](https://expo.dev/go) app on your iOS or Android device.
-   A package manager like npm or Yarn.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repository-name
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
    _or if you use Yarn:_
    ```bash
    yarn install
    ```

### Running the Application

1.  **Start the Metro server:**
    ```bash
    npx expo start
    ```

2.  **Connect your device:**
    -   Ensure your computer and your mobile device are on the **same Wi-Fi network**.
    -   Open the **Expo Go** app on your device.
    -   Scan the QR code displayed in the terminal or in the browser tab that opens.

The application will now build and load on your device.

---

This project was developed as part of a React Native assignment and expanded to demonstrate a full-featured application prototype.
