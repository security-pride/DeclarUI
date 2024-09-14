import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const HomepageScreen = ({ navigation }) => {

  const internalStorageUsage = 66;

  const cloudStorageUsage = 37;

  const favorites = [

    { name: 'Download', items: 5, size: '4.6 GB' },

    { name: 'Canva', items: 31, size: '821 MB' },

  ];

  const recentFiles = [

    { name: 'DSC202108413.jpg', size: '2MB' },

    { name: 'RKAKL2022.xlsx', size: '140Kb' },

  ];



  return (

    <View style={styles.container}>

      <Text style={styles.title}>File Manager</Text>

      <View style={styles.searchBar}>

        <Icon name="search" size={24} color="#999" />

        <TextInput

          style={styles.searchInput}

          placeholder="Search folder or files"

          placeholderTextColor="#999"

        />

      </View>

      <ScrollView>

        <View style={styles.storageSection}>

          <View style={styles.storageItem}>

            <Text style={styles.storageTitle}>Internal Storage</Text>

            <View style={styles.storageBar}>

              <View style={[styles.storageUsed, { width: `${internalStorageUsage}%` }]} />

            </View>

            <Text style={styles.storageText}>85 GB of 128 GB used</Text>

            <TouchableOpacity

              style={styles.viewDetailsButton}

              onPress={() => navigation.navigate('StorageDetails')}

            >

              <Text style={styles.viewDetailsText}>View Details</Text>

            </TouchableOpacity>

          </View>

          <View style={styles.storageItem}>

            <Text style={styles.storageTitle}>Cloud Storage</Text>

            <View style={styles.storageBar}>

              <View style={[styles.storageUsed, { width: `${cloudStorageUsage}%`, backgroundColor: '#4285F4' }]} />

            </View>

            <Text style={styles.storageText}>131 GB of 2 TB used</Text>

            <TouchableOpacity

              style={styles.viewDetailsButton}

              onPress={() => navigation.navigate('CloudStorage')}

            >

              <Text style={styles.viewDetailsText}>Go to storage lists</Text>

            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.section}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Favorites</Text>

            <TouchableOpacity>

              <Text style={styles.seeAllText}>See All</Text>

            </TouchableOpacity>

          </View>

          {favorites.map((item, index) => (

            <View key={index} style={styles.favoriteItem}>

              <Icon name="folder" size={40} color="#FFD700" />

              <View style={styles.favoriteInfo}>

                <Text style={styles.favoriteName}>{item.name}</Text>

                <Text style={styles.favoriteDetails}>{item.items} items • {item.size}</Text>

              </View>

            </View>

          ))}

        </View>

        <View style={styles.section}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Recent Files</Text>

            <TouchableOpacity>

              <Text style={styles.seeAllText}>See All</Text>

            </TouchableOpacity>

          </View>

          {recentFiles.map((file, index) => (

            <View key={index} style={styles.recentFileItem}>

              <Icon name="insert-drive-file" size={40} color="#4285F4" />

              <View style={styles.recentFileInfo}>

                <Text style={styles.recentFileName}>{file.name}</Text>

                <Text style={styles.recentFileSize}>{file.size}</Text>

              </View>

            </View>

          ))}

        </View>

      </ScrollView>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="home" size={24} color="#2196F3" />

          <Text style={styles.tabTextActive}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Files')}>

          <Icon name="folder" size={24} color="#000" />

          <Text style={styles.tabText}>Files</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('CloudStorage')}>

          <Icon name="cloud" size={24} color="#000" />

          <Text style={styles.tabText}>Cloud</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Cleaner')}>

          <Icon name="cleaning-services" size={24} color="#000" />

          <Text style={styles.tabText}>Clean</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    margin: 16,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    margin: 16,

    paddingHorizontal: 12,

  },

  searchInput: {

    flex: 1,

    height: 40,

    marginLeft: 8,

  },

  storageSection: {

    flexDirection: 'column',

    marginHorizontal: 16,

  },

  storageItem: {

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    padding: 16,

    marginBottom: 16,

  },

  storageTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  storageBar: {

    height: 8,

    backgroundColor: '#E0E0E0',

    borderRadius: 4,

    marginBottom: 8,

  },

  storageUsed: {

    height: 8,

    backgroundColor: '#2196F3',

    borderRadius: 4,

  },

  storageText: {

    fontSize: 14,

    color: '#757575',

    marginBottom: 8,

  },

  viewDetailsButton: {

    alignSelf: 'flex-start',

  },

  viewDetailsText: {

    color: '#2196F3',

    fontWeight: 'bold',

  },

  section: {

    marginTop: 24,

    marginHorizontal: 16,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeAllText: {

    color: '#2196F3',

  },

  favoriteItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 16,

  },

  favoriteInfo: {

    marginLeft: 16,

  },

  favoriteName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  favoriteDetails: {

    fontSize: 14,

    color: '#757575',

  },

  recentFileItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 16,

  },

  recentFileInfo: {

    marginLeft: 16,

  },

  recentFileName: {

    fontSize: 16,

  },

  recentFileSize: {

    fontSize: 14,

    color: '#757575',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    backgroundColor: '#FFFFFF',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabText: {

    fontSize: 12,

    marginTop: 4,

  },

  tabTextActive: {

    fontSize: 12,

    marginTop: 4,

    color: '#2196F3',

  },

});



export default HomepageScreen;