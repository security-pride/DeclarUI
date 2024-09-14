import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const searchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Icon name="arrow-back" size={24} color="white" style={styles.backIcon} />
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={20} color="#888" />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
          />
        </View>
      </View>
      
      <Text style={styles.topSearchTitle}>Top Search</Text>
      
      <ScrollView contentContainerStyle={styles.tagsContainer}>
        {['Camp day', 'Halloween', 'Candy Challenge', 'Dancing', 'Christmas'].map(tag => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    marginRight: 16,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    marginLeft: 10,
  },
  topSearchTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#333',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    margin: 4,
  },
  tagText: {
    color: 'white',
  },
});

export default searchScreen;