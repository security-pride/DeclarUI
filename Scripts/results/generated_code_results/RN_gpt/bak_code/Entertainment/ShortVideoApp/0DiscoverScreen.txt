import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DiscoverScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.timeDisplay}>9:41</Text>
        <Icon name="wifi" style={styles.icon} />
        <Icon name="signal" style={styles.icon} />
      </View>
      
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="#888" />
        <Icon name="search" style={styles.searchIcon} />
      </View>

      <ScrollView>
        <View style={styles.banner}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Camp day</Text>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.categories}>
          {['All', 'Challenge', 'Entertainment', 'Dance'].map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hot 🔥</Text>
          <ScrollView horizontal>
            {['420.8K', '316.0K', '180.6K'].map((views, index) => (
              <View key={index} style={styles.videoThumbnailContainer}>
                <Image source={require('../assets/snack-icon.png')} style={styles.videoThumbnail} />
                <Text style={styles.videoCount}>{views}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured ✨</Text>
          <ScrollView horizontal>
            {[{}, {}, {}].map((item, index) => (
              <View key={index} style={styles.videoThumbnailContainer}>
                <Image source={require('../assets/snack-icon.png')} style={styles.videoThumbnail} />
                <Text style={styles.videoCount}></Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        {['home', 'search', 'add-circle', 'notifications', 'person'].map((icon, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate(icon === 'search' ? 'Discover' : 'Home')}>
            <Icon name={icon} style={styles.navIcon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  timeDisplay: {
    color: '#fff',
  },
  icon: {
    color: '#fff',
    fontSize: 20,
  },
  searchBarContainer: {
    margin: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    color: '#fff',
    padding: 10,
    flex: 1,
  },
  searchIcon: {
    color: '#888',
    padding: 10,
  },
  banner: {
    position: 'relative',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  bannerTextContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  joinButton: {
    marginTop: 10,
    backgroundColor: '#00f',
    padding: 10,
    borderRadius: 5,
  },
  joinButtonText: {
    color: '#fff',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  categoryItem: {
    backgroundColor: '#444',
    padding: 8,
    borderRadius: 20,
  },
  categoryText: {
    color: '#fff',
  },
  section: {
    margin: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  videoThumbnailContainer: {
    marginRight: 10,
  },
  videoThumbnail: {
    width: 150,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  videoCount: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    color: '#fff',
    fontSize: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 2,
    borderRadius: 3,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#222',
  },
  navIcon: {
    color: '#fff',
    fontSize: 28,
  },
});

export default DiscoverScreen;