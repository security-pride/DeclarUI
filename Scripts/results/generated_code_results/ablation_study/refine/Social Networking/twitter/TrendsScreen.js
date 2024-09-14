import React from 'react';

import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const TrendsScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <Icon name="search" size={20} color="#657786" style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="Search Twitter"

            placeholderTextColor="#657786"

          />

        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>

          <Icon name="settings" size={24} color="#1DA1F2" />

        </TouchableOpacity>

      </View>



      <Text style={styles.trendsTitle}>Trends for you</Text>



      <View style={styles.noTrendsContainer}>

        <Text style={styles.noTrendsText}>No new trends for you</Text>

        <Text style={styles.noTrendsSubtext}>

          It seems like there's not a lot to show you right now, but you can see trends for other areas

        </Text>

        <TouchableOpacity style={styles.changeLocationButton} onPress={() => {/* Handle location change */}}>

          <Text style={styles.changeLocationText}>Change location</Text>

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.fabButton} onPress={() => navigation.navigate('NewTweet')}>

        <Icon name="plus" size={24} color="#FFFFFF" />

      </TouchableOpacity>



      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Icon name="search" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>

          <Icon name="bell" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>

          <MaterialIcons name="email" size={24} color="#657786" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#E1E8ED',

  },

  profileIcon: {

    width: 32,

    height: 32,

    borderRadius: 16,

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#E1E8ED',

    borderRadius: 20,

    marginHorizontal: 10,

    paddingHorizontal: 10,

  },

  searchIcon: {

    marginRight: 5,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  trendsTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    padding: 15,

  },

  noTrendsContainer: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: 20,

  },

  noTrendsText: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  noTrendsSubtext: {

    textAlign: 'center',

    color: '#657786',

    marginBottom: 20,

  },

  changeLocationButton: {

    backgroundColor: '#1DA1F2',

    paddingHorizontal: 20,

    paddingVertical: 10,

    borderRadius: 20,

  },

  changeLocationText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

  fabButton: {

    position: 'absolute',

    right: 20,

    bottom: 70,

    backgroundColor: '#1DA1F2',

    width: 56,

    height: 56,

    borderRadius: 28,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#E1E8ED',

    paddingVertical: 10,

  },

});



export default TrendsScreen;