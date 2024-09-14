import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const folderData = [

  { id: '1', name: 'Alarms', items: '1 item', size: '1 KB', isFavorite: false },

  { id: '2', name: 'Android', items: '6 items', size: '12 MB', isFavorite: false },

  { id: '3', name: 'Backups', items: '1 item', size: '821 MB', isFavorite: false },

  { id: '4', name: 'Browser', items: '3 items', size: '204 KB', isFavorite: false },

  { id: '5', name: 'Canva', items: '23 items', size: '98 MB', isFavorite: true },

  { id: '6', name: 'DCIM', items: '3 items', size: '18.4 GB', isFavorite: false },

  { id: '7', name: 'Documents', items: '6 items', size: '2.4 GB', isFavorite: false },

  { id: '8', name: 'Download', items: '5 items', size: '4.6 GB', isFavorite: true },

  { id: '9', name: 'Notifications', items: '', size: '', isFavorite: false },

];



const FilesScreen = ({ navigation }) => {

  const [sortOrder, setSortOrder] = useState('A-Z');



  const renderItem = ({ item }) => (

    <TouchableOpacity style={styles.folderItem}>

      <View style={styles.folderIconContainer}>

        {item.isFavorite ? (

          <Icon name="heart" size={24} color="#FF69B4" style={styles.heartIcon} />

        ) : null}

        <Icon name="folder-outline" size={24} color="#FFD700" />

      </View>

      <View style={styles.folderInfo}>

        <Text style={styles.folderName}>{item.name}</Text>

        <Text style={styles.folderDetails}>{`${item.items}${item.size ? ` • ${item.size}` : ''}`}</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Icon name="ellipsis-vertical" size={20} color="#000" />

      </TouchableOpacity>

    </TouchableOpacity>

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

      <TouchableOpacity 

        style={styles.sortButton} 

        onPress={() => setSortOrder(sortOrder === 'A-Z' ? 'Z-A' : 'A-Z')}

      >

        <Text style={styles.sortButtonText}>{sortOrder}</Text>

        <Icon name="chevron-down" size={20} color="#000" />

      </TouchableOpacity>

      <FlatList

        data={folderData}

        renderItem={renderItem}

        keyExtractor={item => item.id}

        style={styles.folderList}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="home-outline" size={24} color="#000" />

          <Text style={styles.tabLabel}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Icon name="folder-outline" size={24} color="#007AFF" />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Files</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="cloud-outline" size={24} color="#000" />

          <Text style={styles.tabLabel}>Cloud</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="trash-outline" size={24} color="#000" />

          <Text style={styles.tabLabel}>Clean</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingTop: 60,

    paddingBottom: 10,

  },

  title: {

    fontSize: 22,

    fontWeight: 'bold',

  },

  headerIcons: {

    flexDirection: 'row',

  },

  sortButton: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 8,

  },

  sortButtonText: {

    marginRight: 4,

    fontSize: 16,

  },

  folderList: {

    flex: 1,

  },

  folderItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 12,

    paddingHorizontal: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  folderIconContainer: {

    width: 40,

    height: 40,

    justifyContent: 'center',

    alignItems: 'center',

  },

  heartIcon: {

    position: 'absolute',

    top: -4,

    right: -4,

  },

  folderInfo: {

    flex: 1,

    marginLeft: 16,

  },

  folderName: {

    fontSize: 16,

    fontWeight: '500',

  },

  folderDetails: {

    fontSize: 14,

    color: '#666',

  },

  moreButton: {

    padding: 8,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabLabel: {

    fontSize: 12,

    marginTop: 4,

  },

  activeTab: {

    color: '#007AFF',

  },

  activeTabLabel: {

    color: '#007AFF',

  },

});



export default FilesScreen;