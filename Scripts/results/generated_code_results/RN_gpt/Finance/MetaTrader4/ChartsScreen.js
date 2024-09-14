import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ChartsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.timeFrame}>H1</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.tradeButton}>Trade</Text>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>EURUSD, H1</Text>
        <View style={styles.chart}>
          <Text style={styles.chartValue}>1.09490</Text>
          <Text style={styles.chartValue}>1.09410</Text>
          <Text style={styles.chartValue}>1.09339</Text>
          <Text style={styles.chartValue}>1.09250</Text>
          <Text style={styles.chartValue}>1.09090</Text>
          <Text style={styles.chartValue}>1.09010</Text>
          <Text style={styles.chartValue}>1.09170</Text>
          <Text style={styles.chartValue}>1.08850</Text>
        </View>
        <Text style={styles.rsiText}>RSI(14) 61.16</Text>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('QuoteSimple')} style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Quotes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.activeNavIcon} />
          <Text style={styles.activeNavText}>Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Objects')} style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Objects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Settings</Text>
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#1a1a1a',
  },
  timeFrame: {
    color: '#fff',
    fontSize: 16,
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  tradeButton: {
    color: '#ffffff',
    fontSize: 16,
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartTitle: {
    color: '#ffffff',
    fontSize: 18,
    padding: 5,
  },
  chart: {
    width: '100%',
    height: '60%',
    backgroundColor: '#0d0d0d',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  chartValue: {
    color: '#ffffff',
  },
  rsiText: {
    color: '#ffffff',
    padding: 5,
    fontSize: 16,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1a1a1a',
    width: '100%',
    paddingVertical: 10,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#999',
  },
  activeNavIcon: {
    width: 24,
    height: 24,
    tintColor: '#ffd700',
  },
  navText: {
    color: '#999',
    fontSize: 12,
  },
  activeNavText: {
    color: '#ffd700',
    fontSize: 12,
  },
});

export default ChartsScreen;