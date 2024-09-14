import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
const Profile = ({ navigation }) => {
const [activeTab, setActiveTab] = useState('Tweets');
const renderTabs = () => {
const tabs = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];
return tabs.map((tab) => (
<TouchableOpacity
key={tab}
style={[styles.tab, activeTab === tab && styles.activeTab]}
onPress={() => setActiveTab(tab)}
>
<Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
</TouchableOpacity>
));
};
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Feather name="arrow-left" size={24} color="#fff" />
</TouchableOpacity>
<Text style={styles.headerTitle}>Digital Goodies Team</Text>
<TouchableOpacity style={styles.editButton}>
<Feather name="edit" size={24} color="#fff" />
</TouchableOpacity>
</View>
<ScrollView>
<View style={styles.profileInfo}>
<Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
<TouchableOpacity style={styles.editProfileButton}>
<Text style={styles.editProfileText}>Edit profile</Text>
</TouchableOpacity>
<Text style={styles.username}>Pixsellz</Text>
<Text style={styles.handle}>@pixsellz</Text>
<Text style={styles.bio}>Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations</Text>
<View style={styles.websiteAndJoined}>
<Feather name="link" size={16} color="#1DA1F2" />
<Text style={styles.website}>pixsellz.io</Text>
<Feather name="calendar" size={16} color="#657786" style={styles.calendarIcon} />
<Text style={styles.joinedDate}>Joined September 2018</Text>
</View>
<View style={styles.followInfo}>
<Text style={styles.followText}><Text style={styles.followCount}>217</Text> Following</Text>
<Text style={styles.followText}><Text style={styles.followCount}>118</Text> Followers</Text>
</View>
</View>
<View style={styles.tabContainer}>{renderTabs()}</View>
<View style={styles.pinnedTweet}>
<View style={styles.tweetHeader}>
<AntDesign name="pushpin" size={16} color="#657786" />
<Text style={styles.pinnedText}>Pinned Tweet</Text>
</View>
<View style={styles.tweet}>
<Image source={require('../assets/snack-icon.png')} style={styles.tweetAvatar} />
<View style={styles.tweetContent}>
<View style={styles.tweetUser}>
<Text style={styles.tweetUsername}>Pixsellz</Text>
<Text style={styles.tweetHandle}>@pixsellz</Text>
<Text style={styles.tweetDate}>• 7/31/19</Text>
</View>
<Text style={styles.tweetText}>Scheme Constructor - your ultimate prototyping kit for all UX web and mobileapp design!</Text>
<Text style={styles.tweetLink}>constructor.pixsellz.io</Text>
<Text style={styles.tweetHashtags}>#prototyping #wireframe #uiux #ux</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.tweetImage} />
<View style={styles.tweetStats}>
<Text style={styles.viewCount}>109 views</Text>
</View>
<View style={styles.tweetActions}>
<Pressable style={styles.tweetAction}>
<Feather name="message-circle" size={16} color="#657786" />
<Text style={styles.actionCount}>2</Text>
</Pressable>
<Pressable style={styles.tweetAction}>
<Feather name="repeat" size={16} color="#657786" />
<Text style={styles.actionCount}>2</Text>
</Pressable>
<Pressable style={styles.tweetAction}>
<Feather name="heart" size={16} color="#657786" />
<Text style={styles.actionCount}>15</Text>
</Pressable>
<Pressable style={styles.tweetAction}>
<Feather name="share" size={16} color="#657786" />
</Pressable>
</View>
</View>
</View>
</View>
</ScrollView>
<View style={styles.bottomNav}>
<TouchableOpacity onPress={() => navigation.navigate('Home')}>
<Feather name="home" size={24} color="#657786" />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Trends')}>
<Feather name="search" size={24} color="#657786" />
</TouchableOpacity>
<TouchableOpacity>
<Feather name="bell" size={24} color="#657786" />
</TouchableOpacity>
<TouchableOpacity>
<Feather name="mail" size={24} color="#657786" />
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
justifyContent: 'space-between',
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
},
editButton: {
padding: 5,
},
profileInfo: {
padding: 15,
},
profileImage: {
width: 80,
height: 80,
borderRadius: 40,
marginBottom: 10,
},
editProfileButton: {
alignSelf: 'flex-end',
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
username: {
fontSize: 20,
fontWeight: 'bold',
},
handle: {
fontSize: 15,
color: '#657786',
},
bio: {
marginTop: 10,
},
websiteAndJoined: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 10,
},
website: {
color: '#1DA1F2',
marginLeft: 5,
},
calendarIcon: {
marginLeft: 15,
},
joinedDate: {
color: '#657786',
marginLeft: 5,
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
pinnedTweet: {
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
tweetAvatar: {
width: 50,
height: 50,
borderRadius: 25,
marginRight: 10,
},
tweetContent: {
flex: 1,
},
tweetUser: {
flexDirection: 'row',
alignItems: 'center',
},
tweetUsername: {
fontWeight: 'bold',
marginRight: 5,
},
tweetHandle: {
color: '#657786',
},
tweetDate: {
color: '#657786',
},
tweetText: {
marginTop: 5,
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
tweetAction: {
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
borderTopWidth: 1,
borderTopColor: '#E1E8ED',
paddingVertical: 10,
},
});
export default Profile;