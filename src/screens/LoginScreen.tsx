import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const [mobileNumber, setMobileNumber] = useState('');

  const handleLogin = () => {
    // Mock login logic
    if (mobileNumber.length === 10) {
      navigation.navigate('Otp', { mobileNumber });
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + SPACING.s }]}>
        <Image
          source={{
            uri: 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png',
          }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}>
        <Text style={styles.title}>Log in for the best experience</Text>
        <Text style={styles.subtitle}>
          Enter your phone number to continue
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.prefix}>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="number-pad"
            maxLength={10}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholderTextColor={COLORS.gray}
          />
        </View>

        <Text style={styles.terms}>
          By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
        </Text>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: mobileNumber.length === 10 ? COLORS.secondary : COLORS.gray },
          ]}
          disabled={mobileNumber.length !== 10}
          onPress={handleLogin}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingBottom: SPACING.m,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 30,
  },
  content: {
    flex: 1,
    padding: SPACING.xl,
    paddingTop: SPACING.xxl * 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.s,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: SPACING.xl,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: SIZES.borderRadius,
    paddingHorizontal: SPACING.m,
    height: 48,
    marginBottom: SPACING.l,
  },
  prefix: {
    fontSize: 16,
    color: COLORS.text,
    marginRight: SPACING.s,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text,
  },
  terms: {
    fontSize: 12,
    color: COLORS.gray,
    marginBottom: SPACING.xl,
  },
  button: {
    height: 48,
    borderRadius: SIZES.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;
