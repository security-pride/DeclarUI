import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const { width } = Dimensions.get('window');



const CleanerScreen = () => {

  const [usedStorage, setUsedStorage] = useState(66);

  const totalStorage = 128;



  const UnusedApp = ({ icon, name, size }) => (

    <View style={styles.unusedApp}>

      <Image source={require('../assets/snack-icon.png')} style={styles.appIcon} />

      <Text style={styles.appName}>{name}</Text>

      <Text style={styles.appSize}>{size}</Text>

    </View>

  );



  const DuplicateFile = ({ name, size }) => (

    <View style={styles.duplicateFile}>

      <Icon name="insert-drive-file" size={24} color="#A0A0A0" />

      <Text style={styles.fileName}>{name}</Text>

      <Text style={styles.fileSize}>{size}</Text>

    </View>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerText}>Cleaner</Text>

      </View>



      <View style={styles.storageBar}>

        <View style={[styles.usedStorage, { width: `${usedStorage}%` }]} />

      </View>



      <View style={styles.storageInfo}>

        <Text style={styles.usedText}>Used</Text>

        <Text style={styles.storageText}>{usedStorage}% of {totalStorage} GB</Text>

      </View>



      <TouchableOpacity style={styles.cleanButton}>

        <Text style={styles.cleanButtonText}>Clean Junk files</Text>

      </TouchableOpacity>



      <View style={styles.section}>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>Unused Apps</Text>

          <TouchableOpacity>

            <Text style={styles.seeAllText}>See All</Text>

          </TouchableOpacity>

        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          <UnusedApp icon="waze" name="Waze" size="1.2 GB" />

          <UnusedApp icon="linkedin" name="LinkedIn" size="1.2 GB" />

          <UnusedApp icon="adobe" name="Adobe.." size="1.2 GB" />

          <UnusedApp icon="facebook" name="Facebook" size="1.2 GB" />

        </ScrollView>

      </View>



      <TouchableOpacity style={styles.uninstallButton}>

        <Text style={styles.uninstallButtonText}>Uninstall Apps (4.7 GB)</Text>

      </TouchableOpacity>



      <View style={styles.section}>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>Duplicate files</Text>

          <TouchableOpacity>

            <Text style={styles.seeAllText}>See All</Text>

          </TouchableOpacity>

        </View>

        <DuplicateFile name="DSC2021084133.jpg" size="2 MB" />

        <DuplicateFile name="RKAKL2022.xlsx" size="2 MB" />

      </View>



      <TouchableOpacity style={styles.reviewButton}>

        <Text style={styles.reviewButtonText}>Review files (1.2 GB)</Text>

      </TouchableOpacity>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="home" size={24} color="#A0A0A0" />

          <Text style={styles.tabLabel}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="folder" size={24} color="#A0A0A0" />

          <Text style={styles.tabLabel}>Files</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="cloud" size={24} color="#A0A0A0" />

          <Text style={styles.tabLabel}>Cloud</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="cleaning-services" size={24} color="#FF6C00" />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Clean</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    paddingTop: 40,

    paddingBottom: 10,

    paddingHorizontal: 20,

    backgroundColor: '#FF6C00',

  },

  headerText: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#FFFFFF',

  },

  storageBar: {

    height: 10,

    backgroundColor: '#E0E0E0',

    marginHorizontal: 20,

    marginTop: 20,

    borderRadius: 5,

    overflow: 'hidden',

  },

  usedStorage: {

    height: '100%',

    backgroundColor: '#FF6C00',

  },

  storageInfo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginHorizontal: 20,

    marginTop: 10,

  },

  usedText: {

    color: '#A0A0A0',

  },

  storageText: {

    color: '#A0A0A0',

  },

  cleanButton: {

    backgroundColor: '#FF6C00',

    paddingVertical: 15,

    marginHorizontal: 20,

    marginTop: 20,

    borderRadius: 10,

    alignItems: 'center',

  },

  cleanButtonText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

  section: {

    marginTop: 20,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginHorizontal: 20,

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeAllText: {

    color: '#FF6C00',

  },

  unusedApp: {

    alignItems: 'center',

    marginHorizontal: 10,

    width: 80,

  },

  appIcon: {

    width: 50,

    height: 50,

    borderRadius: 10,

  },

  appName: {

    marginTop: 5,

    fontSize: 12,

  },

  appSize: {

    fontSize: 10,

    color: '#A0A0A0',

  },

  uninstallButton: {

    backgroundColor: '#F0F0F0',

    paddingVertical: 15,

    marginHorizontal: 20,

    marginTop: 20,

    borderRadius: 10,

    alignItems: 'center',

  },

  uninstallButtonText: {

    color: '#FF6C00',

    fontWeight: 'bold',

  },

  duplicateFile: {

    flexDirection: 'row',

    alignItems: 'center',

    marginHorizontal: 20,

    marginVertical: 5,

  },

  fileName: {

    flex: 1,

    marginLeft: 10,

  },

  fileSize: {

    color: '#A0A0A0',

  },

  reviewButton: {

    backgroundColor: '#F0F0F0',

    paddingVertical: 15,

    marginHorizontal: 20,

    marginTop: 20,

    marginBottom: 80,

    borderRadius: 10,

    alignItems: 'center',

  },

  reviewButtonText: {

    color: '#FF6C00',

    fontWeight: 'bold',

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

    marginTop: 5,

    color: '#A0A0A0',

  },

  activeTabLabel: {

    color: '#FF6C00',

  },

});



export default CleanerScreen;