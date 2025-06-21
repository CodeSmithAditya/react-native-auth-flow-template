/**
 * @file index.js
 * @description This is the main entry point for the Expo application.
 * It imports the root App component and registers it with Expo's internal system,
 * making it the starting point of the app's execution.
 */

import { registerRootComponent } from 'expo';
import App from './App';

/**
 * @function registerRootComponent
 * @description This function is called to register the main App component.
 * It handles the necessary setup to ensure the app runs correctly in both the
 * Expo Go development environment and in a standalone native build.
 * Internally, it calls AppRegistry.registerComponent.
 */
registerRootComponent(App);
