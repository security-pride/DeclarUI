import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TermsScreen = () => {
  const navigation = useNavigation();

  const termsContent = `Valid on Vodafone pay monthly contracts only.
New customers only.
Excludes SIM Only plans.
VC10OFF Code: Some handsets may be excluded.
Monthly price (including out of bundle charges for Vodafone) will increase every April by the Consumer Price Index rate of inflation + 3.9%.
EXCLUDES KLARNA, CLEARPAY AND ANY OTHER "ORDER NOW PAY LATER" PAYMENT METHODS. Paypal Credit and Paypal Pay In 3 are also excluded types of payment.
If you don't receive your gift card within the expected timeframe, please wait until after your trip has been completed before contacting the VoucherCodes support team.
Excludes retailers app orders. You must make your purchase through the brands website.
You must claim your gift card by clicking the Claim Your Reward button in your account within 6 months of the reward offer confirmation email or the gift card will be forfeited.
To be eligible for the offer you must make your Mobiles.co.uk purchase online via VoucherCodes`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms and Conditions</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.termsText}>{termsContent}</Text>
      </ScrollView>
      
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Discover')} style={styles.navItem}>
          <Icon name="explore" size={24} color="#000" />
          <Text>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.navItem}>
          <Icon name="search" size={24} color="#000" />
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VIP')} style={styles.navItem}>
          <Icon name="star" size={24} color="#000" />
          <Text>VIP</Text>
          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>NEW</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.navItem}>
          <Icon name="person" size={24} color="#000" />
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFD700',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  termsText: {
    fontSize: 16,
    lineHeight: 24,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
  },
  navItem: {
    alignItems: 'center',
  },
  newBadge: {
    position: 'absolute',
    top: -5,
    right: -15,
    backgroundColor: '#FF6347',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default TermsScreen;