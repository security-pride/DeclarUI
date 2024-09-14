import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BitcoinScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#000" style={styles.backIcon} />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Bitcoin</Text>
        <Text style={styles.price}>£ 49,283.16</Text>
        <View style={styles.changeContainer}>
          <Text style={styles.change}>↓ £ 311.81</Text>
          <Text style={styles.changePercentage}> (0.62%)</Text>
          <Text style={styles.period}> 过去24小时</Text>
        </View>

        <Image source={require('../assets/snack-icon.png')} style={styles.chartImage} />

        <View style={styles.timePeriodContainer}>
          <TouchableOpacity style={styles.timePeriodButtonActive}>
            <Text style={styles.timePeriodTextActive}>24小时</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timePeriodButton}>
            <Text style={styles.timePeriodText}>1周</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timePeriodButton}>
            <Text style={styles.timePeriodText}>1月</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timePeriodButton}>
            <Text style={styles.timePeriodText}>1年</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timePeriodButton}>
            <Text style={styles.timePeriodText}>所有时间</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.amountContainer}>
          <TouchableOpacity style={styles.amountButton}>
            <Text style={styles.amountText}>$ 20</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amountButton}>
            <Text style={styles.amountText}>$ 50</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amountButton}>
            <Text style={styles.amountText}>$ 100</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amountButton}>
            <Text style={styles.amountText}>$ 500</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.purchaseButton}>
          <Text style={styles.purchaseButtonText}>购物</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
  },
  header: {
    padding: 16,
  },
  backIcon: {
    paddingLeft: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  change: {
    color: '#FF0000',
    fontSize: 16,
  },
  changePercentage: {
    color: '#FF0000',
    fontSize: 14,
  },
  period: {
    color: '#666',
    fontSize: 14,
  },
  chartImage: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    marginTop: 16,
  },
  timePeriodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  timePeriodButton: {
    padding: 8,
  },
  timePeriodButtonActive: {
    padding: 8,
    backgroundColor: '#E2E2E2',
    borderRadius: 16,
  },
  timePeriodText: {
    color: '#666',
  },
  timePeriodTextActive: {
    color: '#000',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  amountButton: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 10,
    minWidth: 60,
    alignItems: 'center',
  },
  amountText: {
    fontWeight: 'bold',
  },
  purchaseButton: {
    backgroundColor: '#1E88E5',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },
  purchaseButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default BitcoinScreen;