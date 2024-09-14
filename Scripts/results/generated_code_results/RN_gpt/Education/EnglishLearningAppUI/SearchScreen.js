import React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Find anything!</Text>
      <Text style={styles.subHeading}>Searching anything you want to learn here.</Text>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#000" />
        <TextInput style={styles.input} placeholder="Find anything!" />
      </View>
      
      <Text style={styles.chooseCategory}>Choose a category</Text>
      <View style={styles.categorySelector}>
        <TouchableOpacity style={styles.categoryButtonSelected}>
          <Text style={styles.categoryTextSelected}>Sentence</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('LessonDetail')}>
          <Text style={styles.categoryText}>Speak</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryCard}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.categoryImage}>
            <Text style={styles.categoryName}>Movie</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.categoryImage}>
            <Text style={styles.categoryName}>Travel</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate('LessonDetail')}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.categoryImage}>
            <Text style={styles.categoryName}>Music</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      
      <View style={styles.channelSection}>
        <Text style={styles.channelText}>Channel</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>view all</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.channel}>
        <View style={styles.channelInfo}>
          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
          <View>
            <Text style={styles.channelName}>Cornelia Gordon</Text>
            <Text style={styles.subscribers}>129k subscribers</Text>
          </View>
        </View>
        <Button title="<" onPress={() => navigation.navigate('Home')} />
      </View>
      
      <View style={styles.channel}>
        <View style={styles.channelInfo}>
          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
          <View>
            <Text style={styles.channelName}>Chase Bailey</Text>
            <Text style={styles.subscribers}>129k subscribers</Text>
          </View>
        </View>
        <Button title="<" onPress={() => navigation.navigate('Home')} />
      </View>
      
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Speak')}>
          <Icon name="mic" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Vocabulary')}>
          <Icon name="book" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 16,
    color: '#A0A0A0',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  input: {
    flex: 1,
    padding: 8,
    color: '#000',
  },
  chooseCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categorySelector: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    marginRight: 10,
  },
  categoryButtonSelected: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#007AFF',
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: '#000000',
  },
  categoryTextSelected: {
    color: '#FFFFFF',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  categoryCard: {
    width: 100,
    height: 130,
    borderRadius: 10,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    padding: 10,
  },
  categoryName: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  channelSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  channelText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#007AFF',
  },
  channel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  channelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  channelName: {
    fontWeight: 'bold',
  },
  subscribers: {
    color: '#A0A0A0',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default SearchScreen;