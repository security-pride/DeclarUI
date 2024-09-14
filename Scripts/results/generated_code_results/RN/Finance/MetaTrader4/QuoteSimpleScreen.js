import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
const QuoteSimple = ({ navigation }) => {
const [mode, setMode] = useState('Simple');
const currencyPairs = [
{ symbol: 'EURUSD', bid: '1.09336', ask: '1.09337' },
{ symbol: 'GBPUSD', bid: '1.30080', ask: '1.30083' },
{ symbol: 'USDJPY', bid: '156.348', ask: '156.354' },
{ symbol: 'USDCAD', bid: '1.36912', ask: '1.36919' },
{ symbol: 'USDCHF', bid: '0.88489', ask: '0.88495' },
{ symbol: 'NZDUSD', bid: '0.60713', ask: '0.60718' },
{ symbol: 'AUDUSD', bid: '0.67262', ask: '0.67267' },
{ symbol: 'AUDNZD', bid: '1.10778', ask: '1.10799' },
{ symbol: 'AUDCAD', bid: '0.92085', ask: '0.92095' },
];
const renderItem = ({ item }) => (
<View style={styles.row}>
<Text style={styles.symbol}>{item.symbol}</Text>
<Text style={[styles.rate, { color: '#0080ff' }]}>{item.bid}</Text>
<Text style={[styles.rate, { color: '#ff4040' }]}>{item.ask}</Text>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<View style={styles.toggleContainer}>
<TouchableOpacity
style={[styles.toggleButton, mode === 'Simple' && styles.activeToggle]}
>
<Text style={styles.toggleText}>Simple</Text>
</TouchableOpacity>
<TouchableOpacity
style={[styles.toggleButton, mode === 'Advanced' && styles.activeToggle]}
onPress={() => navigation.navigate('QuoteAdvanced')}
>
<Text style={styles.toggleText}>Advanced</Text>
</TouchableOpacity>
</View>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
  <FlatList
    data={currencyPairs}
    renderItem={renderItem}
    keyExtractor={item => item.symbol}
  />

  <View style={styles.footer}>
    <TouchableOpacity style={styles.footerItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
      <Text style={styles.footerText}>Quotes</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Charts')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
      <Text style={styles.footerText}>Chart</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
      <Text style={styles.footerText}>Trade</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
      <Text style={styles.footerText}>History</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Settings')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
      <Text style={styles.footerText}>Settings</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
},
icon: {
width: 24,
height: 24,
tintColor: '#0080ff',
},
toggleContainer: {
flexDirection: 'row',
backgroundColor: '#333',
borderRadius: 20,
},
toggleButton: {
paddingVertical: 5,
paddingHorizontal: 20,
borderRadius: 20,
},
activeToggle: {
backgroundColor: '#0080ff',
},
toggleText: {
color: '#fff',
},
row: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#333',
},
symbol: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
rate: {
fontSize: 16,
},
footer: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#333',
paddingVertical: 10,
},
footerItem: {
alignItems: 'center',
},
footerIcon: {
width: 24,
height: 24,
tintColor: '#888',
},
footerText: {
color: '#888',
fontSize: 12,
},
});
export default QuoteSimple;