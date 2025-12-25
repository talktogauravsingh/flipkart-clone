import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CheckoutScreen = () => {
    const navigation = useNavigation<any>();
    const insets = useSafeAreaInsets();
    const [selectedPayment, setSelectedPayment] = useState('cod');
    const [upiOption, setUpiOption] = useState<'collect' | 'intent' | null>(null);
    const [captcha, setCaptcha] = useState('');

    // Delivery Address State
    const [address, setAddress] = useState({
        name: 'Gaurav Singh',
        pincode: '560103',
        locality: 'Bellandur, Bangalore',
        phone: '9876543210'
    });
    const [isEditingAddress, setIsEditingAddress] = useState(false);

    return (
        <View style={styles.container}>
            <View style={[styles.header, { paddingTop: insets.top + SPACING.s }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color={COLORS.white} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Payments</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Delivery Address Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Delivery Address</Text>
                        {!isEditingAddress && (
                            <TouchableOpacity onPress={() => setIsEditingAddress(true)}>
                                <Text style={styles.changeBtn}>Change</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    {isEditingAddress ? (
                        <View style={styles.addressForm}>
                            <TextInput
                                style={styles.input}
                                value={address.name}
                                onChangeText={(t) => setAddress({ ...address, name: t })}
                                placeholder="Full Name"
                            />
                            <TextInput
                                style={styles.input}
                                value={address.pincode}
                                onChangeText={(t) => setAddress({ ...address, pincode: t })}
                                placeholder="Pincode"
                                keyboardType="numeric"
                            />
                            <TextInput
                                style={styles.input}
                                value={address.locality}
                                onChangeText={(t) => setAddress({ ...address, locality: t })}
                                placeholder="Locality, City, State"
                            />
                            <TextInput
                                style={styles.input}
                                value={address.phone}
                                onChangeText={(t) => setAddress({ ...address, phone: t })}
                                placeholder="Phone Number"
                                keyboardType="phone-pad"
                            />
                            <TouchableOpacity
                                style={styles.saveAddressBtn}
                                onPress={() => setIsEditingAddress(false)}
                            >
                                <Text style={styles.saveAddressText}>Save Address</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.addressName}>{address.name}</Text>
                            <Text style={styles.addressText}>{address.locality}</Text>
                            <Text style={styles.addressText}>{address.pincode}</Text>
                            <Text style={styles.addressText}>Phone: {address.phone}</Text>
                        </View>
                    )}
                </View>

                {/* Payment Options */}
                <Text style={styles.paymentHeader}>Payment Options</Text>

                {/* UPI */}
                <View style={styles.paymentOption}>
                    <TouchableOpacity
                        style={styles.optionHeader}
                        onPress={() => setSelectedPayment('upi')}
                    >
                        <View style={[styles.radio, selectedPayment === 'upi' && styles.radioSelected]} />
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionTitle}>UPI</Text>
                            <Text style={styles.optionSubtitle}>Pay using Google Pay, PhonePe, Paytm</Text>
                        </View>
                    </TouchableOpacity>

                    {selectedPayment === 'upi' && (
                        <View style={styles.subOptionContainer}>
                            <Text style={styles.subOptionHeader}>Pay with your UPI app</Text>

                            {/* UPI Apps List */}
                            <TouchableOpacity style={styles.upiAppListItem}>
                                <View style={[styles.upiLogoBox, { borderColor: '#EA4335' }]}>
                                    <MaterialCommunityIcons name="google" size={20} color="#EA4335" />
                                </View>
                                <Text style={styles.upiAppName}>Google Pay</Text>
                                <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.gray} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.upiAppListItem}>
                                <View style={[styles.upiLogoBox, { borderColor: '#5f259f' }]}>
                                    <Text style={{ color: '#5f259f', fontWeight: 'bold' }}>Pe</Text>
                                </View>
                                <Text style={styles.upiAppName}>PhonePe</Text>
                                <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.gray} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.upiAppListItem}>
                                <View style={[styles.upiLogoBox, { borderColor: '#00baf2' }]}>
                                    <Text style={{ color: '#00baf2', fontWeight: 'bold' }}>Pm</Text>
                                </View>
                                <Text style={styles.upiAppName}>Paytm</Text>
                                <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.gray} />
                            </TouchableOpacity>

                            <View style={styles.separator}>
                                <Text style={styles.separatorText}>OR</Text>
                            </View>

                            {/* UPI ID / VPA */}
                            <Text style={styles.subOptionHeader}>Pay via UPI ID</Text>
                            <View style={styles.upiCollectContainer}>
                                <TextInput
                                    style={styles.upiInput}
                                    placeholder="e.g. name@upi"
                                />
                                <TouchableOpacity style={styles.payNowSmallBtn}>
                                    <Text style={styles.payNowSmallBtnText}>Pay Now</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                </View>

                {/* Card */}
                <View style={styles.paymentOption}>
                    <TouchableOpacity
                        style={styles.optionHeader}
                        onPress={() => setSelectedPayment('card')}
                    >
                        <View style={[styles.radio, selectedPayment === 'card' && styles.radioSelected]} />
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionTitle}>Credit / Debit / ATM Card</Text>
                            <Text style={styles.optionSubtitle}>Add and secure cards as per RBI guidelines</Text>
                        </View>
                    </TouchableOpacity>

                    {selectedPayment === 'card' && (
                        <View style={styles.cardForm}>
                            <View style={styles.inputGroup}>
                                <Text style={styles.inputLabel}>Card Number</Text>
                                <TextInput
                                    style={styles.cardInput}
                                    placeholder="XXXX XXXX XXXX XXXX"
                                    keyboardType="numeric"
                                    maxLength={16}
                                />
                            </View>
                            <View style={styles.cardRow}>
                                <View style={[styles.inputGroup, { flex: 1, marginRight: SPACING.m }]}>
                                    <Text style={styles.inputLabel}>Valid Thru</Text>
                                    <TextInput
                                        style={styles.cardInput}
                                        placeholder="MM/YY"
                                        maxLength={5}
                                    />
                                </View>
                                <View style={[styles.inputGroup, { width: 100 }]}>
                                    <Text style={styles.inputLabel}>CVV</Text>
                                    <TextInput
                                        style={styles.cardInput}
                                        placeholder="123"
                                        keyboardType="numeric"
                                        maxLength={3}
                                        secureTextEntry
                                    />
                                </View>
                            </View>
                        </View>
                    )}
                </View>

                {/* COD */}
                <View style={styles.paymentOption}>
                    <TouchableOpacity
                        style={styles.optionHeader}
                        onPress={() => setSelectedPayment('cod')}
                    >
                        <View style={[styles.radio, selectedPayment === 'cod' && styles.radioSelected]} />
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionTitle}>Cash on Delivery</Text>
                            {selectedPayment === 'cod' && (
                                <View style={styles.codContainer}>
                                    <Text style={{ marginBottom: 8 }}>Enter the captcha code to confirm:</Text>
                                    <View style={styles.captchaBox}>
                                        <Text style={styles.captchaText}>5 8 2</Text>
                                        <TextInput
                                            style={styles.captchaInput}
                                            placeholder="Enter code"
                                            onChangeText={setCaptcha}
                                            keyboardType='numeric'
                                        />
                                    </View>
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <View>
                    <Text style={styles.footerTotal}>₹45,999</Text>
                    <Text style={styles.viewDetails}>View Price Details</Text>
                </View>
                <TouchableOpacity
                    style={[styles.payBtn, (selectedPayment === 'cod' && captcha !== '582') && { opacity: 0.5 }]}
                    disabled={selectedPayment === 'cod' && captcha !== '582'}
                    onPress={() => navigation.replace('ThankYou')}
                >
                    <Text style={styles.payBtnText}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        backgroundColor: COLORS.primary,
        paddingBottom: SPACING.m,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.m
    },
    headerTitle: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: '600',
        marginLeft: SPACING.m
    },
    scrollContent: {
        padding: SPACING.m
    },
    sectionContainer: {
        backgroundColor: COLORS.white,
        padding: SPACING.m,
        borderRadius: SIZES.borderRadius,
        marginBottom: SPACING.m,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING.s
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.text,
    },
    changeBtn: {
        color: COLORS.primary,
        fontWeight: '600',
        fontSize: 14
    },
    addressName: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
        color: COLORS.text
    },
    addressText: {
        fontSize: 14,
        color: COLORS.gray,
        marginBottom: 2
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
        fontSize: 14
    },
    addressForm: {
        marginTop: SPACING.s
    },
    saveAddressBtn: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 8
    },
    saveAddressText: {
        color: COLORS.white,
        fontWeight: '600'
    },
    paymentHeader: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.s,
    },
    paymentOption: {
        backgroundColor: COLORS.white,
        marginBottom: SPACING.s,
        borderRadius: SIZES.borderRadius,
        overflow: 'hidden'
    },
    optionHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: SPACING.m,
    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.gray,
        marginRight: SPACING.m,
        marginTop: 2
    },
    radioSelected: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primary
    },
    optionTextContainer: {
        flex: 1
    },
    optionTitle: {
        fontSize: 16,
        color: COLORS.text,
        marginBottom: 4
    },
    optionSubtitle: {
        fontSize: 12,
        color: COLORS.gray
    },
    codContainer: {
        marginTop: SPACING.m,
        padding: SPACING.m,
        backgroundColor: '#f9f9f9',
        borderRadius: SIZES.borderRadius
    },
    captchaBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    captchaText: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 4,
        color: COLORS.black,
        marginRight: SPACING.m,
    },
    captchaInput: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.text,
        width: 100,
        height: 40,
        fontSize: 16
    },
    subOptionContainer: {
        paddingLeft: 48,
        paddingRight: SPACING.m,
        paddingBottom: SPACING.m
    },
    subOptionHeader: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.gray,
        marginBottom: SPACING.s,
        marginTop: SPACING.s
    },
    upiAppListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    upiLogoBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
        backgroundColor: '#fff'
    },
    upiAppName: {
        flex: 1,
        fontSize: 14,
        color: COLORS.text,
        fontWeight: '500'
    },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SPACING.m
    },
    separatorText: {
        color: COLORS.gray,
        fontSize: 12,
        fontWeight: '600'
    },
    upiCollectContainer: {
        marginTop: 8
    },
    upiInput: {
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: 4,
        padding: 10,
        fontSize: 14,
        width: '100%',
        marginBottom: 8
    },
    payNowSmallBtn: {
        backgroundColor: COLORS.primary,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignSelf: 'flex-start'
    },
    payNowSmallBtnText: {
        color: COLORS.white,
        fontWeight: '600',
        fontSize: 12
    },
    cardForm: {
        paddingLeft: 48,
        paddingRight: SPACING.m,
        paddingBottom: SPACING.m
    },
    inputGroup: {
        marginBottom: SPACING.s
    },
    inputLabel: {
        fontSize: 12,
        color: COLORS.gray,
        marginBottom: 4,
        fontWeight: '500'
    },
    cardInput: {
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: 4,
        padding: 10,
        fontSize: 14,
        color: COLORS.text
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        padding: SPACING.m,
        backgroundColor: COLORS.white,
        elevation: 5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footerTotal: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.text
    },
    viewDetails: {
        fontSize: 12,
        color: COLORS.primary
    },
    payBtn: {
        backgroundColor: COLORS.secondary,
        paddingVertical: SPACING.m,
        borderRadius: SIZES.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150
    },
    payBtnText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600'
    }
});

export default CheckoutScreen;
