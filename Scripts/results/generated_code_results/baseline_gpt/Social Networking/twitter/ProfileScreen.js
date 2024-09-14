import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={25} color="#fff" />
        <Text style={styles.headerText}>Digital Goodies Team</Text>
        <Icon name="md-more" size={25} color="#fff" />
      </View>
      
      <View style={styles.profileSection}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>Pixsellz</Text>
        <Text style={styles.profileHandle}>@pixsellz</Text>
        <Text style={styles.profileDescription}>Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations</Text>
        <View style={styles.profileDetails}>
          <Text style={styles.detail}><Icon name="link" size={14} /> pixsellz.io</Text>
          <Text style={styles.detail}><Icon name="calendar" size={14} /> Joined September 2018</Text>
        </View>
        <View style={styles.followInfo}>
          <Text style={styles.followCount}>217</Text>
          <Text>Following</Text>
          <Text style={styles.followCount}>118</Text>
          <Text>Followers</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Tweets</Text>
        <Text>Tweets & replies</Text>
        <Text>Media</Text>
        <Text>Likes</Text>
      </View>

      <View style={styles.tweet}>
        <View style={styles.tweetHeader}>
          <Image source={require('../assets/snack-icon.png')} style={styles.tweetImage} />
          <View>
            <Text>Pixsellz</Text>
            <Text>@pixsellz · 7/31/19</Text>
          </View>
        </View>
        <Text>Scheme Constructor - your ultimate prototyping kit for all UX web and mobileapp design! constructor.pixsellz.io</Text>
        <Text style={styles.hashtags}>#prototyping #wireframe #uiux #ux</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.tweetMedia} />
        <Text>109 views</Text>
        <View style={styles.tweetActions}>
          <Icon name="chatbubble-outline" size={20} />
          <Icon name="repeat-outline" size={20} />
          <Icon name="heart-outline" size={20} style={styles.likedIcon} />
          <Icon name="share-outline" size={20} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editProfileButton: {
    padding: 8,
    borderRadius: 4,
    borderColor: '#1DA1F2',
    borderWidth: 1,
    marginLeft: 'auto',
  },
  editProfileText: {
    color: '#1DA1F2',
  },
  profileInfo: {
    paddingHorizontal: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileHandle: {
    color: 'gray',
  },
  profileDescription: {
    marginVertical: 8,
  },
  profileDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  detail: {
    color: '#1DA1F2',
  },
  followInfo: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  followCount: {
    fontWeight: 'bold',
    marginRight: 4,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    paddingVertical: 8,
  },
  activeTab: {
    fontWeight: 'bold',
    borderBottomColor: '#1DA1F2',
    borderBottomWidth: 2,
  },
  tweet: {
    padding: 16,
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tweetImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  hashtags: {
    color: '#1DA1F2',
    marginVertical: 8,
  },
  tweetMedia: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 8,
  },
  tweetActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  likedIcon: {
    color: '#e0245e', // Example of a liked heart icon color
  },
});

export default ProfileScreen;