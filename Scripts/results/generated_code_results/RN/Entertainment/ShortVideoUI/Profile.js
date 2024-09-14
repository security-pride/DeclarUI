import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
const ProfileScreen = ({ navigation }) => {
const [isGridView, setIsGridView] = useState(true);
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="dark-content" />
<ScrollView>
<View style={styles.header}>
<TouchableOpacity>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.addFriendIcon} />
</TouchableOpacity>
<Text style={styles.username}>Jacob West</Text>
<TouchableOpacity>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.settingsIcon} />
</TouchableOpacity>
</View>
    <View style={styles.profileInfo}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.profilePicture} />
      <Text style={styles.handle}>@jacob_w</Text>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>14</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>38</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
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
      <TouchableOpacity>
        <Text style={styles.addBioText}>Tap to add bio</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.contentToggle}>
      <TouchableOpacity onPress={() => setIsGridView(true)}>
        <Image
          source={{ uri: '../assets/snack-icon.png' }}
          style={[styles.toggleIcon, isGridView && styles.activeToggle]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsGridView(false)}>
        <Image
          source={{ uri: '../assets/snack-icon.png' }}
          style={[styles.toggleIcon, !isGridView && styles.activeToggle]}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.postsContainer}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.postThumbnail} />
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.postThumbnail} />
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.postThumbnail} />
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.postThumbnail} />
      <TouchableOpacity style={styles.createNewPost}>
        <Text style={styles.createNewPostText}>Tap to create a new video</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.createButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.createIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Inbox')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={[styles.navIcon, styles.activeNavIcon]} />
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
padding: 15,
},
addFriendIcon: {
width: 24,
height: 24,
},
username: {
fontSize: 18,
fontWeight: 'bold',
},
settingsIcon: {
width: 24,
height: 24,
},
profileInfo: {
alignItems: 'center',
marginTop: 20,
},
profilePicture: {
width: 100,
height: 100,
borderRadius: 50,
},
handle: {
fontSize: 16,
marginTop: 10,
},
statsContainer: {
flexDirection: 'row',
marginTop: 20,
},
stat: {
alignItems: 'center',
marginHorizontal: 20,
},
statNumber: {
fontSize: 18,
fontWeight: 'bold',
},
statLabel: {
fontSize: 14,
color: 'gray',
},
buttonContainer: {
flexDirection: 'row',
marginTop: 20,
},
editProfileButton: {
borderWidth: 1,
borderColor: 'lightgray',
borderRadius: 4,
paddingVertical: 8,
paddingHorizontal: 40,
marginRight: 10,
},
editProfileText: {
fontWeight: 'bold',
},
bookmarkButton: {
borderWidth: 1,
borderColor: 'lightgray',
borderRadius: 4,
padding: 8,
},
bookmarkIcon: {
width: 20,
height: 20,
},
addBioText: {
color: 'gray',
marginTop: 15,
},
contentToggle: {
flexDirection: 'row',
justifyContent: 'center',
marginTop: 20,
borderTopWidth: 1,
borderTopColor: 'lightgray',
paddingTop: 15,
},
toggleIcon: {
width: 30,
height: 30,
marginHorizontal: 15,
},
activeToggle: {
tintColor: 'black',
},
postsContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
padding: 1,
},
postThumbnail: {
width: '33%',
aspectRatio: 1,
marginBottom: 2,
},
createNewPost: {
width: '33%',
aspectRatio: 1,
backgroundColor: 'lightgray',
justifyContent: 'center',
alignItems: 'center',
},
createNewPostText: {
textAlign: 'center',
padding: 10,
color: 'black',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: 'lightgray',
paddingVertical: 10,
},
navIcon: {
width: 30,
height: 30,
},
createButton: {
backgroundColor: '#ee1d52',
width: 45,
height: 30,
borderRadius: 8,
justifyContent: 'center',
alignItems: 'center',
},
createIcon: {
width: 20,
height: 20,
},
activeNavIcon: {
tintColor: '#ee1d52',
},
});
export default ProfileScreen;