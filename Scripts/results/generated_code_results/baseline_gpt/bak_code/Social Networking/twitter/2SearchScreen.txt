import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const recentSearches = [
  { id: '1', name: 'Sab Khasanova', handle: '@s_khasanova', image: '../assets/snack-icon.png' },
  { id: '2', name: 'Martha Craig', handle: '@craig_love', image: '../assets/snack-icon.png' },
  { id: '3', name: 'Tibitha Potter', handle: '@mis_potter', image: '../assets/snack-icon.png' },
  { id: '4', name: 'Figma', handle: '@figmadesign', image: '../assets/snack-icon.png' },
  { id: '5', name: 'Figma1', handle: '@Figma1', image: '../assets/snack-icon.png' },
];

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Twitter"
          placeholderTextColor="#999"
        />
        <TouchableOpacity>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recentSearchesHeader}>
        <Text style={styles.recentSearchesText}>Recent searches</Text>
        <TouchableOpacity>
          <Icon name="close-circle-outline" size={20} color="#ccc" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={recentSearches}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.recentSearchItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.userImage} />
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userHandle}>{item.handle}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.searchQueryContainer}>
        <Text style={styles.searchQueryText}>skhasanov</Text>
        <Icon name="search-outline" size={20} color="#ccc" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  cancelButton: {
    marginLeft: 10,
    color: '#1DA1F2',
    fontSize: 16,
  },
  recentSearchesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  recentSearchesText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentSearchItem: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  userHandle: {
    fontSize: 12,
    color: '#888',
  },
  searchQueryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  searchQueryText: {
    fontSize: 16,
    color: '#000',
  },
});

export default SearchScreen;