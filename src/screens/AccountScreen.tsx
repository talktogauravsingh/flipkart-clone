import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ACCOUNT_OPTIONS = [
    { id: '1', title: 'My Orders', icon: 'package-variant-closed', subtitle: 'View all orders' },
    { id: '2', title: 'Flipkart Plus Zone', icon: 'star-circle', subtitle: 'Special offers for you' },
    { id: '3', title: 'My Wishlist', icon: 'heart', subtitle: 'Your favorite items' },
    { id: '4', title: 'My Coupons', icon: 'ticket-percent', subtitle: 'View coupons' },
    { id: '5', title: 'Help Center', icon: 'help-circle', subtitle: 'Help regarding your recent purchases' },
    { id: '6', title: 'Logout', icon: 'logout', subtitle: '' },
];

const AccountScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <View style={[styles.header, { paddingTop: insets.top + SPACING.s }]}>
                <Text style={styles.headerTitle}>My Account</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Profile Header */}
                <View style={styles.profileContainer}>
                    <View style={styles.avatar}>
                        <MaterialCommunityIcons name="account" size={40} color={COLORS.white} />
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.userName}>Gaurav Singh</Text>
                        <Text style={styles.userPhone}>+91 98765 43210</Text>
                    </View>
                    <TouchableOpacity style={styles.editBtn}>
                        <MaterialCommunityIcons name="pencil" size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>

                {/* Account Options */}
                <View style={styles.optionsContainer}>
                    {ACCOUNT_OPTIONS.map((item, index) => (
                        <TouchableOpacity key={item.id} style={[
                            styles.optionItem,
                            index === ACCOUNT_OPTIONS.length - 1 && { borderBottomWidth: 0 }
                        ]}>
                            <View style={styles.optionIcon}>
                                <MaterialCommunityIcons name={item.icon} size={24} color={COLORS.primary} />
                            </View>
                            <View style={styles.optionContent}>
                                <Text style={styles.optionTitle}>{item.title}</Text>
                                {item.subtitle ? <Text style={styles.optionSubtitle}>{item.subtitle}</Text> : null}
                            </View>
                            <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.gray} />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{ height: 100 }} />
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
        paddingBottom: SPACING.m,
        paddingHorizontal: SPACING.m,
    },
    headerTitle: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    profileContainer: {
        backgroundColor: COLORS.white,
        padding: SPACING.m,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.s,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
    },
    profileInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.text,
    },
    userPhone: {
        fontSize: 14,
        color: COLORS.gray,
        marginTop: 4,
    },
    editBtn: {
        padding: SPACING.s,
    },
    optionsContainer: {
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLORS.lightGray,
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.m,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    optionIcon: {
        marginRight: SPACING.m,
        width: 30,
        alignItems: 'center',
    },
    optionContent: {
        flex: 1,
    },
    optionTitle: {
        fontSize: 16,
        color: COLORS.text,
        marginBottom: 2,
    },
    optionSubtitle: {
        fontSize: 12,
        color: COLORS.gray,
    },
});

export default AccountScreen;
