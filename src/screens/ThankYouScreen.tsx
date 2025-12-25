import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ThankYouScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="check" size={50} color={COLORS.white} />
                </View>
                <Text style={styles.title}>Order Placed Successfully!</Text>
                <Text style={styles.subtitle}>Thank you for shopping with us.</Text>

                <View style={styles.orderInfo}>
                    <Text>Order ID: #OD1234567890</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.reset({
                    index: 0,
                    routes: [{ name: 'MainTabs' }],
                })}
            >
                <Text style={styles.buttonText}>Continue Shopping</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        padding: SPACING.xl
    },
    content: {
        alignItems: 'center',
        marginBottom: SPACING.xl * 2
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.m
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.s,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.gray,
        textAlign: 'center',
        marginBottom: SPACING.l
    },
    orderInfo: {
        padding: SPACING.m,
        backgroundColor: COLORS.background,
        borderRadius: SIZES.borderRadius,
        marginTop: SPACING.m
    },
    button: {
        backgroundColor: COLORS.primary,
        height: 50,
        borderRadius: SIZES.borderRadius,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600'
    }
});

export default ThankYouScreen;
