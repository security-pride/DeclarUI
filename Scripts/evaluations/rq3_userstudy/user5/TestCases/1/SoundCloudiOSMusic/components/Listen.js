import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ListenScreen = () => {
const navigation = useNavigation();
const renderHeader = () => (
<View style={styles.header}>
<Text style={styles.headerTitle}>Hots now</Text>
</View>
);
const renderFeaturedPlaylists = () => (
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredPlaylists}>
<ImageBackground source={require('../assets/snack-icon.png')} style={styles.playlistImage}>
<View style={styles.playlistOverlay}>
<Text style={styles.playlistTitle}>Summer Vibes</Text>
<Text style={styles.playlistFollowers}>1,300,231 FOLLOWERS</Text>
</View>
</ImageBackground>
<ImageBackground source={require('../assets/snack-icon.png')} style={styles.playlistImage}>
<View style={styles.playlistOverlay}>
<Text style={styles.playlistTitle}>Monday Party</Text>
<Text style={styles.playlistFollowers}>650,231 FOLLOWERS</Text>
</View>
</ImageBackground>
</ScrollView>
);
const renderRecentCategories = () => (
<View style={styles.recentCategories}>
<Text style={styles.sectionTitle}>Recents</Text>
{[
{ name: 'Ranking', isNew: true },
{ name: 'Weekly featured' },
{ name: 'Podcast' },
{ name: 'Live' },
{ name: 'Concerts' },
].map((category, index) => (
<TouchableOpacity key={index} style={styles.categoryItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
<Text style={styles.categoryName}>{category.name}</Text>
{category.isNew && <Text style={styles.newBadge}>New</Text>}
<Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
</TouchableOpacity>
))}
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
<TouchableOpacity onPress={() => navigation.navigate('home')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity>
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
{renderHeader()}
{renderFeaturedPlaylists()}
{renderRecentCategories()}
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
header: {
padding: 15,
},
headerTitle: {
fontSize: 24,
fontWeight: 'bold',
color: '#FF5733',
},
featuredPlaylists: {
paddingLeft: 15,
},
playlistImage: {
width: 150,
height: 150,
marginRight: 10,
justifyContent: 'flex-end',
},
playlistOverlay: {
backgroundColor: 'rgba(0,0,0,0.3)',
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
recentCategories: {
padding: 15,
},
sectionTitle: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
},
categoryItem: {
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 10,
borderBottomWidth: 1,
borderBottomColor: '#eee',
},
categoryIcon: {
width: 24,
height: 24,
marginRight: 10,
},
categoryName: {
flex: 1,
fontSize: 16,
},
newBadge: {
backgroundColor: '#FF5733',
color: '#fff',
paddingHorizontal: 8,
paddingVertical: 2,
borderRadius: 10,
fontSize: 12,
marginRight: 10,
},
arrowIcon: {
width: 16,
height: 16,
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
export default ListenScreen;