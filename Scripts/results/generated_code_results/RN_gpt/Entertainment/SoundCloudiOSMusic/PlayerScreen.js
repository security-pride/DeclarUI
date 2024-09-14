import React from 'react';
import { View, Text, StyleSheet, Image, Button, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PlayerScreen = () => {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={require('../assets/snack-icon.png')} style={styles.albumArt} />
      <View style={styles.infoContainer}>
        <Text style={styles.songTitle}>All Mine</Text>
        <Text style={styles.artistName}>Kanye West</Text>
      </View>
      <View style={styles.controlsContainer}>
        <Icon.Button name="add" backgroundColor="transparent" />
        <Icon.Button name="heart" backgroundColor="transparent" />
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.timestamp}>01:30</Text>
        <View style={styles.progressBar} />
        <Text style={styles.timestamp}>03:00</Text>
      </View>
      <View style={styles.playbackControls}>
        <Icon.Button name="shuffle" backgroundColor="transparent" />
        <Icon.Button name="play-skip-back" backgroundColor="transparent" />
        <Icon.Button name="play" backgroundColor="transparent" />
        <Icon.Button name="play-skip-forward" backgroundColor="transparent" />
        <Icon.Button name="repeat" backgroundColor="transparent" />
      </View>
      <View style={styles.fullscreenControl}>
        <Icon.Button name="resize" backgroundColor="transparent" />
      </View>
      <View style={styles.adBanner}>
        <Text style={styles.adText}>Share the sound!</Text>
        <Button title="Use the app" onPress={handleNavigateHome} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  albumArt: {
    width: '100%',
    height: 300,
  },
  infoContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 18,
    color: 'gray',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  progressBar: {
    flex: 1,
    height: 3,
    backgroundColor: 'orange',
    marginHorizontal: 10,
  },
  timestamp: {
    fontSize: 14,
    color: 'gray',
  },
  playbackControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
  fullscreenControl: {
    alignItems: 'center',
    marginBottom: 30,
  },
  adBanner: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  adText: {
    fontSize: 14,
    color: 'black',
  },
});

export default PlayerScreen;