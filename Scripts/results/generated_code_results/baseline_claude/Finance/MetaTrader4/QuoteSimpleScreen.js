import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const QuoteSimpleScreen = () => {

  const navigation = useNavigation();

  const [quotes, setQuotes] = useState([]);

  const [isSimpleView, setIsSimpleView] = useState(true);



  useEffect(() => {

    // Simulating data fetch

    const fetchedQuotes = [

      { id: 1, symbol: 'EURUSD', bid: 1.09336, ask: 1.09337 },

      { id: 2, symbol: 'GBPUSD', bid: 1.30080, ask: 1.30083 },

      { id: 3, symbol: 'USDJPY', bid: 156.348, ask: 156.354 },

      { id: 4, symbol: 'USDCAD', bid: 1.36912, ask: 1.36919 },

      { id: 5, symbol: 'USDCHF', bid: 0.88489, ask: 0.88495 },

      { id: 6, symbol: 'NZDUSD', bid: 0.60713, ask: 0.60718 },

      { id: 7, symbol: 'AUDUSD', bid: 0.67262, ask: 0.67267 },

      { id: 8, symbol: 'AUDNZD', bid: 1.10778, ask: 1.10799 },

      { id: 9, symbol: 'AUDCAD', bid: 0.92085, ask: 0.92095 },

    ];

    setQuotes(fetchedQuotes);

  }, []);



  const renderQuoteItem = ({ item }) => (

    <View style={styles.quoteItem}>

      <Text style={styles.symbolText}>{item.symbol}</Text>

      <View style={styles.priceContainer}>

        <Text style={[styles.priceText, { color: getColorForPrice(item.bid) }]}>{item.bid.toFixed(5)}</Text>

        <Text style={[styles.priceText, { color: getColorForPrice(item.ask) }]}>{item.ask.toFixed(5)}</Text>

      </View>

    </View>

  );



  const getColorForPrice = (price) => {

    // This is a placeholder logic. In a real app, you'd compare with previous prices.

    return price > 1 ? '#4CD964' : '#FF3B30';

  };



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

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#333333',

  },

  symbolText: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  priceContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    width: '50%',

  },

  priceText: {

    fontSize: 16,

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



export default QuoteSimpleScreen;