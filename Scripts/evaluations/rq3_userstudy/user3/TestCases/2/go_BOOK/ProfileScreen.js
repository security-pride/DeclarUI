import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();



  const profileOptions = [

    { icon: '👤', title: 'Edit Profile' },

    { icon: '🔔', title: 'Notification' },

    { icon: '💳', title: 'Payment Method' },

    { icon: '🔖', title: 'Bookmarks' },

    { icon: '🔒', title: 'Security' },

    { icon: '⚙️', title: 'Settings' },

  ];



  const renderProfileOption = (option, index) => (

    <TouchableOpacity key={index} style={styles.optionItem} onPress={() => handleOptionPress(option.title)}>

      <View style={styles.optionIconContainer}>

        <Text style={styles.optionIcon}>{option.icon}</Text>

      </View>

      <Text style={styles.optionTitle}>{option.title}</Text>

      <Image source={require('../assets/snack-icon.png')} style={styles.chevronIcon} />

    </TouchableOpacity>

  );



  const handleOptionPress = (optionTitle) => {

    // Navigate to the corresponding screen based on the option title

    console.log(`Navigating to ${optionTitle}`);
    
    navigation.navigate(optionTitle);
  };



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Profile</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.settingsIcon} />

        </TouchableOpacity>

      </View>



      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.profileInfo}>

          <View style={styles.avatarContainer}>

            <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

            <View style={styles.badgeContainer}>

              <Text style={styles.badgeText}>2</Text>

            </View>

          </View>

          <Text style={styles.name}>Mosarraf Hossain</Text>

          <Text style={styles.jobTitle}>Product Designer</Text>

        </View>



        <View style={styles.optionsContainer}>

          {profileOptions.map(renderProfileOption)}

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Notification')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Notification</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Ticket')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Ticket</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('History')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>History</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Setting</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  settingsIcon: {

    width: 24,

    height: 24,

  },

  scrollContent: {

    flexGrow: 1,

  },

  profileInfo: {

    alignItems: 'center',

    marginTop: 20,

    marginBottom: 30,

  },

  avatarContainer: {

    position: 'relative',

  },

  avatar: {

    width: 100,

    height: 100,

    borderRadius: 50,

  },

  badgeContainer: {

    position: 'absolute',

    right: 0,

    bottom: 0,

    backgroundColor: '#007AFF',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  badgeText: {

    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: 'bold',

  },

  name: {

    fontSize: 20,

    fontWeight: 'bold',

    marginTop: 10,

  },

  jobTitle: {

    fontSize: 16,

    color: '#666666',

    marginTop: 5,

  },

  optionsContainer: {

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    marginHorizontal: 16,

  },

  optionItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  optionIconContainer: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#F0F0F0',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 16,

  },

  optionIcon: {

    fontSize: 20,

  },

  optionTitle: {

    flex: 1,

    fontSize: 16,

  },

  chevronIcon: {

    width: 24,

    height: 24,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  tabLabel: {

    fontSize: 12,

    color: '#666666',

  },

  activeTab: {

    // Add styles for active tab if needed

  },

  activeTabLabel: {

    color: '#007AFF',

  },

});



export default ProfileScreen;