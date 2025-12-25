import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Mock Data for Categories with Subcategories
const ALL_CATEGORIES = [
    {
        id: '1',
        name: 'Electronics',
        icon: 'cellphone',
        subCategories: [
            { id: '1-1', name: 'Mobiles', image: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70' },
            { id: '1-2', name: 'Laptops', image: 'https://rukminim1.flixcart.com/image/312/312/xif0q/computer/1/e/k/-original-imagqf3a3f6gmr7y.jpeg?q=70' },
            { id: '1-3', name: 'Audio', image: 'https://rukminim1.flixcart.com/image/612/612/kqqykcw0/headphone/p/y/s/bassheads-103-blue-boat-original-imag4p99f6mej56z.jpeg?q=70' },
        ]
    },
    {
        id: '2',
        name: 'Fashion',
        icon: 'tshirt-crew',
        subCategories: [
            { id: '2-1', name: 'Men\'s Top Wear', image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70' },
            { id: '2-2', name: 'Women\'s Ethnic', image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/sari/6/t/z/free-braso2-o-combo-lorofy-unstitched-original-imagkymbfmjbfeqj.jpeg?q=70' },
            { id: '2-3', name: 'Footwear', image: 'https://rukminim1.flixcart.com/image/612/612/k0lbdzk0/shoe/v/c/h/asg-444-9-asian-gray-original-imafkda2z2gzsqy6.jpeg?q=70' },
        ]
    },
    {
        id: '3',
        name: 'Home',
        icon: 'home-outline',
        subCategories: [
            { id: '3-1', name: 'Furniture', image: 'https://rukminim1.flixcart.com/image/612/612/kwjkuq80/bed/h/p/p/-original-imag97p2hyn27g2d.jpeg?q=70' },
            { id: '3-2', name: 'Decor', image: 'https://rukminim1.flixcart.com/image/612/612/kz5vwy80/wall-decoration/m/1/v/set-of-4-hanging-musical-men-wall-hanging-decorative-showpiece-original-imagb8g5wz6f7x4h.jpeg?q=70' },
        ]
    },
    {
        id: '4',
        name: 'Appliances',
        icon: 'washing-machine',
        subCategories: [
            { id: '4-1', name: 'TVs', image: 'https://rukminim1.flixcart.com/image/312/312/l5jxt3k0/television/z/i/x/-original-imagg7y8frkchx6t.jpeg?q=70' },
            { id: '4-2', name: 'Washing Machines', image: 'https://rukminim1.flixcart.com/image/312/312/kmns7m80/washing-machine-new/j/x/r/xw-80-fl-coral-red-break-water-marq-by-flipkart-original-imagfgzhz5gzgz6z.jpeg?q=70' },
        ]
    },
    {
        id: '5',
        name: 'Toys',
        icon: 'toy-brick',
        subCategories: [
            { id: '5-1', name: 'Remote Control', image: 'https://rukminim1.flixcart.com/image/612/612/kdbzqfk0/rc-vehicle/j/3/7/1-18-scale-high-speed-remote-control-car-for-kids-miss-chief-original-imafu9z8h8h8h8h8.jpeg?q=70' },
        ]
    },
];

const CategoriesScreen = () => {
    const insets = useSafeAreaInsets();
    const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES[0]);

    const renderSidebarItem = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={[
                styles.sidebarItem,
                selectedCategory.id === item.id && styles.sidebarItemSelected
            ]}
            onPress={() => setSelectedCategory(item)}
        >
            <View style={styles.sidebarIcon}>
                <MaterialCommunityIcons
                    name={item.icon}
                    size={24}
                    color={selectedCategory.id === item.id ? COLORS.primary : COLORS.gray}
                />
            </View>
            <Text
                style={[
                    styles.sidebarText,
                    selectedCategory.id === item.id && styles.sidebarTextSelected
                ]}
                numberOfLines={2}
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    const renderSubCategory = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.subCategoryItem}>
            <View style={styles.subCategoryImageContainer}>
                <Image source={{ uri: item.image }} style={styles.subCategoryImage} resizeMode="contain" />
            </View>
            <Text style={styles.subCategoryName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={[styles.header, { paddingTop: insets.top + SPACING.s }]}>
                <Text style={styles.headerTitle}>All Categories</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="magnify" size={24} color={COLORS.white} />
                </TouchableOpacity>
            </View>

            <View style={styles.contentContainer}>
                {/* Sidebar */}
                <View style={styles.sidebar}>
                    <FlatList
                        data={ALL_CATEGORIES}
                        renderItem={renderSidebarItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                {/* Main Content */}
                <View style={styles.mainContent}>
                    <Text style={styles.categoryTitle}>{selectedCategory.name}</Text>
                    <FlatList
                        data={selectedCategory.subCategories}
                        renderItem={renderSubCategory}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.subCategoriesList}
                    />
                </View>
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
        paddingHorizontal: SPACING.m,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    sidebar: {
        width: 90,
        backgroundColor: COLORS.white,
        borderRightWidth: 1,
        borderRightColor: COLORS.lightGray,
    },
    sidebarItem: {
        alignItems: 'center',
        paddingVertical: SPACING.l,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingHorizontal: 4,
    },
    sidebarItemSelected: {
        backgroundColor: '#fff',
        borderLeftWidth: 4,
        borderLeftColor: COLORS.primary,
    },
    sidebarIcon: {
        marginBottom: SPACING.xs,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sidebarText: {
        fontSize: 10,
        textAlign: 'center',
        color: COLORS.text,
    },
    sidebarTextSelected: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    mainContent: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SPACING.m,
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.m,
    },
    subCategoriesList: {
        paddingBottom: 80,
    },
    subCategoryItem: {
        flex: 1,
        margin: SPACING.s,
        alignItems: 'center',
        marginBottom: SPACING.l,
    },
    subCategoryImageContainer: {
        width: '100%',
        aspectRatio: 1,
        backgroundColor: '#f9f9f9',
        borderRadius: SIZES.borderRadius,
        padding: SPACING.s,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.xs,
    },
    subCategoryImage: {
        width: '80%',
        height: '80%',
    },
    subCategoryName: {
        fontSize: 12,
        color: COLORS.text,
        textAlign: 'center',
    },
});

export default CategoriesScreen;
