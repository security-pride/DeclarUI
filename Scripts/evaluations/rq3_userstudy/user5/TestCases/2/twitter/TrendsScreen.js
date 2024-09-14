import React from 'react';

import {

  View,

  Text,

  StyleSheet,

  SafeAreaView,

  TouchableOpacity,

  TextInput,

  Image,

} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';



const TrendsScreen = ({ navigation }) => {

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Image

            source={require('../assets/snack-icon.png')}

            style={styles.profileImage}

          />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <Ionicons name="search" size={20} color="#657786" />

          <TextInput

            style={styles.searchInput}

            placeholder="Search Twitter"

            placeholderTextColor="#657786"

          />

        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>

          <Ionicons name="settings-outline" size={24} color="#1DA1F2" />

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



      <TouchableOpacity style={styles.floatingButton}>

        <Ionicons name="add" size={30} color="#FFFFFF" />

      </TouchableOpacity>



      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Ionicons name="home-outline" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Ionicons name="search" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Trends')}>

          <Ionicons name="notifications-outline" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Ionicons name="mail-outline" size={24} color="#657786" />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

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

    paddingHorizontal: 15,

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#E1E8ED',

  },

  profileImage: {

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

    paddingHorizontal: 10,

    marginHorizontal: 10,

    height: 36,

  },

  searchInput: {

    flex: 1,

    marginLeft: 5,

    fontSize: 16,

  },

  content: {

    flex: 1,

    padding: 15,

  },

  title: {

    fontSize: 22,

    fontWeight: 'bold',

    marginBottom: 20,

  },

  noTrendsContainer: {

    alignItems: 'center',

    justifyContent: 'center',

    flex: 1,

  },

  noTrendsText: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  noTrendsSubtext: {

    fontSize: 16,

    color: '#657786',

    textAlign: 'center',

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

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    height: 50,

    borderTopWidth: 1,

    borderTopColor: '#E1E8ED',

  },

});



export default TrendsScreen;