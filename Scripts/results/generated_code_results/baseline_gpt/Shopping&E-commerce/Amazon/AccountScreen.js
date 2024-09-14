import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AccountScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="#000" />
        </TouchableOpacity>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#000" />
          <Text style={styles.searchText}>Search Amazon.co.uk</Text>
          <Icon name="photo-camera" size={20} color="#000" />
          <Icon name="mic" size={20} color="#000" />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Orders</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.itemRow}>
          <Text style={styles.itemText}>Your Orders</Text>
          <Icon name="keyboard-arrow-right" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemRow}>
          <Text style={styles.itemText}>Your Subscribe & Save</Text>
          <Icon name="keyboard-arrow-right" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemRow}>
          <Text style={styles.itemText}>Your Amazon Day</Text>
          <Icon name="keyboard-arrow-right" size={25} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Payments</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.itemRow}>
          <Text style={styles.itemText}>Payments and transactions</Text>
          <Icon name="keyboard-arrow-right" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemRow}>
          <Text style={styles.itemText}>Manage gift card balance</Text>
          <Icon name="keyboard-arrow-right" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemRow}>
          <Text style={styles.itemText}>Shop with Points</Text>
          <Icon name="keyboard-arrow-right" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemRow}>
          <Text style={styles.itemText}>Top up account</Text>
          <Icon name="keyboard-arrow-right" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemRow}>
          <Text style={styles.itemText}>In-Store Promo Wallet</Text>
          <Icon name="keyboard-arrow-right" size={25} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Customer Service</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.itemRow}>
          <Text style={styles.itemText}>Contact Us</Text>
          <Icon name="keyboard-arrow-right" size={25} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Account Settings</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.itemRow}>
          <Text style={styles.itemText}>Login & security</Text>
          <Icon name="keyboard-arrow-right" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemRow}>
          <Text style={styles.itemText}>Your Addresses</Text>
          <Icon name="keyboard-arrow-right" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemRow}>
          <Text style={styles.itemText}>Login with Amazon</Text>
          <Icon name="keyboard-arrow-right" size={25} color="#000" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  searchText: {
    flex: 1,
    color: '#000',
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  section: {
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default AccountScreen;