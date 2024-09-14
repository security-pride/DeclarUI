import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CloudStorageListViewScreen = () => {

  const navigation = useNavigation();

  const [sortOrder, setSortOrder] = useState('A-Z');



  const cloudStorageData = [

    { id: '1', name: 'Dropbox', items: 2, size: '1.2 Gb', icon: '../assets/snack-icon.png' },

    { id: '2', name: 'Kangxpukul@gmail.com', items: 4, size: '13.5 Gb', icon: '../assets/snack-icon.png' },

    { id: '3', name: 'Nirwna - OneDrive', items: 5, size: '164.3 Gb', icon: '../assets/snack-icon.png' },

    { id: '4', name: 'PIDT - OneDrive', items: 7, size: '131.1 Gb', icon: '../assets/snack-icon.png' },

  ];



  const renderItem = ({ item }) => (

    <TouchableOpacity style={styles.itemContainer}>

      <Image source={item.icon} style={styles.itemIcon} />

      <View style={styles.itemInfo}>

        <Text style={styles.itemName}>{item.name}</Text>

        <Text style={styles.itemDetails}>{item.items} items • {item.size}</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Text style={styles.moreButtonText}>•••</Text>

      </TouchableOpacity>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Cloud Storage</Text>

        <TouchableOpacity style={styles.addButton}>

          <Text style={styles.addButtonText}>+</Text>

        </TouchableOpacity>

      </View>

      

      <View style={styles.sortContainer}>

        <TouchableOpacity 

          style={styles.sortButton}

          onPress={() => setSortOrder(sortOrder === 'A-Z' ? 'Z-A' : 'A-Z')}

        >

          <Text style={styles.sortButtonText}>{sortOrder}</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.sortIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.viewButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.viewIcon} />

        </TouchableOpacity>

      </View>

      

      <FlatList

        data={cloudStorageData}

        renderItem={renderItem}

        keyExtractor={item => item.id}

        style={styles.list}

      />

      

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('HomePage')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Files')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Files</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>Cloud</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Cleaner')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Clean</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingTop: 20,

    paddingBottom: 10,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  addButton: {

    width: 30,

    height: 30,

    borderRadius: 15,

    backgroundColor: '#f0f0f0',

    justifyContent: 'center',

    alignItems: 'center',

  },

  addButtonText: {

    fontSize: 24,

    color: '#000',

  },

  sortContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingVertical: 10,

  },

  sortButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  sortButtonText: {

    marginRight: 5,

  },

  sortIcon: {

    width: 12,

    height: 12,

  },

  viewButton: {

    padding: 5,

  },

  viewIcon: {

    width: 20,

    height: 20,

  },

  list: {

    flex: 1,

  },

  itemContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingVertical: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#f0f0f0',

  },

  itemIcon: {

    width: 40,

    height: 40,

    marginRight: 15,

  },

  itemInfo: {

    flex: 1,

  },

  itemName: {

    fontSize: 16,

    fontWeight: '500',

  },

  itemDetails: {

    fontSize: 14,

    color: '#888',

  },

  moreButton: {

    padding: 5,

  },

  moreButtonText: {

    fontSize: 18,

    color: '#888',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#f0f0f0',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  tabText: {

    fontSize: 12,

    color: '#888',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#007AFF',

  },

  activeTabText: {

    color: '#007AFF',

  },

});



export default CloudStorageListViewScreen;