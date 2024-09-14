import React, { useState } from 'react';

import {

  View,

  Text,

  TextInput,

  Image,

  StyleSheet,

  ScrollView,

  TouchableOpacity,

  FlatList,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('Gully Boy');



  const songs = [

    { id: '1', title: 'Gully Boy', subtitle: 'Song • Gully Boy' },

    { id: '2', title: 'Gully Gully Mein Gully Boy', subtitle: 'Song • Gully Gully Mein Gully boy' },

    { id: '3', title: 'Mere Gully Mein', subtitle: 'Song • Mere Gully Mein' },

    { id: '4', title: 'Ashli Hip Hip', subtitle: 'Album: 2019 • Gully Boy' },

    { id: '5', title: 'Apna Time Aayega', subtitle: 'Album: 2019 • Gully Boy' },

    { id: '6', title: 'Doori', subtitle: 'Album: 2019 • Gully Boy' },

  ];



  const albums = [

    { id: '1', title: 'Gully Boy 2', subtitle: 'Various Artists' },

    { id: '2', title: 'Gully Boy Unlim...', subtitle: 'Various Artists' },

    { id: '3', title: 'Hip Gully', subtitle: 'Various Artists' },

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

        <Text style={styles.moreButtonText}>...</Text>

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

    <View style={styles.container}>

      <Text style={styles.title}>Search</Text>

      <View style={styles.searchContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search for songs, artists, albums..."

          value={searchQuery}

          onChangeText={setSearchQuery}

        />

      </View>

      <ScrollView>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Most Popular</Text>

          {renderSongItem({ item: songs[0] })}

        </View>

        <View style={styles.section}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Songs</Text>

            <TouchableOpacity>

              <Text style={styles.showAllText}>Show All</Text>

            </TouchableOpacity>

          </View>

          <FlatList

            data={songs}

            renderItem={renderSongItem}

            keyExtractor={(item) => item.id}

            scrollEnabled={false}

          />

        </View>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Albums</Text>

          <FlatList

            data={albums}

            renderItem={renderAlbumItem}

            keyExtractor={(item) => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Artists</Text>

          <FlatList

            data={artists}

            renderItem={renderArtistItem}

            keyExtractor={(item) => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>

      </ScrollView>

      <View style={styles.nowPlayingBar}>

        <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />

        <View style={styles.nowPlayingInfo}>

          <Text style={styles.nowPlayingTitle}>Illegal Weapon 2.0</Text>

          <Text style={styles.nowPlayingArtist}>Street Dancer 3D</Text>

        </View>

        <TouchableOpacity style={styles.heartIcon}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.pauseButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

    paddingTop: 50,

  },

  title: {

    fontSize: 28,

    fontWeight: 'bold',

    marginLeft: 20,

    marginBottom: 20,

    color: '#000080',

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    borderRadius: 10,

    marginHorizontal: 20,

    paddingHorizontal: 10,

    marginBottom: 20,

  },

  searchIcon: {

    width: 20,

    height: 20,

    tintColor: '#888888',

  },

  searchInput: {

    flex: 1,

    paddingVertical: 10,

    paddingHorizontal: 10,

    fontSize: 16,

  },

  section: {

    marginBottom: 20,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginHorizontal: 20,

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#000080',

    marginLeft: 20,

    marginBottom: 10,

  },

  showAllText: {

    color: '#FF69B4',

    fontSize: 14,

  },

  songItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginBottom: 10,

  },

  songImage: {

    width: 50,

    height: 50,

    borderRadius: 5,

  },

  songInfo: {

    flex: 1,

    marginLeft: 10,

  },

  songTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  songSubtitle: {

    fontSize: 14,

    color: '#888888',

  },

  moreButton: {

    padding: 5,

  },

  moreButtonText: {

    fontSize: 20,

    color: '#888888',

  },

  albumItem: {

    marginRight: 15,

    width: 150,

  },

  albumImage: {

    width: 150,

    height: 150,

    borderRadius: 10,

  },

  albumTitle: {

    fontSize: 14,

    fontWeight: 'bold',

    marginTop: 5,

  },

  albumSubtitle: {

    fontSize: 12,

    color: '#888888',

  },

  artistItem: {

    alignItems: 'center',

    marginRight: 20,

  },

  artistImage: {

    width: 100,

    height: 100,

    borderRadius: 50,

  },

  artistName: {

    fontSize: 14,

    fontWeight: 'bold',

    marginTop: 5,

    textAlign: 'center',

  },

  nowPlayingBar: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#4285F4',

    borderTopLeftRadius: 15,

    borderTopRightRadius: 15,

  },

  nowPlayingImage: {

    width: 40,

    height: 40,

    borderRadius: 5,

  },

  nowPlayingInfo: {

    flex: 1,

    marginLeft: 10,

  },

  nowPlayingTitle: {

    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: 'bold',

  },

  nowPlayingArtist: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  heartIcon: {

    marginHorizontal: 10,

  },

  pauseButton: {

    backgroundColor: '#FFFFFF',

    borderRadius: 15,

    padding: 5,

  },

  icon: {

    width: 20,

    height: 20,

    tintColor: '#4285F4',

  },

});



export default SearchScreen;