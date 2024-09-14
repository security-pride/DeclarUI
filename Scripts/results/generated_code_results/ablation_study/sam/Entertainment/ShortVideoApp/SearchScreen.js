import React, { useState } from 'react';

import {

  View,

  Text,

  TextInput,

  TouchableOpacity,

  StyleSheet,

  SafeAreaView,

  StatusBar,

  FlatList,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');



  const topSearches = [

    'Camp day',

    'Halloween',

    'Candy Challenge',

    'Dancing',

    'Christmas',

  ];



  const renderTopSearchItem = ({ item }) => (

    <TouchableOpacity style={styles.topSearchItem}>

      <Text style={styles.topSearchText}>{item}</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Text style={styles.backButtonText}>←</Text>

        </TouchableOpacity>

        <View style={styles.searchContainer}>

          <TextInput

            style={styles.searchInput}

            placeholder="Search"

            placeholderTextColor="#777"

            value={searchQuery}

            onChangeText={setSearchQuery}

          />

        </View>

      </View>

      <View style={styles.content}>

        <Text style={styles.topSearchTitle}>Top Search</Text>

        <FlatList

          data={topSearches}

          renderItem={renderTopSearchItem}

          keyExtractor={(item) => item}

          numColumns={2}

          columnWrapperStyle={styles.topSearchRow}

        />

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 15,

    paddingTop: 10,

    paddingBottom: 15,

  },

  backButton: {

    marginRight: 10,

  },

  backButtonText: {

    color: '#fff',

    fontSize: 24,

  },

  searchContainer: {

    flex: 1,

    height: 40,

    backgroundColor: '#333',

    borderRadius: 20,

    paddingHorizontal: 15,

    justifyContent: 'center',

  },

  searchInput: {

    color: '#fff',

    fontSize: 16,

  },

  content: {

    flex: 1,

    paddingHorizontal: 15,

  },

  topSearchTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 15,

  },

  topSearchRow: {

    justifyContent: 'flex-start',

  },

  topSearchItem: {

    backgroundColor: '#333',

    borderRadius: 20,

    paddingHorizontal: 15,

    paddingVertical: 8,

    marginRight: 10,

    marginBottom: 10,

  },

  topSearchText: {

    color: '#fff',

    fontSize: 14,

  },

});



export default SearchScreen;