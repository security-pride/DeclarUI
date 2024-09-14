import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableHighlight, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrendingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trending</Text>

      <View style={styles.dropdownContainer}>
        <Button title="Partyholics" onPress={() => {}} />
        <TouchableHighlight style={styles.dropdown}>
          <Text>2020</Text>
        </TouchableHighlight>
      </View>

      <Text style={styles.subHeader}>Trending Songs</Text>

      <View style={styles.songItem}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.songImage}>
          <Text style={styles.playIcon}>▶</Text>
        </ImageBackground>
        <View>
          <Text>I'm a Freak (feat. Pitbull)</Text>
          <Text style={styles.playCount}>12,598 Played</Text>
        </View>
      </View>

      <View style={styles.songItem}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.songImage}>
          <Text style={styles.playIcon}>▶</Text>
        </ImageBackground>
        <View>
          <Text>Can't Remember To Forget</Text>
          <Text style={styles.playCount}>12,598 Played</Text>
        </View>
      </View>

      <View style={styles.songItem}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.songImage}>
          <Text style={styles.playIcon}>▶</Text>
        </ImageBackground>
        <View>
          <Text>Beyonce</Text>
          <Text style={styles.playCount}>12,598 Played</Text>
        </View>
      </View>

      <View style={styles.songItem}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.songImage}>
          <Text style={styles.playIcon}>▶</Text>
        </ImageBackground>
        <View>
          <Text>Roller Coaster (Single)</Text>
          <Text style={styles.playCount}>12,598 Played</Text>
        </View>
      </View>

      <View style={styles.songItem}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.songImage}>
          <Text style={styles.playIcon}>▶</Text>
        </ImageBackground>
        <View>
          <Text>Unconditionally</Text>
          <Text style={styles.playCount}>12,598 Played</Text>
        </View>
      </View>

      <Text style={styles.subHeader}>Trending Albums</Text>

      <View style={styles.albumRow}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.albumImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.albumImage} />
      </View>

      <View style={styles.nowPlaying}>
        <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />
        <View>
          <Text>Illegal Weapon 2.0</Text>
          <Text>Street Dancer 3D</Text>
        </View>
        <Button title="❤" onPress={() => {}} />
        <Button title="||" onPress={() => navigation.navigate('NowPlaying')} />
      </View>

      <View style={styles.navBar}>
        <View style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>Trending</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>Search</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>Library</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 32, fontWeight: 'bold', marginBottom: 10 },
  dropdownContainer: { flexDirection: 'row', marginBottom: 20 },
  dropdown: { marginLeft: 10, borderWidth: 1, padding: 5 },
  subHeader: { fontSize: 24, marginVertical: 10 },
  songItem: { flexDirection: 'row', marginVertical: 5, alignItems: 'center' },
  songImage: { width: 50, height: 50, marginRight: 10, justifyContent: 'center', alignItems: 'center' },
  playIcon: { fontSize: 18, color: '#fff' },
  playCount: { color: '#888' },
  albumRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  albumImage: { width: 100, height: 100 },
  nowPlaying: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#add8e6', padding: 10, borderRadius: 10, position: 'absolute', bottom: 80, width: '100%' },
  nowPlayingImage: { width: 50, height: 50, marginRight: 10 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', bottom: 0, width: '100%', paddingVertical: 10, backgroundColor: '#f8f8f8' },
  navItem: { alignItems: 'center' },
  navIcon: { width: 25, height: 25 }
});

export default TrendingScreen;