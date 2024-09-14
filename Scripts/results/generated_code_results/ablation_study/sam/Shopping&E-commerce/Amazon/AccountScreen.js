import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const AccountScreen = () => {

  const navigation = useNavigation();



  const renderSection = (title, options) => (

    <View style={styles.section}>

      <Text style={styles.sectionTitle}>{title}</Text>

      {options.map((option, index) => (

        <TouchableOpacity

          key={index}

          style={styles.option}

          onPress={() => handleOptionPress(option)}

        >

          <Text style={styles.optionText}>{option}</Text>

          <Icon name="chevron-right" size={24} color="#888" />

        </TouchableOpacity>

      ))}

    </View>

  );



  const handleOptionPress = (option) => {

    switch (option) {

      case 'Your Orders':

        navigation.navigate('Orders');

        break;

      case 'Contact Us':

        // Handle Contact Us action

        break;

      default:

        // Handle other options

        break;

    }

  };



  return (

    <View style={styles.container}>

      <ScrollView>

        {renderSection('Orders', ['Your Orders', 'Your Subscribe & Save', 'Your Amazon Day'])}

        {renderSection('Payments', [

          'Payments and transactions',

          'Manage gift card balance',

          'Shop with Points',

          'Top up account',

          'In-Store Promo Wallet',

        ])}

        {renderSection('Customer Service', ['Contact Us'])}

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Account Settings</Text>

        </View>

      </ScrollView>

      <View style={styles.bottomBar}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Icon name="person" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>

          <Icon name="shopping-cart" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="menu" size={24} color="#888" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f0f0f0',

  },

  section: {

    backgroundColor: '#fff',

    marginBottom: 10,

    paddingVertical: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    paddingHorizontal: 15,

    marginBottom: 10,

  },

  option: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 12,

    paddingHorizontal: 15,

  },

  optionText: {

    fontSize: 16,

  },

  bottomBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#fff',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

});



export default AccountScreen;