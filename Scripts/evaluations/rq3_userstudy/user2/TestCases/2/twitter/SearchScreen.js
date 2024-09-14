import React, { useState } from 'react';

import {

  View,

  Text,

  TextInput,

  Image,

  StyleSheet,

  SafeAreaView,

  TouchableOpacity,

  FlatList,

  Keyboard,

} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';



const SearchScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');



  const recentSearches = [

    { id: '1', name: 'Sab Khasanov', handle: '@s_khasan...', image: '../assets/snack-icon.png' },

    { id: '2', name: 'Martha Craig', handle: '@craig_love', image: '../assets/snack-icon.png' },

    { id: '3', name: 'Tibitha Potter', handle: '@mis_potter', image: '../assets/snack-icon.png', verified: true },

    { id: '4', name: 'Figma', handle: '@figmadesign', image: '../assets/snack-icon.png', verified: true },

    { id: '5', name: 'Figma Help', handle: '@Figmahelp', image: '../assets/snack-icon.png' },

  ];



  const renderRecentSearchItem = ({ item }) => (

    <TouchableOpacity style={styles.recentSearchItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.userInfo}>

        <Text style={styles.userName}>{item.name}</Text>

        <Text style={styles.userHandle}>{item.handle}</Text>

      </View>

      {item.verified && (

        <Ionicons name="checkmark-circle" size={16} color="#1DA1F2" style={styles.verifiedIcon} />

      )}

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <View style={styles.searchBar}>

          <Ionicons name="search" size={20} color="#657786" style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="Search Twitter"

            value={searchQuery}

            onChangeText={setSearchQuery}

            returnKeyType="search"

            onSubmitEditing={Keyboard.dismiss}

          />

        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.cancelButton}>Cancel</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.recentSearchesHeader}>

        <Text style={styles.recentSearchesTitle}>Recent searches</Text>

        <TouchableOpacity>

          <Ionicons name="close" size={20} color="#657786" />

        </TouchableOpacity>

      </View>



      <FlatList

        data={recentSearches}

        renderItem={renderRecentSearchItem}

        keyExtractor={(item) => item.id}

        style={styles.recentSearchesList}

      />



      {searchQuery && (

        <View style={styles.searchSuggestion}>

          <Ionicons name="search" size={16} color="#657786" style={styles.suggestionIcon} />

          <Text style={styles.suggestionText}>{searchQuery}</Text>

        </View>

      )}



      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Ionicons name="home-outline" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Ionicons name="search" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>

          <Ionicons name="notifications-outline" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>

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

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#E1E8ED',

    borderRadius: 20,

    paddingHorizontal: 10,

    marginRight: 10,

  },

  searchIcon: {

    marginRight: 5,

  },

  searchInput: {

    flex: 1,

    height: 35,

    fontSize: 16,

  },

  cancelButton: {

    color: '#1DA1F2',

    fontSize: 16,

  },

  recentSearchesHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 15,

    paddingVertical: 10,

  },

  recentSearchesTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  recentSearchesList: {

    flex: 1,

  },

  recentSearchItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 15,

    paddingVertical: 10,

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  userInfo: {

    flex: 1,

  },

  userName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  userHandle: {

    fontSize: 14,

    color: '#657786',

  },

  verifiedIcon: {

    marginLeft: 5,

  },

  searchSuggestion: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 15,

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E1E8ED',

  },

  suggestionIcon: {

    marginRight: 10,

  },

  suggestionText: {

    fontSize: 16,

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



export default SearchScreen;