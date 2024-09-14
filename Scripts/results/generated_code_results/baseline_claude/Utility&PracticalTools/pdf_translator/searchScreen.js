import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');



  const pdfData = [

    { id: '1', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '2', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '3', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '4', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '5', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '6', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '7', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

  ];



  const renderPDFItem = ({ item }) => (

    <View style={styles.pdfItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.pdfIcon} />

      <View style={styles.pdfInfo}>

        <Text style={styles.pdfName}>{item.name}</Text>

        <Text style={styles.pdfDetails}>{`${item.date}    ${item.size}`}</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Text style={styles.moreButtonText}>...</Text>

      </TouchableOpacity>

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>PDF file management</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('More')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

        </TouchableOpacity>

      </View>

      <View style={styles.searchContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search your files"

          value={searchQuery}

          onChangeText={setSearchQuery}

        />

      </View>

      <FlatList

        data={pdfData}

        renderItem={renderPDFItem}

        keyExtractor={item => item.id}

        style={styles.list}

      />

      <TouchableOpacity style={styles.addButton} onPress={() => {/* Handle add button press */}}>

        <Text style={styles.addButtonText}>+</Text>

      </TouchableOpacity>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  headerIcon: {

    width: 24,

    height: 24,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 20,

    margin: 16,

    paddingHorizontal: 12,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  list: {

    flex: 1,

  },

  pdfItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,

    marginBottom: 1,

  },

  pdfIcon: {

    width: 40,

    height: 40,

    marginRight: 16,

  },

  pdfInfo: {

    flex: 1,

  },

  pdfName: {

    fontSize: 16,

    fontWeight: '500',

  },

  pdfDetails: {

    fontSize: 14,

    color: '#888888',

  },

  moreButton: {

    padding: 8,

  },

  moreButtonText: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  addButton: {

    position: 'absolute',

    right: 16,

    bottom: 16,

    width: 56,

    height: 56,

    borderRadius: 28,

    backgroundColor: '#FF0000',

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 4,

  },

  addButtonText: {

    fontSize: 32,

    color: '#FFFFFF',

  },

});



export default SearchScreen;