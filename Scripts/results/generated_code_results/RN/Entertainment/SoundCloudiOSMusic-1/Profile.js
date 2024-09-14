import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {
const navigation = useNavigation();
const [showPremiumBanner, setShowPremiumBanner] = useState(true);
const playlists = [
{ name: 'Summer Vibes', followers: '1,300,231', image: require('../assets/snack-icon.png') },
{ name: 'Rap Zone', followers: '650,231', image: require('../assets/snack-icon.png') },
{ name: 'Music Mix', followers: '50,231', image: require('../assets/snack-icon.png') },
];
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<ScrollView>
{showPremiumBanner && (
<View style={styles.premiumBanner}>
<View>
<Text style={styles.premiumTitle}>SoundCloud Premium</Text>
<Text style={styles.premiumDescription}>Remove boring advs, create infinite playlists and so much</Text>
</View>
<TouchableOpacity onPress={() => setShowPremiumBanner(false)} style={styles.closeButton}>
<Text style={styles.closeButtonText}>×</Text>
</TouchableOpacity>
</View>
)}
    <View style={styles.profileHeader}>
      <View style={styles.profileInfo}>
        <Text style={styles.userName}>Kimberly Evans</Text>
        <TouchableOpacity>
          <Text style={styles.editProfile}>Edit profile</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />
    </View>

    <View style={styles.menuItem}>
      <Text style={styles.menuItemText}>My SoundCloud</Text>
      <View style={styles.freeUserBadge}>
        <Text style={styles.freeUserText}>Free User</Text>
      </View>
    </View>

    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuItemText}>Music quality</Text>
      <Text style={styles.menuItemArrow}>›</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuItemText}>Help</Text>
      <Text style={styles.menuItemArrow}>›</Text>
    </TouchableOpacity>

    <Text style={styles.sectionTitle}>My playlists</Text>

    <ScrollView horizontal style={styles.playlistsContainer}>
      {playlists.map((playlist, index) => (
        <TouchableOpacity key={index} style={styles.playlistItem}>
          <ImageBackground source={playlist.image} style={styles.playlistImage}>
            <Text style={styles.playlistName}>{playlist.name}</Text>
          </ImageBackground>
          <Text style={styles.playlistFollowers}>{playlist.followers} FOLLOWERS</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </ScrollView>

  <View style={styles.nowPlayingBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />
    <View style={styles.nowPlayingInfo}>
      <Text style={styles.nowPlayingTitle}>All Mine</Text>
      <Text style={styles.nowPlayingArtist}>Kanye West</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Player')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Listen')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
premiumBanner: {
backgroundColor: '#FF5500',
padding: 15,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
premiumTitle: {
color: '#FFFFFF',
fontSize: 18,
fontWeight: 'bold',
},
premiumDescription: {
color: '#FFFFFF',
fontSize: 14,
},
closeButton: {
padding: 5,
},
closeButtonText: {
color: '#FFFFFF',
fontSize: 24,
},
profileHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 20,
},
profileInfo: {
flex: 1,
},
userName: {
fontSize: 24,
fontWeight: 'bold',
},
editProfile: {
color: '#FF5500',
marginTop: 5,
},
profilePicture: {
width: 80,
height: 80,
borderRadius: 40,
},
menuItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#EEEEEE',
},
menuItemText: {
fontSize: 16,
},
menuItemArrow: {
fontSize: 20,
color: '#CCCCCC',
},
freeUserBadge: {
backgroundColor: '#FF5500',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
},
freeUserText: {
color: '#FFFFFF',
fontSize: 12,
},
sectionTitle: {
fontSize: 20,
fontWeight: 'bold',
margin: 15,
},
playlistsContainer: {
paddingLeft: 15,
},
playlistItem: {
marginRight: 15,
width: 150,
},
playlistImage: {
width: 150,
height: 150,
justifyContent: 'flex-end',
},
playlistName: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: 'bold',
padding: 10,
backgroundColor: 'rgba(0,0,0,0.3)',
},
playlistFollowers: {
fontSize: 12,
color: '#999999',
marginTop: 5,
},
nowPlayingBar: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
},
nowPlayingImage: {
width: 40,
height: 40,
borderRadius: 20,
},
nowPlayingInfo: {
flex: 1,
marginLeft: 10,
},
nowPlayingTitle: {
fontSize: 16,
fontWeight: 'bold',
},
nowPlayingArtist: {
fontSize: 14,
color: '#999999',
},
playIcon: {
width: 30,
height: 30,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
paddingVertical: 10,
},
navIcon: {
width: 25,
height: 25,
},
});
export default ProfileScreen;