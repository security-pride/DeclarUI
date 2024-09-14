import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, FlatList } from 'react-native';

const data = [
  { time: '19:37:54', pair: 'EURUSD', bid: '1.09336', ask: '1.09337', spread: '1', low: '1.08950', high: '1.09480' },
  { time: '19:37:52', pair: 'GBPUSD', bid: '1.3008', ask: '1.30083', spread: '3', low: '1.29659', high: '1.30440' },
  { time: '19:37:54', pair: 'USDJPY', bid: '156.346', ask: '156.349', spread: '3', low: '156.099', high: '158.615' },
  { time: '19:37:54', pair: 'USDCAD', bid: '1.3691', ask: '1.36917', spread: '7', low: '1.36564', high: '1.37015' },
  { time: '19:37:54', pair: 'USDCHF', bid: '0.88481', ask: '0.88488', spread: '7', low: '0.88358', high: '0.89448' },
  { time: '19:37:54', pair: 'NZDUSD', bid: '0.60713', ask: '0.60719', spread: '6', low: '0.60335', high: '0.60972' },
  { time: '19:37:52', pair: 'AUDUSD', bid: '0.6726', ask: '0.67266', spread: '4', low: '0.67207', high: '0.67545' },
  { time: '19:37:54', pair: 'AUDNZD', bid: '1.10776', ask: '1.1079', spread: '20', low: '1.10678', high: '1.11490' },
  { time: '19:37:54', pair: 'AUDCAD', bid: '0.92085', ask: '0.92095', spread: '10', low: '0.91985', high: '0.92280' }
];

const QuoteAdvancedScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.pair}>{item.pair}</Text>
      <Text style={styles.bid}>{item.bid}</Text>
      <Text style={styles.ask}>{item.ask}</Text>
      <Text style={styles.spread}>Spread: {item.spread}</Text>
      <Text style={styles.low}>Low: {item.low}</Text>
      <Text style={styles.high}>High: {item.high}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Button title="Simple" onPress={() => navigation.navigate('QuoteSimple')} />
        <Button title="Advanced" disabled />
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.pair}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigation.navigate('QuoteSimple')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Charts')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Trade')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#333',
  },
  icon: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  time: {
    color: 'white',
    flex: 1,
  },
  pair: {
    color: 'white',
    flex: 1,
  },
  bid: {
    color: 'blue',
    flex: 1,
  },
  ask: {
    color: 'blue',
    flex: 1,
  },
  spread: {
    color: 'white',
    flex: 1,
  },
  low: {
    color: 'white',
    flex: 1,
  },
  high: {
    color: 'white',
    flex: 1,
  },
  bottomNavBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    paddingVertical: 10,
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

export default QuoteAdvancedScreen;