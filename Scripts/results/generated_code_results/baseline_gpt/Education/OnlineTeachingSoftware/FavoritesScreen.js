import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorite</Text>
        <Icon name="notifications-outline" size={24} color="#000" />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search..." />
        <Icon name="filter-outline" size={24} color="#000" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        <TouchableOpacity style={styles.categoryButtonActive}>
          <Text style={styles.categoryTextActive}>All Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>UX Design</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>UI Design</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>3D Animation</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.content}>
        <Text style={styles.dateText}>May 12, 2023</Text>
        <View style={styles.courseRow}>
          <View style={styles.courseCard}>
            <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseCategory}>Graphic Design</Text>
              <Text style={styles.courseTitle}>Expert Wireframing for Mobile Design</Text>
              <Text style={styles.courseAuthor}>Jerremy Mamika</Text>
              <Text style={styles.coursePrice}>$48</Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
              <Icon name="heart" size={18} color="red" />
            </TouchableOpacity>
          </View>
          <View style={styles.courseCard}>
            <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseCategory}>Development</Text>
              <Text style={styles.courseTitle}>Bootstrapping Your Mobile App Principles</Text>
              <Text style={styles.courseAuthor}>Alexander Belford</Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
              <Icon name="heart" size={18} color="red" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.dateText}>May 08, 2023</Text>
        <View style={styles.courseRow}>
          <View style={styles.courseCard}>
            <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseCategory}>Graphic Design</Text>
              <Text style={styles.courseTitle}>Intro to Wireframe Sketching</Text>
              <Text style={styles.courseAuthor}>Freya Davis</Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
              <Icon name="heart" size={18} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  categories: {
    marginBottom: 16,
  },
  categoryButtonActive: {
    backgroundColor: '#6C63FF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  categoryTextActive: {
    color: '#fff',
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  categoryText: {
    color: '#333',
  },
  content: {
    flex: 1,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  courseCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  courseImage: {
    width: '100%',
    height: 120,
  },
  courseInfo: {
    padding: 8,
  },
  courseCategory: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  courseAuthor: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  coursePrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});

export default FavoritesScreen;