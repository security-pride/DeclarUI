import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';



const TrendsScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />

        </TouchableOpacity>

        <TouchableOpacity 

          style={styles.searchBar}

          onPress={() => navigation.navigate('Search')}

        >

          <Icon name="search" size={20} color="#657786" />

          <Text style={styles.searchText}>Search Twitter</Text>

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="settings" size={24} color="#1DA1F2" />

        </TouchableOpacity>

      </View>



      <View style={styles.content}>

        <Text style={styles.title}>Trends for you</Text>

        <View style={styles.noTrendsContainer}>

          <Text style={styles.noTrendsText}>No new trends for you</Text>

          <Text style={styles.noTrendsSubtext}>

            It seems like there's not a lot to show you right now, but you can see trends for other areas

          </Text>

          <TouchableOpacity style={styles.changeLocationButton}>

            <Text style={styles.changeLocationText}>Change location</Text>

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.bottomNavigation}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="search" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="bell" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="mail" size={24} color="#657786" />

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.floatingButton}>

        <Icon name="plus" size={24} color="#FFFFFF" />

      </TouchableOpacity>

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

    height: 36,

  },

  searchText: {

    marginLeft: 10,

    color: '#657786',

  },

  content: {

    flex: 1,

    padding: 15,

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

    marginBottom: 20,

  },

  noTrendsContainer: {

    alignItems: 'center',

    justifyContent: 'center',

    marginTop: 50,

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

  bottomNavigation: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#E1E8ED',

    paddingVertical: 10,

  },

  floatingButton: {

    position: 'absolute',

    right: 20,

    bottom: 70,

    backgroundColor: '#1DA1F2',

    width: 56,

    height: 56,

    borderRadius: 28,

    alignItems: 'center',

    justifyContent: 'center',

    elevation: 5,

  },

});



export default TrendsScreen;