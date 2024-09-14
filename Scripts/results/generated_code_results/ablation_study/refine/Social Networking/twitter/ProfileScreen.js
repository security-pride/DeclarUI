import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Pressable, StatusBar } from 'react-native';

import { Ionicons, Feather, MaterialCommunityIcons } from 'react-native-vector-icons';



const ProfileScreen = ({ navigation }) => {

  const [activeTab, setActiveTab] = useState('Tweets');



  const tabs = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];



  return (

    <View style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Ionicons name="arrow-back" size={24} color="#fff" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Digital Goodies Team</Text>

      </View>

      <ScrollView>

        <View style={styles.profileHeader}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

          <TouchableOpacity style={styles.editProfileButton}>

            <Text style={styles.editProfileText}>Edit profile</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.profileInfo}>

          <Text style={styles.profileName}>Pixsellz</Text>

          <Text style={styles.profileHandle}>@pixsellz</Text>

          <Text style={styles.profileBio}>Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations</Text>

          <View style={styles.profileMetadata}>

            <Feather name="link" size={16} color="#657786" />

            <Text style={styles.profileLink}>pixsellz.io</Text>

            <Feather name="calendar" size={16} color="#657786" style={styles.metadataIcon} />

            <Text style={styles.profileJoinDate}>Joined September 2018</Text>

          </View>

          <View style={styles.followInfo}>

            <Text style={styles.followText}><Text style={styles.followCount}>217</Text> Following</Text>

            <Text style={styles.followText}><Text style={styles.followCount}>118</Text> Followers</Text>

          </View>

        </View>

        <View style={styles.tabContainer}>

          {tabs.map((tab) => (

            <TouchableOpacity

              key={tab}

              style={[styles.tab, activeTab === tab && styles.activeTab]}

              onPress={() => setActiveTab(tab)}

            >

              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>

            </TouchableOpacity>

          ))}

        </View>

        <View style={styles.tweetContainer}>

          <View style={styles.tweetHeader}>

            <Ionicons name="ios-pin" size={16} color="#1DA1F2" />

            <Text style={styles.pinnedText}>Pinned Tweet</Text>

          </View>

          <View style={styles.tweet}>

            <Image source={require('../assets/snack-icon.png')} style={styles.tweetProfileImage} />

            <View style={styles.tweetContent}>

              <View style={styles.tweetUserInfo}>

                <Text style={styles.tweetUserName}>Pixsellz</Text>

                <Text style={styles.tweetUserHandle}>@pixsellz</Text>

                <Text style={styles.tweetDate}>• 7/31/19</Text>

              </View>

              <Text style={styles.tweetText}>Scheme Constructor - your ultimate prototyping kit for all UX web and mobileapp design!</Text>

              <Text style={styles.tweetLink}>constructor.pixsellz.io</Text>

              <Text style={styles.tweetHashtags}>#prototyping #wireframe #uiux #ux</Text>

              <View style={styles.tweetMedia}>

                <Image source={require('../assets/snack-icon.png')} style={styles.tweetImage} />

                <View style={styles.playButton}>

                  <Ionicons name="play" size={24} color="#fff" />

                </View>

              </View>

              <Text style={styles.viewCount}>109 views</Text>

              <View style={styles.tweetActions}>

                <Pressable style={styles.actionButton}>

                  <Feather name="message-circle" size={16} color="#657786" />

                  <Text style={styles.actionText}>2</Text>

                </Pressable>

                <Pressable style={styles.actionButton}>

                  <Feather name="repeat" size={16} color="#657786" />

                  <Text style={styles.actionText}>2</Text>

                </Pressable>

                <Pressable style={styles.actionButton}>

                  <Feather name="heart" size={16} color="#657786" />

                  <Text style={styles.actionText}>15</Text>

                </Pressable>

                <Pressable style={styles.actionButton}>

                  <Feather name="share" size={16} color="#657786" />

                </Pressable>

              </View>

            </View>

          </View>

        </View>

      </ScrollView>

      <View style={styles.footer}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Ionicons name="home-outline" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Ionicons name="search-outline" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Ionicons name="notifications-outline" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Ionicons name="mail-outline" size={24} color="#657786" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#1DA1F2',

  },

  backButton: {

    padding: 5,

  },

  headerTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 20,

  },

  profileHeader: {

    padding: 15,

  },

  profileImage: {

    width: 75,

    height: 75,

    borderRadius: 37.5,

  },

  editProfileButton: {

    position: 'absolute',

    right: 15,

    top: 15,

    borderWidth: 1,

    borderColor: '#1DA1F2',

    borderRadius: 20,

    paddingHorizontal: 15,

    paddingVertical: 5,

  },

  editProfileText: {

    color: '#1DA1F2',

    fontWeight: 'bold',

  },

  profileInfo: {

    padding: 15,

  },

  profileName: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  profileHandle: {

    color: '#657786',

    marginBottom: 10,

  },

  profileBio: {

    marginBottom: 10,

  },

  profileMetadata: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  profileLink: {

    color: '#1DA1F2',

    marginLeft: 5,

  },

  metadataIcon: {

    marginLeft: 15,

  },

  profileJoinDate: {

    color: '#657786',

    marginLeft: 5,

  },

  followInfo: {

    flexDirection: 'row',

  },

  followText: {

    marginRight: 20,

  },

  followCount: {

    fontWeight: 'bold',

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#E1E8ED',

  },

  tab: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 15,

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#1DA1F2',

  },

  tabText: {

    color: '#657786',

  },

  activeTabText: {

    color: '#1DA1F2',

    fontWeight: 'bold',

  },

  tweetContainer: {

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#E1E8ED',

  },

  tweetHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  pinnedText: {

    color: '#657786',

    marginLeft: 5,

  },

  tweet: {

    flexDirection: 'row',

  },

  tweetProfileImage: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 10,

  },

  tweetContent: {

    flex: 1,

  },

  tweetUserInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  tweetUserName: {

    fontWeight: 'bold',

    marginRight: 5,

  },

  tweetUserHandle: {

    color: '#657786',

  },

  tweetDate: {

    color: '#657786',

  },

  tweetText: {

    marginBottom: 5,

  },

  tweetLink: {

    color: '#1DA1F2',

    marginBottom: 5,

  },

  tweetHashtags: {

    color: '#1DA1F2',

    marginBottom: 10,

  },

  tweetMedia: {

    position: 'relative',

    marginBottom: 10,

  },

  tweetImage: {

    width: '100%',

    height: 200,

    borderRadius: 15,

  },

  playButton: {

    position: 'absolute',

    top: '50%',

    left: '50%',

    transform: [{ translateX: -20 }, { translateY: -20 }],

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    justifyContent: 'center',

    alignItems: 'center',

  },

  viewCount: {

    color: '#657786',

    marginBottom: 10,

  },

  tweetActions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  actionButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  actionText: {

    color: '#657786',

    marginLeft: 5,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 10,

    borderTopWidth: 1,

    borderTopColor: '#E1E8ED',

  },

});



export default ProfileScreen;