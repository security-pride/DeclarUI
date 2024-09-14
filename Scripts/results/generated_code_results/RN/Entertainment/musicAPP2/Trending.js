import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
const TrendingScreen = ({ navigation }) => {
const [selectedCategory, setSelectedCategory] = useState('Partyholics');
const [selectedYear, setSelectedYear] = useState('2020');
const trendingSongs = [
{ id: '1', title: "I'm a Freak (feat. Pitbull)", plays: '12,598 Played' },
{ id: '2', title: "Can't Remember To Forget", plays: '12,598 Played' },
{ id: '3', title: 'Beyonce', plays: '12,598 Played' },
{ id: '4', title: 'Roller Coaster (Single)', plays: '12,598 Played' },
{ id: '5', title: 'Unconditionally', plays: '12,598 Played' },
];
const trendingAlbums = [
{ id: '1', image: require('../assets/snack-icon.png') },
{ id: '2', image: require('../assets/snack-icon.png') },
{ id: '3', image: require('../assets/snack-icon.png') },
];
const renderSongItem = ({ item }) => (
<TouchableOpacity style={styles.songItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.songImage} />
<View style={styles.songInfo}>
<Text style={styles.songTitle}>{item.title}</Text>
<Text style={styles.songPlays}>{item.plays}</Text>
</View>
<TouchableOpacity style={styles.moreButton}>
<Text style={styles.moreButtonText}>•••</Text>
</TouchableOpacity>
</TouchableOpacity>
);
const renderAlbumItem = ({ item }) => (
<TouchableOpacity style={styles.albumItem}>
<Image source={item.image} style={styles.albumImage} />
</TouchableOpacity>
);
return (
<SafeAreaView style={styles.container}>
<Text style={styles.header}>Trending</Text>
  <View style={styles.filters}>
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterButtonText}>{selectedCategory}</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.dropdownIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.filterButton, styles.yearFilter]}>
      <Text style={styles.filterButtonText}>{selectedYear}</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.dropdownIcon} />
    </TouchableOpacity>
  </View>

  <Text style={styles.sectionTitle}>Trending Songs</Text>
  <FlatList
    data={trendingSongs}
    renderItem={renderSongItem}
    keyExtractor={item => item.id}
  />

  <Text style={styles.sectionTitle}>Trending Albums</Text>
  <FlatList
    data={trendingAlbums}
    renderItem={renderAlbumItem}
    keyExtractor={item => item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
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
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Trending</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Search</Text>
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
filters: {
flexDirection: 'row',
justifyContent: 'space-between',
marginHorizontal: 20,
marginBottom: 20,
},
filterButton: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F0F0F0',
borderRadius: 20,
paddingHorizontal: 15,
paddingVertical: 10,
},
yearFilter: {
backgroundColor: '#FFE4E1',
},
filterButtonText: {
fontSize: 16,
marginRight: 5,
},
dropdownIcon: {
width: 12,
height: 12,
},
sectionTitle: {
fontSize: 22,
fontWeight: 'bold',
margin: 20,
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
songPlays: {
fontSize: 14,
color: '#888',
},
moreButton: {
padding: 5,
},
moreButtonText: {
fontSize: 20,
color: '#888',
},
albumItem: {
marginLeft: 20,
},
albumImage: {
width: 150,
height: 150,
borderRadius: 10,
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
export default TrendingScreen;