import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CryptoScreen = () => {
const navigation = useNavigation();
const cryptoList = [
{ name: 'Bitcoin', symbol: 'BTC', price: '£ 49,339.33/BTC', icon: require('../assets/snack-icon.png') },
{ name: 'Ethereum', symbol: 'ETH', price: '£ 2,611.73/ETH', icon: require('../assets/snack-icon.png') },
{ name: 'Litecoin', symbol: 'LTC', price: '£ 55.24/LTC', icon: require('../assets/snack-icon.png') },
{ name: 'Bitcoin Cash', symbol: 'BCH', price: '£ 287.75/BCH', icon: require('../assets/snack-icon.png') },
];
return (
<View style={styles.container}>
<Text style={styles.title}>Crypto</Text>
  <View style={styles.notificationPanel}>
    <Image source={require('../assets/snack-icon.png')} style={styles.infoIcon} />
    <Text style={styles.notificationText}>
      PayPal's crypto purchasing service is temporarily paused while we update our system to comply with new UK regulations. You can continue to hold your crypto, or you may sell if you choose.
    </Text>
  </View>

  <Text style={styles.sectionTitle}>买卖并持有加密货币</Text>

  <ScrollView>
    {cryptoList.map((crypto, index) => (
      <TouchableOpacity
        key={index}
        style={styles.cryptoCard}
        onPress={() => navigation.navigate('Bitcoin')}
      >
        <Image source={crypto.icon} style={styles.cryptoIcon} />
        <View style={styles.cryptoInfo}>
          <Text style={styles.cryptoName}>{crypto.name}</Text>
          <Text style={styles.cryptoPrice}>{crypto.price}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>

  <Text style={styles.disclaimer}>
    这些条款仅提供一般信息，不构成财务、投资或税务方面的建议。
  </Text>

  <View style={styles.tabBar}>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={[styles.tabLabel, styles.activeTabLabel]}>Crypto</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Payments</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Wallet')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Wallet</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
padding: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
},
notificationPanel: {
backgroundColor: '#f0f0f0',
borderRadius: 10,
padding: 15,
flexDirection: 'row',
alignItems: 'center',
marginBottom: 20,
},
infoIcon: {
width: 24,
height: 24,
marginRight: 10,
},
notificationText: {
flex: 1,
fontSize: 14,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 15,
},
cryptoCard: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
borderRadius: 10,
padding: 15,
marginBottom: 10,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 4,
elevation: 3,
},
cryptoIcon: {
width: 40,
height: 40,
marginRight: 15,
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
color: '#666',
},
disclaimer: {
fontSize: 12,
color: '#666',
marginTop: 20,
marginBottom: 10,
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
},
tabItem: {
alignItems: 'center',
},
tabIcon: {
width: 24,
height: 24,
},
tabLabel: {
fontSize: 12,
marginTop: 5,
},
activeTabLabel: {
color: '#007AFF',
},
});
export default CryptoScreen;