import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const CryptoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Crypto</Text>

        <View style={styles.notificationPanel}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.notificationText}>
            PayPal's crypto purchasing service is temporarily paused while we update our system to comply with new UK regulations. You can continue to hold your crypto, or you may sell if you choose.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>买卖并持有加密货币</Text>

        <TouchableOpacity style={styles.cryptoCard} onPress={() => navigation.navigate('Bitcoin')}>
          <View style={styles.cryptoIconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.cryptoIcon} />
          </View>
          <View style={styles.cryptoInfo}>
            <Text style={styles.cryptoName}>Bitcoin</Text>
            <Text style={styles.cryptoPrice}>£ 49,339.33/BTC</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cryptoCard} onPress={() => navigation.navigate('Ethereum')}>
          <View style={styles.cryptoIconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.cryptoIcon} />
          </View>
          <View style={styles.cryptoInfo}>
            <Text style={styles.cryptoName}>Ethereum</Text>
            <Text style={styles.cryptoPrice}>£ 2,611.73/ETH</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cryptoCard} onPress={() => navigation.navigate('Litecoin')}>
          <View style={styles.cryptoIconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.cryptoIcon} />
          </View>
          <View style={styles.cryptoInfo}>
            <Text style={styles.cryptoName}>Litecoin</Text>
            <Text style={styles.cryptoPrice}>£ 55.24/LTC</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cryptoCard} onPress={() => navigation.navigate('BitcoinCash')}>
          <View style={styles.cryptoIconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.cryptoIcon} />
          </View>
          <View style={styles.cryptoInfo}>
            <Text style={styles.cryptoName}>Bitcoin Cash</Text>
            <Text style={styles.cryptoPrice}>£ 287.75/BCH</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.disclaimer}>
          这些条款仅提供一般信息，不构成财务、投资或税务方面的建议。
        </Text>
      </ScrollView>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Crypto')} style={[styles.navItem, styles.activeNavItem]}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Crypto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Payments')} style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Wallet')} style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  notificationPanel: {
    flexDirection: 'row',
    backgroundColor: '#E1E8ED',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  notificationText: {
    flex: 1,
    fontSize: 14,
    color: '#4A4A4A',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
  },
  cryptoCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cryptoIconWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cryptoIcon: {
    width: 40,
    height: 40,
  },
  cryptoInfo: {
    flex: 1,
  },
  cryptoName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cryptoPrice: {
    fontSize: 14,
    color: '#4A4A4A',
  },
  disclaimer: {
    fontSize: 12,
    color: '#4A4A4A',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  bottomNavBar: {
    flexDirection: 'row',
    height: 56,
    borderTopWidth: 1,
    borderTopColor: '#E1E8ED',
    backgroundColor: '#FFFFFF',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#4A4A4A',
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#0070E0',
  },
});

export default CryptoScreen;