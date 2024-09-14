import React, { useState, useEffect } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const PlayerScreen = () => {

  const navigation = useNavigation();

  const [isPlaying, setIsPlaying] = useState(true);

  const [currentTime, setCurrentTime] = useState(90); // 1:30 in seconds

  const totalDuration = 180; // 3:00 in seconds



  useEffect(() => {

    let interval;

    if (isPlaying) {

      interval = setInterval(() => {

        setCurrentTime((prevTime) => {

          if (prevTime >= totalDuration) {

            clearInterval(interval);

            return totalDuration;

          }

          return prevTime + 1;

        });

      }, 1000);

    }

    return () => clearInterval(interval);

  }, [isPlaying]);



  const formatTime = (seconds) => {

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

  };



  const togglePlayPause = () => {

    setIsPlaying(!isPlaying);

  };



  const navigateToHome = () => {

    navigation.navigate('Home');

  };



  return (

    <View style={styles.container}>

      <StatusBar barStyle="light-content" />

      <ImageBackground

        source={require('../assets/snack-icon.png')}

        style={styles.backgroundImage}

      >

        <TouchableOpacity style={styles.closeButton} onPress={navigateToHome}>

          <Text style={styles.closeButtonText}>×</Text>

        </TouchableOpacity>

        <View style={styles.contentContainer}>

          <Image

            source={require('../assets/snack-icon.png')}

            style={styles.albumArt}

          />

          <Text style={styles.songTitle}>All Mine</Text>

          <Text style={styles.artistName}>Kanye West</Text>

          <View style={styles.progressContainer}>

            <View style={[styles.progressBar, { width: `${(currentTime / totalDuration) * 100}%` }]} />

          </View>

          <View style={styles.timeContainer}>

            <Text style={styles.timeText}>{formatTime(currentTime)}</Text>

            <Text style={styles.timeText}>{formatTime(totalDuration)}</Text>

          </View>

          <View style={styles.controlsContainer}>

            <TouchableOpacity style={styles.controlButton}>

              <Text style={styles.controlIcon}>🔀</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.controlButton}>

              <Text style={styles.controlIcon}>⏮</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.playPauseButton} onPress={togglePlayPause}>

              <Text style={styles.playPauseIcon}>{isPlaying ? '⏸' : '▶️'}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.controlButton}>

              <Text style={styles.controlIcon}>⏭</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.controlButton}>

              <Text style={styles.controlIcon}>🔁</Text>

            </TouchableOpacity>

          </View>

        </View>

      </ImageBackground>

      <View style={styles.bottomContainer}>

        <Text style={styles.shareText}>Share the sound!</Text>

        <Text style={styles.shareDescription}>Let your friends know what are you listening! Share this song</Text>

        <TouchableOpacity style={styles.useAppButton} onPress={navigateToHome}>

          <Text style={styles.useAppButtonText}>Use the app</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

  },

  backgroundImage: {

    flex: 1,

    resizeMode: 'cover',

    justifyContent: 'flex-end',

  },

  closeButton: {

    position: 'absolute',

    top: 40,

    left: 20,

    zIndex: 1,

  },

  closeButtonText: {

    color: '#fff',

    fontSize: 40,

  },

  contentContainer: {

    alignItems: 'center',

    paddingBottom: 20,

  },

  albumArt: {

    width: 250,

    height: 250,

    borderRadius: 10,

    marginBottom: 20,

  },

  songTitle: {

    color: '#fff',

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  artistName: {

    color: '#ccc',

    fontSize: 18,

    marginBottom: 20,

  },

  progressContainer: {

    width: '80%',

    height: 4,

    backgroundColor: 'rgba(255, 255, 255, 0.3)',

    borderRadius: 2,

    marginBottom: 10,

  },

  progressBar: {

    height: '100%',

    backgroundColor: '#fff',

    borderRadius: 2,

  },

  timeContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    width: '80%',

    marginBottom: 20,

  },

  timeText: {

    color: '#ccc',

    fontSize: 12,

  },

  controlsContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-around',

    width: '80%',

  },

  controlButton: {

    padding: 10,

  },

  controlIcon: {

    fontSize: 24,

    color: '#fff',

  },

  playPauseButton: {

    width: 60,

    height: 60,

    borderRadius: 30,

    backgroundColor: '#fff',

    justifyContent: 'center',

    alignItems: 'center',

  },

  playPauseIcon: {

    fontSize: 30,

    color: '#000',

  },

  bottomContainer: {

    backgroundColor: '#fff',

    padding: 20,

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

  },

  shareText: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  shareDescription: {

    color: '#666',

    marginBottom: 15,

  },

  useAppButton: {

    backgroundColor: '#ff5500',

    paddingVertical: 12,

    paddingHorizontal: 20,

    borderRadius: 25,

    alignSelf: 'flex-start',

  },

  useAppButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

});



export default PlayerScreen;