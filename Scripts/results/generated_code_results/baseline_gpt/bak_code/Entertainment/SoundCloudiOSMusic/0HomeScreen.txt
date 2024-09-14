import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Hots now</Text>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.image} />
            <Text style={styles.overlayText}>Summer Vibes</Text>
            <Text style={styles.cardText}>Summer Vibes</Text>
            <Text style={styles.subText}>1,300,231 FOLLOWERS</Text>
          </View>
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.image} />
            <Text style={styles.overlayText}>Rap Zone</Text>
            <Text style={styles.cardText}>Rap Zone</Text>
            <Text style={styles.subText}>650,231 FOLLOWERS</Text>
          </View>
        </View>

        <Text style={styles.header}>Mood</Text>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.image} />
            <Text style={styles.overlayText}>Shower Time</Text>
            <Text style={styles.cardText}>Shower Time</Text>
            <Text style={styles.subText}>1,300,231 FOLLOWERS</Text>
          </View>
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.image} />
            <Text style={styles.overlayText}>Old School</Text>
            <Text style={styles.cardText}>Old School</Text>
            <Text style={styles.subText}>300,231 FOLLOWERS</Text>
          </View>
        </View>

        <Text style={styles.header}>Popular artists</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.artistCard}>
            <Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />
            <Text style={styles.artistText}>Ed Sheeran</Text>
          </View>
          <View style={styles.artistCard}>
            <Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />
            <Text style={styles.artistText}>Rita Ora</Text>
          </View>
          <View style={styles.artistCard}>
            <Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />
            <Text style={styles.artistText}>Eminem</Text>
          </View>
          <View style={styles.artistCard}>
            <Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />
            <Text style={styles.artistText}>Dua Lipa</Text>
          </View>
        </ScrollView>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.songText}>All Mine</Text>
        <Text style={styles.artistTextFooter}>Kanye West</Text>
        <View style={styles.iconRow}>
          <Icon name="bolt" size={24} color={'#ff6347'} />
          <Icon name="headphones" size={24} color={'#000'} />
          <Icon name="search" size={24} color={'#000'} />
          <Icon name="play-circle" size={24} color={'#ff6347'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    color: '#ff6347',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    width: 150,
    elevation: 3,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },
  overlayText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardText: {
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
  },
  artistCard: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  artistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  artistText: {
    marginTop: 5,
    fontSize: 12,
  },
  footer: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  songText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6347',
  },
  artistTextFooter: {
    fontSize: 14,
    color: '#888',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 150,
  },
});

export default HomeScreen;