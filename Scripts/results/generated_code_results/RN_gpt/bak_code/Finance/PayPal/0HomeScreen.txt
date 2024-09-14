import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Icons */}
      <View style={styles.topIcons}>
        <TouchableOpacity>
          <Icon name="menu" size={30} />
        </TouchableOpacity>
        <View style={styles.rightIcons}>
          <TouchableOpacity>
            <Icon name="help-circle-outline" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="qr-code-outline" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="person-outline" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* PayPal Balance */}
      <View style={styles.balanceCard}>
        <Image source={require('../assets/snack-icon.png')} style={styles.paypalLogo} />
        <View>
          <Text style={styles.balanceAmount}>£0.00</Text>
          <Text>PayPal balance</Text>
        </View>
      </View>

      {/* Send Again Section */}
      <Text style={styles.sectionTitle}>Send again</Text>
      <View style={styles.sendAgainSection}>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.circularIcon}>
            <Text style={styles.iconText}>ZF</Text>
          </View>
          <Text>Zhou Fang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.circularIcon}>
            <Icon name="search" size={20} color="white" />
          </View>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Referral Promo */}
      <View style={styles.promoCard}>
        <Text style={styles.promoTitle}>Let’s go! Refer a friend to earn a £10 reward.</Text>
        <Text>Max 10 friends. Min spend £5 within 30 days. Ends 31/12/24. Terms apply.</Text>
        <TouchableOpacity>
          <Text style={styles.inviteText}>Invite friends</Text>
        </TouchableOpacity>
      </View>

      {/* Send Money Internationally */}
      <Text style={styles.sectionTitle}>Send money internationally</Text>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={25} color="blue" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="stats-chart" size={25} color="gray" />
          <Text style={styles.navText}>Crypto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="cash-outline" size={25} color="gray" />
          <Text style={styles.navText}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="wallet-outline" size={25} color="gray" />
          <Text style={styles.navText}>Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rightIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  balanceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  paypalLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sendAgainSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  iconButton: {
    alignItems: 'center',
  },
  circularIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconText: {
    color: 'white',
    fontWeight: 'bold',
  },
  promoCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  promoTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inviteText: {
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'white',
  },
  navItem: {
    alignItems: 'center',
  },
  navTextActive: {
    color: 'blue',
    fontSize: 12,
    marginTop: 2,
  },
  navText: {
    color: 'gray',
    fontSize: 12,
    marginTop: 2,
  },
});

export default HomeScreen;