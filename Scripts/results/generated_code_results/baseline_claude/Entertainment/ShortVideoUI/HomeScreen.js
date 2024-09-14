import React from 'react';

import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.header}>

        <Text style={styles.headerText}>Following</Text>

        <Text style={[styles.headerText, styles.activeTab]}>For You</Text>

      </View>

      <View style={styles.content}>

        <Image

          source={{ uri: '../assets/snack-icon.png' }}

          style={styles.mainImage}

        />

        <View style={styles.overlay}>

          <View style={styles.rightButtons}>

            <TouchableOpacity style={styles.iconButton}>

              <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.profileImage} />

              <View style={styles.addButton}>

                <Text style={styles.addButtonText}>+</Text>

              </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>

              <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />

              <Text style={styles.iconText}>328.7K</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Comments')}>

              <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />

              <Text style={styles.iconText}>578</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Share')}>

              <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />

              <Text style={styles.iconText}>Share</Text>

            </TouchableOpacity>

          </View>

          <View style={styles.bottomOverlay}>

            <Text style={styles.username}>@craig_love</Text>

            <Text style={styles.description}>The most satisfying Job #fyp #satisfying #roadmarking</Text>

            <View style={styles.musicInfo}>

              <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.musicIcon} />

              <Text style={styles.musicText}>Roddy Roundich - The Rou</Text>

            </View>

          </View>

        </View>

      </View>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Discover')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>Discover</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Inbox')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>Inbox</Text>

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

    backgroundColor: 'black',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'center',

    paddingVertical: 10,

  },

  headerText: {

    color: '#808080',

    fontSize: 16,

    fontWeight: 'bold',

    marginHorizontal: 15,

  },

  activeTab: {

    color: 'white',

  },

  content: {

    flex: 1,

  },

  mainImage: {

    flex: 1,

    resizeMode: 'cover',

  },

  overlay: {

    ...StyleSheet.absoluteFillObject,

    justifyContent: 'space-between',

  },

  rightButtons: {

    position: 'absolute',

    right: 10,

    bottom: 100,

    alignItems: 'center',

  },

  iconButton: {

    alignItems: 'center',

    marginBottom: 20,

  },

  profileImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

    borderWidth: 2,

    borderColor: 'white',

  },

  addButton: {

    position: 'absolute',

    bottom: -10,

    backgroundColor: '#FF4057',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  addButtonText: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

  icon: {

    width: 30,

    height: 30,

    tintColor: 'white',

  },

  iconText: {

    color: 'white',

    marginTop: 5,

  },

  bottomOverlay: {

    padding: 20,

  },

  username: {

    color: 'white',

    fontWeight: 'bold',

    fontSize: 16,

  },

  description: {

    color: 'white',

    marginTop: 5,

  },

  musicInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 10,

  },

  musicIcon: {

    width: 15,

    height: 15,

    marginRight: 5,

  },

  musicText: {

    color: 'white',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    borderTopWidth: 0.5,

    borderTopColor: '#333',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: 'white',

  },

  tabText: {

    color: 'white',

    fontSize: 10,

    marginTop: 3,

  },

});



export default HomeScreen;