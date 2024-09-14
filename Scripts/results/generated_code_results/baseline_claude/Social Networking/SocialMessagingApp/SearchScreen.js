import React, { useState } from 'react';

import {

  View,

  Text,

  TextInput,

  TouchableOpacity,

  FlatList,

  StyleSheet,

  Image,

  KeyboardAvoidingView,

  Platform,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');

  const [recentSearches, setRecentSearches] = useState([

    'Designers',

    'Dasha Taran',

    'Billie Eilish',

  ]);



  const categories = ['Chats', 'Photos', 'Videos', 'Links'];



  const handleSearch = () => {

    if (searchQuery.trim()) {

      setRecentSearches(prevSearches => [searchQuery, ...prevSearches]);

      setSearchQuery('');

    }

  };



  const removeSearch = (index) => {

    setRecentSearches(prevSearches => prevSearches.filter((_, i) => i !== index));

  };



  const clearAllSearches = () => {

    setRecentSearches([]);

  };



  const renderRecentSearch = ({ item, index }) => (

    <View style={styles.recentSearchItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

      <Text style={styles.recentSearchText}>{item}</Text>

      <TouchableOpacity onPress={() => removeSearch(index)}>

        <Image source={require('../assets/snack-icon.png')} style={styles.closeIcon} />

      </TouchableOpacity>

    </View>

  );



  return (

    <KeyboardAvoidingView 

      style={styles.container} 

      behavior={Platform.OS === "ios" ? "padding" : "height"}

      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}

    >

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <TextInput

          style={styles.searchInput}

          placeholder="Search..."

          value={searchQuery}

          onChangeText={setSearchQuery}

          onSubmitEditing={handleSearch}

        />

      </View>



      <View style={styles.categoriesContainer}>

        <FlatList

          data={categories}

          renderItem={({ item }) => (

            <TouchableOpacity style={styles.categoryItem}>

              <Text style={styles.categoryText}>{item}</Text>

            </TouchableOpacity>

          )}

          keyExtractor={(item) => item}

          horizontal

          showsHorizontalScrollIndicator={false}

        />

      </View>



      <View style={styles.recentSearchesContainer}>

        <View style={styles.recentSearchesHeader}>

          <Text style={styles.recentSearchesTitle}>Recent searches</Text>

          <TouchableOpacity onPress={clearAllSearches}>

            <Text style={styles.clearAllText}>Clear all</Text>

          </TouchableOpacity>

        </View>

        <FlatList

          data={recentSearches}

          renderItem={renderRecentSearch}

          keyExtractor={(item, index) => index.toString()}

        />

      </View>

    </KeyboardAvoidingView>

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

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  searchInput: {

    flex: 1,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#F5F5F5',

    paddingHorizontal: 16,

    fontSize: 16,

  },

  categoriesContainer: {

    padding: 16,

  },

  categoryItem: {

    paddingHorizontal: 16,

    paddingVertical: 8,

    backgroundColor: '#F5F5F5',

    borderRadius: 20,

    marginRight: 8,

  },

  categoryText: {

    fontSize: 14,

  },

  recentSearchesContainer: {

    flex: 1,

    padding: 16,

  },

  recentSearchesHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  recentSearchesTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  clearAllText: {

    fontSize: 14,

    color: '#007AFF',

  },

  recentSearchItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 16,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 12,

  },

  recentSearchText: {

    flex: 1,

    fontSize: 16,

  },

  closeIcon: {

    width: 16,

    height: 16,

  },

});



export default SearchScreen;