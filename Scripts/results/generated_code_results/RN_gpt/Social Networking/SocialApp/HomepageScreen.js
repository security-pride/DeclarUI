import React from 'react';
import { View, Text, TextInput, Image, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomepageScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>Forging New Bonds and Friendships</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="notifications-outline" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="settings-outline" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal style={styles.stories}>
        <View style={styles.story}>
          <Image source={require('../assets/snack-icon.png')} style={styles.storyImage} />
          <Text>My Story</Text>
          <View style={styles.addStoryIcon}>
            <Icon name="add-circle-outline" size={20} />
          </View>
        </View>

        {['Hasley', 'Javier', 'Natalie'].map(name => (
          <View key={name} style={styles.story}>
            <Image source={require('../assets/snack-icon.png')} style={styles.storyImage} />
            <Text>{name}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.searchBar}>
        <Icon name="search" size={20} />
        <TextInput 
          placeholder="Search for a friend or partners" 
          style={styles.searchInput} 
          onTouchStart={() => navigation.navigate('SearchResult')}
        />
      </View>

      <Text style={styles.recommendText}>Recommend for You</Text>
      
      <View style={styles.categories}>
        {['All', 'Photography', 'Outdoor', 'Anime'].map(category => (
          <TouchableOpacity key={category} style={styles.categoryButton}>
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.recommendationCard} onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.recommendationImage} />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>⚡ Potential Match!</Text>
        </View>
        <View style={styles.recommendationInfo}>
          <Text style={styles.recommendationName}>Klee Gracia, 24</Text>
          <Text style={styles.recommendationBio}>Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        {['Discover', 'Likes', 'Messages', 'Profile'].map(tab => (
          <TouchableOpacity 
            key={tab} 
            style={styles.bottomNavItem} 
            onPress={() => navigation.navigate(tab === 'Messages' ? 'Messages' : tab === 'Profile' ? 'Profile' : 'Homepage')}
          >
            <Icon name={tab === 'Discover' ? 'home' : tab.toLowerCase()} size={30} />
            <Text>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  menuButton: {
    padding: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerIcons: {
    flexDirection: 'row'
  },
  stories: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 15
  },
  story: {
    alignItems: 'center',
    marginRight: 15
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  addStoryIcon: {
    position: 'absolute',
    bottom: 5,
    right: 0
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginVertical: 10
  },
  searchInput: {
    marginLeft: 10,
    flex: 1
  },
  recommendText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15,
    marginVertical: 10
  },
  categoryButton: {
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  recommendationCard: {
    margin: 15,
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    overflow: 'hidden'
  },
  recommendationImage: {
    width: '100%',
    height: 200
  },
  overlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
    padding: 5
  },
  overlayText: {
    color: 'white'
  },
  recommendationInfo: {
    marginTop: 10
  },
  recommendationName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  recommendationBio: {
    fontSize: 14,
    color: 'gray'
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#f1f1f1'
  },
  bottomNavItem: {
    alignItems: 'center'
  }
});

export default HomepageScreen;