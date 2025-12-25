import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { COLORS } from './src/constants/theme';
import { CartProvider } from './src/context/CartContext';

function App() {
  return (
    <SafeAreaProvider>
      <CartProvider>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <AppNavigator />
      </CartProvider>
    </SafeAreaProvider>
  );
}

export default App;
