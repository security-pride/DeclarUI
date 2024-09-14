import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CleanerScreen = () => {

  const navigation = useNavigation();



  const unusedApps = [

    { name: 'Waze', size: '1.2 GB', icon: '../assets/snack-icon.png' },

    { name: 'LinkedIn', size: '1.2 GB', icon: '../assets/snack-icon.png' },

    { name: 'Adobe..', size: '1.2 GB', icon: '../assets/snack-icon.png' },

    { name: 'Facebook', size: '1.2 GB', icon: '../assets/snack-icon.png' },

  ];



  const duplicateFiles = [

    { name: 'DSC20210841.33.jpg', size: '2 MB' },

    { name: 'RKAKL2022.xlsx', size: '2 MB' },

  ];



  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>Cleaner</Text>

      

      <View style={styles.storageBar}>

        <View style={styles.usedStorage} />

      </View>

      

      <View style={styles.storageInfo}>

        <Text style={styles.usedText}>Used</Text>

        <Text style={styles.storageText}>85 GB of 128 GB</Text>

      </View>

      

      <TouchableOpacity style={styles.cleanButton}>

        <Text style={styles.cleanButtonText}>Clean Junk files</Text>

      </TouchableOpacity>

      

      <View style={styles.sectionHeader}>

        <Text style={styles.sectionTitle}>Unused Apps</Text>

        <TouchableOpacity>

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

      

      <TouchableOpacity style={styles.uninstallButton}>

        <Text style={styles.uninstallButtonText}>Uninstall Apps (4.7 GB)</Text>

      </TouchableOpacity>

      

      <View style={styles.sectionHeader}>

        <Text style={styles.sectionTitle}>Duplicate files</Text>

        <TouchableOpacity>

          <Text style={styles.seeAllText}>See All</Text>

        </TouchableOpacity>

      </View>

      

      {duplicateFiles.map((file, index) => (

        <View key={index} style={styles.fileItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />

          <View style={styles.fileInfo}>

            <Text style={styles.fileName}>{file.name}</Text>

            <Text style={styles.fileSize}>{file.size}</Text>

          </View>

        </View>

      ))}

      

      <TouchableOpacity style={styles.reviewButton}>

        <Text style={styles.reviewButtonText}>Review files (1.2 GB)</Text>

      </TouchableOpacity>

      

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('HomePage')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Files')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Files</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('CloudStorage')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Cloud</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>Clean</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    paddingHorizontal: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 60,

    marginBottom: 20,

  },

  storageBar: {

    height: 8,

    backgroundColor: '#E0E0E0',

    borderRadius: 4,

    marginBottom: 10,

  },

  usedStorage: {

    width: '66%',

    height: 8,

    backgroundColor: '#2196F3',

    borderRadius: 4,

  },

  storageInfo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  usedText: {

    color: '#757575',

  },

  storageText: {

    color: '#757575',

  },

  cleanButton: {

    backgroundColor: '#2196F3',

    paddingVertical: 12,

    borderRadius: 8,

    alignItems: 'center',

    marginBottom: 20,

  },

  cleanButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

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

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  appItem: {

    alignItems: 'center',

  },

  appIcon: {

    width: 50,

    height: 50,

    borderRadius: 10,

    marginBottom: 5,

  },

  appName: {

    fontSize: 12,

  },

  appSize: {

    fontSize: 10,

    color: '#757575',

  },

  uninstallButton: {

    backgroundColor: '#F44336',

    paddingVertical: 12,

    borderRadius: 8,

    alignItems: 'center',

    marginBottom: 20,

  },

  uninstallButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  fileItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  fileIcon: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  fileInfo: {

    flex: 1,

  },

  fileName: {

    fontSize: 14,

  },

  fileSize: {

    fontSize: 12,

    color: '#757575',

  },

  reviewButton: {

    backgroundColor: '#4CAF50',

    paddingVertical: 12,

    borderRadius: 8,

    alignItems: 'center',

    marginTop: 10,

    marginBottom: 80,

  },

  reviewButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

    backgroundColor: '#fff',

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

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

    color: '#757575',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#2196F3',

  },

  activeTabText: {

    color: '#2196F3',

  },

});



export default CleanerScreen;