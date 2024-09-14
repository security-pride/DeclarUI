import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const PlaySongScreen = () => {

  const navigation = useNavigation();

  const [isPlaying, setIsPlaying] = useState(true);

  const [currentTime, setCurrentTime] = useState(195); // 3:15 in seconds

  const totalTime = 266; // 4:26 in seconds



  useEffect(() => {

    const timer = setInterval(() => {

      if (isPlaying && currentTime < totalTime) {

        setCurrentTime(prevTime => prevTime + 1);

      }

    }, 1000);



    return () => clearInterval(timer);

  }, [isPlaying, currentTime]);



  const formatTime = (seconds) => {

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

  };



  const progressPercentage = (currentTime / totalTime) * 100;



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.backButton}>{'<'}</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Now Playing</Text>

        <TouchableOpacity>

          <Text style={styles.menuButton}>⋮</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.albumArtContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.albumArt} />

        <View style={styles.progressCircle}>

          <View style={[styles.progressArc, { transform: [{ rotate: `${progressPercentage * 3.6}deg` }] }]} />

        </View>

      </View>



      <View style={styles.songInfo}>

        <Text style={styles.timeInfo}>{`${formatTime(currentTime)} | ${formatTime(totalTime)}`}</Text>

        <Text style={styles.songTitle}>Black or White</Text>

        <Text style={styles.artistAlbum}>Michael Jackson • Album - Dangerous</Text>

      </View>



      <View style={styles.visualizer}>

        {/* Placeholder for audio visualizer */}

        {[...Array(20)].map((_, index) => (

          <View key={index} style={[styles.visualizerBar, { height: Math.random() * 50 + 10 }]} />

        ))}

      </View>



      <View style={styles.controls}>

        <TouchableOpacity>

          <Text style={styles.controlButton}>⏮</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>

          <Text style={styles.playPauseButton}>{isPlaying ? '⏸' : '▶'}</Text>

        </TouchableOpacity>

        <TouchableOpacity>

          <Text style={styles.controlButton}>⏭</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.additionalControls}>

        <TouchableOpacity style={styles.additionalButton}>

          <Text style={styles.additionalButtonIcon}>📃</Text>

          <Text style={styles.additionalButtonText}>Playlist</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.additionalButton}>

          <Text style={styles.additionalButtonIcon}>🔀</Text>

          <Text style={styles.additionalButtonText}>Shuffle</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.additionalButton}>

          <Text style={styles.additionalButtonIcon}>🔁</Text>

          <Text style={styles.additionalButtonText}>Repeat</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.additionalButton}>

          <Text style={styles.additionalButtonIcon}>🎚</Text>

          <Text style={styles.additionalButtonText}>EQ</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.additionalButton}>

          <Text style={styles.additionalButtonIcon}>❤️</Text>

          <Text style={styles.additionalButtonText}>Favourites</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Text style={styles.tabIcon}>🏠</Text>

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Songs')}>

          <Text style={styles.tabIcon}>🎵</Text>

          <Text style={styles.tabText}>Songs</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Text style={styles.tabIcon}>⚙️</Text>

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

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  backButton: {

    fontSize: 24,

    color: 'white',

  },

  headerTitle: {

    fontSize: 18,

    color: 'white',

    fontWeight: 'bold',

  },

  menuButton: {

    fontSize: 24,

    color: 'white',

  },

  albumArtContainer: {

    alignItems: 'center',

    marginTop: 20,

  },

  albumArt: {

    width: 300,

    height: 300,

    borderRadius: 150,

  },

  progressCircle: {

    position: 'absolute',

    width: 310,

    height: 310,

    borderRadius: 155,

    borderWidth: 5,

    borderColor: 'rgba(255, 255, 255, 0.1)',

  },

  progressArc: {

    width: 155,

    height: 310,

    position: 'absolute',

    top: 0,

    right: 0,

    borderTopRightRadius: 155,

    borderBottomRightRadius: 155,

    borderLeftWidth: 5,

    borderTopWidth: 5,

    borderRightWidth: 5,

    borderBottomWidth: 5,

    borderColor: '#FF69B4',

    transform: [{ rotate: '0deg' }],

  },

  songInfo: {

    alignItems: 'center',

    marginTop: 20,

  },

  timeInfo: {

    color: '#999',

    fontSize: 14,

  },

  songTitle: {

    color: 'white',

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 10,

  },

  artistAlbum: {

    color: '#999',

    fontSize: 16,

    marginTop: 5,

  },

  visualizer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-end',

    height: 60,

    marginHorizontal: 20,

    marginTop: 20,

  },

  visualizerBar: {

    width: 4,

    backgroundColor: '#8A2BE2',

    borderRadius: 2,

  },

  controls: {

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: -60,

  },

  controlButton: {

    fontSize: 36,

    color: 'white',

    marginHorizontal: 30,

  },

  playPauseButton: {

    fontSize: 48,

    color: 'white',

  },

  additionalControls: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginTop: -5,

  },

  additionalButton: {

    alignItems: 'center',

  },

  additionalButtonIcon: {

    fontSize: 24,

  },

  additionalButtonText: {

    color: 'white',

    fontSize: 12,

    marginTop: 5,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#333',

    paddingVertical: 10,

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    fontSize: 24,

  },

  tabText: {

    color: 'white',

    fontSize: 12,

    marginTop: 5,

  },

});



export default PlaySongScreen;