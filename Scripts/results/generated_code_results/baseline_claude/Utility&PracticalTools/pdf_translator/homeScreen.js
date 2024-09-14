import React from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const PDFItem = ({ item }) => {

  return (

    <View style={styles.pdfItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.pdfIcon} />

      <View style={styles.pdfInfo}>

        <Text style={styles.pdfName}>{item.name}</Text>

        <Text style={styles.pdfDate}>{item.date}</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Text style={styles.moreButtonText}>...</Text>

      </TouchableOpacity>

    </View>

  );

};



const HomeScreen = () => {

  const navigation = useNavigation();



  const pdfData = [

    { id: '1', name: 'Travel_plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '2', name: 'Travel_plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '3', name: 'Travel_plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '4', name: 'Travel_plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '5', name: 'Travel_plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '6', name: 'Travel_plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '7', name: 'Travel_plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

  ];



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>PDF file management</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('More')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />

        </TouchableOpacity>

      </View>

      <FlatList

        data={pdfData}

        renderItem={({ item }) => <PDFItem item={item} />}

        keyExtractor={item => item.id}

        style={styles.list}

      />

      <TouchableOpacity 

        style={styles.addButton}

        onPress={() => {/* Handle add button press */}}

      >

        <Text style={styles.addButtonText}>+</Text>

      </TouchableOpacity>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFF0F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  searchIcon: {

    width: 24,

    height: 24,

  },

  menuIcon: {

    width: 24,

    height: 24,

  },

  list: {

    flex: 1,

  },

  pdfItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

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

  pdfDate: {

    fontSize: 14,

    color: '#888',

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

    backgroundColor: '#FF6347',

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 4,

  },

  addButtonText: {

    fontSize: 32,

    color: 'white',

  },

});



export default HomeScreen;