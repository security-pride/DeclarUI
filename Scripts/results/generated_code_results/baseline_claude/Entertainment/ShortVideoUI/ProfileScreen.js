import React from 'react';

import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();



  const profileImages = [

    { id: '1', uri: '../assets/snack-icon.png' },

    { id: '2', uri: '../assets/snack-icon.png' },

    { id: '3', uri: '../assets/snack-icon.png' },

    { id: '4', uri: '../assets/snack-icon.png' },

  ];



  const renderProfileImage = ({ item }) => (

    <Image source={{ uri: item.uri }} style={styles.profileGridImage} />

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity>

            <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.addFriendIcon} />

          </TouchableOpacity>

          <View style={styles.nameContainer}>

            <Text style={styles.name}>Jacob West</Text>

            <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.dropdownIcon} />

          </View>

          <TouchableOpacity>

            <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.menuIcon} />

          </TouchableOpacity>

        </View>



        <View style={styles.profileInfo}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.profileImage} />

          <Text style={styles.username}>@jacob_w</Text>

          <View style={styles.statsContainer}>

            <View style={styles.statItem}>

              <Text style={styles.statNumber}>14</Text>

              <Text style={styles.statLabel}>Following</Text>

            </View>

            <View style={styles.statItem}>

              <Text style={styles.statNumber}>38</Text>

              <Text style={styles.statLabel}>Followers</Text>

            </View>

            <View style={styles.statItem}>

              <Text style={styles.statNumber}>91</Text>

              <Text style={styles.statLabel}>Likes</Text>

            </View>

          </View>

          <View style={styles.buttonContainer}>

            <TouchableOpacity style={styles.editProfileButton}>

              <Text style={styles.editProfileText}>Edit profile</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.bookmarkButton}>

              <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bookmarkIcon} />

            </TouchableOpacity>

          </View>

          <Text style={styles.bioText}>Tap to add bio</Text>

        </View>



        <View style={styles.tabContainer}>

          <TouchableOpacity style={[styles.tab, styles.activeTab]}>

            <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>

            <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          </TouchableOpacity>

        </View>



        <FlatList

          data={profileImages}

          renderItem={renderProfileImage}

          keyExtractor={item => item.id}

          numColumns={3}

          scrollEnabled={false}

        />

      </ScrollView>



      <View style={styles.bottomTabBar}>

        <TouchableOpacity style={styles.tabBarItem} onPress={() => navigation.navigate('Home')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabBarIcon} />

          <Text style={styles.tabBarLabel}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem} onPress={() => navigation.navigate('Discover')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabBarIcon} />

          <Text style={styles.tabBarLabel}>Discover</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.newVideoIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem} onPress={() => navigation.navigate('Inbox')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabBarIcon} />

          <Text style={styles.tabBarLabel}>Inbox</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabBarItem, styles.activeTabBarItem]}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={[styles.tabBarIcon, styles.activeTabBarIcon]} />

          <Text style={[styles.tabBarLabel, styles.activeTabBarLabel]}>Me</Text>

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

  },

  addFriendIcon: {

    width: 24,

    height: 24,

  },

  nameContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  name: {

    fontSize: 18,

    fontWeight: 'bold',

    marginRight: 5,

  },

  dropdownIcon: {

    width: 12,

    height: 12,

  },

  menuIcon: {

    width: 24,

    height: 24,

  },

  profileInfo: {

    alignItems: 'center',

    paddingVertical: 20,

  },

  profileImage: {

    width: 100,

    height: 100,

    borderRadius: 50,

  },

  username: {

    fontSize: 16,

    marginTop: 10,

  },

  statsContainer: {

    flexDirection: 'row',

    marginTop: 20,

  },

  statItem: {

    alignItems: 'center',

    marginHorizontal: 15,

  },

  statNumber: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  statLabel: {

    fontSize: 14,

    color: '#808080',

  },

  buttonContainer: {

    flexDirection: 'row',

    marginTop: 20,

  },

  editProfileButton: {

    borderWidth: 1,

    borderColor: '#e0e0e0',

    borderRadius: 4,

    paddingVertical: 10,

    paddingHorizontal: 30,

    marginRight: 10,

  },

  editProfileText: {

    fontSize: 16,

  },

  bookmarkButton: {

    borderWidth: 1,

    borderColor: '#e0e0e0',

    borderRadius: 4,

    padding: 10,

  },

  bookmarkIcon: {

    width: 20,

    height: 20,

  },

  bioText: {

    color: '#808080',

    marginTop: 15,

  },

  tabContainer: {

    flexDirection: 'row',

    borderTopWidth: 1,

    borderBottomWidth: 1,

    borderColor: '#e0e0e0',

  },

  tab: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 15,

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: 'black',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

  profileGridImage: {

    width: '33.33%',

    aspectRatio: 1,

  },

  bottomTabBar: {

    flexDirection: 'row',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

  },

  tabBarItem: {

    flex: 1,

    alignItems: 'center',

  },

  tabBarIcon: {

    width: 24,

    height: 24,

  },

  newVideoIcon: {

    width: 40,

    height: 30,

  },

  tabBarLabel: {

    fontSize: 10,

    marginTop: 3,

  },

  activeTabBarItem: {

    // Add styles for active tab if needed

  },

  activeTabBarIcon: {

    tintColor: 'black',

  },

  activeTabBarLabel: {

    color: 'black',

  },

});



export default ProfileScreen;