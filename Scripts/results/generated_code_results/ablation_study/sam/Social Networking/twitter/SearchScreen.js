import React, { useState, useRef } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList, Keyboard, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';



const RecentSearchItem = ({ name, handle, verified, onPress }) => (

  <TouchableOpacity style={styles.recentSearchItem} onPress={onPress}>

    <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

    <View style={styles.userInfo}>

      <Text style={styles.userName}>{name}</Text>

      <Text style={styles.userHandle}>{handle}</Text>

    </View>

    {verified && <Icon name="check-circle" size={16} color="#1DA1F2" />}

  </TouchableOpacity>

);



const SearchScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const [recentSearches, setRecentSearches] = useState([

    { name: 'Sab Khasanov', handle: '@s_khasanov' },

    { name: 'Martha Craig', handle: '@craig_love' },

    { name: 'Tabitha Potter', handle: '@mis_potter', verified: true },

    { name: 'Figma', handle: '@figmadesign' },

    { name: 'Figma', handle: '@figma' },

  ]);

  const scrollViewRef = useRef(null);



  const handleSearch = () => {

    if (searchQuery.trim()) {

      console.log('Searching for:', searchQuery);

      // Add search logic here

    }

  };



  const handleClearRecentSearches = () => {

    setRecentSearches([]);

  };



  const renderRecentSearchItem = ({ item }) => (

    <RecentSearchItem

      name={item.name}

      handle={item.handle}

      verified={item.verified}

      onPress={() => console.log(`Selected: ${item.name}`)}

    />

  );



  const handleScroll = (event) => {

    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY > 50) {

      navigation.navigate('Trends');

    }

  };



  return (

    <View style={styles.container}>

      <View style={styles.searchBarContainer}>

        <TextInput

          style={styles.searchInput}

          placeholder="Search Twitter"

          value={searchQuery}

          onChangeText={setSearchQuery}

          onSubmitEditing={handleSearch}

        />

        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>

          <Text style={styles.cancelButtonText}>Cancel</Text>

        </TouchableOpacity>

      </View>

      <ScrollView

        ref={scrollViewRef}

        onScroll={handleScroll}

        scrollEventThrottle={16}

      >

        {recentSearches.length > 0 && (

          <View style={styles.recentSearchesContainer}>

            <View style={styles.recentSearchesHeader}>

              <Text style={styles.recentSearchesTitle}>Recent searches</Text>

              <TouchableOpacity onPress={handleClearRecentSearches}>

                <Icon name="x" size={20} color="#657786" />

              </TouchableOpacity>

            </View>

            <FlatList

              data={recentSearches}

              renderItem={renderRecentSearchItem}

              keyExtractor={(item, index) => `${item.handle}-${index}`}

              scrollEnabled={false}

            />

          </View>

        )}

        <View style={styles.scrollHint}>

          <Text style={styles.scrollHintText}>Scroll down for Trends</Text>

        </View>

      </ScrollView>

      <View style={styles.keyboardContainer}>

        {/* Keyboard component would go here */}

      </View>

      <View style={styles.bottomNavigation}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Icon name="search" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="bell" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="mail" size={24} color="#657786" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  searchBarContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#E1E8ED',

  },

  searchInput: {

    flex: 1,

    height: 36,

    backgroundColor: '#E1E8ED',

    borderRadius: 18,

    paddingHorizontal: 15,

    fontSize: 16,

  },

  cancelButton: {

    marginLeft: 10,

  },

  cancelButtonText: {

    color: '#1DA1F2',

    fontSize: 16,

  },

  recentSearchesContainer: {

    paddingHorizontal: 15,

  },

  recentSearchesHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 10,

  },

  recentSearchesTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  recentSearchItem: {

    flexDirection: 'row',

    alignItems: 'center',

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

  keyboardContainer: {

    height: 216, // Approximate height of the keyboard

  },

  bottomNavigation: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#E1E8ED',

    paddingVertical: 10,

  },

  scrollHint: {

    alignItems: 'center',

    paddingVertical: 20,

  },

  scrollHintText: {

    color: '#657786',

    fontSize: 14,

  },

});



export default SearchScreen;