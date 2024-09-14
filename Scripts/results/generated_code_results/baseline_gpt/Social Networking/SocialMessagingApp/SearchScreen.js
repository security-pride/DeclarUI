import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  const recentSearches = [
    { id: '1', label: 'Designers' },
    { id: '2', label: 'Dasha Taran' },
    { id: '3', label: 'Billie Eillish' },
  ];

  const renderSearchItem = ({ item }) => (
    <View style={styles.searchItem}>
      <Icon name="ios-search-outline" size={20} color="#000" />
      <Text style={styles.searchText}>{item.label}</Text>
      <TouchableOpacity>
        <Icon name="md-close" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="ios-menu" size={24} color="#000" />
        <TextInput 
          style={styles.input} 
          placeholder="Search..." 
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.filters}>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="chatbubble-outline" size={20} color="#000" />
          <Text style={styles.filterText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="image-outline" size={20} color="#000" />
          <Text style={styles.filterText}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="videocam-outline" size={20} color="#000" />
          <Text style={styles.filterText}>Videos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentSearchHeader}>
        <Text style={styles.recentSearchText}>Recent searches</Text>
        <TouchableOpacity>
          <Text style={styles.clearAllText}>Clear all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={recentSearches}
        renderItem={renderSearchItem}
        keyExtractor={item => item.id}
        style={styles.recentSearchesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  filterText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
  },
  recentSearchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  recentSearchText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearAllText: {
    fontSize: 14,
    color: '#007AFF',
  },
  recentSearchesList: {
    marginTop: 10,
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});

export default SearchScreen;