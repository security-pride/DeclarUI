import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Charts = ({ navigation }) => {
  const [currentPrice, setCurrentPrice] = useState('1.09339');

  const chartData = {
    labels: ["15 Jul", "16 Jul", "17 Jul"],
    datasets: [
      {
        data: [1.08770, 1.09010, 1.09410],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2
      }
    ]
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>H1 EURUSD, H1</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Objects')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.tradeButton}>Trade</Text>
      </View>

      <View style={styles.chartContainer}>
        <LineChart
          data={chartData}
          width={350}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 5,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{currentPrice}</Text>
      </View>

      <View style={styles.indicatorContainer}>
        <Text style={styles.indicatorText}>RSI(14) 61.16</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('QuoteSimple')}>
          <Text style={styles.footerItem}>Quotes</Text>
        </TouchableOpacity>
        <Text style={[styles.footerItem, styles.activeFooterItem]}>Chart</Text>
        <TouchableOpacity>
          <Text style={styles.footerItem}>Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerItem}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.footerItem}>Settings</Text>
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
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  icon: {
    width: 24,
    height: 24,
  },
  tradeButton: {
    color: '#fff',
    fontSize: 16,
  },
  chartContainer: {
    alignItems: 'center',
  },
  priceContainer: {
    alignItems: 'flex-end',
    padding: 10,
  },
  priceText: {
    color: '#fff',
    fontSize: 24,
  },
  indicatorContainer: {
    padding: 10,
  },
  indicatorText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333',
  },
  footerItem: {
    color: '#fff',
    fontSize: 14,
  },
  activeFooterItem: {
    color: '#ffa726',
  },
});

export default Charts;