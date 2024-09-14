import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {
const navigation = useNavigation();
const [showPremiumBanner, setShowPremiumBanner] = useState(true);
const renderPremiumBanner = () => {
if (!showPremiumBanner) return null;
return (
<View style={styles.premiumBanner}>
<View>
<Text style={styles.premiumTitle}>SoundCloud Premium</Text>
<Text style={styles.premiumDescription}>Remove boring advs, create infinite playlists and so much</Text>
</View>
<TouchableOpacity onPress={() => setShowPremiumBanner(false)}>
<Text style={styles.closeButton}>×</Text>
</TouchableOpacity>
</View>
);
};
const renderUserInfo = () => (
<View style={styles.userInfo}>
<View style={styles.userDetails}>
<Text style={styles.userName}>Kimberly Evans</Text>
<TouchableOpacity>
<Text style={styles.editProfile}>Edit profile</Text>
</TouchableOpacity>
</View>
<Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />
</View>
);
const renderMenuItem = (title, badge) => (
<TouchableOpacity style={styles.menuItem}>
<Text style={styles.menuItemText}>{title}</Text>
{badge && <Text style={styles.menuItemBadge}>{badge}</Text>}
<Text style={styles.menuItemArrow}>›</Text>
</TouchableOpacity>
);
const renderPlaylists = () => (
<View style={styles.playlistsSection}>
<Text style={styles.sectionTitle}>My playlists</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
{[
{ name: 'Summer Vibes', followers: '1,300,231' },
{ name: 'Rap Zone', followers: '650,231' },
{ name: 'Music Mix', followers: '50,231' },
].map((playlist, index) => (
<View key={index} style={styles.playlistItem}>
<ImageBackground
source={require('../assets/snack-icon.png')}
style={styles.playlistImage}
>
<Text style={styles.playlistName}>{playlist.name}</Text>
</ImageBackground>
<Text style={styles.playlistFollowers}>{playlist.followers} FOLLOWERS</Text>
</View>
))}
</ScrollView>
</View>
);
const renderNowPlaying = () => (
<TouchableOpacity style={styles.nowPlaying} onPress={() => navigation.navigate('player')}>
<View style={styles.nowPlayingInfo}>
<Text style={styles.nowPlayingSong}>All Mine</Text>
<Text style={styles.nowPlayingArtist}>Kanye West</Text>
</View>
<TouchableOpacity style={styles.playButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />
</TouchableOpacity>
</TouchableOpacity>
);
const renderBottomNav = () => (
<View style={styles.bottomNav}>
<TouchableOpacity onPress={() => navigation.navigate('Home')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('listen')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('search')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
</View>
);
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="dark-content" />
<ScrollView>
{renderPremiumBanner()}
{renderUserInfo()}
{renderMenuItem('My SoundCloud', 'Free User')}
{renderMenuItem('Music quality')}
{renderMenuItem('Help')}
{renderPlaylists()}
</ScrollView>
{renderNowPlaying()}
{renderBottomNav()}
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
premiumBanner: {
backgroundColor: '#FF5500',
padding: 15,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
premiumTitle: {
color: '#fff',
fontWeight: 'bold',
fontSize: 18,
},
premiumDescription: {
color: '#fff',
fontSize: 14,
},
closeButton: {
color: '#fff',
fontSize: 24,
fontWeight: 'bold',
},
userInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
},
userDetails: {
flex: 1,
},
userName: {
fontSize: 22,
fontWeight: 'bold',
},
editProfile: {
color: '#FF5500',
marginTop: 5,
},
profilePicture: {
width: 60,
height: 60,
borderRadius: 30,
},
menuItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#eee',
},
menuItemText: {
flex: 1,
fontSize: 16,
},
menuItemBadge: {
backgroundColor: '#FF5500',
color: '#fff',
paddingHorizontal: 8,
paddingVertical: 2,
borderRadius: 10,
fontSize: 12,
marginRight: 10,
},
menuItemArrow: {
fontSize: 20,
color: '#ccc',
},
playlistsSection: {
padding: 15,
},
sectionTitle: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
},
playlistItem: {
width: 150,
marginRight: 15,
},
playlistImage: {
width: 150,
height: 150,
justifyContent: 'flex-end',
},
playlistName: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
padding: 10,
backgroundColor: 'rgba(0,0,0,0.3)',
},
playlistFollowers: {
fontSize: 12,
color: '#666',
marginTop: 5,
},
nowPlaying: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#eee',
},
nowPlayingInfo: {
flex: 1,
},
nowPlayingSong: {
fontSize: 16,
fontWeight: 'bold',
},
nowPlayingArtist: {
fontSize: 14,
color: '#666',
},
playButton: {
padding: 10,
},
playIcon: {
width: 30,
height: 30,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#eee',
},
navIcon: {
width: 25,
height: 25,
},
});
export default ProfileScreen;