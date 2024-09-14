import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const TermsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms and Conditions</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Valid on Vodafone pay monthly contracts only.{"\n"}
          New customers only.{"\n"}
          Excludes SIM Only plans.{"\n"}
          VC10OFF Code: Some handsets may be excluded.{"\n"}
          Monthly price (including out of bundle charges for Vodafone) will increase every April by the Consumer Price Index rate of inflation + 3.9%.{"\n"}
          EXCLUDES KLARNA, CLEARPAY AND ANY OTHER "ORDER NOW PAY LATER" PAYMENT METHODS. Paypal Credit and Paypal Pay In 3 are also excluded types of payment.{"\n"}
          If you don't receive your gift card within the expected timeframe, please wait until after your trip has been completed before contacting the VoucherCodes support team.{"\n"}
          Excludes retailers app orders. You must make your purchase through the brands website.{"\n"}
          You must claim your gift card by clicking the Claim Your Reward button in your account within 6 months of the reward offer confirmation email or the gift card will be forfeited.{"\n"}
          To be eligible for the offer you must make your
        </Text>
      </View>
      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Discover')} style={styles.navItem}>
          <Icon name="compass-outline" size={24} color="#000" />
          <Text style={styles.navText}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.navItem}>
          <Icon name="search-outline" size={24} color="#000" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VIP')} style={styles.navItem}>
          <View style={styles.vipBadge}>
            <Text style={styles.newLabel}>NEW</Text>
          </View>
          <Icon name="star-outline" size={24} color="#000" />
          <Text style={styles.navText}>VIP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.navItem}>
          <Icon name="person-outline" size={24} color="#000" />
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.navItem}>
          <Icon name="information-circle-outline" size={24} color="#000" />
          <Text style={styles.navText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffdd00',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
  vipBadge: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: '#ffdd00',
    borderRadius: 2,
    paddingHorizontal: 2,
  },
  newLabel: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default TermsScreen;