import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const recentSearches = [
{ song: 'Better Now', artist: 'Post Malone' },
{ song: 'Kimberly Evans', artist: 'Calvin Harris, Dua Lipa' },
{ song: 'I Like It', artist: 'Cardi B, Bad Bunny, J Balvin' },
{ song: 'Girls Like You (feat Cardi B)', artist: 'Maroon 5' },
{ song: 'Back To You', artist: 'Selena Gomez' },
{ song: 'Lucid Dreams', artist: 'Juice WRLD' },
{ song: 'No Tears Left To Cry', artist: 'Ariana Grande' },
{ song: 'Nice For What', artist: 'Drake' },
{ song: 'Youngblood', artist: '5 Seconds of Summer' },
];
const renderSearchBar = () => (
<View style={styles.searchBarContainer}>
<TextInput style={styles.searchInput} placeholder="Search that song!" value={searchQuery} onChangeText={setSearchQuery} />
<TouchableOpacity style={styles.voiceSearchButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.voiceIcon} />
</TouchableOpacity>
</View>
);
const renderRecentItem = ({ item }) => (
<View style={styles.recentItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.songImage} />
<View style={styles.songInfo}>
<Text style={styles.songTitle}>{item.song}</Text>
<Text style={styles.artistName}>{item.artist}</Text>
</View>
<TouchableOpacity style={styles.removeButton}>
<Text style={styles.removeButtonText}>×</Text>
</TouchableOpacity>
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
<TouchableOpacity>
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
{renderSearchBar()}
<Text style={styles.recentTitle}>Recents</Text>
<FlatList
data={recentSearches}
renderItem={renderRecentItem}
keyExtractor={(item) => item.song}
style={styles.recentList}
/>
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
searchBarContainer: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#f0f0f0',
borderRadius: 20,
margin: 10,
},
searchInput: {
flex: 1,
fontSize: 16,
paddingVertical: 5,
},
voiceSearchButton: {
padding: 5,
},
voiceIcon: {
width: 24,
height: 24,
},
recentTitle: {
fontSize: 18,
fontWeight: 'bold',
padding: 10,
},
recentList: {
flex: 1,
},
recentItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#eee',
},
songImage: {
width: 50,
height: 50,
borderRadius: 5,
marginRight: 10,
},
songInfo: {
flex: 1,
},
songTitle: {
fontSize: 16,
fontWeight: 'bold',
},
artistName: {
fontSize: 14,
color: '#666',
},
removeButton: {
padding: 5,
},
removeButtonText: {
fontSize: 20,
color: '#999',
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
export default SearchScreen;