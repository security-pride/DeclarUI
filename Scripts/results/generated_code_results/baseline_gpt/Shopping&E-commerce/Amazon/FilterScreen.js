import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FilterScreen = () => {
  const [orderType, setOrderType] = useState('Orders');
  const [orderDate, setOrderDate] = useState('Last 3 months');

  const orderTypes = ['Orders', 'Not Yet Dispatched', 'Local shops', 'Cancelled'];
  const orderDates = ['Last 30 days', 'Last 3 months', '2024', '2023', '2022', '2021'];

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="arrow-back" size={24} />
        <TextInput style={styles.searchInput} placeholder="Search Amazon.co.uk" />
        <Icon name="search" size={24} />
      </View>

      <ScrollView>
        <Text style={styles.filterTitle}>FILTER BY ORDER TYPE</Text>
        {orderTypes.map(type => (
          <TouchableOpacity key={type} style={styles.option} onPress={() => setOrderType(type)}>
            <Icon name={orderType === type ? 'radio-button-checked' : 'radio-button-unchecked'} size={24} />
            <Text style={styles.optionText}>{type}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.filterTitle}>FILTER BY ORDER DATE</Text>
        {orderDates.map(date => (
          <TouchableOpacity key={date} style={styles.option} onPress={() => setOrderDate(date)}>
            <Icon name={orderDate === date ? 'radio-button-checked' : 'radio-button-unchecked'} size={24} />
            <Text style={styles.optionText}>{date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  filterTitle: {
    marginLeft: 10,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#2a75f3',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  optionText: {
    marginLeft: 10,
  },
  applyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#fffacb',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  applyButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default FilterScreen;