import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

const BitcoinScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bitcoin</Text>
        <Text style={styles.currentPrice}>£ 49,283.16</Text>
        <Text style={styles.priceChange}>
          <Text style={styles.priceChangeAmount}>↓ £ 311.81 </Text>
          (0.62%)
        </Text>
        <Text style={styles.period}>过去24小时</Text>
      </View>

      <Image source={require('../assets/snack-icon.png')} style={styles.chart} />

      <View style={styles.timeRangeContainer}>
        {['24小时', '1周', '1月', '1年', '所有时间'].map((label) => (
          <TouchableOpacity key={label} style={styles.timeRangeButton}>
            <Text style={styles.timeRangeText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.quickBuyContainer}>
        {['$20', '$50', '$100', '$500'].map((amount) => (
          <TouchableOpacity key={amount} style={styles.quickBuyButton}>
            <Text style={styles.quickBuyText}>{amount}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>购物</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        {[
          { name: 'Home', icon: 'home' },
          { name: 'Crypto', icon: 'chart', isActive: true },
          { name: 'Payments', icon: 'pound' },
          { name: 'Wallet', icon: 'wallet' }
        ].map((item) => (
          <View key={item.name} style={styles.navItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
            <Text style={[styles.navText, item.isActive && styles.activeNavText]}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#333',
  },
  headerContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: '#333',
  },
  currentPrice: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  priceChange: {
    fontSize: 16,
    color: '#333',
  },
  priceChangeAmount: {
    color: 'red',
  },
  period: {
    fontSize: 14,
    color: '#999',
  },
  chart: {
    width: '100%',
    height: 200,
    marginVertical: 20,
  },
  timeRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  timeRangeButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  timeRangeText: {
    fontSize: 14,
    color: '#333',
  },
  quickBuyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  quickBuyButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  quickBuyText: {
    fontSize: 16,
    color: '#333',
  },
  buyButton: {
    marginBottom: 60,
    marginHorizontal: 20,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buyButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
    color: '#333',
  },
  activeNavText: {
    color: 'blue',
  },
});

export default BitcoinScreen;