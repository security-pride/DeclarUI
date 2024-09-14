import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const InboxScreen = () => {

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity style={styles.dropdownButton}>

          <Text style={styles.dropdownText}>All activity</Text>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.dropdownIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.settingsIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.content}>

        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.notificationIcon} />

        <Text style={styles.noNotificationsText}>Notifications aren't available</Text>

        <Text style={styles.subText}>Notifications about your account will appear here</Text>

      </View>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Discover')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>Discover</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.addIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={[styles.tabIcon, styles.activeIcon]} />

          <Text style={[styles.tabText, styles.activeText]}>Inbox</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>Me</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: 'white',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 15,

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#EBEBEB',

  },

  dropdownButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  dropdownText: {

    fontSize: 16,

    fontWeight: 'bold',

    marginRight: 5,

  },

  dropdownIcon: {

    width: 12,

    height: 12,

  },

  settingsIcon: {

    width: 24,

    height: 24,

  },

  content: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: 40,

  },

  notificationIcon: {

    width: 60,

    height: 60,

    marginBottom: 20,

  },

  noNotificationsText: {

    fontSize: 18,

    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 10,

  },

  subText: {

    fontSize: 14,

    color: '#808080',

    textAlign: 'center',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#EBEBEB',

    paddingBottom: 20,

    paddingTop: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#808080',

  },

  addIcon: {

    width: 40,

    height: 30,

  },

  tabText: {

    fontSize: 10,

    color: '#808080',

    marginTop: 3,

  },

  activeTab: {

    // Add any specific styles for the active tab

  },

  activeIcon: {

    tintColor: '#000000',

  },

  activeText: {

    color: '#000000',

  },

});



export default InboxScreen;