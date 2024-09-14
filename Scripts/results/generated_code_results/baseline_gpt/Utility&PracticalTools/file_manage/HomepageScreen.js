import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomepageScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>File Manager</Text>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="search" size={20} color="#ccc"/>
        <TextInput
          placeholder="Search folder or files"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
      </View>

      {/* Storage Cards */}
      <View style={styles.storageCard}>
        <View style={styles.storageInfo}>
          <Text style={styles.storageTitle}>Internal Storage</Text>
          <Text style={styles.storageDetails}>85 GB of 128 GB used</Text>
          <TouchableOpacity>
            <Text style={styles.storageLink}>View Details</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.storageCircle}>
          <Icon name="pie-chart" size={60} color="#4A90E2" />
          <Text style={styles.storagePercentage}>66%</Text>
        </View>
      </View>

      <View style={styles.storageCard}>
        <View style={styles.storageInfo}>
          <Text style={styles.storageTitle}>Cloud Storage</Text>
          <Text style={styles.storageDetails}>131 GB of 2 TB used</Text>
          <TouchableOpacity>
            <Text style={styles.storageLink}>Go to storage lists</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.storageCircle}>
          <Icon name="pie-chart" size={60} color="#67C23A" />
          <Text style={styles.storagePercentage}>37%</Text>
        </View>
      </View>

      {/* Favorites Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Favorites</Text>
        <TouchableOpacity>
          <Text style={styles.sectionLink}>See All</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.fileItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
        <View style={styles.fileInfo}>
          <Text style={styles.fileName}>Download</Text>
          <Text style={styles.fileDetails}>5 items  4.6 GB</Text>
        </View>
      </View>

      <View style={styles.fileItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
        <View style={styles.fileInfo}>
          <Text style={styles.fileName}>Canva</Text>
          <Text style={styles.fileDetails}>31 item  821 MB</Text>
        </View>
      </View>

      {/* Recent Files Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Files</Text>
        <TouchableOpacity>
          <Text style={styles.sectionLink}>See All</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.fileItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
        <View style={styles.fileInfo}>
          <Text style={styles.fileName}>DSC2021084133.jpg</Text>
          <Text style={styles.fileSize}>2MB</Text>
        </View>
      </View>

      <View style={styles.fileItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
        <View style={styles.fileInfo}>
          <Text style={styles.fileName}>RAKL2022.xlsx</Text>
          <Text style={styles.fileSize}>140Kb</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginVertical: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  searchSection: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginHorizontal: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 20,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 10,
  },
  storageCard: {
    flexDirection: 'row',
    margin: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  storageInfo: {
    flex: 1,
  },
  storageTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  storageDetails: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  storageLink: {
    fontSize: 14,
    color: '#1E90FF',
    marginTop: 5,
  },
  storageCircle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  storagePercentage: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  sectionLink: {
    fontSize: 14,
    color: '#1E90FF',
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  fileIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  fileInfo: {
    marginLeft: 10,
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    color: '#333',
  },
  fileDetails: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  fileSize: {
    fontSize: 14,
    color: '#777',
    position: 'absolute', 
    right: 0,
  },
});

export default HomepageScreen;