import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Slider from '@react-native-community/slider';



const { width } = Dimensions.get('window');



const NowPlayingScreen = () => {

  const navigation = useNavigation();

  const [isPlaying, setIsPlaying] = useState(true);

  const [currentTime, setCurrentTime] = useState(0);



  const handlePlayPause = () => {

    setIsPlaying(!isPlaying);

  };



  const handleSliderChange = (value) => {

    setCurrentTime(value);

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Now Playing</Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.chevronDown} />

        </TouchableOpacity>

      </View>



      <View style={styles.imageContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.albumArt} />

      </View>



      <View style={styles.songInfo}>

        <Text style={styles.songTitle}>Apna Time Aayega</Text>

        <Text style={styles.artistName}>Arijit Sing</Text>

      </View>



      <View style={styles.progressContainer}>

        <Slider

          style={styles.progressBar}

          minimumValue={0}

          maximumValue={5.06}

          value={currentTime}

          onValueChange={handleSliderChange}

          minimumTrackTintColor="#FF4081"

          maximumTrackTintColor="#E0E0E0"

          thumbTintColor="#FF4081"

        />

        <View style={styles.timeContainer}>

          <Text style={styles.timeText}>0:00</Text>

          <Text style={styles.timeText}>5:06</Text>

        </View>

      </View>



      <View style={styles.controls}>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={handlePlayPause}>

          <View style={styles.playPauseButton}>

            <Image

              source={isPlaying ? require('../assets/snack-icon.png') : require('../assets/snack-icon.png')}

              style={styles.playPauseIcon}

            />

          </View>

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.bottomIcons}>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={[styles.bottomIcon, { tintColor: '#FF4081' }]} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={[styles.bottomIcon, { tintColor: '#FF4081' }]} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon} />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingTop: 60,

    paddingBottom: 20,

    backgroundColor: '#4285F4',

    borderBottomLeftRadius: 30,

    borderBottomRightRadius: 30,

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#FFFFFF',

  },

  chevronDown: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

  },

  imageContainer: {

    alignItems: 'center',

    marginTop: 30,

  },

  albumArt: {

    width: width - 80,

    height: width - 80,

    borderRadius: 20,

  },

  songInfo: {

    alignItems: 'center',

    marginTop: 20,

  },

  songTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#333333',

  },

  artistName: {

    fontSize: 18,

    color: '#666666',

    marginTop: 5,

  },

  progressContainer: {

    marginHorizontal: 20,

    marginTop: 30,

  },

  progressBar: {

    width: '100%',

    height: 40,

  },

  timeContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: -10,

  },

  timeText: {

    color: '#666666',

  },

  controls: {

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: 20,

  },

  controlIcon: {

    width: 30,

    height: 30,

    marginHorizontal: 30,

  },

  playPauseButton: {

    width: 70,

    height: 70,

    borderRadius: 35,

    backgroundColor: '#4285F4',

    justifyContent: 'center',

    alignItems: 'center',

  },

  playPauseIcon: {

    width: 30,

    height: 30,

    tintColor: '#FFFFFF',

  },

  bottomIcons: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    marginTop: 40,

    paddingHorizontal: 20,

  },

  bottomIcon: {

    width: 24,

    height: 24,

    tintColor: '#CCCCCC',

  },

});



export default NowPlayingScreen;