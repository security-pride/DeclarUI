import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('Gully Boy');
const songs = [
{ id: '1', title: 'Gully Boy', subtitle: 'Song • Gully Boy', image: require('../assets/snack-icon.png') },
{ id: '2', title: 'Gully Gully Mein Gully Boy', subtitle: 'Song • Gully Gully Mein Gully boy', image: require('../assets/snack-icon.png') },
{ id: '3', title: 'Mere Gully Mein', subtitle: 'Song • Mere Gully Mein', image: require('../assets/snack-icon.png') },
{ id: '4', title: 'Ashli Hip Hip', subtitle: 'Album, 2019 • Gully Boy', image: require('../assets/snack-icon.png') },
{ id: '5', title: 'Apna Time Aayega', subtitle: 'Album, 2019 • Gully Boy', image: require('../assets/snack-icon.png') },
{ id: '6', title: 'Doori', subtitle: 'Album, 2019 • Gully Boy', image: require('../assets/snack-icon.png') },
];
const albums = [
{ id: '1', title: 'Gully Boy 2', artist: 'Various Artists', image: require('../assets/snack-icon.png') },
{ id: '2', title: 'Gully Boy Unlimi...', artist: 'Various Artists', image: require('../assets/snack-icon.png') },
{ id: '3', title: 'Hip Gully Boy', artist: 'Various Artists', image: require('../assets/snack-icon.png') },
];
const artists = [
{ id: '1', name: 'Justin Bieber', image: require('../assets/snack-icon.png') },
{ id: '2', name: 'Michael Jackson', image: require('../assets/snack-icon.png') },
{ id: '3', name: 'Sam Smith', image: require('../assets/snack-icon.png') },
];
const renderSongItem = ({ item }) => (
<TouchableOpacity style={styles.songItem} onPress={() => navigation.navigate('NowPlaying', { song: item })}>
<Image source={item.image} style={styles.songImage} />
<View style={styles.songInfo}>
<Text style={styles.songTitle}>{item.title}</Text>
<Text style={styles.songSubtitle}>{item.subtitle}</Text>
</View>
<TouchableOpacity style={styles.moreButton}>
<Text style={styles.moreButtonText}>...</Text>
</TouchableOpacity>
</TouchableOpacity>
);
const renderAlbumItem = ({ item }) => (
<TouchableOpacity style={styles.albumItem}>
<Image source={item.image} style={styles.albumImage} />
<Text style={styles.albumTitle}>{item.title}</Text>
<Text style={styles.albumArtist}>{item.artist}</Text>
</TouchableOpacity>
);
const renderArtistItem = ({ item }) => (
<TouchableOpacity style={styles.artistItem}>
<Image source={item.image} style={styles.artistImage} />
<Text style={styles.artistName}>{item.name}</Text>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<Text style={styles.header}>Search</Text>
<View style={styles.searchBar}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
<TextInput style={styles.searchInput} value={searchQuery} onChangeText={setSearchQuery} placeholder="Search for songs, artists, albums..." />
</View>
<FlatList
ListHeaderComponent={
<>
<View style={styles.section}>
<Text style={styles.sectionTitle}>Most Popular</Text>
{renderSongItem({ item: songs[0] })}
</View>
<View style={styles.section}>
<View style={styles.sectionHeader}>
<Text style={styles.sectionTitle}>Songs</Text>
<TouchableOpacity>
<Text style={styles.showAllButton}>Show All</Text>
</TouchableOpacity>
</View>
{songs.slice(0, 3).map(song => renderSongItem({ item: song }))}
</View>
<View style={styles.section}>
<Text style={styles.sectionTitle}>Albums</Text>
<FlatList
horizontal
data={albums}
renderItem={renderAlbumItem}
keyExtractor={item => item.id}
showsHorizontalScrollIndicator={false}
/>
</View>
<View style={styles.section}>
<Text style={styles.sectionTitle}>Artists</Text>
<FlatList
horizontal
data={artists}
renderItem={renderArtistItem}
keyExtractor={item => item.id}
showsHorizontalScrollIndicator={false}
/>
</View>
</>
}
data={[]}
renderItem={null}
/>
<View style={styles.nowPlayingBar}>
<Image source={require('../assets/snack-icon.png')} style={styles.smallAlbumCover} />
<View style={styles.nowPlayingInfo}>
<Text style={styles.nowPlayingTitle}>Illegal Weapon 2.0</Text>
<Text style={styles.nowPlayingArtist}>Street Dancer 3D</Text>
</View>
<TouchableOpacity style={styles.playPauseButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.playPauseIcon} />
</TouchableOpacity>
<TouchableOpacity style={styles.heartButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
</TouchableOpacity>
</View>
<View style={styles.tabBar}>
<TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Explore')}>
<Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
<Text style={styles.tabLabel}>Home</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Trending')}>
<Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
<Text style={styles.tabLabel}>Trending</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
<Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />
<Text style={[styles.tabLabel, styles.activeTabLabel]}>Search</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.tabItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
<Text style={styles.tabLabel}>Library</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.tabItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
<Text style={styles.tabLabel}>Settings</Text>
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
fontSize: 34,
fontWeight: 'bold',
marginTop: 60,
marginLeft: 20,
marginBottom: 20,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f0f0f0',
borderRadius: 10,
margin: 20,
paddingHorizontal: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
height: 40,
fontSize: 16,
},
section: {
marginBottom: 20,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginHorizontal: 20,
marginBottom: 10,
},
sectionTitle: {
fontSize: 22,
fontWeight: 'bold',
marginLeft: 20,
marginBottom: 10,
},
showAllButton: {
color: '#007AFF',
fontSize: 16,
},
songItem: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 20,
paddingVertical: 10,
},
songImage: {
width: 50,
height: 50,
borderRadius: 5,
},
songInfo: {
flex: 1,
marginLeft: 15,
},
songTitle: {
fontSize: 16,
fontWeight: 'bold',
},
songSubtitle: {
fontSize: 14,
color: '#888',
},
moreButton: {
padding: 10,
},
moreButtonText: {
fontSize: 20,
color: '#888',
},
albumItem: {
marginRight: 15,
width: 150,
},
albumImage: {
width: 150,
height: 150,
borderRadius: 10,
},
albumTitle: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 5,
},
albumArtist: {
fontSize: 14,
color: '#888',
},
artistItem: {
alignItems: 'center',
marginRight: 20,
},
artistImage: {
width: 100,
height: 100,
borderRadius: 50,
},
artistName: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 5,
textAlign: 'center',
},
nowPlayingBar: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#f0f0f0',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
smallAlbumCover: {
width: 40,
height: 40,
borderRadius: 5,
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
color: '#888',
},
playPauseButton: {
padding: 10,
},
playPauseIcon: {
width: 30,
height: 30,
},
heartButton: {
padding: 10,
},
heartIcon: {
width: 20,
height: 20,
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
},
tabItem: {
alignItems: 'center',
},
tabIcon: {
width: 24,
height: 24,
},
tabLabel: {
fontSize: 12,
marginTop: 4,
},
activeTab: {
// Add styles for active tab
},
activeTabIcon: {
// Add styles for active tab icon
},
activeTabLabel: {
// Add styles for active tab label
},
});
export default SearchScreen;