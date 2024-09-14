import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DownloadItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>
      <Text style={styles.duration}>{item.duration}</Text>
    </View>
  );
};

const DownloadsScreen = () => {
  const downloads = [
    { id: '1', title: 'Gift yourself this UI Kit and enjoy!', author: 'John Wiseberg', duration: '08:12' },
    { id: '2', title: 'Make your Mess Your Message', author: 'Mendy Santiago', duration: '12:38' },
    { id: '3', title: 'Meet Your Dreams and Make It Real', author: 'Maria Trofimova', duration: '09:46' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Downloads</Text>
      <FlatList
        data={downloads}
        renderItem={({ item }) => <DownloadItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <View style={styles.footer}>
        <Icon name="home-outline" size={30} color="#697077" />
        <Icon name="search-outline" size={30} color="#697077" />
        <Icon name="download-outline" size={30} color="#697077" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2429',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    color: '#ECECEC',
    textAlign: 'center',
    marginVertical: 20,
  },
  list: {
    paddingBottom: 100,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A3035',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    color: '#ECECEC',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  author: {
    color: '#9DA5AA',
    fontSize: 14,
  },
  duration: {
    color: '#9DA5AA',
    fontSize: 12,
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#333B40',
    padding: 3,
    borderRadius: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#1E2429',
  },
});

export default DownloadsScreen;