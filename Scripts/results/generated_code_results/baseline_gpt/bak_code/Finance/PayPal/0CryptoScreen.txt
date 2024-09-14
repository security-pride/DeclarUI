import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CryptoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Crypto</Text>
      <View style={styles.noticeBox}>
        <Icon name="ios-information-circle" size={20} color="#2365ae" />
        <Text style={styles.noticeText}>
          PayPal’s crypto purchasing service is temporarily paused while we update our system to comply with new UK regulations. You can continue to hold your crypto, or you may sell if you choose.
        </Text>
      </View>
      <Text style={styles.sectionHeader}>买卖并持有加密货币</Text>
      <View style={styles.cryptoItem}>
        <Icon name="logo-bitcoin" size={30} color="#f7931a" />
        <View style={styles.cryptoTextContainer}>
          <Text style={styles.cryptoTitle}>Bitcoin</Text>
          <Text style={styles.cryptoSubtitle}>£ 49,339.33/BTC</Text>
        </View>
      </View>
      <View style={styles.cryptoItem}>
        <Icon name="logo-ethereum" size={30} color="#343434" />
        <View style={styles.cryptoTextContainer}>
          <Text style={styles.cryptoTitle}>Ethereum</Text>
          <Text style={styles.cryptoSubtitle}>£ 2,611.73/ETH</Text>
        </View>
      </View>
      <View style={styles.cryptoItem}>
        <Icon name="logo-bitcoin" size={30} color="#e8443f" />
        <View style={styles.cryptoTextContainer}>
          <Text style={styles.cryptoTitle}>Litecoin</Text>
          <Text style={styles.cryptoSubtitle}>£ 55.24/LTC</Text>
        </View>
      </View>
      <View style={styles.cryptoItem}>
        <Icon name="logo-bitcoin" size={30} color="#4baa0b" />
        <View style={styles.cryptoTextContainer}>
          <Text style={styles.cryptoTitle}>Bitcoin Cash</Text>
          <Text style={styles.cryptoSubtitle}>£ 287.75/BCH</Text>
        </View>
      </View>
      <Text style={styles.footer}>
        这些条款仅提供一般信息，不构成财务、投资或税务方面的建议。
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f7fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  noticeBox: {
    flexDirection: 'row',
    backgroundColor: '#e0e7ef',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  noticeText: {
    flex: 1,
    color: '#1b2e4b',
    marginLeft: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cryptoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  cryptoTextContainer: {
    marginLeft: 16,
  },
  cryptoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cryptoSubtitle: {
    color: '#555',
  },
  footer: {
    fontSize: 12,
    color: '#555',
    marginTop: 20,
  },
});

export default CryptoScreen;