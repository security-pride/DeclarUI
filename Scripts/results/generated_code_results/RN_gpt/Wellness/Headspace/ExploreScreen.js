import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Add this import for navigation

const ExploreScreen = () => {
  const navigation = useNavigation(); // Initialize useNavigation hook

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.searchBar} 
        placeholder="Search exercises"
        placeholderTextColor="#ccc"
      />
      
      <View style={styles.row}>
        <TouchableOpacity style={[styles.categoryButton, styles.meditate]}>
          <Text style={styles.categoryText}>Meditate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.categoryButton, styles.sleep]}>
          <Text style={styles.categoryText}>Sleep</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity 
          style={[styles.categoryButton, styles.move]}
          onPress={() => navigation.navigate('Move')} // Redirection to Move
        >
          <Text style={styles.categoryText}>Move</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.categoryButton, styles.music]}>
          <Text style={styles.categoryText}>Music</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={[styles.categoryButton, styles.podcasts]}>
        <Text style={styles.categoryText}>Podcasts</Text>
      </TouchableOpacity>

      <View style={styles.promoSection}>
        <Text style={styles.promoText}>Unlock the Headspace Library</Text>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>Start My Free Trial</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.featuredContent, styles.politics]}>
        <Text style={styles.featuredText}>Politics Without Panic</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.featuredContent, styles.anxiety]}>
        <Text style={styles.featuredText}>Calming Everyday Anxiety</Text>
      </TouchableOpacity>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')} // Redirection to Home
        >
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.navText}>Today</Text>
        </TouchableOpacity>
        <View style={styles.navItemActive}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.navTextActive}>Explore</Text>
        </View>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('CalmMethods')} // Redirection to CalmMethods
        >
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1222',
    padding: 16,
  },
  searchBar: {
    backgroundColor: '#1c2036',
    borderRadius: 8,
    padding: 8,
    color: '#fff',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryButton: {
    flex: 1,
    margin: 4,
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  meditate: {
    backgroundColor: 'orange',
  },
  sleep: {
    backgroundColor: 'purple',
  },
  move: {
    backgroundColor: 'pink',
  },
  music: {
    backgroundColor: 'blue',
  },
  podcasts: {
    backgroundColor: 'yellow',
    paddingVertical: 30,
  },
  promoSection: {
    backgroundColor: '#1c2036',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  promoText: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promoButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  promoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  featuredContent: {
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  politics: {
    backgroundColor: 'pink',
  },
  anxiety: {
    backgroundColor: 'blue',
  },
  featuredText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1c2036',
    padding: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navItemActive: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navText: {
    color: '#ccc',
  },
  navTextActive: {
    color: '#fff',
  },
});

export default ExploreScreen;