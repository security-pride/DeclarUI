import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const CleanerScreen = ({ navigation }) => {

  const [storageUsage, setStorageUsage] = useState(66);

  const [totalStorage, setTotalStorage] = useState(128);

  const [usedStorage, setUsedStorage] = useState(85);



  const unusedApps = [

    { name: 'Waze', size: '1.2 GB', icon: require('../assets/snack-icon.png') },

    { name: 'LinkedIn', size: '1.2 GB', icon: require('../assets/snack-icon.png') },

    { name: 'Adobe', size: '1.2 GB', icon: require('../assets/snack-icon.png') },

    { name: 'Facebook', size: '1.2 GB', icon: require('../assets/snack-icon.png') },

  ];



  const duplicateFiles = [

    { name: 'DSC20210841334.jpg', size: '2 MB', icon: require('../assets/snack-icon.png') },

    { name: 'RKAKL2022.xlsx', size: '2 MB', icon: require('../assets/snack-icon.png') },

  ];



  const handleCleanJunkFiles = () => {

    // Implement clean junk files logic

  };



  const handleViewStorageDetails = () => {

    navigation.navigate('StorageDetails');

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Cleaner</Text>

      </View>



      <View style={styles.storageBar}>

        <View style={[styles.usedStorage, { width: `${storageUsage}%` }]} />

      </View>



      <View style={styles.storageInfo}>

        <Text style={styles.usedText}>Used</Text>

        <Text style={styles.storageText}>{usedStorage} GB of {totalStorage} GB</Text>

      </View>



      <TouchableOpacity style={styles.cleanButton} onPress={handleCleanJunkFiles}>

        <Text style={styles.cleanButtonText}>Clean Junk files</Text>

      </TouchableOpacity>



      <View style={styles.section}>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>Unused Apps</Text>

          <TouchableOpacity onPress={handleViewStorageDetails}>

            <Text style={styles.seeAllText}>See All</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.appList}>

          {unusedApps.map((app, index) => (

            <View key={index} style={styles.appItem}>

              <Image source={app.icon} style={styles.appIcon} />

              <Text style={styles.appName}>{app.name}</Text>

              <Text style={styles.appSize}>{app.size}</Text>

            </View>

          ))}

        </View>

        <Text style={styles.uninstallText}>Uninstall Apps (4.7 GB)</Text>

      </View>



      <View style={styles.section}>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>Duplicate files</Text>

          <TouchableOpacity onPress={handleViewStorageDetails}>

            <Text style={styles.seeAllText}>See All</Text>

          </TouchableOpacity>

        </View>

        {duplicateFiles.map((file, index) => (

          <View key={index} style={styles.fileItem}>

            <Image source={file.icon} style={styles.fileIcon} />

            <View style={styles.fileInfo}>

              <Text style={styles.fileName}>{file.name}</Text>

              <Text style={styles.fileSize}>{file.size}</Text>

            </View>

          </View>

        ))}

      </View>



      <TouchableOpacity style={styles.reviewButton} onPress={handleViewStorageDetails}>

        <Text style={styles.reviewButtonText}>Review files (1.2 GB)</Text>

      </TouchableOpacity>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="home" size={24} color="#000" />

          <Text>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="folder" size={24} color="#000" />

          <Text>Files</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="cloud" size={24} color="#000" />

          <Text>Cloud</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="cleaning-services" size={24} color="#2196F3" />

          <Text style={{ color: '#2196F3' }}>Clean</Text>

        </TouchableOpacity>

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

    padding: 16,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  storageBar: {

    height: 8,

    backgroundColor: '#E0E0E0',

    borderRadius: 4,

    marginHorizontal: 16,

  },

  usedStorage: {

    height: '100%',

    backgroundColor: '#2196F3',

    borderRadius: 4,

  },

  storageInfo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginHorizontal: 16,

    marginTop: 8,

  },

  usedText: {

    color: '#757575',

  },

  storageText: {

    color: '#757575',

  },

  cleanButton: {

    backgroundColor: '#2196F3',

    borderRadius: 8,

    padding: 16,

    alignItems: 'center',

    marginHorizontal: 16,

    marginTop: 16,

  },

  cleanButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  section: {

    marginTop: 24,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    marginBottom: 8,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeAllText: {

    color: '#2196F3',

  },

  appList: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingHorizontal: 16,

  },

  appItem: {

    alignItems: 'center',

  },

  appIcon: {

    width: 48,

    height: 48,

    borderRadius: 8,

  },

  appName: {

    marginTop: 4,

    fontSize: 12,

  },

  appSize: {

    fontSize: 12,

    color: '#757575',

  },

  uninstallText: {

    color: '#2196F3',

    textAlign: 'center',

    marginTop: 8,

  },

  fileItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    marginBottom: 8,

  },

  fileIcon: {

    width: 40,

    height: 40,

    borderRadius: 4,

    marginRight: 16,

  },

  fileInfo: {

    flex: 1,

  },

  fileName: {

    fontSize: 16,

  },

  fileSize: {

    fontSize: 14,

    color: '#757575',

  },

  reviewButton: {

    backgroundColor: '#E0E0E0',

    borderRadius: 8,

    padding: 16,

    alignItems: 'center',

    marginHorizontal: 16,

    marginTop: 24,

    marginBottom: 80,

  },

  reviewButtonText: {

    color: '#000',

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 8,

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    backgroundColor: '#fff',

  },

  tabItem: {

    alignItems: 'center',

  },

});



export default CleanerScreen;