import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const WalletScreen = () => {
  return (
    <ScrollView style={styles.container}>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <Text style={styles.activeTab}>Wallet</Text>
        <Text style={styles.tab}>Rewards</Text>
        <Text style={styles.tab}>Activity</Text>
      </View>

      {/* PayPal Balance Card */}
      <View style={styles.balanceCard}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.paypalLogo}
        />
        <View style={styles.balanceInfo}>
          <Text style={styles.balanceText}>PayPal balance</Text>
          <Text style={styles.amount}>£0.00</Text>
        </View>
        <Text style={styles.balanceAmount}>£0.00</Text>
      </View>

      {/* Bank Accounts and Cards Section */}
      <View style={styles.bankSection}>
        <Text style={styles.bankTitle}>Bank accounts and cards</Text>
        <TouchableOpacity>
          <Text style={styles.addNew}>Add new</Text>
        </TouchableOpacity>
      </View>

      {/* Barclays Visa Card */}
      <View style={styles.card}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.bankLogo}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f9',
    padding: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  activeTab: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tab: {
    fontSize: 16,
    color: '#666',
  },
  balanceCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paypalLogo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  balanceInfo: {
    flex: 1,
    marginLeft: 16,
  },
  balanceText: {
    fontSize: 16,
    color: '#000',
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  balanceAmount: {
    fontSize: 16,
    color: '#000',
  },
  bankSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  bankTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  addNew: {
    fontSize: 16,
    color: '#1e90ff',
  },
  card: {
    backgroundColor: '#002d72',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  bankLogo: {
    width: '100%',
    height: 64,
    resizeMode: 'cover',
  },
});

export default WalletScreen;