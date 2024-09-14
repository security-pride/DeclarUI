import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
const navigation = useNavigation();
const [isFollowing, setIsFollowing] = useState(false);
const handleFollow = () => {
setIsFollowing(!isFollowing);
};
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>9:41</Text>
<View style={styles.tabs}>
<Text style={styles.tabActive}>For You</Text>
<Text style={styles.tab}>Following</Text>
<Text style={styles.tab}>Live</Text>
</View>
</View>
  <View style={styles.content}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.videoBackground} />
    <View style={styles.overlay}>
      <View style={styles.userInfo}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.avatar} />
        <Text style={styles.username}>RomeoSmile</Text>
        <TouchableOpacity
          style={[styles.followButton, isFollowing && styles.followingButton]}
          onPress={handleFollow}
        >
          <Text style={styles.followButtonText}>{isFollowing ? 'Following' : 'Follow'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla ac a eu eras. Et augue amet id
      </Text>
      <View style={styles.musicInfo}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.musicIcon} />
        <Text style={styles.musicText}>eyes blue like the atlantic</Text>
      </View>
    </View>

    <View style={styles.interactions}>
      <TouchableOpacity style={styles.interactionButton}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.interactionIcon} />
        <Text style={styles.interactionText}>4231</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.interactionButton}
        onPress={() => navigation.navigate('comments')}
      >
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.interactionIcon} />
        <Text style={styles.interactionText}>644</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.navItem}
      onPress={() => navigation.navigate('discover')}
    >
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Discover</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.addButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.addIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Activity</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Profile</Text>
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
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 15,
paddingTop: 5,
},
time: {
color: 'white',
fontSize: 14,
},
tabs: {
flexDirection: 'row',
},
tab: {
color: 'white',
fontSize: 16,
marginLeft: 20,
opacity: 0.7,
},
tabActive: {
color: 'white',
fontSize: 16,
fontWeight: 'bold',
},
content: {
flex: 1,
},
videoBackground: {
...StyleSheet.absoluteFillObject,
},
overlay: {
flex: 1,
justifyContent: 'flex-end',
padding: 20,
},
userInfo: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
avatar: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 10,
},
username: {
color: 'white',
fontSize: 16,
fontWeight: 'bold',
},
followButton: {
backgroundColor: 'red',
paddingHorizontal: 15,
paddingVertical: 5,
borderRadius: 20,
marginLeft: 10,
},
followingButton: {
backgroundColor: 'transparent',
borderWidth: 1,
borderColor: 'white',
},
followButtonText: {
color: 'white',
fontSize: 14,
},
description: {
color: 'white',
fontSize: 14,
marginBottom: 10,
},
musicInfo: {
flexDirection: 'row',
alignItems: 'center',
},
musicIcon: {
width: 20,
height: 20,
marginRight: 5,
},
musicText: {
color: 'white',
fontSize: 14,
},
interactions: {
position: 'absolute',
right: 10,
bottom: 100,
},
interactionButton: {
alignItems: 'center',
marginBottom: 20,
},
interactionIcon: {
width: 30,
height: 30,
},
interactionText: {
color: 'white',
fontSize: 12,
marginTop: 5,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#333',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
color: 'white',
fontSize: 10,
marginTop: 5,
},
addButton: {
backgroundColor: 'red',
width: 44,
height: 30,
borderRadius: 8,
justifyContent: 'center',
alignItems: 'center',
},
addIcon: {
width: 20,
height: 20,
},
});
export default HomeScreen;