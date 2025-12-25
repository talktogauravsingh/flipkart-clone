import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SummaryScreen = () => {
    const navigation = useNavigation<any>();
    const insets = useSafeAreaInsets();
    const { cartItems, removeFromCart, cartTotal, cartCount } = useCart();

    // Calculate total amount and discount dynamically if needed, 
    // but for now cartTotal comes from context. 
    // Let's assume price in context is discounted price for simplicity or handle discount logic.
    // Making it simple: Context returns total price.
    const discount = 4000; // Mock discount for display
    const finalAmount = cartTotal; // Assuming mockData price is the final price

    return (
        <View style={styles.container}>
            <View style={[styles.header, { paddingTop: insets.top }]}>
                <Text style={styles.headerTitle}>My Cart</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Address Header Mock */}
                <View style={styles.addressHeader}>
                    <View>
                        <Text style={styles.addressTitle}>Deliver to: <Text style={{ fontWeight: 'bold' }}>Gaurav Singh, 560103</Text></Text>
                        <Text style={styles.addressSubtitle}>Bellandur, Bangalore</Text>
                    </View>
                    <TouchableOpacity style={styles.changeBtn}>
                        <Text style={styles.changeBtnText}>Change</Text>
                    </TouchableOpacity>
                </View>

                {/* Cart Items */}
                {cartItems.map((item) => (
                    <View key={item.id} style={styles.cartItem}>
                        <View style={styles.itemHeader}>
                            <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode="contain" />
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <Text style={styles.seller}>Seller: RetailNet</Text>
                                <View style={styles.priceRow}>
                                    <Text style={styles.price}>₹{item.price.toLocaleString()}</Text>
                                    <Text style={styles.originalPrice}>₹{item.originalPrice.toLocaleString()}</Text>
                                    <Text style={styles.discount}>{item.discount}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.itemFooter}>
                            <View style={styles.qtyContainer}>
                                <Text style={styles.qtyLabel}>Qty: {item.quantity}</Text>
                            </View>
                            <TouchableOpacity style={styles.removeBtn} onPress={() => removeFromCart(item.id)}>
                                <Text style={styles.removeBtnText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                {/* Price Details */}
                <View style={styles.priceDetails}>
                    <Text style={styles.priceHeader}>Price Details</Text>
                    <View style={styles.priceRowItem}>
                        <Text style={styles.priceLabel}>Price ({cartCount} items)</Text>
                        <Text style={styles.priceValue}>₹{(cartTotal + discount).toLocaleString()}</Text>
                    </View>
                    <View style={styles.priceRowItem}>
                        <Text style={styles.priceLabel}>Discount</Text>
                        <Text style={[styles.priceValue, { color: COLORS.green }]}>- ₹{discount}</Text>
                    </View>
                    <View style={styles.priceRowItem}>
                        <Text style={styles.priceLabel}>Delivery Charges</Text>
                        <Text style={[styles.priceValue, { color: COLORS.green }]}>FREE</Text>
                    </View>
                    <View style={[styles.priceRowItem, styles.totalRow]}>
                        <Text style={styles.totalLabel}>Total Amount</Text>
                        <Text style={styles.totalValue}>₹{cartTotal.toLocaleString()}</Text>
                    </View>
                    <Text style={styles.savingsText}>You will save ₹{discount} on this order</Text>
                </View>

            </ScrollView>

            {/* Bottom Footer */}
            <View style={styles.footer}>
                <View>
                    <Text style={styles.footerTotal}>₹{cartTotal.toLocaleString()}</Text>
                    <Text style={styles.viewDetails}>View price details</Text>
                </View>
                <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('Checkout')}>
                    <Text style={styles.continueBtnText}>Continue</Text>
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
    addressHeader: {
        backgroundColor: COLORS.white,
        padding: SPACING.m,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.s
    },
    header: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: SPACING.m,
        paddingBottom: SPACING.m,
    },
    headerTitle: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: '600',
    },
    addressTitle: {
        fontSize: 14,
        color: COLORS.text,
        marginBottom: 2
    },
    addressSubtitle: {
        fontSize: 12,
        color: COLORS.gray
    },
    changeBtn: {
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.xs,
        borderRadius: SIZES.borderRadius
    },
    changeBtnText: {
        color: COLORS.primary,
        fontWeight: '600',
        fontSize: 12
    },
    cartItem: {
        backgroundColor: COLORS.white,
        marginBottom: SPACING.s,
        padding: SPACING.m
    },
    itemHeader: {
        flexDirection: 'row',
        marginBottom: SPACING.m
    },
    itemImage: {
        width: 80,
        height: 80,
        marginRight: SPACING.m
    },
    itemDetails: {
        flex: 1
    },
    itemTitle: {
        fontSize: 14,
        color: COLORS.text,
        marginBottom: SPACING.xs
    },
    seller: {
        fontSize: 12,
        color: COLORS.gray,
        marginBottom: SPACING.s
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.text,
        marginRight: 8
    },
    originalPrice: {
        fontSize: 12,
        color: COLORS.gray,
        textDecorationLine: 'line-through',
        marginRight: 8
    },
    discount: {
        fontSize: 12,
        color: COLORS.green,
        fontWeight: '600'
    },
    itemFooter: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
        paddingTop: SPACING.m
    },
    qtyContainer: {
        flex: 1,
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: COLORS.lightGray
    },
    qtyLabel: {
        fontSize: 14,
        color: COLORS.text,
        fontWeight: '500'
    },
    removeBtn: {
        flex: 1,
        alignItems: 'center'
    },
    removeBtnText: {
        fontSize: 14,
        color: COLORS.text,
        fontWeight: '500'
    },
    priceDetails: {
        backgroundColor: COLORS.white,
        padding: SPACING.m,
        marginBottom: 80
    },
    priceHeader: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.gray,
        marginBottom: SPACING.m,
        textTransform: 'uppercase'
    },
    priceRowItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING.m
    },
    priceLabel: {
        fontSize: 14,
        color: COLORS.text
    },
    priceValue: {
        fontSize: 14,
        color: COLORS.text
    },
    totalRow: {
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
        paddingVertical: SPACING.m,
        marginTop: SPACING.xs
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.text
    },
    totalValue: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.text
    },
    savingsText: {
        fontSize: 14,
        color: COLORS.green,
        marginTop: SPACING.m,
        fontWeight: '600'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.white,
        padding: SPACING.m,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 10
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
    continueBtn: {
        backgroundColor: COLORS.secondary,
        paddingHorizontal: SPACING.xl,
        paddingVertical: SPACING.m,
        borderRadius: SIZES.borderRadius,
        width: 150,
        alignItems: 'center'
    },
    continueBtnText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600'
    }
});

export default SummaryScreen;
