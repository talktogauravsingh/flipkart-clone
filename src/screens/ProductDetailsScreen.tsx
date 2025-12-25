import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import { useCart } from '../context/CartContext';

const { width } = Dimensions.get('window');

const ProductDetailsScreen = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const { product } = route.params;
    const { addToCart } = useCart();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color={COLORS.text} />
                </TouchableOpacity>
                <View style={styles.headerActions}>
                    <MaterialCommunityIcons name="magnify" size={24} color={COLORS.text} style={{ marginRight: 16 }} />
                    <MaterialCommunityIcons name="cart-outline" size={24} color={COLORS.text} onPress={() => navigation.navigate('Cart')} />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Product Image */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: product.image }}
                        style={styles.productImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Product Info */}
                <View style={styles.detailsContainer}>
                    <Text style={styles.brandName}>{product.category}</Text>
                    <Text style={styles.title}>{product.title}</Text>

                    <View style={styles.ratingRow}>
                        <View style={styles.ratingBadge}>
                            <Text style={styles.ratingText}>{product.rating} ★</Text>
                        </View>
                        <Text style={styles.reviewCount}>{product.reviewCount} Ratings & Reviews</Text>
                    </View>

                    <View style={styles.priceRow}>
                        <Text style={styles.price}>₹{product.price.toLocaleString()}</Text>
                        <Text style={styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</Text>
                        <Text style={styles.discount}>{product.discount}</Text>
                    </View>

                    {/* Offers */}
                    <View style={styles.offersContainer}>
                        <Text style={styles.offersTitle}>Available Offers</Text>
                        <View style={styles.offerItem}>
                            <MaterialCommunityIcons name="tag" size={16} color={COLORS.green} />
                            <Text style={styles.offerText}>Bank Offer 10% off on SBI Credit Card</Text>
                        </View>
                        <View style={styles.offerItem}>
                            <MaterialCommunityIcons name="tag" size={16} color={COLORS.green} />
                            <Text style={styles.offerText}>Special Price Get extra ₹4000 off</Text>
                        </View>
                    </View>

                    {/* Description */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Product Details</Text>
                        <Text style={styles.description}>{product.description}</Text>
                    </View>

                    {/* Specifications Mock */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Specifications</Text>
                        <View style={styles.specRow}>
                            <Text style={styles.specLabel}>In The Box</Text>
                            <Text style={styles.specValue}>Handset, USB Cable, Manual</Text>
                        </View>
                        <View style={styles.specRow}>
                            <Text style={styles.specLabel}>Model Number</Text>
                            <Text style={styles.specValue}>XYZ-123</Text>
                        </View>
                    </View>
                </View>

                {/* Spacer for bottom bar */}
                <View style={{ height: 60 }} />
            </ScrollView>

            {/* Bottom Action Bar */}
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.cartButton} onPress={() => addToCart(product)}>
                    <Text style={styles.cartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Checkout', { product })}>
                    <Text style={styles.buyButtonText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SPACING.m,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    headerActions: {
        flexDirection: 'row',
    },
    imageContainer: {
        width: width,
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
        paddingVertical: SPACING.m,
    },
    productImage: {
        width: '80%',
        height: '100%',
    },
    detailsContainer: {
        padding: SPACING.m,
    },
    brandName: {
        fontSize: 14,
        color: COLORS.gray,
        marginBottom: SPACING.xs
    },
    title: {
        fontSize: 16,
        color: COLORS.text,
        marginBottom: SPACING.s,
        fontWeight: '500' // Using fontWeight number/string as per type
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.m
    },
    ratingBadge: {
        backgroundColor: COLORS.green,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginRight: 8
    },
    ratingText: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: 'bold'
    },
    reviewCount: {
        color: COLORS.gray,
        fontSize: 14
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.l
    },
    price: {
        fontSize: 24,
        fontWeight: '600',
        color: COLORS.text,
        marginRight: 12
    },
    originalPrice: {
        fontSize: 16,
        color: COLORS.gray,
        textDecorationLine: 'line-through',
        marginRight: 8
    },
    discount: {
        fontSize: 16,
        color: COLORS.green,
        fontWeight: '600'
    },
    offersContainer: {
        marginBottom: SPACING.l
    },
    offersTitle: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: SPACING.s,
        color: COLORS.text
    },
    offerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.xs
    },
    offerText: {
        fontSize: 13,
        color: COLORS.text,
        marginLeft: 8
    },
    section: {
        marginBottom: SPACING.l,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
        paddingTop: SPACING.m
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: SPACING.m,
        color: COLORS.text
    },
    description: {
        fontSize: 14,
        color: COLORS.text,
        lineHeight: 20
    },
    specRow: {
        flexDirection: 'row',
        marginBottom: SPACING.s
    },
    specLabel: {
        flex: 1,
        color: COLORS.gray,
        fontSize: 14
    },
    specValue: {
        flex: 2,
        color: COLORS.text,
        fontSize: 14
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        elevation: 5
    },
    cartButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    cartButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.text
    },
    buyButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary, // Orange for Buy Now
    },
    buyButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.white
    }
});

export default ProductDetailsScreen;
