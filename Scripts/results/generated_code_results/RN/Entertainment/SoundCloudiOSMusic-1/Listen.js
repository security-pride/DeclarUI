import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ListenScreen = () => {
const [currentTime, setCurrentTime] = useState('9:41 AM');
const navigation = useNavigation();
const recentCategories = [
{ name: 'Ranking', icon: 'chart-line', isNew: true },
{ name: 'Weekly featured', icon: 'bookmark' },
{ name: 'Podcast', icon: 'microphone' },
{ name: 'Live', icon: 'broadcast' },
{ name: 'Concerts', icon: 'music-note' },
];
return (
<View style={styles.container}>
<View style={styles.statusBar}>
<Text style={styles.timeText}>{currentTime}</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.statusIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.statusIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.statusIcon} />
</View>
</View>
  <ScrollView>
    <Text style={styles.sectionHeader}>Hots now</Text>

    <ScrollView horizontal style={styles.featuredPlaylists}>
      <TouchableOpacity onPress={() => {/* Navigate to Summer Vibes playlist */}}>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.playlistImage}
        >
          <View style={styles.playlistOverlay}>
            <Text style={styles.playlistTitle}>Summer Vibes</Text>
            <Text style={styles.playlistFollowers}>1,300,231 FOLLOWERS</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {/* Navigate to Monday Party playlist */}}>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.playlistImage}
        >
          <View style={styles.playlistOverlay}>
            <Text style={styles.playlistTitle}>Monday Party</Text>
            <Text style={styles.playlistFollowers}>650,231 FOLLOWERS</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </ScrollView>

    <Text style={styles.sectionHeader}>Recents</Text>

    {recentCategories.map((category, index) => (
      <TouchableOpacity key={index} style={styles.categoryItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
        <Text style={styles.categoryName}>{category.name}</Text>
        {category.isNew && <View style={styles.newBadge}><Text style={styles.newBadgeText}>New</Text></View>}
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
    ))}

    <Text style={styles.sectionHeader}>Playlists</Text>
  </ScrollView>

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
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
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
backgroundColor: '#fff',
},
statusBar: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 10,
height: 40,
},
timeText: {
fontSize: 14,
},
statusIcons: {
flexDirection: 'row',
},
statusIcon: {
width: 15,
height: 15,
marginLeft: 5,
},
sectionHeader: {
fontSize: 20,
fontWeight: 'bold',
marginTop: 20,
marginLeft: 10,
},
featuredPlaylists: {
marginTop: 10,
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
categoryItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#eee',
},
categoryIcon: {
width: 20,
height: 20,
marginRight: 10,
},
categoryName: {
flex: 1,
fontSize: 16,
},
newBadge: {
backgroundColor: 'orange',
borderRadius: 10,
paddingHorizontal: 8,
paddingVertical: 2,
},
newBadgeText: {
color: '#fff',
fontSize: 12,
},
arrowIcon: {
width: 15,
height: 15,
},
nowPlayingBar: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#f0f0f0',
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
color: '#666',
},
playIcon: {
width: 30,
height: 30,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
height: 50,
borderTopWidth: 1,
borderTopColor: '#eee',
},
navIcon: {
width: 25,
height: 25,
},
});
export default ListenScreen;