import React from 'react';

import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const AccountScreen = () => {

  const navigation = useNavigation();

  const navigateTo =(to) => {
    navigation.navigate(to);
  }

  const renderOrderSection = () => (

    <View style={styles.section}>

      <Text style={styles.sectionTitle}>Orders</Text>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Orders')}>

        <Text style={styles.menuItemText}>Your Orders</Text>

        <Text style={styles.chevron}>&gt;</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>

        <Text style={styles.menuItemText}>Your Subscribe & Save</Text>

        <Text style={styles.chevron}>&gt;</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>

        <Text style={styles.menuItemText}>Your Amazon Day</Text>

        <Text style={styles.chevron}>&gt;</Text>

      </TouchableOpacity>

    </View>

  );



  const renderPaymentsSection = () => (

    <View style={styles.section}>

      <Text style={styles.sectionTitle}>Payments</Text>

      <TouchableOpacity style={styles.menuItem}>

        <Text style={styles.menuItemText}>Payments and transactions</Text>

        <Text style={styles.chevron}>&gt;</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>

        <Text style={styles.menuItemText}>Manage gift card balance</Text>

        <Text style={styles.chevron}>&gt;</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>

        <Text style={styles.menuItemText}>Shop with Points</Text>

        <Text style={styles.chevron}>&gt;</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>

        <Text style={styles.menuItemText}>Top up account</Text>

        <Text style={styles.chevron}>&gt;</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>

        <Text style={styles.menuItemText}>In-Store Promo Wallet</Text>

        <Text style={styles.chevron}>&gt;</Text>

      </TouchableOpacity>

    </View>

  );



  const renderCustomerServiceSection = () => (

    <View style={styles.section}>

      <Text style={styles.sectionTitle}>Customer Service</Text>

      <TouchableOpacity style={styles.menuItem}>

        <Text style={styles.menuItemText}>Contact Us</Text>

        <Text style={styles.chevron}>&gt;</Text>

      </TouchableOpacity>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Text style={styles.backButtonText}>&lt;</Text>

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <TextInput

            style={styles.searchInput}

            placeholder="Search Amazon.co.uk"

            placeholderTextColor="#888"

          />

          <TouchableOpacity style={styles.cameraButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.cameraIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.micButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.micIcon} />

          </TouchableOpacity>

        </View>

      </View>

      <ScrollView style={styles.content}>

        {renderOrderSection()}

        {renderPaymentsSection()}

        {renderCustomerServiceSection()}

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Account Settings</Text>

        </View>

      </ScrollView>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={navigateTo('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]} >

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}  onPress={navigateTo('Orders')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={navigateTo('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

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

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#9cebd5',

  },

  backButton: {

    paddingRight: 10,

  },

  backButtonText: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'white',

    borderRadius: 5,

    paddingHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  cameraButton: {

    padding: 5,

  },

  cameraIcon: {

    width: 20,

    height: 20,

  },

  micButton: {

    padding: 5,

  },

  micIcon: {

    width: 20,

    height: 20,

  },

  content: {

    flex: 1,

  },

  section: {

    backgroundColor: 'white',

    marginBottom: 10,

    padding: 15,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  menuItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#f0f0f0',

  },

  menuItemText: {

    fontSize: 16,

  },

  chevron: {

    fontSize: 18,

    color: '#888',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    backgroundColor: 'white',

  },

  tabItem: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 10,

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#009987',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

});



export default AccountScreen;