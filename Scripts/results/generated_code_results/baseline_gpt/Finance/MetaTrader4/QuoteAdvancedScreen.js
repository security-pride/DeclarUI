import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  { time: "19:37:54", pair: "EURUSD", bid: "1.09336", ask: "1.09337", spread: 1, low: "1.08950", high: "1.09480", color: "blue" },
  { time: "19:37:52", pair: "GBPUSD", bid: "1.30080", ask: "1.30083", spread: 3, low: "1.29659", high: "1.30440", color: "blue" },
  { time: "19:37:54", pair: "USDJPY", bid: "156.346", ask: "156.349", spread: 3, low: "156.099", high: "158.615", color: "red" },
  { time: "19:37:54", pair: "USDCAD", bid: "1.36910", ask: "1.36917", spread: 7, low: "1.36564", high: "1.37015", color: "red" },
  { time: "19:37:54", pair: "USDCHF", bid: "0.88481", ask: "0.88488", spread: 7, low: "0.88358", high: "0.89448", color: "red" },
  { time: "19:37:54", pair: "NZDUSD", bid: "0.60713", ask: "0.60719", spread: 6, low: "0.60335", high: "0.60972", color: "blue" },
  { time: "19:37:54", pair: "AUDUSD", bid: "0.67262", ask: "0.67266", spread: 4, low: "0.67207", high: "0.67545", color: "blue" },
  { time: "19:37:52", pair: "AUDNZD", bid: "1.10776", ask: "1.10796", spread: 20, low: "1.10678", high: "1.11490", color: "blue" },
  { time: "19:37:44", pair: "AUDCAD", bid: "0.92085", ask: "0.92095", spread: 10, low: "0.91985", high: "0.92280", color: "blue" },
];

const QuoteAdvancedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="create-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={[styles.button, styles.inactive]}>
            <Text style={styles.buttonText}>Simple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.active]}>
            <Text style={styles.buttonText}>Advanced</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Icon name="add-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <ScrollView>
        {data.map((item, index) => (
          <View key={index} style={styles.quoteRow}>
            <View style={styles.timePairContainer}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.pair}>{item.pair}</Text>
              <Text style={styles.spread}>Spread: {item.spread}</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={[styles.price, { color: item.color }]}>{item.bid}</Text>
              <Text style={styles.low}>Low: {item.low}</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={[styles.price, { color: item.color }]}>{item.ask}</Text>
              <Text style={styles.high}>High: {item.high}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.footer}>
        <Icon name="trending-up-outline" size={24} color="blue" />
        <Icon name="stats-chart-outline" size={24} color="#fff" />
        <Icon name="swap-horizontal-outline" size={24} color="#fff" />
        <Icon name="time-outline" size={24} color="#fff" />
        <Icon name="settings-outline" size={24} color="#fff" />
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
    padding: 10,
    backgroundColor: '#1E1E1E',
  },
  headerButtons: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  inactive: {
    backgroundColor: '#333',
  },
  active: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quoteRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  timePairContainer: {
    flex: 1,
  },
  time: {
    color: '#aaa',
  },
  pair: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  spread: {
    color: '#aaa',
  },
  priceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  low: {
    color: '#aaa',
  },
  high: {
    color: '#aaa',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1E1E1E',
  },
});

export default QuoteAdvancedScreen;