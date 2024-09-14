import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChartsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>H1</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Icon name="crosshairs-gps" size={24} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="format-text" size={24} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="camera-outline" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.tradeText}>Trade</Text>
      </View>
      
      {/* Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>EURUSD, H1</Text>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.chartImage}
          resizeMode="contain"
        />
      </View>

      {/* Footer Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="chart-line" size={24} color="#ffffff" />
          <Text style={styles.navText}>Quotes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="chart-candlestick" size={24} color="#FFD700" />
          <Text style={styles.navTextActive}>Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="swap-horizontal" size={24} color="#ffffff" />
          <Text style={styles.navText}>Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="history" size={24} color="#ffffff" />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="cog-outline" size={24} color="#ffffff" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#000000'
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tradeText: {
    color: '#ffffff',
    fontSize: 18
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  chartTitle: {
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 16
  },
  chartImage: {
    width: '100%',
    height: '80%'
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#000000'
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#ffffff',
    fontSize: 12
  },
  navTextActive: {
    color: '#FFD700',
    fontSize: 12
  }
});

export default ChartsScreen;