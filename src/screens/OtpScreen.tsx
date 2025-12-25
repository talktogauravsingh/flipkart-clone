import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import { useNavigation, useRoute } from '@react-navigation/native';

const OtpScreen = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const insets = useSafeAreaInsets();
    const { mobileNumber } = route.params || { mobileNumber: '' };

    // Use functionality for 6 inputs
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(30);

    // Refs for each input to manage focus
    const inputs = useRef<Array<TextInput | null>>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleVerify = () => {
        const otpString = otp.join('');
        if (otpString === '123456') {
            navigation.replace('MainTabs');
        } else {
            Alert.alert('Error', 'Invalid OTP. Please enter 123456.');
        }
    };

    const handleOtpChange = (value: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-advance focus
        if (value && index < 5) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        // Handle backspace to move focus back
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.header, { paddingTop: insets.top + SPACING.s }]}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={24}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>OTP Verification</Text>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}>
                <Text style={styles.title}>Verify with OTP</Text>
                <Text style={styles.subtitle}>
                    Sent to {mobileNumber}
                </Text>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputs.current[index] = ref)}
                            style={[
                                styles.otpInput,
                                { borderColor: digit ? COLORS.primary : COLORS.gray }
                            ]}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={digit}
                            onChangeText={(value) => handleOtpChange(value, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            textAlign="center"
                            autoFocus={index === 0}
                        />
                    ))}
                </View>

                <TouchableOpacity
                    style={[
                        styles.button,
                        { backgroundColor: otp.join('').length === 6 ? COLORS.secondary : COLORS.gray },
                    ]}
                    disabled={otp.join('').length !== 6}
                    onPress={handleVerify}>
                    <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>

                <View style={styles.resendContainer}>
                    <Text style={styles.resendText}>
                        Resend OTP in {timer}s
                    </Text>
                    {timer === 0 && (
                        <TouchableOpacity onPress={() => setTimer(30)}>
                            <Text style={{ color: COLORS.primary, fontWeight: 'bold', marginTop: 8 }}>Resend Now</Text>
                        </TouchableOpacity>
                    )}
                </View>
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
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.m,
    },
    backButton: {
        marginRight: SPACING.m,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.white,
    },
    content: {
        flex: 1,
        padding: SPACING.xl,
        paddingTop: SPACING.xxl,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.xs,
    },
    subtitle: {
        fontSize: 14,
        color: COLORS.gray,
        marginBottom: SPACING.xl * 2,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING.xl * 2,
    },
    otpInput: {
        width: 45,
        height: 50,
        borderWidth: 1,
        borderRadius: SIZES.borderRadius,
        fontSize: 20,
        color: COLORS.text,
        backgroundColor: COLORS.white,
    },
    button: {
        height: 48,
        borderRadius: SIZES.borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.xl,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600',
    },
    resendContainer: {
        alignItems: 'center',
    },
    resendText: {
        fontSize: 14,
        color: COLORS.gray,
    },
});

export default OtpScreen;
