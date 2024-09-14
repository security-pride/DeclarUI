import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import  Ionicons from 'react-native-vector-icons/Ionicons';



const ProfileScreen = ({ navigation }) => {

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Ionicons name="arrow-back" size={24} color="white" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Digital Goodies Team</Text>

      </View>

      

      <ScrollView>

        <View style={styles.profileHeader}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

          <TouchableOpacity style={styles.editButton}>

            <Text style={styles.editButtonText}>Edit profile</Text>

          </TouchableOpacity>

        </View>

        

        <View style={styles.profileInfo}>

          <Text style={styles.profileName}>Pixsellz</Text>

          <Text style={styles.profileHandle}>@pixsellz</Text>

          <Text style={styles.profileBio}>Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations</Text>

          <View style={styles.profileMeta}>

            <View style={styles.metaItem}>

              <Ionicons name="link-outline" size={16} color="#657786" />

              <Text style={styles.metaText}>pixsellz.io</Text>

            </View>

            <View style={styles.metaItem}>

              <Ionicons name="calendar-outline" size={16} color="#657786" />

              <Text style={styles.metaText}>Joined September 2018</Text>

            </View>

          </View>

          <View style={styles.followInfo}>

            <Text style={styles.followText}><Text style={styles.followCount}>217</Text> Following</Text>

            <Text style={styles.followText}><Text style={styles.followCount}>118</Text> Followers</Text>

          </View>

        </View>

        

        <View style={styles.tabContainer}>

          <TouchableOpacity style={[styles.tab, styles.activeTab]}>

            <Text style={[styles.tabText, styles.activeTabText]}>Tweets</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>

            <Text style={styles.tabText}>Tweets & replies</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>

            <Text style={styles.tabText}>Media</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>

            <Text style={styles.tabText}>Likes</Text>

          </TouchableOpacity>

        </View>

        

        <View style={styles.tweetContainer}>

          <View style={styles.pinnedHeader}>

            <Ionicons name="pin" size={16} color="#657786" />

            <Text style={styles.pinnedText}>Pinned Tweet</Text>

          </View>

          <View style={styles.tweetContent}>

            <Image source={require('../assets/snack-icon.png')} style={styles.tweetAvatar} />

            <View style={styles.tweetBody}>

              <View style={styles.tweetHeader}>

                <Text style={styles.tweetName}>Pixsellz</Text>

                <Text style={styles.tweetHandle}>@pixsellz · 7/31/19</Text>

              </View>

              <Text style={styles.tweetText}>Scheme Constructor - your ultimate prototyping kit for all UX web and mobileapp design!</Text>

              <Text style={styles.tweetLink}>constructor.pixsellz.io</Text>

              <Text style={styles.tweetHashtags}>#prototyping #wireframe #uiux #ux</Text>

              <Image source={require('../assets/snack-icon.png')} style={styles.tweetImage} />

              <View style={styles.tweetStats}>

                <Text style={styles.viewCount}>109 views</Text>

                <View style={styles.tweetActions}>

                  <TouchableOpacity style={styles.actionButton}>

                    <Ionicons name="chatbubble-outline" size={16} color="#657786" />

                    <Text style={styles.actionCount}>2</Text>

                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButton}>

                    <Ionicons name="repeat-outline" size={16} color="#657786" />

                    <Text style={styles.actionCount}>2</Text>

                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButton}>

                    <Ionicons name="heart-outline" size={16} color="#657786" />

                    <Text style={styles.actionCount}>15</Text>

                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButton}>

                    <Ionicons name="share-outline" size={16} color="#657786" />

                  </TouchableOpacity>

                </View>

              </View>

            </View>

          </View>

        </View>

      </ScrollView>

      

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Ionicons name="home-outline" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Ionicons name="search-outline" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>

          <Ionicons name="notifications-outline" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>

          <Ionicons name="mail-outline" size={24} color="#657786" />

        </TouchableOpacity>

      </View>

      

      <TouchableOpacity style={styles.floatingButton}>

        <Ionicons name="add" size={30} color="white" />

      </TouchableOpacity>

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

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#1DA1F2',

  },

  headerTitle: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 25,

  },

  profileHeader: {

    padding: 15,

  },

  profileImage: {

    width: 75,

    height: 75,

    borderRadius: 37.5,

    marginBottom: 10,

  },

  editButton: {

    alignSelf: 'flex-end',

    borderWidth: 1,

    borderColor: '#1DA1F2',

    borderRadius: 20,

    paddingVertical: 6,

    paddingHorizontal: 15,

  },

  editButtonText: {

    color: '#1DA1F2',

    fontWeight: 'bold',

  },

  profileInfo: {

    padding: 15,

  },

  profileName: {

    fontSize: 22,

    fontWeight: 'bold',

  },

  profileHandle: {

    fontSize: 16,

    color: '#657786',

  },

  profileBio: {

    marginTop: 10,

    fontSize: 16,

  },

  profileMeta: {

    marginTop: 10,

  },

  metaItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  metaText: {

    marginLeft: 5,

    color: '#657786',

  },

  followInfo: {

    flexDirection: 'row',

    marginTop: 10,

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

    borderBottomWidth: 1,

    borderBottomColor: '#E1E8ED',

    padding: 15,

  },

  pinnedHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  pinnedText: {

    marginLeft: 5,

    color: '#657786',

  },

  tweetContent: {

    flexDirection: 'row',

  },

  tweetAvatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 10,

  },

  tweetBody: {

    flex: 1,

  },

  tweetHeader: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  tweetName: {

    fontWeight: 'bold',

    marginRight: 5,

  },

  tweetHandle: {

    color: '#657786',

  },

  tweetText: {

    marginTop: 5,

    fontSize: 16,

  },

  tweetLink: {

    color: '#1DA1F2',

    marginTop: 5,

  },

  tweetHashtags: {

    color: '#1DA1F2',

    marginTop: 5,

  },

  tweetImage: {

    width: '100%',

    height: 200,

    borderRadius: 15,

    marginTop: 10,

  },

  tweetStats: {

    marginTop: 10,

  },

  viewCount: {

    color: '#657786',

  },

  tweetActions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 10,

  },

  actionButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  actionCount: {

    marginLeft: 5,

    color: '#657786',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    height: 50,

    borderTopWidth: 1,

    borderTopColor: '#E1E8ED',

  },

  floatingButton: {

    position: 'absolute',

    right: 20,

    bottom: 70,

    width: 60,

    height: 60,

    borderRadius: 30,

    backgroundColor: '#1DA1F2',

    justifyContent: 'center',

    alignItems: 'center',

  },

});



export default ProfileScreen;