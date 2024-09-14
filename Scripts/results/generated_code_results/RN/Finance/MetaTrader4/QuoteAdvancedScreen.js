import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
const QuoteAdvanced = ({ navigation }) => {
const [mode, setMode] = useState('Advanced');
const currencyPairs = [
{ symbol: 'EURUSD', bid: '1.09336', ask: '1.09337', spread: '1', low: '1.08950', high: '1.09480' },
{ symbol: 'GBPUSD', bid: '1.30080', ask: '1.30083', spread: '3', low: '1.29659', high: '1.30440' },
{ symbol: 'USDJPY', bid: '156.346', ask: '156.349', spread: '3', low: '156.099', high: '158.615' },
{ symbol: 'USDCAD', bid: '1.36910', ask: '1.36917', spread: '7', low: '1.36564', high: '1.37015' },
{ symbol: 'USDCHF', bid: '0.88481', ask: '0.88488', spread: '7', low: '0.88358', high: '0.89448' },
{ symbol: 'NZDUSD', bid: '0.60713', ask: '0.60719', spread: '6', low: '0.60335', high: '0.60972' },
{ symbol: 'AUDUSD', bid: '0.67262', ask: '0.67266', spread: '4', low: '0.67207', high: '0.67545' },
{ symbol: 'AUDNZD', bid: '1.10776', ask: '1.10796', spread: '20', low: '1.10678', high: '1.11490' },
{ symbol: 'AUDCAD', bid: '0.92085', ask: '0.92095', spread: '10', low: '0.91985', high: '0.92280' },
];
const renderItem = ({ item }) => (
<View style={styles.row}>
<Text style={styles.symbol}>{item.symbol}</Text>
<Text style={styles.time}>19:37:54</Text>
<Text style={styles.bid}>{item.bid}</Text>
<Text style={styles.ask}>{item.ask}</Text>
<Text style={styles.spread}>Spread: {item.spread}</Text>
<Text style={styles.lowHigh}>Low: {item.low} High: {item.high}</Text>
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
onPress={() => navigation.navigate('QuoteSimple')}
>
<Text style={styles.toggleText}>Simple</Text>
</TouchableOpacity>
<TouchableOpacity
style={[styles.toggleButton, mode === 'Advanced' && styles.activeToggle]}
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
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#333',
},
symbol: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
time: {
color: '#888',
fontSize: 12,
},
bid: {
color: '#0080ff',
fontSize: 16,
},
ask: {
color: '#ff4040',
fontSize: 16,
},
spread: {
color: '#888',
fontSize: 12,
},
lowHigh: {
color: '#888',
fontSize: 12,
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
export default QuoteAdvanced;