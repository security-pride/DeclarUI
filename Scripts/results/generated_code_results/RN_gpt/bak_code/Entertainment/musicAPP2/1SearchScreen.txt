import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();

  const goToNowPlaying = () => {
    navigation.navigate('NowPlaying');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search</Text>
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={16} color="#888" style={styles.icon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Gully Boy"
          placeholderTextColor="#888"
        />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionHeader}>Most Popular</Text>
        <TouchableOpacity style={styles.itemContainer} onPress={goToNowPlaying}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.itemImage}
          />
          <View>
            <Text style={styles.itemTitle}>Gully Boy</Text>
            <Text style={styles.itemSubtitle}>Song | Gully Boy</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionHeader}>Songs</Text>
        <TouchableOpacity style={styles.showAllButton}>
          <Text style={styles.showAllText}>Show All</Text>
        </TouchableOpacity>
        {renderSongItem('Gully Gully Mein Gully Boy', 'Gully Gully Mein Gully boy')}
        {renderSongItem('Mere Gully Mein', 'Mere Gully Mein')}
        {renderSongItem('Ashli Hip Hip', 'Album, 2019 | Gully Boy')}
        {renderSongItem('Apna Time Aayega', 'Album, 2019 | Gully Boy')}
        {renderSongItem('Doori', 'Album, 2019 | Gully Boy')}

        <Text style={styles.sectionHeader}>Albums</Text>
        <View style={styles.albumContainer}>
          {renderAlbumItem('Gully Boy 2', 'Various Artists')}
          {renderAlbumItem('Gully Boy Unlimi...', 'Various Artists')}
          {renderAlbumItem('Hip Gully Boy', 'Various Artists')}
        </View>

        <Text style={styles.sectionHeader}>Artists</Text>
        <View style={styles.artistContainer}>
          {renderArtistItem('Justin Bieber')}
          {renderArtistItem('Michael Jackson')}
          {renderArtistItem('Sam Smith')}
        </View>
      </ScrollView>

      <View style={styles.playerContainer}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.playerImage}
        />
        <View>
          <Text style={styles.playerTitle}>Illegal Weapon 2.0</Text>
          <Text style={styles.playerSubtitle}>Street Dancer 3D</Text>
        </View>
        <TouchableOpacity>
          <Icon name="heart" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="pause" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.navigation}>
        {renderNavItem('home', 'Home')}
        {renderNavItem('bolt', 'Trending')}
        {renderNavItem('search', 'Search')}
        {renderNavItem('book', 'Library')}
        {renderNavItem('cog', 'Settings')}
      </View>
    </View>
  );
};

const renderSongItem = (title, subtitle) => (
  <View style={styles.itemContainer} key={title}>
    <Image
      source={require('../assets/snack-icon.png')}
      style={styles.itemImage}
    />
    <View>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemSubtitle}>{subtitle}</Text>
    </View>
  </View>
);

const renderAlbumItem = (title, subtitle) => (
  <View style={styles.albumItem} key={title}>
    <Image
      source={require('../assets/snack-icon.png')}
      style={styles.albumImage}
    />
    <Text style={styles.albumTitle}>{title}</Text>
    <Text style={styles.albumSubtitle}>{subtitle}</Text>
  </View>
);

const renderArtistItem = (name) => (
  <View style={styles.artistItem} key={name}>
    <Image
      source={require('../assets/snack-icon.png')}
      style={styles.artistImage}
    />
    <Text style={styles.artistName}>{name}</Text>
  </View>
);

const renderNavItem = (iconName, label) => (
  <TouchableOpacity style={styles.navItem} key={label}>
    <Icon name={iconName} size={24} color="#888" />
    <Text style={styles.navLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
  },
  searchBar: {
    flex: 1,
    padding: 10,
    color: '#444',
  },
  icon: {
    padding: 10,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  showAllButton: {
    position: 'absolute',
    right: 20,
    top: 115,
  },
  showAllText: {
    color: 'red',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  albumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  albumItem: {
    alignItems: 'center',
  },
  albumImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  albumTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  albumSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  artistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  artistItem: {
    alignItems: 'center',
  },
  artistImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  artistName: {
    fontSize: 14,
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#337ab7',
    padding: 10,
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
  },
  playerImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  playerTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  playerSubtitle: {
    fontSize: 14,
    color: '#ddd',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});

export default SearchScreen;