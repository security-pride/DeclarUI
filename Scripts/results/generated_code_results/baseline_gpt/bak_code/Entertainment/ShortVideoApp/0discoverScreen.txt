import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import VideoIcon from 'react-native-vector-icons/FontAwesome5';

const discoverScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" />
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#888" />
      </View>

      <View style={styles.bannerContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>Camp day</Text>
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={[styles.categoryButton, styles.categoryButtonActive]}>
          <Text style={styles.categoryButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Challenge</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Entertainment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Dance</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Hot <Icon name="flame" size={20} color="red" /></Text>
        <TouchableOpacity>
          <Icon name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.contentScrollContainer}>
        {[1, 2, 3].map(item => (
          <TouchableOpacity key={item} style={styles.contentContainer}>
            <Image source={require('../assets/snack-icon.png')} style={styles.contentImage} />
            <View style={styles.videoOverlay}>
              <VideoIcon name="play" size={15} color="#fff" />
              <Text style={styles.viewCount}>420.8K</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Featured <Icon name="sparkles" size={20} color="gold" /></Text>
        <TouchableOpacity>
          <Icon name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.contentScrollContainer}>
        {[1, 2, 3].map(item => (
          <TouchableOpacity key={item} style={styles.contentContainer}>
            <Image source={require('../assets/snack-icon.png')} style={styles.contentImage} />
            <View style={styles.videoOverlay}>
              <VideoIcon name="play" size={15} color="#fff" />
              <Text style={styles.viewCount}>316.0K</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  searchInput: {
    color: '#fff',
    marginLeft: 10,
    flex: 1,
  },
  bannerContainer: {
    padding: 10,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  bannerTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  bannerTitle: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  joinButton: {
    backgroundColor: '#00f',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  joinButtonText: {
    color: '#fff',
  },
  categoriesContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#444',
    marginRight: 10,
  },
  categoryButtonActive: {
    backgroundColor: '#f44',
  },
  categoryButtonText: {
    color: '#fff',
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentScrollContainer: {
    marginVertical: 10,
  },
  contentContainer: {
    marginRight: 10,
  },
  contentImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  videoOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewCount: {
    color: '#fff',
    marginLeft: 5,
  },
});

export default discoverScreen;