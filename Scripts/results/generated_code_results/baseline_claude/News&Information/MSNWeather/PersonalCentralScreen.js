import React from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const PersonalCentralScreen = () => {

  const navigation = useNavigation();



  const menuItems = [

    { icon: 'bell', title: 'Notifications' },

    { icon: 'settings', title: 'Settings' },

    { icon: 'star', title: 'Interests' },

    { icon: 'history', title: 'History' },

    { icon: 'bookmark', title: 'Bookmarks and saves' },

  ];



  const renderMenuItem = (item, index) => (

    <TouchableOpacity key={index} style={styles.menuItem}>

      <Image source={{ uri: `../assets/snack-icon.png` }} style={styles.menuIcon} />

      <Text style={styles.menuText}>{item.title}</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.backIcon} />

          </TouchableOpacity>

        </View>



        <TouchableOpacity style={styles.signInButton}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.profileIcon} />

          <Text style={styles.signInText}>Tap to sign in</Text>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.chevronIcon} />

        </TouchableOpacity>



        <View style={styles.rewardsCard}>

          <View style={styles.rewardsLeft}>

            <Text style={styles.rewardsTitle}>My Rewards</Text>

            <Text style={styles.rewardsPoints}>0</Text>

          </View>

          <View style={styles.rewardsRight}>

            <Text style={styles.todayPointsText}>Today's points</Text>

            <View style={styles.progressBar}>

              <View style={[styles.progressFill, { width: '0%' }]} />

            </View>

            <Text style={styles.pointsText}>0/30</Text>

          </View>

        </View>



        {menuItems.map(renderMenuItem)}

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Weather')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />

          <Text style={styles.navText}>Weather</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />

          <Text style={styles.navText}>Chat</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />

          <Text style={styles.navText}>Tabs</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Apps')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />

          <Text style={styles.navText}>Apps</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F5',

  },

  header: {

    paddingHorizontal: 15,

    paddingTop: 10,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  signInButton: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    backgroundColor: '#FFFFFF',

    marginTop: 20,

  },

  profileIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 15,

  },

  signInText: {

    flex: 1,

    fontSize: 18,

    fontWeight: 'bold',

  },

  chevronIcon: {

    width: 24,

    height: 24,

  },

  rewardsCard: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    margin: 15,

    padding: 15,

    borderRadius: 10,

  },

  rewardsLeft: {

    flex: 1,

  },

  rewardsTitle: {

    fontSize: 16,

    color: '#666',

  },

  rewardsPoints: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  rewardsRight: {

    flex: 2,

  },

  todayPointsText: {

    fontSize: 14,

    color: '#666',

    marginBottom: 5,

  },

  progressBar: {

    height: 4,

    backgroundColor: '#E0E0E0',

    borderRadius: 2,

    marginBottom: 5,

  },

  progressFill: {

    height: 4,

    backgroundColor: '#4285F4',

    borderRadius: 2,

  },

  pointsText: {

    fontSize: 14,

    color: '#666',

    textAlign: 'right',

  },

  menuItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    backgroundColor: '#FFFFFF',

    marginBottom: 1,

  },

  menuIcon: {

    width: 24,

    height: 24,

    marginRight: 15,

  },

  menuText: {

    fontSize: 16,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    alignItems: 'center',

  },

  navIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  navText: {

    fontSize: 12,

    color: '#666',

  },

});



export default PersonalCentralScreen;