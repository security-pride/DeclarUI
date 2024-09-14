import React, { useState } from 'react';

import {

  View,

  Text,

  TextInput,

  TouchableOpacity,

  Image,

  StyleSheet,

  FlatList,

  Keyboard,

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const SearchScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const [recentSearches, setRecentSearches] = useState([

    { id: '1', name: 'Sab Khasa', username: '@s_khasan' },

    { id: '2', name: 'Martha Cr', username: '@craig_love' },

    { id: '3', name: 'Tibitha P.', username: '@mrs_potter', verified: true },

    { id: '4', name: 'Figma', username: '@figmadesign', verified: true },

  ]);



  const renderRecentSearchItem = ({ item }) => (

    <TouchableOpacity style={styles.recentSearchItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />

      <View style={styles.userInfo}>

        <Text style={styles.userName}>{item.name}</Text>

        <Text style={styles.userHandle}>{item.username}</Text>

      </View>

      {item.verified && (

        <Icon name="checkmark-circle" size={16} color="#1DA1F2" style={styles.verifiedBadge} />

      )}

    </TouchableOpacity>

  );



  const handleSearch = () => {

    if (searchQuery.trim()) {

      // Add search logic here

      Keyboard.dismiss();

    }

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TextInput

          style={styles.searchInput}

          placeholder="Search Twitter"

          value={searchQuery}

          onChangeText={setSearchQuery}

          onSubmitEditing={handleSearch}

        />

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>

          <Text style={styles.cancelButtonText}>Cancel</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.recentSearchesContainer}>

        <Text style={styles.recentSearchesHeader}>Recent searches</Text>

        <FlatList

          data={recentSearches}

          renderItem={renderRecentSearchItem}

          keyExtractor={(item) => item.id}

        />

      </View>

      <View style={styles.keyboard}>

        {/* Simulated keyboard layout */}

        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (

          <TouchableOpacity key={key} style={styles.key}>

            <Text style={styles.keyText}>{key}</Text>

          </TouchableOpacity>

        ))}

        {/* Add more rows for a complete keyboard simulation */}

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

    borderBottomWidth: 1,

    borderBottomColor: '#e1e8ed',

  },

  searchInput: {

    flex: 1,

    height: 40,

    borderRadius: 20,

    paddingHorizontal: 15,

    backgroundColor: '#e1e8ed',

    marginRight: 10,

  },

  cancelButton: {

    padding: 5,

  },

  cancelButtonText: {

    color: '#1DA1F2',

    fontWeight: 'bold',

  },

  recentSearchesContainer: {

    flex: 1,

    padding: 15,

  },

  recentSearchesHeader: {

    fontWeight: 'bold',

    fontSize: 16,

    marginBottom: 10,

  },

  recentSearchItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 10,

  },

  profilePic: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  userInfo: {

    flex: 1,

  },

  userName: {

    fontWeight: 'bold',

  },

  userHandle: {

    color: '#657786',

  },

  verifiedBadge: {

    marginLeft: 5,

  },

  keyboard: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'center',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#e1e8ed',

  },

  key: {

    width: '9%',

    aspectRatio: 1,

    justifyContent: 'center',

    alignItems: 'center',

    margin: '0.5%',

    backgroundColor: '#f8f9fa',

    borderRadius: 5,

  },

  keyText: {

    fontSize: 18,

  },

});



export default SearchScreen;