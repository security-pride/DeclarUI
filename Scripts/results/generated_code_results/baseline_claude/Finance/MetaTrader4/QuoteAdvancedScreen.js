import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const QuoteAdvancedScreen = () => {

  const navigation = useNavigation();

  const [quotes, setQuotes] = useState([]);

  const [isSimpleView, setIsSimpleView] = useState(false);



  useEffect(() => {

    // Simulating data fetch

    const fetchedQuotes = [

      { id: 1, symbol: 'EURUSD', bid: 1.09336, ask: 1.09337, low: 1.08950, high: 1.09480, spread: 1, time: '19:37:54' },

      { id: 2, symbol: 'GBPUSD', bid: 1.30080, ask: 1.30083, low: 1.29659, high: 1.30440, spread: 3, time: '19:37:52' },

      { id: 3, symbol: 'USDJPY', bid: 156.346, ask: 156.349, low: 156.099, high: 158.615, spread: 3, time: '19:37:54' },

      { id: 4, symbol: 'USDCAD', bid: 1.36910, ask: 1.36917, low: 1.36564, high: 1.37015, spread: 7, time: '19:37:54' },

      { id: 5, symbol: 'USDCHF', bid: 0.88481, ask: 0.88488, low: 0.88358, high: 0.89448, spread: 7, time: '19:37:54' },

      { id: 6, symbol: 'NZDUSD', bid: 0.60713, ask: 0.60719, low: 0.60335, high: 0.60972, spread: 6, time: '19:37:54' },

      { id: 7, symbol: 'AUDUSD', bid: 0.67262, ask: 0.67266, low: 0.67207, high: 0.67545, spread: 4, time: '19:37:52' },

      { id: 8, symbol: 'AUDNZD', bid: 1.10776, ask: 1.10796, low: 1.10678, high: 1.11490, spread: 20, time: '19:37:44' },

      { id: 9, symbol: 'AUDCAD', bid: 0.92085, ask: 0.92095, low: 0.91985, high: 0.92280, spread: 10, time: '19:37:44' },

    ];

    setQuotes(fetchedQuotes);

  }, []);



  const renderQuoteItem = ({ item }) => (

    <View style={styles.quoteItem}>

      <View style={styles.symbolContainer}>

        <Text style={styles.symbolText}>{item.symbol}</Text>

        <Text style={styles.timeText}>{item.time}</Text>

      </View>

      <View style={styles.spreadContainer}>

        <Text style={styles.spreadText}>Spread: {item.spread}</Text>

      </View>

      <View style={styles.priceContainer}>

        <View style={styles.bidAskContainer}>

          <Text style={[styles.bidText, { fontSize: 20 }]}>{item.bid.toFixed(3)}</Text>

          <Text style={[styles.bidText, { fontSize: 14, alignSelf: 'flex-end' }]}>{(item.bid % 1).toFixed(3).slice(2)}</Text>

        </View>

        <View style={styles.bidAskContainer}>

          <Text style={[styles.askText, { fontSize: 20 }]}>{item.ask.toFixed(3)}</Text>

          <Text style={[styles.askText, { fontSize: 14, alignSelf: 'flex-end' }]}>{(item.ask % 1).toFixed(3).slice(2)}</Text>

        </View>

      </View>

      <View style={styles.lowHighContainer}>

        <Text style={styles.lowHighText}>Low: {item.low}</Text>

        <Text style={styles.lowHighText}>High: {item.high}</Text>

      </View>

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity style={styles.iconButton}>

          <Icon name="pencil" size={24} color="#007AFF" />

        </TouchableOpacity>

        <View style={styles.toggleContainer}>

          <TouchableOpacity

            style={[styles.toggleButton, isSimpleView ? styles.activeToggle : null]}

            onPress={() => setIsSimpleView(true)}

          >

            <Text style={[styles.toggleText, isSimpleView ? styles.activeToggleText : null]}>Simple</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[styles.toggleButton, !isSimpleView ? styles.activeToggle : null]}

            onPress={() => setIsSimpleView(false)}

          >

            <Text style={[styles.toggleText, !isSimpleView ? styles.activeToggleText : null]}>Advanced</Text>

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.iconButton}>

          <Icon name="add" size={24} color="#007AFF" />

        </TouchableOpacity>

      </View>

      <FlatList

        data={quotes}

        renderItem={renderQuoteItem}

        keyExtractor={(item) => item.id.toString()}

        contentContainerStyle={styles.listContainer}

      />

      <View style={styles.footer}>

        <TouchableOpacity style={[styles.footerButton, styles.activeFooterButton]}>

          <Icon name="stats-chart" size={24} color="#007AFF" />

          <Text style={styles.footerButtonText}>Quotes</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="bar-chart-outline" size={24} color="#8E8E93" />

          <Text style={styles.footerButtonText}>Chart</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="swap-horizontal-outline" size={24} color="#8E8E93" />

          <Text style={styles.footerButtonText}>Trade</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="time-outline" size={24} color="#8E8E93" />

          <Text style={styles.footerButtonText}>History</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="settings-outline" size={24} color="#8E8E93" />

          <Text style={styles.footerButtonText}>Settings</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000000',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#333333',

  },

  iconButton: {

    padding: 5,

  },

  toggleContainer: {

    flexDirection: 'row',

    backgroundColor: '#1C1C1E',

    borderRadius: 8,

  },

  toggleButton: {

    paddingHorizontal: 16,

    paddingVertical: 8,

    borderRadius: 8,

  },

  activeToggle: {

    backgroundColor: '#333333',

  },

  toggleText: {

    color: '#FFFFFF',

    fontSize: 14,

  },

  activeToggleText: {

    fontWeight: 'bold',

  },

  listContainer: {

    paddingHorizontal: 16,

  },

  quoteItem: {

    marginVertical: 8,

    padding: 12,

    backgroundColor: '#1C1C1E',

    borderRadius: 8,

  },

  symbolContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 4,

  },

  symbolText: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  timeText: {

    color: '#8E8E93',

    fontSize: 12,

  },

  spreadContainer: {

    marginBottom: 4,

  },

  spreadText: {

    color: '#8E8E93',

    fontSize: 12,

  },

  priceContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 4,

  },

  bidAskContainer: {

    flexDirection: 'row',

    alignItems: 'baseline',

  },

  bidText: {

    color: '#4CD964',

  },

  askText: {

    color: '#FF3B30',

  },

  lowHighContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  lowHighText: {

    color: '#8E8E93',

    fontSize: 12,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#333333',

  },

  footerButton: {

    alignItems: 'center',

  },

  activeFooterButton: {

    borderTopWidth: 2,

    borderTopColor: '#007AFF',

  },

  footerButtonText: {

    color: '#8E8E93',

    fontSize: 10,

    marginTop: 4,

  },

});



export default QuoteAdvancedScreen;