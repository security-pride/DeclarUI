import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const CloudStorageListViewScreen = ({ navigation }) => {

  const [sortOrder, setSortOrder] = useState('A-Z');

  const [cloudStorages] = useState([

    { id: '1', name: 'Dropbox', items: 2, size: '1.2 Gb', icon: require('../assets/snack-icon.png') },

    { id: '2', name: 'Kangxpukul@gmail.com', items: 4, size: '13.5 Gb', icon: require('../assets/snack-icon.png') },

    { id: '3', name: 'Nirwna - OneDrive', items: 5, size: '164.3 Gb', icon: require('../assets/snack-icon.png') },

    { id: '4', name: 'PIDT - OneDrive', items: 7, size: '131.1 Gb', icon: require('../assets/snack-icon.png') },

  ]);



  const toggleSortOrder = () => {

    setSortOrder(sortOrder === 'A-Z' ? 'Z-A' : 'A-Z');

  };



  const renderItem = ({ item }) => (

    <View style={styles.item}>

      <Image source={item.icon} style={styles.icon} />

      <View style={styles.itemInfo}>

        <Text style={styles.itemName}>{item.name}</Text>

        <Text style={styles.itemDetails}>{item.items} items • {item.size}</Text>

      </View>

      <TouchableOpacity>

        <Icon name="more-vert" size={24} color="#000" />

      </TouchableOpacity>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Cloud Storage</Text>

        <TouchableOpacity onPress={() => {}}>

          <Icon name="add" size={24} color="#000" />

        </TouchableOpacity>

      </View>

      <View style={styles.sortBar}>

        <TouchableOpacity style={styles.sortButton} onPress={toggleSortOrder}>

          <Text>{sortOrder}</Text>

          <Icon name="arrow-drop-down" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('CloudStorage')}>

          <Icon name="grid-view" size={24} color="#000" />

        </TouchableOpacity>

      </View>

      <FlatList

        data={cloudStorages}

        renderItem={renderItem}

        keyExtractor={item => item.id}

        style={styles.list}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('HomePage')}>

          <Icon name="home" size={24} color="#000" />

          <Text>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Files')}>

          <Icon name="folder" size={24} color="#000" />

          <Text>Files</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="cloud" size={24} color="#2196F3" />

          <Text style={{ color: '#2196F3' }}>Cloud</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Cleaner')}>

          <Icon name="cleaning-services" size={24} color="#000" />

          <Text>Clean</Text>

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

    padding: 16,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  sortBar: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 8,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  sortButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  list: {

    flex: 1,

  },

  item: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  icon: {

    width: 40,

    height: 40,

    marginRight: 16,

  },

  itemInfo: {

    flex: 1,

  },

  itemName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  itemDetails: {

    fontSize: 14,

    color: '#757575',

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

});



export default CloudStorageListViewScreen;