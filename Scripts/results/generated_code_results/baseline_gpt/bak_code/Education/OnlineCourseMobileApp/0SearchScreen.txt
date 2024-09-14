import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  const searchResults = [
    { id: '1', category: 'GRAPHICS DESIGN', title: 'How to make modern poster for Beginner', price: '$12.00' },
    { id: '2', category: 'UI/UX DESIGN', title: 'How to make Design system in easy waen', price: '$23.99' },
    { id: '3', category: 'INTERACTION DESIGN', title: 'How to make modern poster for Beginner', price: '$15.45' },
    { id: '4', category: 'PHOTO EDITOR', title: 'How to make Design system in easy waen', price: '$16.13' },
  ];

  const renderSearchItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon}/>
      <View style={styles.cardContent}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={14} color="#FFDD44" />
          <Text style={styles.rating}>4.9</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discover</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#B0B0B0" />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        <View style={styles.notificationContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="options-outline" size={20} color="#FFF" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationCount}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="notifications-outline" size={20} color="#000" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationCount}>9+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.chipContainer}>
        <TouchableOpacity style={styles.chip}><Text style={styles.chipText}>UI/UX DESIGN</Text></TouchableOpacity>
        <TouchableOpacity style={styles.chip}><Text style={styles.chipText}>GRAPHICS DESIGN</Text></TouchableOpacity>
        <TouchableOpacity style={styles.chip}><Text style={styles.chipText}>INTERACTION</Text></TouchableOpacity>
      </View>
      <Text style={styles.subHeader}>Search Result</Text>
      <FlatList
        data={searchResults}
        renderItem={renderSearchItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flex: 1,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF4444',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  notificationCount: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  chipContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  chip: {
    backgroundColor: '#EEE',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  chipText: {
    color: '#555',
  },
  subHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    marginRight: 10,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    position: 'relative',
    overflow: 'hidden',
  },
  cardContent: {
    marginLeft: 10,
  },
  icon: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  category: {
    color: '#AAA',
    fontSize: 12,
    marginBottom: 5,
  },
  title: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    color: '#0C9',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  rating: {
    color: '#333',
    marginLeft: 5,
  },
  columnWrapper: {
    justifyContent: 'space-between'
  }
});

export default SearchScreen;