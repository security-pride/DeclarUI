import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlaylistScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Geri - Inder Chahal</Text>
        <Text style={styles.subtitle}>Pop Songs</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.guitarImage} />
        <View style={styles.info}>
          <Text style={styles.infoText}>Songs</Text>
          <Text style={styles.infoText}>21 Songs</Text>
          <Text style={styles.infoText}>Author</Text>
          <Text style={styles.infoText}>Various Artists</Text>
        </View>
        <TouchableOpacity style={styles.playButton}>
          <Icon name="play" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.trackList}>
        {[
          { number: '01.', title: 'Gully Boy', artist: 'Ranvir Sing' },
          { number: '02.', title: 'Apna Time Aayega', artist: 'Arijit Sing' },
          { number: '03.', title: 'Illegal Weapon 2.0', artist: 'Street Dancer 3D', highlighted: true },
          { number: '04.', title: 'Lagli Lahore Di', artist: 'Sreya Ghosal' },
          { number: '05.', title: 'Bezuban Kab Se', artist: 'Kapal Dev' },
          { number: '06.', title: 'Nachi Nachi', artist: 'Sreya Ghoshal' },
        ].map((track, index) => (
          <TouchableOpacity key={index} style={styles.trackItem} onPress={() => navigation.navigate('NowPlaying')}>
            <Text style={[styles.trackNumber, track.highlighted && styles.highlighted]}>{track.number}</Text>
            <View>
              <Text style={[styles.trackTitle, track.highlighted && styles.highlighted]}>{track.title}</Text>
              <Text style={styles.trackArtist}>{track.artist}</Text>
            </View>
            <Icon name="ellipsis-h" size={24} color="#ccc" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.footerImage} />
        <Text style={styles.footerTitle}>Illegal Weapon 2.0</Text>
        <Text style={styles.footerSubtitle}>Street Dancer 3D</Text>
        <View style={styles.footerActions}>
          <Icon name="heart" size={24} color="#ccc" />
          <TouchableOpacity onPress={() => {}}>
            <Icon name="pause" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#3E82F7',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
  },
  guitarImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginVertical: 10,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    color: '#fff',
    fontSize: 12,
  },
  playButton: {
    position: 'absolute',
    right: 20,
    bottom: -20,
    backgroundColor: '#FF4081',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackList: {
    padding: 20,
  },
  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  trackNumber: {
    fontSize: 16,
    color: '#9E9E9E',
    marginRight: 10,
  },
  trackTitle: {
    fontSize: 16,
    color: '#3C3C3C',
  },
  trackArtist: {
    fontSize: 12,
    color: '#9E9E9E',
  },
  highlighted: {
    color: '#3E82F7',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3E82F7',
    padding: 10,
    position: 'relative',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  footerTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  footerSubtitle: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 10,
  },
  footerActions: {
    position: 'absolute',
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PlaylistScreen;