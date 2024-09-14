import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use react-native-vector-icons instead of @expo/vector-icons

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Digital Goodies Team</Text>
      </View>
      <View style={styles.profileInfo}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.profileText}>
          <Text style={styles.profileName}>Pixsellz</Text>
          <Text style={styles.profileHandle}>@pixsellz</Text>
          <Text style={styles.profileBio}>
            Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations
          </Text>
          <View style={styles.profileLinkContainer}>
            <Pressable onPress={() => {}}>
              <Text style={styles.profileLink}>pixsellz.io</Text>
            </Pressable>
            <Text style={styles.profileJoinDate}>  Joined September 2018</Text>
          </View>
          <View style={styles.profileStats}>
            <Text style={styles.profileStat}>217 Following</Text>
            <Text style={styles.profileStat}>118 Followers</Text>
          </View>
        </View>
        <Button title="Edit profile" onPress={() => {}} />
      </View>
      <View style={styles.tabs}>
        <Text style={styles.tabSelected}>Tweets</Text>
        <Text style={styles.tab}>Tweets & replies</Text>
        <Text style={styles.tab}>Media</Text>
        <Text style={styles.tab}>Likes</Text>
      </View>
      <View style={styles.tweetContainer}>
        <View style={styles.tweetHeader}>
          <Image source={require('../assets/snack-icon.png')} style={styles.tweetAvatar} />
          <View style={styles.tweetInfo}>
            <Text style={styles.tweetName}>Pixsellz</Text>
            <Text style={styles.tweetHandle}>@pixsellz</Text>
            <Text style={styles.tweetDate}>7/31/19</Text>
          </View>
        </View>
        <Text style={styles.tweetText}>
          Scheme Constructor - your ultimate prototyping kit for all UX web and mobileapp design! constructor.pixsellz.io
        </Text>
        <Text style={styles.tweetTags}>#prototyping #wireframe #uiux #ux</Text>
        <View style={styles.tweetMedia}>
          <Image source={require('../assets/snack-icon.png')} style={styles.tweetImage} />
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play-circle" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.tweetViews}>109 views</Text>
        <View style={styles.tweetActions}>
          <Pressable onPress={() => {}}>
            <Icon name="comment-o" size={20} color="#657786" />
          </Pressable>
          <Pressable onPress={() => {}}>
            <Icon name="retweet" size={20} color="#657786" />
          </Pressable>
          <Pressable onPress={() => {}}>
            <Icon name="heart-o" size={20} color="#657786" />
          </Pressable>
          <Pressable onPress={() => {}}>
            <Icon name="share" size={20} color="#657786" />
          </Pressable>
        </View>
      </View>
      <View style={styles.bottomNavigation}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={25} color="#1DA1F2" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={25} color="#657786" />
        </Pressable>
        <Pressable onPress={() => {}}>
          <Icon name="bell-o" size={25} color="#657786" />
        </Pressable>
        <Pressable onPress={() => {}}>
          <Icon name="envelope-o" size={25} color="#657786" />
        </Pressable>
      </View>
      <TouchableOpacity style={styles.newTweetButton} onPress={() => {}}>
        <Icon name="feather" size={25} color="#fff" />
      </TouchableOpacity>
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
    padding: 15,
    backgroundColor: '#000',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileText: {
    flex: 1,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileHandle: {
    color: '#657786',
  },
  profileBio: {
    marginTop: 5,
  },
  profileLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  profileLink: {
    color: '#1DA1F2',
  },
  profileJoinDate: {
    color: '#657786',
    marginLeft: 10,
  },
  profileStats: {
    flexDirection: 'row',
    marginTop: 5,
  },
  profileStat: {
    marginRight: 15,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E8ED',
  },
  tabSelected: {
    fontWeight: 'bold',
    color: '#1DA1F2',
  },
  tab: {
    color: '#657786',
  },
  tweetContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E8ED',
  },
  tweetHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tweetAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  tweetInfo: {
    flex: 1,
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
    marginBottom: 5,
  },
  tweetTags: {
    color: '#1DA1F2',
    marginBottom: 5,
  },
  tweetMedia: {
    position: 'relative',
    marginBottom: 10,
  },
  tweetImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  playButton: {
    position: 'absolute',
    top: '45%',
    left: '45%',
  },
  tweetViews: {
    color: '#657786',
    marginBottom: 10,
  },
  tweetActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E1E8ED',
  },
  newTweetButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1DA1F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;