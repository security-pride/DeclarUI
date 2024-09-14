import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const { width } = Dimensions.get('window');



const PlayerScreen = () => {

  const navigation = useNavigation();

  const [isPlaying, setIsPlaying] = useState(true);

  const [isFavorite, setIsFavorite] = useState(false);



  const togglePlay = () => setIsPlaying(!isPlaying);

  const toggleFavorite = () => setIsFavorite(!isFavorite);



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

      </View>

      

      <View style={styles.albumArtContainer}>

        <Image

          source={require('../assets/snack-icon.png')}

          style={styles.albumArt}

          resizeMode="cover"

        />

        <View style={styles.albumOverlay}>

          <Text style={styles.overlayText}>I love being</Text>

          <Text style={styles.overlayText}>Bi-Polar</Text>

          <Text style={styles.overlayText}>it's awesome</Text>

        </View>

      </View>



      <View style={styles.songInfo}>

        <TouchableOpacity style={styles.addButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.addIcon} />

        </TouchableOpacity>

        <View style={styles.titleArtist}>

          <Text style={styles.songTitle}>All Mine</Text>

          <Text style={styles.artistName}>Kanye West</Text>

        </View>

        <TouchableOpacity onPress={toggleFavorite}>

          <Image

            source={isFavorite ? require('../assets/snack-icon.png') : require('../assets/snack-icon.png')}

            style={styles.heartIcon}

          />

        </TouchableOpacity>

      </View>



      <View style={styles.progressContainer}>

        <View style={styles.progressBar}>

          <View style={[styles.progress, { width: '36%' }]} />

        </View>

        <View style={styles.timeContainer}>

          <Text style={styles.timeText}>01:30</Text>

          <Text style={styles.timeText}>03:00</Text>

        </View>

      </View>



      <View style={styles.controls}>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={togglePlay}>

          <Image

            source={isPlaying ? require('../assets/snack-icon.png') : require('../assets/snack-icon.png')}

            style={styles.playPauseIcon}

          />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.shareContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.instagramIcon} />

        <View style={styles.shareTextContainer}>

          <Text style={styles.shareTitle}>Share the sound!</Text>

          <Text style={styles.shareSubtitle}>Let your friends know what are you listening! Share this song</Text>

        </View>

        <TouchableOpacity style={styles.useAppButton}>

          <Text style={styles.useAppButtonText}>Use the app</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    paddingHorizontal: 20,

    paddingTop: 20,

    left: 320,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  albumArtContainer: {

    width: width - 40,

    height: width - 40,

    alignSelf: 'center',

    marginTop: 20,

    borderRadius: 20,

    overflow: 'hidden',

  },

  albumArt: {

    width: '100%',

    height: '100%',

  },

  albumOverlay: {

    position: 'absolute',

    bottom: 20,

    left: 20,

  },

  overlayText: {

    color: '#4BEE70',

    fontSize: 18,

    fontWeight: 'bold',

  },

  songInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    marginHorizontal: 20,

    marginTop: 20,

  },

  addButton: {

    width: 30,

    height: 30,

    borderRadius: 15,

    backgroundColor: '#eee',

    justifyContent: 'center',

    alignItems: 'center',

  },

  addIcon: {

    width: 15,

    height: 15,

  },

  titleArtist: {

    flex: 1,

    marginHorizontal: 15,

    marginLeft: 100

  },

  songTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  artistName: {

    fontSize: 14,

    color: '#FF6B00',

  },

  heartIcon: {

    width: 24,

    height: 24,

  },

  progressContainer: {

    marginHorizontal: 20,

    marginTop: 20,

  },

  progressBar: {

    height: 3,

    backgroundColor: '#eee',

    borderRadius: 1.5,

  },

  progress: {

    height: '100%',

    backgroundColor: '#FF6B00',

    borderRadius: 1.5,

  },

  timeContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 5,

  },

  timeText: {

    fontSize: 12,

    color: '#888',

  },

  controls: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginHorizontal: 40,

    marginTop: 30,

  },

  controlIcon: {

    width: 24,

    height: 24,

  },

  playPauseIcon: {

    width: 60,

    height: 60,

  },

  shareContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF4EE',

    marginHorizontal: 20,

    marginTop: 40,

    padding: 15,

    borderRadius: 10,

  },

  instagramIcon: {

    width: 40,

    height: 40,

  },

  shareTextContainer: {

    flex: 1,

    marginLeft: 10,

  },

  shareTitle: {

    fontWeight: 'bold',

  },

  shareSubtitle: {

    fontSize: 12,

    color: '#888',

  },

  useAppButton: {

    backgroundColor: '#FF6B00',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 15,

  },

  useAppButtonText: {

    color: '#fff',

    fontSize: 12,

    fontWeight: 'bold',

  },

});



export default PlayerScreen;