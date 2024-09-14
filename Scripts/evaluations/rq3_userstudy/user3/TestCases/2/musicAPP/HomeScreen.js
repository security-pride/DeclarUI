import React from 'react';

import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const RecommendedItem = ({ title, artist, image }) => (

    <TouchableOpacity style={styles.recommendedItem}>

      <Image source={image} style={styles.recommendedImage} />

      <Text style={styles.recommendedTitle}>{title}</Text>

      <Text style={styles.recommendedArtist}>{artist}</Text>

    </TouchableOpacity>

  );



  const PlaylistItem = ({ title, artist, image }) => (

    <TouchableOpacity style={styles.playlistItem}>

      <Image source={image} style={styles.playlistImage} />

      <Text style={styles.playlistTitle}>{title}</Text>

      <Text style={styles.playlistArtist}>{artist}</Text>

    </TouchableOpacity>

  );



  const RecentlyPlayedItem = ({ title, artist, rating }) => (

    <View style={styles.recentlyPlayedItem}>

      <TouchableOpacity style={styles.playButton} onPress={()=> navigation.navigate('PlaySong')}>

        <Text style={styles.playIcon}>▶</Text>

      </TouchableOpacity>

      <View style={styles.songInfo}>

        <Text style={styles.songTitle}>{title}</Text>

        <Text style={styles.songArtist}>{artist}</Text>

      </View>

      <View style={styles.ratingContainer}>

        {[1, 2, 3, 4, 5].map((star) => (

          <Text key={star} style={[styles.star, star <= rating && styles.starFilled]}>★</Text>

        ))}

      </View>

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity>

            <Text style={styles.menuIcon}>☰</Text>

          </TouchableOpacity>

          <View style={styles.searchBar}>

            <TextInput

              style={styles.searchInput}

              placeholder="Search album song"

              placeholderTextColor="#666"

            />

          </View>

        </View>



        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Hot Recommended</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <RecommendedItem

              title="Sound of Sky"

              artist="Dilon Bruce"

              image={require('../assets/snack-icon.png')}

            />

            <RecommendedItem

              title="Girl on Fire"

              artist="Alecia Keys"

              image={require('../assets/snack-icon.png')}

            />

          </ScrollView>

        </View>



        <View style={styles.section}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Playlist</Text>

            <TouchableOpacity>

              <Text style={styles.viewAllText}>View All</Text>

            </TouchableOpacity>

          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <PlaylistItem

              title="Classic Playlist"

              artist="Piano Guys"

              image={require('../assets/snack-icon.png')}

            />

            <PlaylistItem

              title="Summer Playlist"

              artist="Dilon Bruce"

              image={require('../assets/snack-icon.png')}

            />

            <PlaylistItem

              title="Pop Music"

              artist="Michael Jackson"

              image={require('../assets/snack-icon.png')}

            />

          </ScrollView>

        </View>



        <View style={styles.section}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Recently Played</Text>

            <TouchableOpacity>

              <Text style={styles.viewAllText}>View All</Text>

            </TouchableOpacity>

          </View>

          <RecentlyPlayedItem title="Billie Jean" artist="Michael Jackson" rating={4} />

          <RecentlyPlayedItem title="Earth Song" artist="Michael Jackson" rating={5} />

          <RecentlyPlayedItem title="Mirror" artist="Justin Timberlake" rating={3} />

          <RecentlyPlayedItem title="Remember the Time" artist="Michael Jackson" rating={4} />

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Songs')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Songs</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Settings</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1E1E1E',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

  },

  menuIcon: {

    fontSize: 24,

    color: 'white',

    marginRight: 16,

  },

  searchBar: {

    flex: 1,

    backgroundColor: '#333',

    borderRadius: 20,

    paddingHorizontal: 16,

  },

  searchInput: {

    color: 'white',

    height: 40,

  },

  section: {

    marginTop: 24,

    paddingHorizontal: 16,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  sectionTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: 'white',

  },

  viewAllText: {

    color: '#FF69B4',

    fontSize: 14,

  },

  recommendedItem: {

    marginRight: 16,

    width: 200,

  },

  recommendedImage: {

    width: 200,

    height: 120,

    borderRadius: 8,

  },

  recommendedTitle: {

    color: 'white',

    fontSize: 16,

    marginTop: 8,

  },

  recommendedArtist: {

    color: '#999',

    fontSize: 14,

  },

  playlistItem: {

    marginRight: 16,

    width: 120,

  },

  playlistImage: {

    width: 120,

    height: 120,

    borderRadius: 8,

  },

  playlistTitle: {

    color: 'white',

    fontSize: 14,

    marginTop: 8,

  },

  playlistArtist: {

    color: '#999',

    fontSize: 12,

  },

  recentlyPlayedItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 16,

  },

  playButton: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#333',

    justifyContent: 'center',

    alignItems: 'center',

  },

  playIcon: {

    color: '#FF69B4',

    fontSize: 20,

  },

  songInfo: {

    flex: 1,

    marginLeft: 16,

  },

  songTitle: {

    color: 'white',

    fontSize: 16,

  },

  songArtist: {

    color: '#999',

    fontSize: 14,

  },

  ratingContainer: {

    flexDirection: 'row',

  },

  star: {

    color: '#666',

    fontSize: 16,

  },

  starFilled: {

    color: '#FF69B4',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#333',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#999',

  },

  tabText: {

    color: '#999',

    fontSize: 12,

    marginTop: 4,

  },

  activeTab: {

    tintColor: '#FF69B4',

  },

  activeTabText: {

    color: '#FF69B4',

  },

});



export default HomeScreen;