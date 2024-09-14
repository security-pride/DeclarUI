import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const DownloadsScreen = () => {
  const navigation = useNavigation();

  const handleCourseDetailNavigation = (item) => {
    navigation.navigate('CourseDetail', { item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Downloads</Text>
        <Image style={styles.avatar} source={require('../assets/snack-icon.png')} />
      </View>
      <View style={styles.downloadList}>
        {downloadItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.downloadItem} onPress={() => handleCourseDetailNavigation(item)}>
            <ImageBackground style={styles.thumbnail} source={require('../assets/snack-icon.png')}>
              <Text style={styles.duration}>{item.duration}</Text>
            </ImageBackground>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.instructor}>{item.instructor}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bottomNav}>
        <Icon name="home" style={styles.icon} />
        <Icon name="search" style={styles.icon} />
        <Icon name="download" style={styles.iconActive} />
      </View>
    </View>
  );
};

const downloadItems = [
  { title: 'Gift yourself this UI Kit and enjoy!', instructor: 'John Wiseberg', duration: '08:12' },
  { title: 'Make your Mess Your Message', instructor: 'Mendy Santiago', duration: '12:38' },
  { title: 'Meet Your Dreams and Make It Real', instructor: 'Maria Trofimova', duration: '09:46' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1c23',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  downloadList: {
    flex: 1,
  },
  downloadItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  thumbnail: {
    width: 100,
    height: 70,
    justifyContent: 'flex-end',
  },
  duration: {
    color: '#fff',
    fontSize: 12,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 4,
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  instructor: {
    color: '#888',
    fontSize: 14,
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#111217',
    height: 60,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  icon: {
    color: '#888',
    fontSize: 24,
  },
  iconActive: {
    color: '#fff',
    fontSize: 24,
  },
});

export default DownloadsScreen;