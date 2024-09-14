import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const FilesScreen = ({ navigation }) => {

  const [sortOrder, setSortOrder] = useState('A-Z');

  const [files] = useState([

    { id: '1', name: 'Alarms', items: 1, size: '1 KB', icon: 'alarm' },

    { id: '2', name: 'Android', items: 6, size: '12 MB', icon: 'android' },

    { id: '3', name: 'Backups', items: 1, size: '821 MB', icon: 'backup' },

    { id: '4', name: 'Browser', items: 3, size: '204 KB', icon: 'public' },

    { id: '5', name: 'Canva', items: 23, size: '98 MB', icon: 'brush', favorite: true },

    { id: '6', name: 'DCIM', items: 3, size: '18.4 GB', icon: 'photo-camera' },

    { id: '7', name: 'Documents', items: 6, size: '2.4 GB', icon: 'description' },

    { id: '8', name: 'Download', items: 5, size: '4.6 GB', icon: 'file-download', favorite: true },

    { id: '9', name: 'Notifications', items: 0, size: '0 KB', icon: 'notifications' },

  ]);



  const toggleSortOrder = () => {

    setSortOrder(sortOrder === 'A-Z' ? 'Z-A' : 'A-Z');

  };



  const renderItem = ({ item }) => (

    <View style={styles.item}>

      <Icon name={item.icon} size={24} color={item.favorite ? '#FFD700' : '#000'} />

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

        <Text style={styles.title}>Internal Storage</Text>

        <View style={styles.headerIcons}>

          <TouchableOpacity onPress={() => {}}>

            <Icon name="add" size={24} color="#000" />

          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>

            <Icon name="search" size={24} color="#000" />

          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.sortBar}>

        <TouchableOpacity style={styles.sortButton} onPress={toggleSortOrder}>

          <Text>{sortOrder}</Text>

          <Icon name="arrow-drop-down" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="grid-view" size={24} color="#000" />

        </TouchableOpacity>

      </View>

      <FlatList

        data={files}

        renderItem={renderItem}

        keyExtractor={item => item.id}

        style={styles.list}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('HomePage')}>

          <Icon name="home" size={24} color="#000" />

          <Text>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="folder" size={24} color="#2196F3" />

          <Text style={{ color: '#2196F3' }}>Files</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('CloudStorage')}>

          <Icon name="cloud" size={24} color="#000" />

          <Text>Cloud</Text>

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

  headerIcons: {

    flexDirection: 'row',

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

  itemInfo: {

    flex: 1,

    marginLeft: 16,

  },

  itemName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  itemDetails: {

    fontSize: 12,

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



export default FilesScreen;