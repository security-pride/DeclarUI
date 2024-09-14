import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';



const ProfileTab = ({ title, isActive, onPress }) => (

  <TouchableOpacity style={[styles.tab, isActive && styles.activeTab]} onPress={onPress}>

    <Text style={[styles.tabText, isActive && styles.activeTabText]}>{title}</Text>

  </TouchableOpacity>

);



const Tweet = ({ content, date, views, comments, retweets, likes }) => (

  <View style={styles.tweet}>

    <Image source={require('../assets/snack-icon.png')} style={styles.tweetAvatar} />

    <View style={styles.tweetContent}>

      <Text style={styles.tweetHeader}>

        <Text style={styles.tweetName}>Pixsellz</Text>

        <Text style={styles.tweetHandle}> @pixsellz</Text>

        <Text style={styles.tweetDate}> · {date}</Text>

      </Text>

      <Text style={styles.tweetText}>{content}</Text>

      <View style={styles.tweetStats}>

        <Text style={styles.tweetStat}>{views} views</Text>

        <Icon name="message-circle" size={16} color="#657786" />

        <Text style={styles.tweetStat}>{comments}</Text>

        <Icon name="repeat" size={16} color="#657786" />

        <Text style={styles.tweetStat}>{retweets}</Text>

        <Icon name="heart" size={16} color="#657786" />

        <Text style={styles.tweetStat}>{likes}</Text>

        <Icon name="share" size={16} color="#657786" />

      </View>

    </View>

  </View>

);



const ProfileScreen = ({ navigation }) => {

  const [activeTab, setActiveTab] = useState('Tweets');

  const profileInfo = {

    name: 'Pixsellz',

    handle: '@pixsellz',

    bio: 'Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations',

    website: 'pixsellz.io',

    joinDate: 'Joined September 2018',

    followingCount: 217,

    followerCount: 118,

  };



  const tabs = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];



  const pinnedTweet = {

    content: 'Scheme Constructor - your ultimate prototyping kit for all UX web and mobileapp design!',

    date: '7/31/19',

    views: 109,

    comments: 2,

    retweets: 2,

    likes: 15,

  };



  return (

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Icon name="arrow-left" size={24} color="#fff" />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>Digital Goodies Team</Text>

        </View>

        <View style={styles.profileInfo}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

          <TouchableOpacity style={styles.editButton}>

            <Text style={styles.editButtonText}>Edit profile</Text>

          </TouchableOpacity>

          <Text style={styles.profileName}>{profileInfo.name}</Text>

          <Text style={styles.profileHandle}>{profileInfo.handle}</Text>

          <Text style={styles.profileBio}>{profileInfo.bio}</Text>

          <View style={styles.profileDetails}>

            <Icon name="link" size={16} color="#1DA1F2" />

            <Text style={styles.profileWebsite}>{profileInfo.website}</Text>

            <Icon name="calendar" size={16} color="#657786" />

            <Text style={styles.profileJoinDate}>{profileInfo.joinDate}</Text>

          </View>

          <View style={styles.followInfo}>

            <Text style={styles.followText}>

              <Text style={styles.followCount}>{profileInfo.followingCount}</Text> Following

            </Text>

            <Text style={styles.followText}>

              <Text style={styles.followCount}>{profileInfo.followerCount}</Text> Followers

            </Text>

          </View>

        </View>

        <View style={styles.tabContainer}>

          {tabs.map((tab) => (

            <ProfileTab

              key={tab}

              title={tab}

              isActive={activeTab === tab}

              onPress={() => setActiveTab(tab)}

            />

          ))}

        </View>

        <View style={styles.pinnedTweetContainer}>

          <Text style={styles.pinnedTweetHeader}>

            <Icon name="pin" size={16} color="#657786" /> Pinned Tweet

          </Text>

          <Tweet {...pinnedTweet} />

        </View>

      </ScrollView>

      <View style={styles.bottomNavigation}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Icon name="search" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="bell" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="mail" size={24} color="#657786" />

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

    padding: 16,

    backgroundColor: '#1DA1F2',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#fff',

    marginLeft: 16,

  },

  profileInfo: {

    padding: 16,

  },

  profileImage: {

    width: 70,

    height: 70,

    borderRadius: 35,

    marginBottom: 12,

  },

  editButton: {

    position: 'absolute',

    top: 16,

    right: 16,

    borderWidth: 1,

    borderColor: '#1DA1F2',

    borderRadius: 20,

    paddingHorizontal: 16,

    paddingVertical: 8,

  },

  editButtonText: {

    color: '#1DA1F2',

    fontWeight: 'bold',

  },

  profileName: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  profileHandle: {

    fontSize: 16,

    color: '#657786',

  },

  profileBio: {

    marginTop: 12,

    fontSize: 16,

  },

  profileDetails: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 12,

  },

  profileWebsite: {

    marginLeft: 4,

    marginRight: 16,

    color: '#1DA1F2',

  },

  profileJoinDate: {

    marginLeft: 4,

    color: '#657786',

  },

  followInfo: {

    flexDirection: 'row',

    marginTop: 12,

  },

  followText: {

    marginRight: 20,

    fontSize: 14,

    color: '#657786',

  },

  followCount: {

    fontWeight: 'bold',

    color: '#14171A',

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#E1E8ED',

  },

  tab: {

    flex: 1,

    paddingVertical: 16,

    alignItems: 'center',

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

  pinnedTweetContainer: {

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E1E8ED',

  },

  pinnedTweetHeader: {

    fontSize: 14,

    color: '#657786',

    marginBottom: 8,

  },

  tweet: {

    flexDirection: 'row',

    paddingVertical: 12,

  },

  tweetAvatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 12,

  },

  tweetContent: {

    flex: 1,

  },

  tweetHeader: {

    fontSize: 14,

    marginBottom: 4,

  },

  tweetName: {

    fontWeight: 'bold',

  },

  tweetHandle: {

    color: '#657786',

  },

  tweetDate: {

    color: '#657786',

  },

  tweetText: {

    fontSize: 16,

    marginBottom: 8,

  },

  tweetStats: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  tweetStat: {

    marginRight: 16,

    fontSize: 14,

    color: '#657786',

  },

  bottomNavigation: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#E1E8ED',

    paddingVertical: 10,

  },

});



export default ProfileScreen;