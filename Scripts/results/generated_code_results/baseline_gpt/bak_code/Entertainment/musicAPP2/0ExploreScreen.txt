import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ExploreScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explore</Text>

      <Section title="Recommended for you">
        <HorizontalScroll>
          <AlbumCard title="Baghi 3" artist="Various Artists" />
          <AlbumCard title="Surma Surma" artist="Various Artists" />
          <AlbumCard title="Hindi Tashan" artist="Various Artists" />
        </HorizontalScroll>
      </Section>

      <Section title="Recent Played">
        <HorizontalScroll>
          <AlbumCard title="No Time To Die" artist="" />
          <AlbumCard title="Illegal Weapon" artist="" />
          <AlbumCard title="Loca" artist="" />
        </HorizontalScroll>
      </Section>

      <Section title="New Released">
        <HorizontalScroll>
          <AlbumCard title="Baghi 3" artist="Various Artists" />
          <AlbumCard title="Baghi 3" artist="Various Artists" />
          <AlbumCard title="Baghi 3" artist="Various Artists" />
        </HorizontalScroll>
      </Section>

      <Section title="Popular Artist">
        <HorizontalScroll>
          <ArtistCard name="Justin Bieber" />
          <ArtistCard name="Michael Jackson" />
          <ArtistCard name="Sam Smith" />
        </HorizontalScroll>
      </Section>

      <Section title="Genres & Moods">
        <View style={styles.genreContainer}>
          <GenreButton name="Hip Hop" />
          <GenreButton name="Pop" />
          <GenreButton name="Partyholics" />
        </View>
      </Section>

      <View style={styles.playingContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.playingImage} />
        <View style={styles.playingInfo}>
          <Text style={styles.playingTitle}>Illegal Weapon 2.0</Text>
          <Text style={styles.playingArtist}>Street Dancer 3D</Text>
        </View>
        <Icon name="heart-outline" size={24} color="#fff" style={styles.icon} />
        <Icon name="pause-outline" size={24} color="#fff" style={styles.icon} />
      </View>
    </ScrollView>
  );
};

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const HorizontalScroll = ({ children }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {children}
  </ScrollView>
);

const AlbumCard = ({ title, artist }) => (
  <TouchableOpacity style={styles.albumCard}>
    <Image source={require('../assets/snack-icon.png')} style={styles.albumImage} />
    <Text style={styles.albumTitle}>{title}</Text>
    <Text style={styles.albumArtist}>{artist}</Text>
  </TouchableOpacity>
);

const ArtistCard = ({ name }) => (
  <TouchableOpacity style={styles.artistCard}>
    <Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />
    <Text style={styles.artistName}>{name}</Text>
  </TouchableOpacity>
);

const GenreButton = ({ name }) => (
  <TouchableOpacity style={styles.genreButton}>
    <Text style={styles.genreText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginVertical: 20,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  albumCard: {
    width: 120,
    marginRight: 15,
  },
  albumImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  albumTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 5,
  },
  albumArtist: {
    fontSize: 12,
    color: '#888',
  },
  artistCard: {
    width: 100,
    marginRight: 15,
  },
  artistImage: {
    width: '100%',
    height: 100,
    borderRadius: 50,
  },
  artistName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
    marginTop: 5,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreButton: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    marginBottom: 10,
  },
  genreText: {
    fontSize: 14,
    color: '#fff',
  },
  playingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  playingImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  playingInfo: {
    flex: 1,
    marginLeft: 10,
  },
  playingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  playingArtist: {
    fontSize: 14,
    color: '#fff',
  },
  icon: {
    marginLeft: 10,
  },
});

export default ExploreScreen;