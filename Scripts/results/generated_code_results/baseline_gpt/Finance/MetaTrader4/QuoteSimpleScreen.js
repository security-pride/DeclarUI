import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const QuoteSimpleScreen = () => {
  const data = [
    { pair: 'EURUSD', bid: '1.09336', ask: '1.09337', color: 'blue' },
    { pair: 'GBPUSD', bid: '1.30080', ask: '1.30083', color: 'blue' },
    { pair: 'USDJPY', bid: '156.348', ask: '156.354', color: 'blue' },
    { pair: 'USDCAD', bid: '1.36912', ask: '1.36919', color: 'red' },
    { pair: 'USDCHF', bid: '0.88489', ask: '0.88495', color: 'red' },
    { pair: 'NZDUSD', bid: '0.60713', ask: '0.60718', color: 'blue' },
    { pair: 'AUDUSD', bid: '0.67262', ask: '0.67267', color: 'red' },
    { pair: 'AUDNZD', bid: '1.10778', ask: '1.10799', color: 'blue' },
    { pair: 'AUDCAD', bid: '0.92085', ask: '0.92095', color: 'red' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="pencil" size={24} color="blue" />
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabTextActive}>Simple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabInactive}>
            <Text style={styles.tabTextInactive}>Advanced</Text>
          </TouchableOpacity>
        </View>
        <Icon name="plus" size={24} color="blue" />
      </View>
      <ScrollView style={styles.scrollView}>
        {data.map((item, index) => (
          <View key={index} style={styles.quoteRow}>
            <Text style={styles.pairText}>{item.pair}</Text>
            <Text style={[styles.bidAskText, { color: item.color }]}>{item.bid}</Text>
            <Text style={[styles.bidAskText, { color: item.color }]}>{item.ask}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.footerText}>Quotes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.footerText}>Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.footerText}>Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.footerText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.footerText}>Settings</Text>
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
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'black',
  },
  tabs: {
    flexDirection: 'row',
  },
  tabActive: {
    backgroundColor: '#808080',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  tabInactive: {
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  tabTextActive: {
    color: 'black',
    fontWeight: 'bold',
  },
  tabTextInactive: {
    color: 'gray',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'black',
  },
  quoteRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  pairText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bidAskText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  footerItem: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'gray',
  },
  footerText: {
    color: 'gray',
    fontSize: 12,
  },
});

export default QuoteSimpleScreen;