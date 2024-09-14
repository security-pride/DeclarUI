import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ExplorePage = () => {
const navigation = useNavigation();
const navigateToNowPlaying = () => {
navigation.navigate('NowPlaying');
};
const navigateToSearch = () => {
navigation.navigate('Search');
};
const navigateToTrending = () => {
navigation.navigate('Trending');
};
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<ScrollView>
<View style={styles.header}>
<Text style={styles.timeText}>9:41</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.wifiIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
</View>
xml
复制
    <Text style={styles.title}>Explore</Text>

    <Text style={styles.sectionTitle}>Recomanded for you</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      <TouchableOpacity onPress={navigateToNowPlaying}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
        <Text style={styles.songTitle}>Baghi 3</Text>
        <Text style={styles.artistName}>Various Artists</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToNowPlaying}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
        <Text style={styles.songTitle}>Surma Surma</Text>
        <Text style={styles.artistName}>Various Artists</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToNowPlaying}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
        <Text style={styles.songTitle}>Hindi T</Text>
        <Text style={styles.artistName}>Various Artists</Text>
      </TouchableOpacity>
    </ScrollView>

    <Text style={styles.sectionTitle}>Recent Played</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      <TouchableOpacity onPress={navigateToNowPlaying}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
        <Text style={styles.songTitle}>No Time To Die</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToNowPlaying}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
        <Text style={styles.songTitle}>Illegal Weapon</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToNowPlaying}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
        <Text style={styles.songTitle}>Loca</Text>
      </TouchableOpacity>
    </ScrollView>

    <Text style={styles.sectionTitle}>New Released</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      <TouchableOpacity onPress={navigateToNowPlaying}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
        <Text style={styles.songTitle}>Baghi 3</Text>
        <Text style={styles.artistName}>Various Artists</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToNowPlaying}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
        <Text style={styles.songTitle}>Baghi 3</Text>
        <Text style={styles.artistName}>Various Artists</Text>
      </TouchableOpacity>
    </ScrollView>

    <Text style={styles.sectionTitle}>Popular Artist</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      <TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />
        <Text style={styles.artistName}>Justin Bieber</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />
        <Text style={styles.artistName}>Michael Jackson</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />
        <Text style={styles.artistName}>Sam Smith</Text>
      </TouchableOpacity>
    </ScrollView>

    <Text style={styles.sectionTitle}>Genres & Moods</Text>
    <View style={styles.genreContainer}>
      <TouchableOpacity style={styles.genreButton}>
        <Text style={styles.genreText}>Hip Hop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.genreButton}>
        <Text style={styles.genreText}>Pop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.genreButton}>
        <Text style={styles.genreText}>Partyholics</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>

  <View style={styles.nowPlayingBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.smallAlbumCover} />
    <View style={styles.nowPlayingInfo}>
      <Text style={styles.nowPlayingTitle}>Illegal Weapon 2.0</Text>
      <Text style={styles.nowPlayingArtist}>Street Dancer 3D</Text>
    </View>
    <TouchableOpacity onPress={navigateToNowPlaying}>
      <Image source={require('../assets/snack-icon.png')} style={styles.pauseButton} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.tabBar}>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={navigateToTrending}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabText}>Trending</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={navigateToSearch}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabText}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabText}>Library</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabText}>Settings</Text>
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
flexDirection: 'row',
justifyContent: 'flex-end',
alignItems: 'center',
paddingHorizontal: 10,
paddingTop: 10,
},
timeText: {
fontSize: 12,
fontWeight: 'bold',
},
wifiIcon: {
width: 15,
height: 15,
marginLeft: 5,
},
signalIcon: {
width: 15,
height: 15,
marginLeft: 5,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginLeft: 20,
marginTop: 20,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginLeft: 20,
marginTop: 20,
},
horizontalScroll: {
paddingLeft: 20,
marginTop: 10,
},
albumCover: {
width: 150,
height: 150,
borderRadius: 10,
marginRight: 15,
},
songTitle: {
marginTop: 5,
fontSize: 14,
fontWeight: 'bold',
},
artistName: {
fontSize: 12,
color: '#666',
},
artistImage: {
width: 100,
height: 100,
borderRadius: 50,
marginRight: 15,
},
genreContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'flex-start',
paddingHorizontal: 20,
marginTop: 10,
},
genreButton: {
backgroundColor: '#f0f0f0',
paddingHorizontal: 15,
paddingVertical: 8,
borderRadius: 20,
marginRight: 10,
marginBottom: 10,
},
genreText: {
fontSize: 14,
},
nowPlayingBar: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#f8f8f8',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
smallAlbumCover: {
width: 40,
height: 40,
borderRadius: 5,
marginRight: 10,
},
nowPlayingInfo: {
flex: 1,
},
nowPlayingTitle: {
fontSize: 14,
fontWeight: 'bold',
},
nowPlayingArtist: {
fontSize: 12,
color: '#666',
},
pauseButton: {
width: 30,
height: 30,
marginHorizontal: 10,
},
heartIcon: {
width: 20,
height: 20,
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#fff',
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
marginBottom: 5,
},
tabText: {
fontSize: 10,
},
});
export default ExplorePage;