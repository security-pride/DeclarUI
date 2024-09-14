import React, { useState } from 'react';

import {

  View,

  Text,

  StyleSheet,

  TextInput,

  TouchableOpacity,

  Image,

  FlatList,

  SafeAreaView,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const categories = [

  { id: '1', title: 'Movie', icon: '🎬' },

  { id: '2', title: 'Travel', icon: '✈️' },

  { id: '3', title: 'Music', icon: '🎵' },

];



const channels = [

  { id: '1', name: 'Cornelia Gordon', subscribers: '129k subscribers', image: '../assets/snack-icon.png' },

  { id: '2', name: 'Chase Bailey', subscribers: '129k subscribers', image: '../assets/snack-icon.png' },

];



const SearchScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');

  const [activeCategory, setActiveCategory] = useState('Sentence');



  const renderCategoryItem = ({ item }) => (

    <TouchableOpacity style={styles.categoryItem}>

      <View style={styles.categoryIconContainer}>

        <Text style={styles.categoryIcon}>{item.icon}</Text>

      </View>

      <Text style={styles.categoryTitle}>{item.title}</Text>

    </TouchableOpacity>

  );



  const renderChannelItem = ({ item }) => (

    <View style={styles.channelItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.channelImage} />

      <View style={styles.channelInfo}>

        <Text style={styles.channelName}>{item.name}</Text>

        <Text style={styles.channelSubscribers}>{item.subscribers}</Text>

      </View>

      <TouchableOpacity style={styles.arrowButton}>

        <Text style={styles.arrowIcon}>→</Text>

      </TouchableOpacity>

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Find anything!</Text>

      <Text style={styles.subtitle}>Searching anything you want to learn here.</Text>



      <View style={styles.searchContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search"

          value={searchQuery}

          onChangeText={setSearchQuery}

        />

      </View>



      <View style={styles.categoryToggle}>

        <Text style={styles.categoryToggleTitle}>Choose a category</Text>

        <View style={styles.categoryButtonsContainer}>

          <TouchableOpacity

            style={[styles.categoryButton, activeCategory === 'Sentence' && styles.activeCategoryButton]}

            onPress={() => setActiveCategory('Sentence')}

          >

            <Text style={[styles.categoryButtonText, activeCategory === 'Sentence' && styles.activeCategoryButtonText]}>Sentence</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[styles.categoryButton, activeCategory === 'Speak' && styles.activeCategoryButton]}

            onPress={() => setActiveCategory('Speak')}

          >

            <Text style={[styles.categoryButtonText, activeCategory === 'Speak' && styles.activeCategoryButtonText]}>Speak</Text>

          </TouchableOpacity>

        </View>

      </View>



      <FlatList

        data={categories}

        renderItem={renderCategoryItem}

        keyExtractor={(item) => item.id}

        horizontal

        showsHorizontalScrollIndicator={false}

        style={styles.categoriesList}

      />



      <View style={styles.channelsSection}>

        <View style={styles.channelsHeader}>

          <Text style={styles.channelsTitle}>Channel</Text>

          <TouchableOpacity>

            <Text style={styles.viewAllText}>view all</Text>

          </TouchableOpacity>

        </View>

        <FlatList

          data={channels}

          renderItem={renderChannelItem}

          keyExtractor={(item) => item.id}

          scrollEnabled={false}

        />

      </View>


    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

    padding: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  subtitle: {

    fontSize: 14,

    color: '#666666',

    marginBottom: 20,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    borderRadius: 10,

    paddingHorizontal: 10,

    marginBottom: 20,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  categoryToggle: {

    marginBottom: 20,

  },

  categoryToggleTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  categoryButtonsContainer: {

    flexDirection: 'row',

  },

  categoryButton: {

    paddingHorizontal: 20,

    paddingVertical: 10,

    borderRadius: 20,

    marginRight: 10,

    backgroundColor: '#F0F0F0',

  },

  activeCategoryButton: {

    backgroundColor: '#007AFF',

  },

  categoryButtonText: {

    color: '#666666',

  },

  activeCategoryButtonText: {

    color: '#FFFFFF',

  },

  categoriesList: {

    marginBottom: 20,

  },

  categoryItem: {

    alignItems: 'center',

    marginRight: 15,

  },

  categoryIconContainer: {

    width: 80,

    height: 80,

    borderRadius: 15,

    backgroundColor: '#F0F0F0',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 5,

  },

  categoryIcon: {

    fontSize: 30,

  },

  categoryTitle: {

    fontSize: 12,

  },

  channelsSection: {

    flex: 1,

  },

  channelsHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  channelsTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  viewAllText: {

    color: '#007AFF',

  },

  channelItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  channelImage: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 10,

  },

  channelInfo: {

    flex: 1,

  },

  channelName: {

    fontWeight: 'bold',

    marginBottom: 3,

  },

  channelSubscribers: {

    fontSize: 12,

    color: '#666666',

  },

  arrowButton: {

    padding: 5,

  },

  arrowIcon: {

    fontSize: 18,

    color: '#666666',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  tabLabel: {

    fontSize: 12,

    color: '#666666',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#007AFF',

    paddingTop: 8,

  },

  activeTabIcon: {

    tintColor: '#007AFF',

  },

  activeTabLabel: {

    color: '#007AFF',

  },

});



export default SearchScreen;