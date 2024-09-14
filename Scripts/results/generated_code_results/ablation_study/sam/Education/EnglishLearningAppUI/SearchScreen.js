import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';



const SearchScreen = () => {

  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState('Sentence');



  const categories = [

    { name: 'Movie', icon: 'movie' },

    { name: 'Travel', icon: 'flight' },

    { name: 'Music', icon: 'music-note' },

  ];



  const channels = [

    { name: 'Cornelia Gordon', subscribers: '129k subscribers', image: require('../assets/snack-icon.png') },

    { name: 'Chase Bailey', subscribers: '129k subscribers', image: require('../assets/snack-icon.png') },

  ];



  const navigateToLessonDetail = () => {

    navigation.navigate('LessonDetail');

  };



  return (

    <View style={styles.container}>

      <Text style={styles.title}>Find anything!</Text>

      <Text style={styles.subtitle}>Searching anything you want to learn here.</Text>

      

      <View style={styles.searchBar}>

        <Icon name="search" size={24} color="#888" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Find anything!"

          placeholderTextColor="#888"

          onSubmitEditing={navigateToLessonDetail}

        />

      </View>



      <View style={styles.categorySelector}>

        <Text style={styles.selectorLabel}>Choose a category</Text>

        <View style={styles.selectorButtons}>

          <TouchableOpacity

            style={[styles.selectorButton, selectedCategory === 'Sentence' && styles.selectedButton]}

            onPress={() => setSelectedCategory('Sentence')}

          >

            <Text style={[styles.selectorButtonText, selectedCategory === 'Sentence' && styles.selectedButtonText]}>Sentence</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[styles.selectorButton, selectedCategory === 'Speak' && styles.selectedButton]}

            onPress={() => setSelectedCategory('Speak')}

          >

            <Text style={[styles.selectorButtonText, selectedCategory === 'Speak' && styles.selectedButtonText]}>Speak</Text>

          </TouchableOpacity>

        </View>

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>

        {categories.map((category, index) => (

          <TouchableOpacity key={index} style={styles.categoryItem} onPress={navigateToLessonDetail}>

            <Icon name={category.icon} size={24} color="#FFF" />

            <Text style={styles.categoryName}>{category.name}</Text>

          </TouchableOpacity>

        ))}

      </ScrollView>



      <View style={styles.channelsSection}>

        <View style={styles.channelsHeader}>

          <Text style={styles.channelsTitle}>Channel</Text>

          <TouchableOpacity>

            <Text style={styles.viewAllText}>view all</Text>

          </TouchableOpacity>

        </View>

        {channels.map((channel, index) => (

          <TouchableOpacity key={index} style={styles.channelItem} onPress={navigateToLessonDetail}>

            <Image source={channel.image} style={styles.channelImage} />

            <View style={styles.channelInfo}>

              <Text style={styles.channelName}>{channel.name}</Text>

              <Text style={styles.subscribersCount}>{channel.subscribers}</Text>

            </View>

            <TouchableOpacity style={styles.subscribeButton}>

              <Icon name="arrow-forward" size={24} color="#000" />

            </TouchableOpacity>

          </TouchableOpacity>

        ))}

      </View>



      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="search" size={24} color="#4A90E2" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Speak')}>

          <Icon name="mic" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="book" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="person" size={24} color="#888" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFF',

    padding: 16,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  subtitle: {

    fontSize: 16,

    color: '#888',

    marginBottom: 16,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    borderRadius: 8,

    paddingHorizontal: 12,

    marginBottom: 16,

  },

  searchIcon: {

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  categorySelector: {

    marginBottom: 16,

  },

  selectorLabel: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  selectorButtons: {

    flexDirection: 'row',

  },

  selectorButton: {

    paddingHorizontal: 16,

    paddingVertical: 8,

    borderRadius: 20,

    marginRight: 8,

    backgroundColor: '#F0F0F0',

  },

  selectedButton: {

    backgroundColor: '#4A90E2',

  },

  selectorButtonText: {

    color: '#000',

  },

  selectedButtonText: {

    color: '#FFF',

  },

  categoriesScroll: {

    marginBottom: 16,

  },

  categoryItem: {

    width: 100,

    height: 100,

    backgroundColor: '#4A90E2',

    borderRadius: 8,

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 12,

  },

  categoryName: {

    color: '#FFF',

    marginTop: 8,

  },

  channelsSection: {

    flex: 1,

  },

  channelsHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 12,

  },

  channelsTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  viewAllText: {

    color: '#4A90E2',

  },

  channelItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 16,

  },

  channelImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 12,

  },

  channelInfo: {

    flex: 1,

  },

  channelName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  subscribersCount: {

    fontSize: 14,

    color: '#888',

  },

  subscribeButton: {

    padding: 8,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 8,

  },

});



export default SearchScreen;