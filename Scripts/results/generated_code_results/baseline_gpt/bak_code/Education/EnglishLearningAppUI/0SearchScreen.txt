import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Find anything!</Text>
      <Text style={styles.subHeaderText}>Searching anything you want to learn here.</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#7B7B7B" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#7B7B7B"
        />
      </View>

      {/* Category Selector */}
      <Text style={styles.categoryHeader}>Choose a category</Text>
      <View style={styles.categorySelector}>
        <TouchableOpacity style={styles.categoryButtonActive}>
          <Text style={styles.categoryTextActive}>Sentence</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Speak</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        <View style={styles.category}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryLabel}>Movie</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryLabel}>Travel</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryLabel}>Music</Text>
        </View>
      </ScrollView>

      {/* Channel Section */}
      <View style={styles.channelHeaderContainer}>
        <Text style={styles.channelHeader}>Channel</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>view all</Text>
        </TouchableOpacity>
      </View>
      
      {/* Channel List */}
      <View style={styles.channel}>
        <Image source={require('../assets/snack-icon.png')} style={styles.channelImage} />
        <View style={styles.channelTextContainer}>
          <Text style={styles.channelName}>Cornelia Gordon</Text>
          <Text style={styles.channelSubscribers}>129k subscribers</Text>
        </View>
        <Icon name="arrow-left-circle" size={24} color="#000" />
      </View>
      <View style={styles.channel}>
        <Image source={require('../assets/snack-icon.png')} style={styles.channelImage} />
        <View style={styles.channelTextContainer}>
          <Text style={styles.channelName}>Chase Bailey</Text>
          <Text style={styles.channelSubscribers}>129k subscribers</Text>
        </View>
        <Icon name="arrow-left-circle" size={24} color="#000" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subHeaderText: {
    fontSize: 14,
    color: '#7B7B7B',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  categoryHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  categorySelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  categoryButtonActive: {
    backgroundColor: '#4A90E2',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  categoryButton: {
    backgroundColor: '#B5B5B5',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryScroll: {
    marginVertical: 20,
  },
  category: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  categoryLabel: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  channelHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  channelHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: '#4A90E2',
  },
  channel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  channelImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  channelTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  channelName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  channelSubscribers: {
    fontSize: 14,
    color: '#7B7B7B',
  },
});

export default SearchScreen;