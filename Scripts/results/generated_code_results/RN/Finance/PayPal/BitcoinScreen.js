import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const BitcoinScreen = () => {
const [selectedTimeRange, setSelectedTimeRange] = useState('24小时');
const navigation = useNavigation();
const timeRanges = ['24小时', '1周', '1月', '1年', '所有时间'];
const quickBuyOptions = ['20', '50', '100', '500'];
return (
<ScrollView style={styles.container}>
<TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Crypto')}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
  <Text style={styles.bitcoinLabel}>Bitcoin</Text>
  <Text style={styles.priceLabel}>£ 49,283.16</Text>
  <View style={styles.priceChangeContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
    <Text style={styles.priceChangeLabel}>£ 311.81 (0.62%) 过去24小时</Text>
  </View>

  <ImageBackground
    source={require('../assets/snack-icon.png')}
    style={styles.chart}
    resizeMode="cover"
  />

  <View style={styles.timeRangeContainer}>
    {timeRanges.map((range) => (
      <TouchableOpacity
        key={range}
        style={[
          styles.timeRangeButton,
          selectedTimeRange === range && styles.selectedTimeRange,
        ]}
        onPress={() => setSelectedTimeRange(range)}
      >
        <Text style={styles.timeRangeText}>{range}</Text>
      </TouchableOpacity>
    ))}
  </View>

  <View style={styles.quickBuyContainer}>
    {quickBuyOptions.map((option) => (
      <TouchableOpacity key={option} style={styles.quickBuyButton}>
        <Text style={styles.quickBuyText}>${option}</Text>
      </TouchableOpacity>
    ))}
  </View>

  <TouchableOpacity style={styles.buyButton}>
    <Text style={styles.buyButtonText}>购物</Text>
  </TouchableOpacity>

  <View style={styles.tabBar}>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Crypto</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Payments')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Payments</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Wallet')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>Wallet</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
backButton: {
position: 'absolute',
top: 40,
left: 20,
zIndex: 1,
},
backIcon: {
width: 24,
height: 24,
},
bitcoinLabel: {
fontSize: 24,
fontWeight: 'bold',
marginTop: 60,
marginLeft: 20,
},
priceLabel: {
fontSize: 36,
fontWeight: 'bold',
marginTop: 10,
marginLeft: 20,
},
priceChangeContainer: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 5,
marginLeft: 20,
},
arrowIcon: {
width: 16,
height: 16,
marginRight: 5,
},
priceChangeLabel: {
fontSize: 16,
color: 'red',
},
chart: {
width: '100%',
height: 300,
marginTop: 20,
},
timeRangeContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginTop: 20,
paddingHorizontal: 10,
},
timeRangeButton: {
paddingVertical: 5,
paddingHorizontal: 10,
borderRadius: 15,
backgroundColor: '#f0f0f0',
},
selectedTimeRange: {
backgroundColor: '#007AFF',
},
timeRangeText: {
fontSize: 14,
},
quickBuyContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginTop: 20,
paddingHorizontal: 10,
},
quickBuyButton: {
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 5,
borderWidth: 1,
borderColor: '#007AFF',
},
quickBuyText: {
fontSize: 16,
color: '#007AFF',
},
buyButton: {
backgroundColor: '#007AFF',
paddingVertical: 15,
marginHorizontal: 20,
borderRadius: 5,
marginTop: 20,
},
buyButtonText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
marginTop: 20,
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
});
export default BitcoinScreen;