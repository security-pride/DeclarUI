import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DiscoverScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Challenge', 'Entertainment', 'Dance'];
  
  const hotVideos = [
    { id: '1', views: '420.8K', image: require('../assets/snack-icon.png') },
    { id: '2', views: '316.0K', image: require('../assets/snack-icon.png') },
    { id: '3', views: '180.6K', image: require('../assets/snack-icon.png') },
  ];

  const featuredVideos = [
    { id: '4', image: require('../assets/snack-icon.png') },
    { id: '5', image: require('../assets/snack-icon.png') },
    { id: '6', image: require('../assets/snack-icon.png') },
  ];

  const renderVideoItem = ({ item, sectionTitle }) => (
    <TouchableOpacity style={styles.videoItem}>
      <Image source={item.image} style={styles.videoThumbnail} />
      {sectionTitle === 'Hot' && (
        <View style={styles.viewsContainer}>
          <Icon name="play" size={12} color="#fff" />
          <Text style={styles.viewsText}>{item.views}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchBar} onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={20} color="#999" />
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.banner}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle}>Camp day</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Join now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategoryButton,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Hot 🔥</Text>
            <TouchableOpacity>
              <Text style={styles.seeMoreText}>See more &gt;</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={hotVideos}
            renderItem={({ item }) => renderVideoItem({ item, sectionTitle: 'Hot' })}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured ✨</Text>
            <TouchableOpacity>
              <Text style={styles.seeMoreText}>See more &gt;</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={featuredVideos}
            renderItem={({ item }) => renderVideoItem({ item, sectionTitle: 'Featured' })}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="compass" size={24} color="#ff2b55" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.createButton}>
          <Icon name="plus" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" size={24} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 12,
  },
  searchText: {
    color: '#999',
    marginLeft: 8,
  },
  banner: {
    height: 200,
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  bannerButton: {
    backgroundColor: '#3897f0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  bannerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
    backgroundColor: '#222',
  },
  selectedCategoryButton: {
    backgroundColor: '#ff2b55',
  },
  categoryText: {
    color: '#fff',
  },
  selectedCategoryText: {
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMoreText: {
    color: '#999',
  },
  videoItem: {
    width: 150,
    height: 200,
    marginLeft: 12,
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  viewsContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  viewsText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#222',
  },
  createButton: {
    backgroundColor: '#ff2b55',
    width: 48,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DiscoverScreen;