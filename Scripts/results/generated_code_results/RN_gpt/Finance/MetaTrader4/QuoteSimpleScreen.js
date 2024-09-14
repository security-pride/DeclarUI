import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const QuoteSimpleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.pencilIcon}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <View style={styles.toggleButtonContainer}>
          <TouchableOpacity style={styles.activeToggleButton}>
            <Text style={styles.activeToggleText}>Simple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveToggleButton} onPress={() => navigation.navigate('QuoteAdvanced')}>
            <Text style={styles.inactiveToggleText}>Advanced</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.quoteList}>
        {[
          { symbol: 'EURUSD', bid: '1.09336', ask: '1.09337', color: 'blue' },
          { symbol: 'GBPUSD', bid: '1.30080', ask: '1.30083', color: 'blue' },
          { symbol: 'USDJPY', bid: '156.348', ask: '156.354', color: 'blue' },
          { symbol: 'USDCAD', bid: '1.36912', ask: '1.36919', color: 'red' },
          { symbol: 'USDCHF', bid: '0.88489', ask: '0.88495', color: 'red' },
          { symbol: 'NZDUSD', bid: '0.60713', ask: '0.60718', color: 'blue' },
          { symbol: 'AUDUSD', bid: '0.67262', ask: '0.67267', color: 'red' },
          { symbol: 'AUDNZD', bid: '1.10778', ask: '1.10799', color: 'blue' },
          { symbol: 'AUDCAD', bid: '0.92085', ask: '0.92095', color: 'red' },
        ].map((quote, index) => (
          <View key={index} style={styles.quoteRow}>
            <Text style={styles.symbol}>{quote.symbol}</Text>
            <Text style={[styles.price, { color: quote.color }]}>{quote.bid}</Text>
            <Text style={[styles.price, { color: quote.color }]}>{quote.ask}</Text>
          </View>
        ))}
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('QuoteSimple')} style={styles.bottomNavItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavImage} />
          <Text style={styles.bottomNavTextActive}>Quotes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Charts')} style={styles.bottomNavItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavImage} />
          <Text style={styles.bottomNavText}>Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Trade')} style={styles.bottomNavItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavImage} />
          <Text style={styles.bottomNavText}>Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('History')} style={styles.bottomNavItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavImage} />
          <Text style={styles.bottomNavText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.bottomNavItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavImage} />
          <Text style={styles.bottomNavText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'black',
  },
  pencilIcon: {
    padding: 5,
  },
  iconImage: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  toggleButtonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'gray',
  },
  activeToggleButton: {
    backgroundColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  inactiveToggleButton: {
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  activeToggleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inactiveToggleText: {
    color: 'gray',
  },
  addButton: {
    padding: 5,
  },
  quoteList: {
    flex: 1,
    paddingVertical: 10,
  },
  quoteRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  symbol: {
    color: 'white',
    width: '33%',
  },
  price: {
    width: '33%',
    textAlign: 'center',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavImage: {
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  bottomNavText: {
    color: 'gray',
  },
  bottomNavTextActive: {
    color: 'blue',
  },
});

export default QuoteSimpleScreen;