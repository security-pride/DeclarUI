import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Text>Search Amazon.co.uk</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Orders</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Orders')}>
          <Text>Your Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Your Subscribe & Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Your Amazon Day</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Payments</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Payments and transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Manage gift card balance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Shop with Points</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Top up account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>In-Store Promo Wallet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Customer Service</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Account Settings</Text>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  backButton: {
    paddingRight: 10,
  },
  searchBar: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  section: {
    marginVertical: 10,
  },
  sectionHeader: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },
});

export default AccountScreen;