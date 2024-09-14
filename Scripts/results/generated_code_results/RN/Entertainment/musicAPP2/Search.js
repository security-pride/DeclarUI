import React, { useState } from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
const SearchScreen = ({ navigation }) => {
const [searchQuery, setSearchQuery] = useState('Gully Boy');
const mostPopular = [
{ id: '1', title: 'Gully Boy', subtitle: 'Song • Gully Boy' },
];
const songs = [
{ id: '1', title: 'Gully Gully Mein Gully Boy', subtitle: 'Song • Gully Gully Mein Gully boy' },
{ id: '2', title: 'Mere Gully Mein', subtitle: 'Song • Mere Gully Mein' },
{ id: '3', title: 'Ashli Hip Hip', subtitle: 'Album: 2019 • Gully Boy' },
{ id: '4', title: 'Apna Time Aayega', subtitle: 'Album: 2019 • Gully Boy' },
{ id: '5', title: 'Doori', subtitle: 'Album: 2019 • Gully Boy' },
];
const albums = [
{ id: '1', title: 'Gully Boy 2', subtitle: 'Various Artists' },
{ id: '2', title: 'Gully Boy Unlimi...', subtitle: 'Various Artists' },
{ id: '3', title: 'Hip Gu...', subtitle: 'Various Artists' },
];
const artists = [
{ id: '1', name: 'Justin Bieber' },
{ id: '2', name: 'Michael Jackson' },
{ id: '3', name: 'Sam Smith' },
];
const renderSongItem = ({ item }) => (
<TouchableOpacity style={styles.songItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.songImage} />
<View style={styles.songInfo}>
<Text style={styles.songTitle}>{item.title}</Text>
<Text style={styles.songSubtitle}>{item.subtitle}</Text>
</View>
<TouchableOpacity style={styles.moreButton}>
<Text>•••</Text>
</TouchableOpacity>
</TouchableOpacity>
);
const renderAlbumItem = ({ item }) => (
<TouchableOpacity style={styles.albumItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.albumImage} />
<Text style={styles.albumTitle}>{item.title}</Text>
<Text style={styles.albumSubtitle}>{item.subtitle}</Text>
</TouchableOpacity>
);
const renderArtistItem = ({ item }) => (
<TouchableOpacity style={styles.artistItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />
<Text style={styles.artistName}>{item.name}</Text>
</TouchableOpacity>
);
return (
<SafeAreaView style={styles.container}>
<Text style={styles.header}>Search</Text>
<View style={styles.searchBar}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
<TextInput style={styles.searchInput} value={searchQuery} onChangeText={setSearchQuery} placeholder="Search for songs, artists, albums..." />
</View>
  <FlatList
    ListHeaderComponent={
      <>
        <Text style={styles.sectionTitle}>Most Popular</Text>
        {renderSongItem({ item: mostPopular[0] })}

        <Text style={styles.sectionTitle}>Songs</Text>
        <FlatList
          data={songs}
          renderItem={renderSongItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Albums</Text>
          <TouchableOpacity>
            <Text style={styles.showAllButton}>Show All</Text>
          </TouchableOpacity>
        </View>
      </>
    }
    ListFooterComponent={
      <>
        <FlatList
          data={albums}
          renderItem={renderAlbumItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.sectionTitle}>Artists</Text>
        <FlatList
          data={artists}
          renderItem={renderArtistItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </>
    }
    stickyHeaderIndices={[0]}
  />

  <View style={styles.nowPlayingBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />
    <View style={styles.nowPlayingInfo}>
      <Text style={styles.nowPlayingTitle}>Illegal Weapon 2.0</Text>
      <Text style={styles.nowPlayingArtist}>Street Dancer 3D</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('NowPlaying')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.pauseIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Explore')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Trending')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Trending</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Library</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
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
backgroundColor: '#FFFFFF',
},
header: {
fontSize: 28,
fontWeight: 'bold',
margin: 20,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F0F0F0',
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
},
sectionTitle: {
fontSize: 22,
fontWeight: 'bold',
margin: 20,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginHorizontal: 20,
},
showAllButton: {
color: '#FF3B30',
fontSize: 16,
},
songItem: {
flexDirection: 'row',
alignItems: 'center',
marginHorizontal: 20,
marginBottom: 15,
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
padding: 5,
},
albumItem: {
width: 150,
marginLeft: 20,
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
albumSubtitle: {
fontSize: 14,
color: '#888',
},
artistItem: {
alignItems: 'center',
marginLeft: 20,
},
artistImage: {
width: 100,
height: 100,
borderRadius: 50,
},
artistName: {
fontSize: 16,
marginTop: 5,
},
nowPlayingBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#4169E1',
padding: 10,
},
nowPlayingImage: {
width: 40,
height: 40,
borderRadius: 5,
marginRight: 10,
},
nowPlayingInfo: {
flex: 1,
},
nowPlayingTitle: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: 'bold',
},
nowPlayingArtist: {
color: '#FFFFFF',
fontSize: 14,
},
heartIcon: {
width: 24,
height: 24,
marginRight: 10,
},
pauseIcon: {
width: 24,
height: 24,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
fontSize: 12,
marginTop: 5,
},
activeNavText: {
color: '#4169E1',
},
});
export default SearchScreen;