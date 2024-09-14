import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
const ExploreScreen = ({ navigation }) => {
const [currentSong, setCurrentSong] = useState({
title: 'Illegal Weapon 2.0',
artist: 'Street Dancer 3D'
});
const renderRecommendedItem = (title, subtitle, imageSource) => (
<View style={styles.recommendedItem}>
<Image source={imageSource} style={styles.albumImage} />
<Text style={styles.itemTitle}>{title}</Text>
<Text style={styles.itemSubtitle}>{subtitle}</Text>
</View>
);
const renderRecentPlayedItem = (title, imageSource) => (
<View style={styles.recentPlayedItem}>
<Image source={imageSource} style={styles.recentPlayedImage} />
<Text style={styles.recentPlayedTitle}>{title}</Text>
</View>
);
const renderNewReleasedItem = (title, subtitle, imageSource) => (
<View style={styles.newReleasedItem}>
<Image source={imageSource} style={styles.newReleasedImage} />
<Text style={styles.newReleasedTitle}>{title}</Text>
<Text style={styles.newReleasedSubtitle}>{subtitle}</Text>
</View>
);
const renderPopularArtist = (name, imageSource) => (
<View style={styles.popularArtistItem}>
<Image source={imageSource} style={styles.popularArtistImage} />
<Text style={styles.popularArtistName}>{name}</Text>
</View>
);
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<ScrollView>
<Text style={styles.sectionTitle}>Recomanded for you</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
{renderRecommendedItem('Baghi 3', 'Various Artists', require('../assets/snack-icon.png'))}
{renderRecommendedItem('Surma Surma', 'Various Artists', require('../assets/snack-icon.png'))}
{renderRecommendedItem('Hindi T', 'Various Artists', require('../assets/snack-icon.png'))}
</ScrollView>
    <Text style={styles.sectionTitle}>Recent Played</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {renderRecentPlayedItem('No Time To Die', require('../assets/snack-icon.png'))}
      {renderRecentPlayedItem('Illegal Weapon', require('../assets/snack-icon.png'))}
      {renderRecentPlayedItem('Loca', require('../assets/snack-icon.png'))}
    </ScrollView>

    <Text style={styles.sectionTitle}>New Released</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {renderNewReleasedItem('Baghi 3', 'Various Artists', require('../assets/snack-icon.png'))}
      {renderNewReleasedItem('Baghi 3', 'Various Artists', require('../assets/snack-icon.png'))}
    </ScrollView>

    <Text style={styles.sectionTitle}>Popular Artist</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {renderPopularArtist('Justin Bieber', require('../assets/snack-icon.png'))}
      {renderPopularArtist('Michael Jackson', require('../assets/snack-icon.png'))}
      {renderPopularArtist('Sam Smith', require('../assets/snack-icon.png'))}
    </ScrollView>

    <Text style={styles.sectionTitle}>Genres & Moods</Text>
    <View style={styles.genresContainer}>
      <TouchableOpacity style={styles.genreButton}>
        <Text style={styles.genreButtonText}>Hip Hop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.genreButton}>
        <Text style={styles.genreButtonText}>Pop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.genreButton}>
        <Text style={styles.genreButtonText}>Partyholics</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>

  <View style={styles.nowPlayingBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />
    <View style={styles.nowPlayingInfo}>
      <Text style={styles.nowPlayingTitle}>{currentSong.title}</Text>
      <Text style={styles.nowPlayingArtist}>{currentSong.artist}</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('NowPlaying')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.pauseButton} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Trending')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Trending</Text>
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
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
sectionTitle: {
fontSize: 20,
fontWeight: 'bold',
marginLeft: 15,
marginTop: 20,
marginBottom: 10,
},
recommendedItem: {
marginLeft: 15,
marginRight: 10,
width: 150,
},
albumImage: {
width: 150,
height: 150,
borderRadius: 10,
},
itemTitle: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 5,
},
itemSubtitle: {
fontSize: 14,
color: '#888',
},
recentPlayedItem: {
marginLeft: 15,
marginRight: 10,
width: 120,
},
recentPlayedImage: {
width: 120,
height: 120,
borderRadius: 10,
},
recentPlayedTitle: {
fontSize: 14,
marginTop: 5,
},
newReleasedItem: {
marginLeft: 15,
marginRight: 10,
width: 180,
},
newReleasedImage: {
width: 180,
height: 180,
borderRadius: 10,
},
newReleasedTitle: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 5,
},
newReleasedSubtitle: {
fontSize: 14,
color: '#888',
},
popularArtistItem: {
marginLeft: 15,
marginRight: 10,
alignItems: 'center',
},
popularArtistImage: {
width: 100,
height: 100,
borderRadius: 50,
},
popularArtistName: {
fontSize: 14,
marginTop: 5,
textAlign: 'center',
},
genresContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'flex-start',
marginLeft: 10,
marginRight: 10,
},
genreButton: {
backgroundColor: '#f0f0f0',
paddingHorizontal: 20,
paddingVertical: 10,
borderRadius: 20,
margin: 5,
},
genreButtonText: {
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
nowPlayingImage: {
width: 50,
height: 50,
borderRadius: 25,
marginRight: 10,
},
nowPlayingInfo: {
flex: 1,
},
nowPlayingTitle: {
fontSize: 16,
fontWeight: 'bold',
},
nowPlayingArtist: {
fontSize: 14,
color: '#888',
},
pauseButton: {
width: 30,
height: 30,
marginRight: 10,
},
heartIcon: {
width: 24,
height: 24,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#fff',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
navText: {
fontSize: 12,
},
});
export default ExploreScreen;