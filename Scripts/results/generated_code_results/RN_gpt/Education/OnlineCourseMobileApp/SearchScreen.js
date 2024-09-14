import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, ScrollView, Alert } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();

  const handleCourseDetailRedirect = () => {
    navigation.navigate('CourseDetail');
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover</Text>
        <Pressable style={styles.notification}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <View style={styles.notificationBadge}><Text style={styles.badgeText}>9+</Text></View>
        </Pressable>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#999" />
        <TextInput 
          placeholder="Design"
          style={styles.searchInput}
        />
        <Pressable style={styles.filterButton}>
          <Ionicons name="options-outline" size={24} color="#000" />
          <View style={styles.filterBadge}><Text style={styles.badgeText}>4</Text></View>
        </Pressable>
      </View>

      {/* Category Tags */}
      <View style={styles.categoryTags}>
        <Text style={styles.categoryText}>UI/UX DESIGN</Text>
        <Text style={styles.categoryText}>GRAPHICS DESIGN</Text>
        <Text style={styles.categoryText}>INTERACTION</Text>
      </View>

      {/* Search Results */}
      <Text style={styles.searchResultText}>Search Result</Text>
      <Text style={styles.resultCount}>32 Result</Text>

      {/* Course Cards */}
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <Pressable style={styles.card} onPress={handleCourseDetailRedirect}>
          <Text style={styles.cardCategory}>GRAPHICS DESIGN</Text>
          <Text style={styles.cardTitle}>How to make modern poster for Beginner</Text>
          <View style={styles.starRating}>
            <Ionicons name="star" size={16} color="#f7b401" />
            <Text style={styles.cardRating}>4.9</Text>
          </View>
          <Text style={styles.cardPrice}>$12.00</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={handleCourseDetailRedirect}>
          <Text style={styles.cardCategory}>UI/UX DESIGN</Text>
          <Text style={styles.cardTitle}>How to make Design system in easy waen</Text>
          <View style={styles.starRating}>
            <Ionicons name="star" size={16} color="#f7b401" />
            <Text style={styles.cardRating}>4.9</Text>
          </View>
          <Text style={styles.cardPrice}>$23.99</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={handleCourseDetailRedirect}>
          <Text style={styles.cardCategory}>INTERACTION DESIGN</Text>
          <Text style={styles.cardTitle}>How to make modern poster for Beginner</Text>
          <View style={styles.starRating}>
            <Ionicons name="star" size={16} color="#f7b401" />
            <Text style={styles.cardRating}>4.9</Text>
          </View>
          <Text style={styles.cardPrice}>$15.45</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={handleCourseDetailRedirect}>
          <Text style={styles.cardCategory}>PHOTO EDITOR</Text>
          <Text style={styles.cardTitle}>How to make Design system in easy waen</Text>
          <View style={styles.starRating}>
            <Ionicons name="star" size={16} color="#f7b401" />
            <Text style={styles.cardRating}>4.9</Text>
          </View>
          <Text style={styles.cardPrice}>$16.13</Text>
        </Pressable>
      </ScrollView>

      {/* Bottom Navigation Placeholder */}
      <View style={styles.bottomNav}>
        {/* Bottom navigation items would be placed here */}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notification: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#f00',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    margin: 16,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  filterButton: {
    position: 'relative',
    marginLeft: 8,
  },
  filterBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#f00',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  categoryTags: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  categoryText: {
    backgroundColor: '#eaeaea',
    padding: 6,
    borderRadius: 6,
    fontSize: 14,
  },
  searchResultText: {
    marginHorizontal: 16,
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultCount: {
    position: 'absolute',
    top: 136,
    right: 16,
    color: '#aaa',
  },
  cardsContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    padding: 16,
    marginBottom: 16,
  },
  cardCategory: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardRating: {
    marginLeft: 4,
    fontSize: 12,
    color: '#333',
  },
  cardPrice: {
    fontSize: 16,
    color: '#2A9D8F',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 56,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default SearchScreen;