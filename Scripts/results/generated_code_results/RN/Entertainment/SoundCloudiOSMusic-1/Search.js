import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const recentSearches = [
{ id: '1', song: 'Better Now', artist: 'Post Malone', image: require('../assets/snack-icon.png') },
{ id: '2', song: 'Kimberly Evans', artist: 'Calvin Harris, Dua Lipa', image: require('../assets/snack-icon.png') },
{ id: '3', song: 'I Like It', artist: 'Cardi B, Bad Bunny, J Balvin', image: require('../assets/snack-icon.png') },
{ id: '4', song: 'Girls Like You (feat Cardi B)', artist: 'Maroon 5', image: require('../assets/snack-icon.png') },
{ id: '5', song: 'Back To You', artist: 'Selena Gomez', image: require('../assets/snack-icon.png') },
{ id: '6', song: 'Lucid Dreams', artist: 'Juice WRLD', image: require('../assets/snack-icon.png') },
{ id: '7', song: 'No Tears Left To Cry', artist: 'Ariana Grande', image: require('../assets/snack-icon.png') },
{ id: '8', song: 'Nice For What', artist: 'Drake', image: require('../assets/snack-icon.png') },
{ id: '9', song: 'Youngblood', artist: '5 Seconds of Summer', image: require('../assets/snack-icon.png') },
];
const renderRecentItem = ({ item }) => (
<View style={styles.recentItem}>
<Image source={item.image} style={styles.recentImage} />
<View style={styles.recentTextContainer}>
<Text style={styles.recentSongTitle}>{item.song}</Text>
<Text style={styles.recentArtist}>{item.artist}</Text>
</View>
<TouchableOpacity style={styles.removeButton}>
<Text style={styles.removeButtonText}>×</Text>
</TouchableOpacity>
</View>
);
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.searchBarContainer}>
<TextInput style={styles.searchInput} placeholder="Search that song!" value={searchQuery} onChangeText={setSearchQuery} />
<TouchableOpacity style={styles.voiceSearchButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.voiceSearchIcon} />
</TouchableOpacity>
</View>
  <Text style={styles.recentsTitle}>Recents</Text>

  <FlatList
    data={recentSearches}
    renderItem={renderRecentItem}
    keyExtractor={(item) => item.id}
    style={styles.recentsList}
  />

  <View style={styles.nowPlayingBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />
    <View style={styles.nowPlayingInfo}>
      <Text style={styles.nowPlayingTitle}>All Mine</Text>
      <Text style={styles.nowPlayingArtist}>Kanye West</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Player')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Listen')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
searchBarContainer: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
marginTop: 40,
},
searchInput: {
flex: 1,
height: 40,
borderRadius: 20,
paddingHorizontal: 15,
backgroundColor: '#F0F0F0',
},
voiceSearchButton: {
marginLeft: 10,
},
voiceSearchIcon: {
width: 24,
height: 24,
},
recentsTitle: {
fontSize: 18,
fontWeight: 'bold',
margin: 15,
},
recentsList: {
flex: 1,
},
recentItem: {
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 10,
paddingHorizontal: 15,
},
recentImage: {
width: 40,
height: 40,
borderRadius: 5,
},
recentTextContainer: {
flex: 1,
marginLeft: 15,
},
recentSongTitle: {
fontSize: 16,
fontWeight: 'bold',
},
recentArtist: {
fontSize: 14,
color: '#666666',
},
removeButton: {
padding: 5,
},
removeButtonText: {
fontSize: 20,
color: '#999999',
},
nowPlayingBar: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
},
nowPlayingImage: {
width: 40,
height: 40,
borderRadius: 20,
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
color: '#666666',
},
playIcon: {
width: 30,
height: 30,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
paddingVertical: 10,
},
navIcon: {
width: 25,
height: 25,
},
});
export default SearchScreen;