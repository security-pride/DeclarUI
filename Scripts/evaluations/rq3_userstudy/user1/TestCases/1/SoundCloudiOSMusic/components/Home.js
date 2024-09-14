import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
const navigation = useNavigation();
const renderHotSection = () => (
<View style={styles.section}>
<Text style={styles.sectionTitle}>Hots now</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
<ImageBackground source={require('../assets/snack-icon.png')} style={styles.playlistImage}>
<Text style={styles.playlistTitle}>Summer Vibes</Text>
<Text style={styles.playlistFollowers}>1,300,231 FOLLOWERS</Text>
</ImageBackground>
<ImageBackground source={require('../assets/snack-icon.png')} style={styles.playlistImage}>
<Text style={styles.playlistTitle}>Rap Zone</Text>
<Text style={styles.playlistFollowers}>650,231 FOLLOWERS</Text>
</ImageBackground>
</ScrollView>
</View>
);
const renderMoodSection = () => (
<View style={styles.section}>
<Text style={styles.sectionTitle}>Mood</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
<ImageBackground source={require('../assets/snack-icon.png')} style={styles.playlistImage}>
<Text style={styles.playlistTitle}>Shower Time</Text>
<Text style={styles.playlistFollowers}>1,300,231 FOLLOWERS</Text>
</ImageBackground>
<ImageBackground source={require('../assets/snack-icon.png')} style={styles.playlistImage}>
<Text style={styles.playlistTitle}>Old School</Text>
<Text style={styles.playlistFollowers}>300,231 FOLLOWERS</Text>
</ImageBackground>
</ScrollView>
</View>
);
const renderPopularArtistsSection = () => (
<View style={styles.section}>
<Text style={styles.sectionTitle}>Popular artists</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
{['Ed Sheeran', 'Rita Ora', 'Eminem', 'Dua Lipa'].map((artist, index) => (
<View key={index} style={styles.artistContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />
<Text style={styles.artistName}>{artist}</Text>
</View>
))}
</ScrollView>
</View>
);
const renderNowPlaying = () => (
<TouchableOpacity style={styles.nowPlaying} onPress={() => navigation.navigate('player')}>
<Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />
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
<TouchableOpacity onPress={() => {}}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('listen')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('search')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('profile')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
</View>
);
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="dark-content" />
<ScrollView>
{renderHotSection()}
{renderMoodSection()}
{renderPopularArtistsSection()}
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
section: {
marginBottom: 20,
},
sectionTitle: {
fontSize: 22,
fontWeight: 'bold',
marginLeft: 15,
marginBottom: 10,
},
playlistImage: {
width: 150,
height: 150,
marginRight: 10,
justifyContent: 'flex-end',
padding: 10,
},
playlistTitle: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
playlistFollowers: {
color: '#fff',
fontSize: 12,
},
artistContainer: {
alignItems: 'center',
marginRight: 15,
},
artistImage: {
width: 80,
height: 80,
borderRadius: 40,
},
artistName: {
marginTop: 5,
fontSize: 14,
},
nowPlaying: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#eee',
},
nowPlayingImage: {
width: 50,
height: 50,
marginRight: 10,
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
export default HomeScreen;