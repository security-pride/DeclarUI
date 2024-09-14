import React from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const HomepageScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>File Manager</Text>

      

      <View style={styles.searchBar}>

        <Icon name="search-outline" size={20} color="#888" />

        <TextInput

          style={styles.searchInput}

          placeholder="Search folder or files"

          placeholderTextColor="#888"

        />

      </View>

      

      <View style={styles.storageSection}>

        <View style={styles.storageItem}>

          <View style={styles.storageChart}>

            <View style={[styles.storageUsed, { width: '66%', backgroundColor: '#4A90E2' }]} />

          </View>

          <Text style={styles.storageTitle}>Internal Storage</Text>

          <Text style={styles.storageDetails}>85 GB of 128 GB used</Text>

          <TouchableOpacity>

            <Text style={styles.linkText}>View Details</Text>

          </TouchableOpacity>

        </View>

        

        <View style={styles.storageItem}>

          <View style={styles.storageChart}>

            <View style={[styles.storageUsed, { width: '37%', backgroundColor: '#4A90E2' }]} />

          </View>

          <Text style={styles.storageTitle}>Cloud Storage</Text>

          <Text style={styles.storageDetails}>131 GB of 2 TB used</Text>

          <TouchableOpacity>

            <Text style={styles.linkText}>Go to storage lists</Text>

          </TouchableOpacity>

        </View>

      </View>

      

      <View style={styles.sectionHeader}>

        <Text style={styles.sectionTitle}>Favorites</Text>

        <TouchableOpacity>

          <Text style={styles.seeAllText}>See All</Text>

        </TouchableOpacity>

      </View>

      

      <View style={styles.favoritesList}>

        <View style={styles.favoriteItem}>

          <View style={styles.favoriteIconContainer}>

            <Icon name="folder-outline" size={24} color="#FFD700" />

            <Icon name="heart" size={16} color="#FF69B4" style={styles.heartIcon} />

          </View>

          <Text style={styles.favoriteTitle}>Download</Text>

          <Text style={styles.favoriteDetails}>5 items • 4.6 GB</Text>

        </View>

        <View style={styles.favoriteItem}>

          <View style={styles.favoriteIconContainer}>

            <Icon name="folder-outline" size={24} color="#FFD700" />

            <Icon name="heart" size={16} color="#FF69B4" style={styles.heartIcon} />

          </View>

          <Text style={styles.favoriteTitle}>Canva</Text>

          <Text style={styles.favoriteDetails}>31 items • 821 MB</Text>

        </View>

      </View>

      

      <View style={styles.sectionHeader}>

        <Text style={styles.sectionTitle}>Recent Files</Text>

        <TouchableOpacity>

          <Text style={styles.seeAllText}>See All</Text>

        </TouchableOpacity>

      </View>

      

      <View style={styles.recentFilesList}>

        <View style={styles.recentFileItem}>

          <Icon name="image-outline" size={24} color="#4A90E2" />

          <View style={styles.recentFileInfo}>

            <Text style={styles.recentFileName}>DSC2021084133.jpg</Text>

            <Text style={styles.recentFileSize}>2MB</Text>

          </View>

        </View>

        <View style={styles.recentFileItem}>

          <Icon name="document-outline" size={24} color="#4A90E2" />

          <View style={styles.recentFileInfo}>

            <Text style={styles.recentFileName}>RKAKL2022.xlsx</Text>

            <Text style={styles.recentFileSize}>140KB</Text>

          </View>

        </View>

      </View>

      

      <View style={styles.tabBar}>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Icon name="home-outline" size={24} color="#007AFF" />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Files')}>

          <Icon name="folder-outline" size={24} color="#000" />

          <Text style={styles.tabLabel}>Files</Text>

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

    backgroundColor: '#F8F9FA',

    paddingTop: 60,

    paddingHorizontal: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 20,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    paddingHorizontal: 10,

    marginBottom: 20,

  },

  searchInput: {

    flex: 1,

    paddingVertical: 10,

    paddingLeft: 10,

  },

  storageSection: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  storageItem: {

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    padding: 15,

    width: '48%',

  },

  storageChart: {

    height: 5,

    backgroundColor: '#E0E0E0',

    borderRadius: 2.5,

    marginBottom: 10,

  },

  storageUsed: {

    height: 5,

    borderRadius: 2.5,

  },

  storageTitle: {

    fontSize: 16,

    fontWeight: '600',

    marginBottom: 5,

  },

  storageDetails: {

    fontSize: 12,

    color: '#888',

    marginBottom: 5,

  },

  linkText: {

    color: '#007AFF',

    fontSize: 12,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: '600',

  },

  seeAllText: {

    color: '#007AFF',

    fontSize: 14,

  },

  favoritesList: {

    flexDirection: 'row',

    marginBottom: 20,

  },

  favoriteItem: {

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    padding: 15,

    marginRight: 10,

    width: 120,

  },

  favoriteIconContainer: {

    position: 'relative',

    marginBottom: 10,

  },

  heartIcon: {

    position: 'absolute',

    top: -5,

    right: -5,

  },

  favoriteTitle: {

    fontSize: 14,

    fontWeight: '600',

    marginBottom: 5,

  },

  favoriteDetails: {

    fontSize: 12,

    color: '#888',

  },

  recentFilesList: {

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    padding: 10,

  },

  recentFileItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 10,

  },

  recentFileInfo: {

    marginLeft: 15,

  },

  recentFileName: {

    fontSize: 14,

    fontWeight: '500',

  },

  recentFileSize: {

    fontSize: 12,

    color: '#888',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

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



export default HomepageScreen;