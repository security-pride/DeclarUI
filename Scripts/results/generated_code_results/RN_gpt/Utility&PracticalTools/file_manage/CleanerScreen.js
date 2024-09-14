import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CleanerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      </View>
      <Text style={styles.title}>Cleaner</Text>
      
      <View style={styles.progressBar}>
        <View style={styles.usedBar}></View>
        <View style={styles.remainingBar}></View>
      </View>
      
      <View style={styles.storageInfo}>
        <Text style={styles.usedText}>Used</Text>
        <Text style={styles.usedPercentage}>66%</Text>
        <Text style={styles.storageUsed}>85 GB of 128 GB</Text>
        <Text style={styles.storageLabel}>Storage</Text>
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('StorageDetails')}>
        <Text style={styles.cleanJunkText}>Clean Junk files</Text>
      </TouchableOpacity>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Unused Apps</Text>
        <Text style={styles.seeAll}>See All</Text>
        
        <View style={styles.appList}>
          <View style={styles.appIconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.appIcon} />
            <Text style={styles.appLabel}>Waze 1.2 GB</Text>
          </View>
          <View style={styles.appIconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.appIcon} />
            <Text style={styles.appLabel}>LinkedIn 1.2 GB</Text>
          </View>
          <View style={styles.appIconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.appIcon} />
            <Text style={styles.appLabel}>Adobe.. 1.2 GB</Text>
          </View>
          <View style={styles.appIconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.appIcon} />
            <Text style={styles.appLabel}>Facebook 1.2 GB</Text>
          </View>
        </View>
        
        <Text style={styles.uninstallText}>Uninstall Apps (4.7 GB)</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Duplicate files</Text>
        <Text style={styles.seeAll}>See All</Text>
        
        <View style={styles.fileRow}>
          <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
          <Text style={styles.fileName}>DSC2021084133.jpg</Text>
          <Text style={styles.fileSize}>2 MB</Text>
        </View>
        
        <View style={styles.fileRow}>
          <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
          <Text style={styles.fileName}>RKAKL2022.xlsx</Text>
          <Text style={styles.fileSize}>2 MB</Text>
        </View>
        
        <Text style={styles.reviewFilesText}>Review files (1.2 GB)</Text>
      </View>
      
      <View style={styles.bottomNav}>
        <Text style={styles.navText}>Home</Text>
        <Text style={styles.navText}>Files</Text>
        <Text style={styles.navText}>Cloud</Text>
        <Text style={styles.navText}>Clean</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  time: {
    fontSize: 14,
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  progressBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  usedBar: {
    flex: 2,
    backgroundColor: '#000',
  },
  remainingBar: {
    flex: 1,
    backgroundColor: '#bbb',
  },
  storageInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  usedText: {
    fontSize: 14,
    color: '#000',
  },
  usedPercentage: {
    fontSize: 14,
    color: '#000',
  },
  storageUsed: {
    fontSize: 14,
    color: '#000',
  },
  storageLabel: {
    fontSize: 14,
    color: '#000',
  },
  cleanJunkText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: '#000',
  },
  section: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  seeAll: {
    fontSize: 14,
    color: '#007aff',
    textAlign: 'right',
  },
  appList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appIconWrapper: {
    alignItems: 'center',
  },
  appIcon: {
    width: 50,
    height: 50,
  },
  appLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  uninstallText: {
    color: '#666',
    marginVertical: 10,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  fileIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  fileName: {
    flex: 1,
    fontSize: 14,
  },
  fileSize: {
    fontSize: 14,
  },
  reviewFilesText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  navText: {
    fontSize: 14,
    color: '#007aff',
  },
});

export default CleanerScreen;