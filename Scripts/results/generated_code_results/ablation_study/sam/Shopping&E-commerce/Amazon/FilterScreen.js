import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const FilterScreen = () => {

  const navigation = useNavigation();

  const [orderTypeFilter, setOrderTypeFilter] = useState('Orders');

  const [orderDateFilter, setOrderDateFilter] = useState('Last 3 months');



  const orderTypeOptions = ['Orders', 'Not Yet Dispatched', 'Local shops', 'Cancelled'];

  const orderDateOptions = ['Last 30 days', 'Last 3 months', '2024', '2023', '2022', '2021'];



  const renderFilterSection = (title, options, selectedOption, setOption) => (

    <View style={styles.filterSection}>

      <Text style={styles.filterTitle}>{title}</Text>

      {options.map((option) => (

        <TouchableOpacity

          key={option}

          style={styles.filterOption}

          onPress={() => setOption(option)}

        >

          <Icon

            name={selectedOption === option ? 'radio-button-checked' : 'radio-button-unchecked'}

            size={24}

            color={selectedOption === option ? '#008296' : '#000'}

          />

          <Text style={styles.filterOptionText}>{option}</Text>

        </TouchableOpacity>

      ))}

    </View>

  );



  const handleApplyFilter = () => {

    navigation.navigate('Orders', { orderTypeFilter, orderDateFilter });

  };



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Icon name="arrow-back" size={24} color="#000" />

          <Text style={styles.backText}>Back</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={handleApplyFilter} style={styles.applyButton}>

          <Text style={styles.applyButtonText}>Apply</Text>

        </TouchableOpacity>

      </View>

      <ScrollView>

        {renderFilterSection('FILTER BY ORDER TYPE', orderTypeOptions, orderTypeFilter, setOrderTypeFilter)}

        {renderFilterSection('FILTER BY ORDER DATE', orderDateOptions, orderDateFilter, setOrderDateFilter)}

      </ScrollView>

      <View style={styles.bottomBar}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Icon name="person" size={24} color="#008296" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>

          <Icon name="shopping-cart" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="menu" size={24} color="#888" />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 15,

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  backButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  backText: {

    fontSize: 16,

    marginLeft: 5,

  },

  applyButton: {

    backgroundColor: '#FFD814',

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 5,

  },

  applyButtonText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  filterSection: {

    paddingHorizontal: 15,

    paddingVertical: 10,

  },

  filterTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  filterOption: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 10,

  },

  filterOptionText: {

    fontSize: 16,

    marginLeft: 10,

  },

  bottomBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

});



export default FilterScreen;