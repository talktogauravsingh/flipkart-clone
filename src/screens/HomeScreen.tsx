import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import { CATEGORIES, BANNERS, PRODUCTS } from '../constants/mockData';
const { width } = Dimensions.get('window');

const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const insets = useSafeAreaInsets();
    const { cartCount } = useCart();

    const renderCategory = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIconContainer}>
                {/* Placeholder for actual icons if needed */}
                <MaterialCommunityIcons name={item.icon} size={24} color={COLORS.primary} />
            </View>
            <Text style={styles.categoryName} numberOfLines={1}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderProduct = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
        >
            <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="contain" />
            <View style={styles.productInfo}>
                <Text style={styles.productTitle} numberOfLines={2}>
                    {item.title}
                </Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>{item.rating} ★</Text>
                    <Text style={styles.reviewCount}>({item.reviewCount})</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>₹{item.price.toLocaleString()}</Text>
                    <Text style={styles.originalPrice}>₹{item.originalPrice.toLocaleString()}</Text>
                    <Text style={styles.discount}>{item.discount}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={[styles.header, { paddingTop: insets.top + SPACING.s }]}>
                <View style={styles.headerTop}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={{
                                uri: 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png',
                            }}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.headerIcons}>
                        <MaterialCommunityIcons name="bell-outline" size={24} color={COLORS.white} />
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                            <View>
                                <MaterialCommunityIcons name="cart-outline" size={24} color={COLORS.white} style={{ marginLeft: 16 }} />
                                {cartCount > 0 && (
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeText}>{cartCount}</Text>
                                    </View>
                                )}
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <MaterialCommunityIcons name="magnify" size={20} color={COLORS.gray} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search for products, brands and more"
                            placeholderTextColor={COLORS.gray}
                        />
                    </View>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Categories */}
                <View style={styles.categoriesContainer}>
                    <FlatList
                        data={CATEGORIES}
                        renderItem={renderCategory}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.categoriesList}
                    />
                </View>

                {/* Banner Carousel (Simplified) */}
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.bannerContainer}>
                    {BANNERS.map((banner, index) => (
                        <Image
                            key={index}
                            source={{ uri: banner }}
                            style={styles.bannerImage}
                            resizeMode="stretch"
                        />
                    ))}
                </ScrollView>

                {/* Deals of the Day / Products */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recently Viewed Stores</Text>
                    <TouchableOpacity style={styles.viewAllBtn}>
                        <Text style={styles.viewAllText}>View all</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.productsGrid}>
                    {PRODUCTS.map((product) => (
                        <View key={product.id} style={{ width: '50%', padding: 4 }}>
                            {renderProduct({ item: product })}
                        </View>
                    ))}
                </View>

                {/* Spacer for bottom tab */}
                <View style={{ height: 80 }} />
            </ScrollView>
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
        paddingTop: SPACING.l,
        paddingBottom: SPACING.m,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SPACING.m,
        marginBottom: SPACING.m,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 20
    },
    headerIcons: {
        flexDirection: 'row',
    },
    searchContainer: {
        paddingHorizontal: SPACING.m,
    },
    searchBar: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.s,
        height: 40,
    },
    searchInput: {
        flex: 1,
        marginLeft: SPACING.s,
        fontSize: 14,
        color: COLORS.text,
    },
    categoriesContainer: {
        backgroundColor: COLORS.white,
        paddingVertical: SPACING.m,
    },
    categoriesList: {
        paddingHorizontal: SPACING.s,
    },
    categoryItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: SPACING.m,
        width: 60,
    },
    categoryIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.lightGray, // Placeholder background
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.xs,
    },
    categoryName: {
        fontSize: 12,
        fontWeight: '500',
        color: COLORS.text,
        textAlign: 'center',
    },
    bannerContainer: {
        marginTop: SPACING.s,
        height: 180,
    },
    bannerImage: {
        width: width,
        height: 180,
    },
    sectionHeader: {
        padding: SPACING.m,
        backgroundColor: COLORS.white,
        marginTop: SPACING.s,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.text,
    },
    viewAllBtn: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.xs,
        borderRadius: SIZES.borderRadius,
    },
    viewAllText: {
        color: COLORS.white,
        fontWeight: '600',
        fontSize: 12
    },
    productsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 4,
    },
    productCard: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.borderRadius,
        padding: SPACING.s,
        marginBottom: SPACING.s,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
    },
    productImage: {
        width: '100%',
        height: 120,
        marginBottom: SPACING.s,
    },
    productInfo: {
        // flex: 1,
    },
    productTitle: {
        fontSize: 14,
        color: COLORS.text,
        marginBottom: SPACING.xs,
        height: 40,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.xs,
    },
    ratingText: {
        backgroundColor: COLORS.green,
        color: COLORS.white,
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginRight: 4,
    },
    reviewCount: {
        fontSize: 12,
        color: COLORS.gray,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
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
        marginRight: 4
    },
    discount: {
        fontSize: 12,
        color: COLORS.green,
        fontWeight: '600',
    },

    badge: {
        position: 'absolute',
        top: -8,
        right: -8,
        backgroundColor: COLORS.red,
        borderRadius: 10,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    badgeText: {
        color: COLORS.white,
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
