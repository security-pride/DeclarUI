import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
const HomeScreen = ({ navigation }) => {
const [activeTab, setActiveTab] = useState('For You');
const [likes, setLikes] = useState(328700);
const [comments, setComments] = useState(578);
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>9:41</Text>
<ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.signalIcon} />
<ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.speakerIcon} />
</View>
  <View style={styles.tabContainer}>
    <TouchableOpacity onPress={() => setActiveTab('Following')}>
      <Text style={[styles.tabText, activeTab === 'Following' && styles.activeTab]}>Following</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setActiveTab('For You')}>
      <Text style={[styles.tabText, activeTab === 'For You' && styles.activeTab]}>For You</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.videoContainer}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.videoBackground} />
    <View style={styles.overlay}>
      <View style={styles.userInfo}>
        <Text style={styles.username}>@craig_love</Text>
        <Text style={styles.caption}>The most satisfying Job #fyp #satisfying #roadmarking</Text>
      </View>
      <View style={styles.musicInfo}>
        <ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.musicDisk} />
        <Text style={styles.musicTitle}>Roddy Roundich - The Rou</Text>
      </View>
    </View>
  </View>

  <View style={styles.sideButtons}>
    <TouchableOpacity style={styles.iconButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.profilePic} />
      <Text style={styles.plusIcon}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton} onPress={() => setLikes(likes + 1)}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
      <Text style={styles.iconText}>{(likes / 1000).toFixed(1)}K</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Comments')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
      <Text style={styles.iconText}>{comments}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Share')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
      <Text style={styles.iconText}>Share</Text>
    </TouchableOpacity>
    <ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.musicDiskSmall} />
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Discover</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.createButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.createIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Inbox')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Inbox</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Me</Text>
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
height: 44,
},
time: {
color: 'white',
fontSize: 14,
},
signalIcon: {
width: 20,
height: 20,
},
speakerIcon: {
width: 20,
height: 20,
},
tabContainer: {
flexDirection: 'row',
justifyContent: 'center',
marginTop: 15,
},
tabText: {
color: 'white',
fontSize: 18,
marginHorizontal: 15,
opacity: 0.7,
},
activeTab: {
opacity: 1,
fontWeight: 'bold',
},
videoContainer: {
flex: 1,
justifyContent: 'flex-end',
},
videoBackground: {
...StyleSheet.absoluteFillObject,
},
overlay: {
padding: 20,
},
userInfo: {
marginBottom: 10,
},
username: {
color: 'white',
fontWeight: 'bold',
fontSize: 16,
},
caption: {
color: 'white',
fontSize: 14,
},
musicInfo: {
flexDirection: 'row',
alignItems: 'center',
},
musicDisk: {
width: 30,
height: 30,
marginRight: 10,
},
musicTitle: {
color: 'white',
fontSize: 14,
},
sideButtons: {
position: 'absolute',
right: 10,
bottom: 100,
alignItems: 'center',
},
iconButton: {
alignItems: 'center',
marginBottom: 20,
},
profilePic: {
width: 50,
height: 50,
borderRadius: 25,
borderWidth: 2,
borderColor: 'white',
},
plusIcon: {
position: 'absolute',
bottom: -10,
backgroundColor: 'red',
borderRadius: 10,
width: 20,
height: 20,
textAlign: 'center',
color: 'white',
},
icon: {
width: 40,
height: 40,
},
iconText: {
color: 'white',
fontSize: 12,
marginTop: 5,
},
musicDiskSmall: {
width: 40,
height: 40,
borderRadius: 20,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
height: 60,
backgroundColor: 'black',
},
navButton: {
alignItems: 'center',
},
navIcon: {
width: 30,
height: 30,
},
navText: {
color: 'white',
fontSize: 10,
},
createButton: {
width: 50,
height: 30,
justifyContent: 'center',
alignItems: 'center',
},
createIcon: {
width: 50,
height: 30,
},
});
export default HomeScreen;