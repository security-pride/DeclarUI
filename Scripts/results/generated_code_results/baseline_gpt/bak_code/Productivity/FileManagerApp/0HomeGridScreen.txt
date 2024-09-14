import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeGridScreen = () => {
  const items = [
    {
      id: 1,
      image: '../assets/snack-icon.png',
      title: 'Photos & videos',
      count: '3471 Items',
    },
    {
      id: 2,
      image: '../assets/snack-icon.png',
      title: 'Favourite videos',
      count: '13 Items',
    },
    {
      id: 3,
      image: '../assets/snack-icon.png',
      title: 'iTunes',
      count: '27 Items',
    },
    {
      id: 4,
      image: '../assets/snack-icon.png',
      title: 'Recently deleted',
      count: '13 Items',
    },
    {
      id: 5,
      image: '../assets/snack-icon.png',
      title: 'Plant photoshoot',
      count: '25, Feb 2020',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity>
          <Icon name="search-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.grid}>
        {items.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.count}>{item.count}</Text>
            <TouchableOpacity style={styles.options}>
              <Entypo name="dots-three-vertical" size={18} color="#000" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="home-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="time-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="add-circle-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="wifi-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  count: {
    color: '#555',
  },
  options: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
});

export default HomeGridScreen;