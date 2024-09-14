import React from 'react';

import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const AccountScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <TextInput

            style={styles.searchInput}

            placeholder="Search Amazon.co.uk"

          />

          <Icon name="camera-outline" size={24} color="#888" style={styles.searchIcon} />

          <Icon name="mic-outline" size={24} color="#888" style={styles.searchIcon} />

        </View>

      </View>



      <ScrollView>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Orders</Text>

          <TouchableOpacity style={styles.option}>

            <Text style={styles.optionText}>Your Orders</Text>

            <Icon name="chevron-forward" size={24} color="#888" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>

            <Text style={styles.optionText}>Your Subscribe & Save</Text>

            <Icon name="chevron-forward" size={24} color="#888" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>

            <Text style={styles.optionText}>Your Amazon Day</Text>

            <Icon name="chevron-forward" size={24} color="#888" />

          </TouchableOpacity>

        </View>



        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Payments</Text>

          <TouchableOpacity style={styles.option}>

            <Text style={styles.optionText}>Payments and transactions</Text>

            <Icon name="chevron-forward" size={24} color="#888" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>

            <Text style={styles.optionText}>Manage gift card balance</Text>

            <Icon name="chevron-forward" size={24} color="#888" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>

            <Text style={styles.optionText}>Shop with Points</Text>

            <Icon name="chevron-forward" size={24} color="#888" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>

            <Text style={styles.optionText}>Top up account</Text>

            <Icon name="chevron-forward" size={24} color="#888" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>

            <Text style={styles.optionText}>In-Store Promo Wallet</Text>

            <Icon name="chevron-forward" size={24} color="#888" />

          </TouchableOpacity>

        </View>



        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Customer Service</Text>

          <TouchableOpacity style={styles.option}>

            <Text style={styles.optionText}>Contact Us</Text>

            <Icon name="chevron-forward" size={24} color="#888" />

          </TouchableOpacity>

        </View>



        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Account Settings</Text>

        </View>

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="person-outline" size={24} color="#00a0d6" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="cart-outline" size={24} color="#888" />

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

    backgroundColor: '#f2f2f2',

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

  },

  searchIcon: {

    marginLeft: 5,

  },

  section: {

    backgroundColor: '#fff',

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    padding: 15,

  },

  option: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 15,

    borderTopWidth: 1,

    borderTopColor: '#f2f2f2',

  },

  optionText: {

    fontSize: 16,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#fff',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#f2f2f2',

  },

  navItem: {

    alignItems: 'center',

  },

});



export default AccountScreen;