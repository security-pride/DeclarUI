import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const hotRecommended = [
{ id: '1', title: 'Sound of Sky', artist: 'Dilon Bruce', image: '../assets/snack-icon.png' },
{ id: '2', title: 'Girl on Fire', artist: 'Alecia Keys', image: '../assets/snack-icon.png' },
];
const playlists = [
{ id: '1', title: 'Classic Playlist', artist: 'Piano Guys', image: '../assets/snack-icon.png' },
{ id: '2', title: 'Summer Playlist', artist: 'Dilon Bruce', image: '../assets/snack-icon.png' },
{ id: '3', title: 'Pop Music', artist: 'Michael Jackson', image: '../assets/snack-icon.png' },
];
const recentlyPlayed = [
{ id: '1', title: 'Billie Jean', artist: 'Michael Jackson', rating: 4 },
{ id: '2', title: 'Earth Song', artist: 'Michael Jackson', rating: 5 },
{ id: '3', title: 'Mirror', artist: 'Justin Timberlake', rating: 3 },
{ id: '4', title: 'Remember the Time', artist: 'Michael Jackson', rating: 4 },
];
const renderHotRecommended = ({ item }) => (
<TouchableOpacity style={styles.hotRecommendedItem} onPress={() => navigation.navigate('playSong', { song: item })}>
<Image source={{ uri: item.image }} style={styles.hotRecommendedImage} />
<Text style={styles.hotRecommendedTitle}>{item.title}</Text>
<Text style={styles.hotRecommendedArtist}>{item.artist}</Text>
</TouchableOpacity>
);
const renderPlaylist = ({ item }) => (
<TouchableOpacity style={styles.playlistItem} onPress={() => console.log('Open playlist')}>
<Image source={{ uri: item.image }} style={styles.playlistImage} />
<Text style={styles.playlistTitle}>{item.title}</Text>
<Text style={styles.playlistArtist}>{item.artist}</Text>
</TouchableOpacity>
);
const renderRecentlyPlayed = ({ item }) => (
<View style={styles.recentlyPlayedItem}>
<TouchableOpacity style={styles.recentlyPlayedPlayButton} onPress={() => navigation.navigate('playSong', { song: item })}>
<Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />
</TouchableOpacity>
<View style={styles.recentlyPlayedInfo}>
<Text style={styles.recentlyPlayedTitle}>{item.title}</Text>
<Text style={styles.recentlyPlayedArtist}>{item.artist}</Text>
</View>
<View style={styles.ratingContainer}>
{[1, 2, 3, 4, 5].map((star) => (
<Image
key={star}
source={require('../assets/snack-icon.png')}
style={[styles.starIcon, { opacity: star <= item.rating ? 1 : 0.3 }]}
/>
))}
</View>
</View>
);
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<TouchableOpacity onPress={() => console.log('Open menu')}>
<Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
</TouchableOpacity>
<TextInput style={styles.searchInput} placeholder="Search album song" placeholderTextColor="#666" value={searchQuery} onChangeText={setSearchQuery} />
</View>
  <FlatList
    data={[{ key: 'content' }]}
    renderItem={() => (
      <>
        <Text style={styles.sectionTitle}>Hot Recommended</Text>
        <FlatList
          horizontal
          data={hotRecommended}
          renderItem={renderHotRecommended}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.playlistHeader}>
          <Text style={styles.sectionTitle}>Playlist</Text>
          <TouchableOpacity onPress={() => console.log('View all playlists')}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={playlists}
          renderItem={renderPlaylist}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.recentlyPlayedHeader}>
          <Text style={styles.sectionTitle}>Recently Played</Text>
          <TouchableOpacity onPress={() => console.log('View all recently played')}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={recentlyPlayed}
          renderItem={renderRecentlyPlayed}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </>
    )}
  />

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('songs')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Songs</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('settings')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Settings</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#121212',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
},
menuIcon: {
width: 24,
height: 24,
marginRight: 16,
},
searchInput: {
flex: 1,
height: 40,
backgroundColor: '#2a2a2a',
borderRadius: 20,
paddingHorizontal: 16,
color: '#fff',
},
sectionTitle: {
color: '#fff',
fontSize: 22,
fontWeight: 'bold',
marginTop: 24,
marginBottom: 16,
marginLeft: 16,
},
hotRecommendedItem: {
width: 150,
marginRight: 16,
},
hotRecommendedImage: {
width: 150,
height: 150,
borderRadius: 8,
},
hotRecommendedTitle: {
color: '#fff',
fontSize: 16,
marginTop: 8,
},
hotRecommendedArtist: {
color: '#999',
fontSize: 14,
},
playlistHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingRight: 16,
},
viewAllText: {
color: '#1DB954',
fontSize: 14,
},
playlistItem: {
width: 120,
marginRight: 16,
},
playlistImage: {
width: 120,
height: 120,
borderRadius: 8,
},
playlistTitle: {
color: '#fff',
fontSize: 14,
marginTop: 8,
},
playlistArtist: {
color: '#999',
fontSize: 12,
},
recentlyPlayedHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingRight: 16,
},
recentlyPlayedItem: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 16,
paddingVertical: 8,
},
recentlyPlayedPlayButton: {
marginRight: 16,
},
playIcon: {
width: 24,
height: 24,
},
recentlyPlayedInfo: {
flex: 1,
},
recentlyPlayedTitle: {
color: '#fff',
fontSize: 16,
},
recentlyPlayedArtist: {
color: '#999',
fontSize: 14,
},
ratingContainer: {
flexDirection: 'row',
},
starIcon: {
width: 16,
height: 16,
marginLeft: 2,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#2a2a2a',
paddingVertical: 8,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
color: '#999',
fontSize: 12,
marginTop: 4,
},
activeNavText: {
color: '#1DB954',
},
});
export default HomeScreen;