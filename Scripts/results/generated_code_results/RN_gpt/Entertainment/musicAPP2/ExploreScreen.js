import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const ExploreScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.time}>9:41</Text>
      <Text style={styles.header}>Explore</Text>

      <Section title="Recomanded for you">
        <AlbumCover />
        <AlbumCover />
        <AlbumCover />
      </Section>

      <Section title="Recent Played">
        <RecentPlayedItem />
        <RecentPlayedItem />
        <RecentPlayedItem />
      </Section>

      <Section title="New Released">
        <NewReleasedItem />
        <NewReleasedItem />
        <NewReleasedItem />
      </Section>

      <Section title="Popular Artist">
        <ArtistItem name="Justin Bieber" />
        <ArtistItem name="Michael Jackson" />
        <ArtistItem name="Sam Smith" />
      </Section>

      <View style={styles.genresSection}>
        <Text style={styles.sectionHeader}>Genres & Moods</Text>
        <GenreButton title="Hip Hop" />
        <GenreButton title="Pop" />
        <GenreButton title="Partyholics" />
      </View>

      <NowPlayingBar />
      <NavBar navigation={navigation} />
    </ScrollView>
  );
};

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionHeader}>{title}</Text>
    <View style={styles.sectionContent}>{children}</View>
  </View>
);

const AlbumCover = () => (
  <View style={styles.albumCover}>
    <Image source={require('../assets/snack-icon.png')} style={styles.image} />
    <Text style={styles.albumTitle}>Baghi 3</Text>
    <Text style={styles.artist}>Various Artists</Text>
  </View>
);

const RecentPlayedItem = () => (
  <View style={styles.recentPlayed}>
    <Image source={require('../assets/snack-icon.png')} style={styles.image} />
    <Text style={styles.songTitle}>No Time To Die</Text>
  </View>
);

const NewReleasedItem = () => (
  <View style={styles.newReleased}>
    <Image source={require('../assets/snack-icon.png')} style={styles.image} />
    <Text style={styles.albumTitle}>Baghi 3</Text>
    <Text style={styles.artist}>Various Artists</Text>
  </View>
);

const ArtistItem = ({ name }) => (
  <View style={styles.artistItem}>
    <Image source={require('../assets/snack-icon.png')} style={styles.image} />
    <Text style={styles.artistName}>{name}</Text>
  </View>
);

const GenreButton = ({ title }) => (
  <TouchableOpacity style={styles.genreButton}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const NowPlayingBar = () => (
  <View style={styles.nowPlayingBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />
    <View style={styles.nowPlayingInfo}>
      <Text style={styles.nowPlayingTitle}>Illegal Weapon 2.0</Text>
      <Text style={styles.nowPlayingArtist}>Street Dancer 3D</Text>
    </View>
    <Button title="♥" onPress={() => {}} /> 
    <Button title="⏸️" onPress={() => {}} />
  </View>
);

const NavBar = ({ navigation }) => (
  <View style={styles.navBar}>
    <Button title="Home" onPress={() => navigation.navigate('Explore')} />
    <Button title="Tredning" onPress={() => navigation.navigate('Trending')} />
    <Button title="Search" onPress={() => navigation.navigate('Search')} />
    <Button title="Library" onPress={() => {}} />
    <Button title="Settings" onPress={() => {}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  time: {
    fontSize: 12,
    color: '#555',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    flexDirection: 'row',
  },
  albumCover: {
    marginRight: 10,
    width: 100,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  albumTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  artist: {
    fontSize: 12,
    color: '#666',
  },
  recentPlayed: {
    marginRight: 10,
    alignItems: 'center',
  },
  songTitle: {
    fontSize: 12,
    marginTop: 5,
  },
  newReleased: {
    marginRight: 10,
    alignItems: 'center',
  },
  artistItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  artistName: {
    fontSize: 12,
    marginTop: 5,
  },
  genresSection: {
    marginBottom: 20,
  },
  genreButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 14,
  },
  nowPlayingBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  nowPlayingInfo: {
    flex: 1,
    marginLeft: 10,
  },
  nowPlayingTitle: {
    fontSize: 16,
  },
  nowPlayingArtist: {
    fontSize: 14,
    color: '#666',
  },
  nowPlayingImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
});

export default ExploreScreen;