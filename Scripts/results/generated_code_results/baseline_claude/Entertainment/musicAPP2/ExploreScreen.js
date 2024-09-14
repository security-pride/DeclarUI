import React from 'react';

import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const RecommendedItem = ({ title, artist, image }) => (

  <TouchableOpacity style={styles.recommendedItem}>

    <Image source={image} style={styles.recommendedImage} />

    <Text style={styles.recommendedTitle}>{title}</Text>

    <Text style={styles.recommendedArtist}>{artist}</Text>

  </TouchableOpacity>

);



const RecentPlayedItem = ({ title, image }) => (

  <TouchableOpacity style={styles.recentPlayedItem}>

    <Image source={image} style={styles.recentPlayedImage} />

    <Text style={styles.recentPlayedTitle}>{title}</Text>

  </TouchableOpacity>

);



const NewReleasedItem = ({ title, artist, image }) => (

  <TouchableOpacity style={styles.newReleasedItem}>

    <Image source={image} style={styles.newReleasedImage} />

    <Text style={styles.newReleasedTitle}>{title}</Text>

    <Text style={styles.newReleasedArtist}>{artist}</Text>

  </TouchableOpacity>

);



const PopularArtistItem = ({ name, image }) => (

  <TouchableOpacity style={styles.popularArtistItem}>

    <Image source={image} style={styles.popularArtistImage} />

    <Text style={styles.popularArtistName}>{name}</Text>

  </TouchableOpacity>

);



const GenreItem = ({ genre }) => (

  <TouchableOpacity style={styles.genreItem}>

    <Text style={styles.genreText}>{genre}</Text>

  </TouchableOpacity>

);



const ExploreScreen = () => {

  const navigation = useNavigation();



  const recommendedData = [

    { id: '1', title: 'Baghi 3', artist: 'Various Artists', image: require('../assets/snack-icon.png') },

    { id: '2', title: 'Surma Surma', artist: 'Various Artists', image: require('../assets/snack-icon.png') },

    { id: '3', title: 'Hindi Top 50', artist: 'Various Artists', image: require('../assets/snack-icon.png') },

  ];



  const recentPlayedData = [

    { id: '1', title: 'No Time To Die', image: require('../assets/snack-icon.png') },

    { id: '2', title: 'Illegal Weapon', image: require('../assets/snack-icon.png') },

    { id: '3', title: 'Loca', image: require('../assets/snack-icon.png') },

  ];



  const newReleasedData = [

    { id: '1', title: 'Baghi 3', artist: 'Various Artists', image: require('../assets/snack-icon.png') },

    { id: '2', title: 'Baghi 3', artist: 'Various Artists', image: require('../assets/snack-icon.png') },

  ];



  const popularArtistsData = [

    { id: '1', name: 'Justin Bieber', image: require('../assets/snack-icon.png') },

    { id: '2', name: 'Michael Jackson', image: require('../assets/snack-icon.png') },

    { id: '3', name: 'Sam Smith', image: require('../assets/snack-icon.png') },

  ];



  const genresData = ['Hip Hop', 'Pop', 'Partyholics'];



  return (

    <ScrollView style={styles.container}>

      <Text style={styles.sectionTitle}>Explore</Text>



      <Text style={styles.subSectionTitle}>Recomanded for you</Text>

      <FlatList

        data={recommendedData}

        renderItem={({ item }) => <RecommendedItem title={item.title} artist={item.artist} image={item.image} />}

        keyExtractor={item => item.id}

        horizontal

        showsHorizontalScrollIndicator={false}

      />



      <Text style={styles.subSectionTitle}>Recent Played</Text>

      <FlatList

        data={recentPlayedData}

        renderItem={({ item }) => <RecentPlayedItem title={item.title} image={item.image} />}

        keyExtractor={item => item.id}

        horizontal

        showsHorizontalScrollIndicator={false}

      />



      <Text style={styles.subSectionTitle}>New Released</Text>

      <FlatList

        data={newReleasedData}

        renderItem={({ item }) => <NewReleasedItem title={item.title} artist={item.artist} image={item.image} />}

        keyExtractor={item => item.id}

        horizontal

        showsHorizontalScrollIndicator={false}

      />



      <Text style={styles.subSectionTitle}>Popular Artist</Text>

      <FlatList

        data={popularArtistsData}

        renderItem={({ item }) => <PopularArtistItem name={item.name} image={item.image} />}

        keyExtractor={item => item.id}

        horizontal

        showsHorizontalScrollIndicator={false}

      />



      <Text style={styles.subSectionTitle}>Genres & Moods</Text>

      <FlatList

        data={genresData}

        renderItem={({ item }) => <GenreItem genre={item} />}

        keyExtractor={item => item}

        horizontal

        showsHorizontalScrollIndicator={false}

      />



      <View style={styles.nowPlayingBar}>

        <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />

        <View style={styles.nowPlayingInfo}>

          <Text style={styles.nowPlayingTitle}>Illegal Weapon 2.0</Text>

          <Text style={styles.nowPlayingArtist}>Street Dancer 3D</Text>

        </View>

        <TouchableOpacity style={styles.playPauseButton}>

          <Text style={styles.playPauseButtonText}>II</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#ffffff',

    paddingTop: 60,

  },

  sectionTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    marginLeft: 20,

    marginBottom: 20,

  },

  subSectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 20,

    marginTop: 20,

    marginBottom: 10,

  },

  recommendedItem: {

    width: 150,

    marginLeft: 20,

  },

  recommendedImage: {

    width: 150,

    height: 150,

    borderRadius: 10,

  },

  recommendedTitle: {

    marginTop: 5,

    fontSize: 16,

    fontWeight: 'bold',

  },

  recommendedArtist: {

    fontSize: 14,

    color: '#888',

  },

  recentPlayedItem: {

    width: 100,

    marginLeft: 20,

  },

  recentPlayedImage: {

    width: 100,

    height: 100,

    borderRadius: 10,

  },

  recentPlayedTitle: {

    marginTop: 5,

    fontSize: 14,

    fontWeight: 'bold',

  },

  newReleasedItem: {

    width: 150,

    marginLeft: 20,

  },

  newReleasedImage: {

    width: 150,

    height: 150,

    borderRadius: 10,

  },

  newReleasedTitle: {

    marginTop: 5,

    fontSize: 16,

    fontWeight: 'bold',

  },

  newReleasedArtist: {

    fontSize: 14,

    color: '#888',

  },

  popularArtistItem: {

    width: 100,

    marginLeft: 20,

    alignItems: 'center',

  },

  popularArtistImage: {

    width: 100,

    height: 100,

    borderRadius: 50,

  },

  popularArtistName: {

    marginTop: 5,

    fontSize: 14,

    fontWeight: 'bold',

    textAlign: 'center',

  },

  genreItem: {

    paddingHorizontal: 20,

    paddingVertical: 10,

    backgroundColor: '#ff6b6b',

    borderRadius: 20,

    marginLeft: 20,

  },

  genreText: {

    color: '#ffffff',

    fontWeight: 'bold',

  },

  nowPlayingBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#4a69bd',

    padding: 10,

    marginTop: 20,

  },

  nowPlayingImage: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  nowPlayingInfo: {

    flex: 1,

    marginLeft: 10,

  },

  nowPlayingTitle: {

    color: '#ffffff',

    fontWeight: 'bold',

  },

  nowPlayingArtist: {

    color: '#dddddd',

  },

  playPauseButton: {

    backgroundColor: '#ffffff',

    width: 30,

    height: 30,

    borderRadius: 15,

    justifyContent: 'center',

    alignItems: 'center',

  },

  playPauseButtonText: {

    fontWeight: 'bold',

  },

});



export default ExploreScreen;