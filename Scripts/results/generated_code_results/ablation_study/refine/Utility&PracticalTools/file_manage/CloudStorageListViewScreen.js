import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const cloudStorageData = [

  { id: '1', name: 'Dropbox', items: 2, size: '1.2 Gb', icon: require('../assets/snack-icon.png') },

  { id: '2', name: 'Kangxpukul@gmail.com', items: 4, size: '13.5 Gb', icon: require('../assets/snack-icon.png') },

  { id: '3', name: 'Nirwna - OneDrive', items: 5, size: '164.3 Gb', icon: require('../assets/snack-icon.png') },

  { id: '4', name: 'PIDT - OneDrive', items: 7, size: '131.1 Gb', icon: require('../assets/snack-icon.png') },

];



const CloudStorageItem = ({ item }) => (

  <View style={styles.itemContainer}>

    <Image source={item.icon} style={styles.itemIcon} />

    <View style={styles.itemInfo}>

      <Text style={styles.itemName}>{item.name}</Text>

      <Text style={styles.itemDetails}>{item.items} items • {item.size}</Text>

    </View>

    <TouchableOpacity style={styles.itemOptions}>

      <Icon name="more-vert" size={24} color="#000" />

    </TouchableOpacity>

  </View>

);



const CloudStorageListViewScreen = ({ navigation }) => {

  const [sortOrder, setSortOrder] = useState('A-Z');



  return (

    <View style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>

        <Text style={styles.title}>Cloud Storage</Text>

        <View style={styles.headerActions}>

          <TouchableOpacity style={styles.sortButton} onPress={() => setSortOrder(sortOrder === 'A-Z' ? 'Z-A' : 'A-Z')}>

            <Text style={styles.sortButtonText}>{sortOrder}</Text>

            <Icon name="arrow-drop-down" size={24} color="#000" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="grid-view" size={24} color="#000" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="add" size={24} color="#000" />

          </TouchableOpacity>

        </View>

      </View>

      <FlatList

        data={cloudStorageData}

        renderItem={({ item }) => <CloudStorageItem item={item} />}

        keyExtractor={item => item.id}

        style={styles.list}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#757575" />

          <Text style={styles.tabLabel}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Files')}>

          <Icon name="folder" size={24} color="#757575" />

          <Text style={styles.tabLabel}>Files</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Icon name="cloud" size={24} color="#2196F3" />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Cloud</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Clean')}>

          <Icon name="cleaning-services" size={24} color="#757575" />

          <Text style={styles.tabLabel}>Clean</Text>

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

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingTop: 60,

    paddingBottom: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  headerActions: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  sortButton: {

    flexDirection: 'row',

    alignItems: 'center',

    marginRight: 16,

  },

  sortButtonText: {

    fontSize: 16,

    marginRight: 4,

  },

  iconButton: {

    marginLeft: 16,

  },

  list: {

    flex: 1,

  },

  itemContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  itemIcon: {

    width: 40,

    height: 40,

    marginRight: 16,

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

    color: '#757575',

  },

  itemOptions: {

    padding: 8,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#2196F3',

  },

  tabLabel: {

    fontSize: 12,

    marginTop: 4,

    color: '#757575',

  },

  activeTabLabel: {

    color: '#2196F3',

  },

});



export default CloudStorageListViewScreen;