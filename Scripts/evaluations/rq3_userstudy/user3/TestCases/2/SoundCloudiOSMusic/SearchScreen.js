import React, { useState } from 'react';

import {

  View,

  Text,

  Image,

  StyleSheet,

  TextInput,

  FlatList,

  TouchableOpacity,

  SafeAreaView,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');



  const recentSearches = [

    { id: '1', title: 'Better Now', artist: 'Post Malone', image: require('../assets/snack-icon.png') },

    { id: '2', title: 'Kimberly Evans', artist: 'Calvin Harris, Dua Lipa', image: require('../assets/snack-icon.png') },

    { id: '3', title: 'I Like It', artist: 'Cardi B, Bad Bunny, J Balvin', image: require('../assets/snack-icon.png') },

    { id: '4', title: 'Girls Like You (feat Cardi B)', artist: 'Maroon 5, Cardi B', image: require('../assets/snack-icon.png') },

    { id: '5', title: 'Back To You', artist: 'Selena Gomez', image: require('../assets/snack-icon.png') },

    { id: '6', title: 'Lucid Dreams', artist: 'Juice WRLD', image: require('../assets/snack-icon.png') },

    { id: '7', title: 'No Tears Left To Cry', artist: 'Ariana Grande', image: require('../assets/snack-icon.png') },

    { id: '8', title: 'Nice For What', artist: 'Drake', image: require('../assets/snack-icon.png') },

    { id: '9', title: 'Youngblood', artist: '5 Seconds of Summer', image: require('../assets/snack-icon.png') },

  ];



  const renderRecentItem = ({ item }) => (

    <View style={styles.recentItem}>

      <Image source={item.image} style={styles.recentItemImage} />

      <View style={styles.recentItemInfo}>

        <Text style={styles.recentItemTitle}>{item.title}</Text>

        <Text style={styles.recentItemArtist}>{item.artist}</Text>

      </View>

      <TouchableOpacity style={styles.removeButton}>

        <Text style={styles.removeButtonText}>×</Text>

      </TouchableOpacity>

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.searchContainer}>

        <View style={styles.searchInputContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="Search that song!"

            value={searchQuery}

            onChangeText={setSearchQuery}

          />

        </View>

        <TouchableOpacity style={styles.shazamButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.shazamIcon} />

        </TouchableOpacity>

      </View>



      <Text style={styles.recentsTitle}>Recents</Text>



      <FlatList

        data={recentSearches}

        renderItem={renderRecentItem}

        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}

      />



      <View style={styles.nowPlayingBar}>

        <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />

        <View style={styles.nowPlayingInfo}>

          <Text style={styles.nowPlayingSong}>All Mine</Text>

          <Text style={styles.nowPlayingArtist}>Kanye West</Text>

        </View>

        <TouchableOpacity style={styles.playButton}  onPress={() => navigation.navigate('Player')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 15,

    paddingVertical: 10,

  },

  searchInputContainer: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 25,

    paddingHorizontal: 15,

    marginRight: 10,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  shazamButton: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#4285F4',

    justifyContent: 'center',

    alignItems: 'center',

  },

  shazamIcon: {

    width: 24,

    height: 24,

    tintColor: '#fff',

  },

  recentsTitle: {

    fontSize: 22,

    fontWeight: 'bold',

    marginLeft: 15,

    marginTop: 20,

    marginBottom: 10,

  },

  recentItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 10,

    paddingHorizontal: 15,

  },

  recentItemImage: {

    width: 50,

    height: 50,

    borderRadius: 5,

    marginRight: 15,

  },

  recentItemInfo: {

    flex: 1,

  },

  recentItemTitle: {

    fontSize: 16,

    fontWeight: '500',

  },

  recentItemArtist: {

    fontSize: 14,

    color: '#888',

  },

  removeButton: {

    padding: 5,

  },

  removeButtonText: {

    fontSize: 20,

    color: '#888',

  },

  nowPlayingBar: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#f8f8f8',

    borderTopWidth: 1,

    borderTopColor: '#eee',

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

  nowPlayingSong: {

    fontWeight: 'bold',

  },

  nowPlayingArtist: {

    color: '#888',

    fontSize: 12,

  },

  playButton: {

    width: 30,

    height: 30,

    justifyContent: 'center',

    alignItems: 'center',

  },

  playIcon: {

    width: 20,

    height: 20,

  },

});



export default SearchScreen;