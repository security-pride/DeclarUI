import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const AddLocationsScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const [locations, setLocations] = useState([]);



  const handleSearch = () => {

    // Simulated search function

    const newLocations = [

      { id: '1', name: 'New York, NY' },

      { id: '2', name: 'Los Angeles, CA' },

      { id: '3', name: 'Chicago, IL' },

    ];

    setLocations(newLocations);

  };



  const renderLocationItem = ({ item }) => (

    <TouchableOpacity

      style={styles.locationItem}

      onPress={() => {

        // Add location logic here

        navigation.navigate('Home');

      }}

    >

      <Text>{item.name}</Text>

      <Icon name="add-circle-outline" size={24} color="#000" />

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.title}>Add location</Text>

        <Icon name="location-outline" size={24} color="#000" />

      </View>



      <View style={styles.searchContainer}>

        <Icon name="search-outline" size={20} color="#777" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search for a city or airport"

          value={searchQuery}

          onChangeText={setSearchQuery}

          onSubmitEditing={handleSearch}

        />

      </View>



      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Home')}>

        <Icon name="add" size={24} color="#fff" />

        <Text style={styles.addButtonText}>Click to add location</Text>

      </TouchableOpacity>



      <FlatList

        data={locations}

        renderItem={renderLocationItem}

        keyExtractor={(item) => item.id}

        style={styles.list}

      />

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

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#fff',

  },

  title: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    margin: 16,

    borderRadius: 8,

    paddingHorizontal: 12,

  },

  searchIcon: {

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  addButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#007AFF',

    margin: 16,

    padding: 12,

    borderRadius: 8,

  },

  addButtonText: {

    color: '#fff',

    marginLeft: 8,

    fontSize: 16,

  },

  list: {

    flex: 1,

  },

  locationItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: '#fff',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

});



export default AddLocationsScreen;