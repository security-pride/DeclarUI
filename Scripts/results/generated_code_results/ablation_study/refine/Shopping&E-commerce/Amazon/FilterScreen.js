import React, { useState } from 'react';

import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const FilterScreen = ({ navigation }) => {

  const [orderType, setOrderType] = useState('Orders');

  const [orderDate, setOrderDate] = useState('Last 3 months');



  const orderTypes = ['Orders', 'Not Yet Dispatched', 'Local shops', 'Cancelled'];

  const orderDates = ['Last 30 days', 'Last 3 months', '2024', '2023', '2022', '2021'];



  const RadioButton = ({ selected, label, onPress }) => (

    <TouchableOpacity style={styles.radioButton} onPress={onPress}>

      <View style={[styles.radioCircle, selected && styles.radioCircleSelected]}>

        {selected && <View style={styles.selectedRb} />}

      </View>

      <Text style={styles.radioText}>{label}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <Icon name="search" size={20} color="#888" />

          <TextInput

            style={styles.searchInput}

            placeholder="Search Amazon.co.uk"

          />

          <Icon name="camera-outline" size={24} color="#888" style={styles.searchIcon} />

          <Icon name="mic-outline" size={24} color="#888" style={styles.searchIcon} />

        </View>

      </View>



      <View style={styles.subHeader}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.backButton}>Back</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.applyButton}>

          <Text style={styles.applyButtonText}>Apply</Text>

        </TouchableOpacity>

      </View>



      <ScrollView>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>FILTER BY ORDER TYPE</Text>

          {orderTypes.map((type) => (

            <RadioButton

              key={type}

              selected={orderType === type}

              label={type}

              onPress={() => setOrderType(type)}

            />

          ))}

        </View>



        <View style={styles.section}>

          <Text style={styles.sectionTitle}>FILTER BY ORDER DATE</Text>

          {orderDates.map((date) => (

            <RadioButton

              key={date}

              selected={orderDate === date}

              label={date}

              onPress={() => setOrderDate(date)}

            />

          ))}

        </View>

      </ScrollView>



      <TouchableOpacity style={styles.applyButtonBottom}>

        <Text style={styles.applyButtonText}>Apply</Text>

      </TouchableOpacity>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="person-outline" size={24} color="#00a0d6" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <View>

            <Icon name="cart-outline" size={24} color="#888" />

            <View style={styles.badge}>

              <Text style={styles.badgeText}>2</Text>

            </View>

          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="menu-outline" size={24} color="#888" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#9bf3f0',

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    borderRadius: 5,

    marginLeft: 10,

    paddingHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

    marginLeft: 5,

  },

  searchIcon: {

    marginLeft: 5,

  },

  subHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  backButton: {

    fontSize: 16,

    color: '#00a0d6',

  },

  applyButton: {

    backgroundColor: '#ffd814',

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 5,

  },

  applyButtonText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  section: {

    padding: 15,

  },

  sectionTitle: {

    fontSize: 14,

    fontWeight: 'bold',

    color: '#555',

    marginBottom: 10,

  },

  radioButton: {

    flexDirection: 'row',

    alignItems: 'center',

    marginVertical: 8,

  },

  radioCircle: {

    height: 20,

    width: 20,

    borderRadius: 10,

    borderWidth: 2,

    borderColor: '#000',

    alignItems: 'center',

    justifyContent: 'center',

  },

  radioCircleSelected: {

    borderColor: '#00a0d6',

  },

  selectedRb: {

    width: 10,

    height: 10,

    borderRadius: 5,

    backgroundColor: '#00a0d6',

  },

  radioText: {

    marginLeft: 10,

    fontSize: 16,

  },

  applyButtonBottom: {

    backgroundColor: '#ffd814',

    padding: 15,

    alignItems: 'center',

    marginHorizontal: 15,

    marginBottom: 15,

    borderRadius: 5,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#fff',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  navItem: {

    alignItems: 'center',

  },

  badge: {

    position: 'absolute',

    right: -6,

    top: -3,

    backgroundColor: '#00a0d6',

    borderRadius: 8,

    width: 16,

    height: 16,

    justifyContent: 'center',

    alignItems: 'center',

  },

  badgeText: {

    color: '#fff',

    fontSize: 10,

    fontWeight: 'bold',

  },

});



export default FilterScreen;