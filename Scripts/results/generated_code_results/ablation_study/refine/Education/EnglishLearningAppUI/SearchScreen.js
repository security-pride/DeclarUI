import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const SearchScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const [activeCategory, setActiveCategory] = useState('Sentence');



  const categories = [

    { name: 'Movie', icon: 'film-outline' },

    { name: 'Travel', icon: 'airplane-outline' },

    { name: 'Music', icon: 'headset-outline' },

  ];



  const channels = [

    { name: 'Cornelia Gordon', subscribers: '129k' },

    { name: 'Chase Bailey', subscribers: '129k' },

  ];



  return (

    <View style={styles.container}>

      <Text style={styles.header}>Find anything!</Text>

      <Text style={styles.subHeader}>Searching anything you want to learn here.</Text>

      

      <View style={styles.searchContainer}>

        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search..."

          value={searchQuery}

          onChangeText={setSearchQuery}

        />

      </View>



      <Text style={styles.sectionTitle}>Choose a category</Text>

      

      <View style={styles.categoryButtons}>

        {['Sentence', 'Speak'].map((category) => (

          <TouchableOpacity

            key={category}

            style={[

              styles.categoryButton,

              activeCategory === category && styles.activeCategoryButton

            ]}

            onPress={() => setActiveCategory(category)}

          >

            <Text style={[

              styles.categoryButtonText,

              activeCategory === category && styles.activeCategoryButtonText

            ]}>

              {category}

            </Text>

          </TouchableOpacity>

        ))}

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>

        {categories.map((category) => (

          <TouchableOpacity key={category.name} style={styles.categoryCard}>

            <ImageBackground

              source={require('../assets/snack-icon.png')}

              style={styles.categoryBackground}

              imageStyle={styles.categoryBackgroundImage}

            >

              <Icon name={category.icon} size={30} color="#FFFFFF" />

              <Text style={styles.categoryName}>{category.name}</Text>

            </ImageBackground>

          </TouchableOpacity>

        ))}

      </ScrollView>



      <View style={styles.channelSection}>

        <View style={styles.channelHeader}>

          <Text style={styles.channelTitle}>Channel</Text>

          <TouchableOpacity>

            <Text style={styles.viewAllText}>view all</Text>

          </TouchableOpacity>

        </View>

        {channels.map((channel, index) => (

          <View key={index} style={styles.channelItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.channelImage} />

            <View style={styles.channelInfo}>

              <Text style={styles.channelName}>{channel.name}</Text>

              <Text style={styles.subscriberCount}>{channel.subscribers} subscribers</Text>

            </View>

            <TouchableOpacity style={styles.arrowButton}>

              <Icon name="chevron-forward" size={24} color="#000" />

            </TouchableOpacity>

          </View>

        ))}

      </View>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#999" />

          <Text style={styles.tabLabel}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="search" size={24} color="#4287f5" />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Search</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="mic-outline" size={24} color="#999" />

          <Text style={styles.tabLabel}>Speak</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="book-outline" size={24} color="#999" />

          <Text style={styles.tabLabel}>Vocabulary</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>

          <Icon name="person-outline" size={24} color="#999" />

          <Text style={styles.tabLabel}>Profile</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

    paddingTop: 60,

  },

  header: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 5,

    paddingHorizontal: 20,

  },

  subHeader: {

    fontSize: 14,

    color: '#666',

    marginBottom: 20,

    paddingHorizontal: 20,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    borderRadius: 25,

    marginHorizontal: 20,

    paddingHorizontal: 15,

    marginBottom: 20,

  },

  searchIcon: {

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

    paddingHorizontal: 20,

  },

  categoryButtons: {

    flexDirection: 'row',

    justifyContent: 'flex-start',

    paddingHorizontal: 20,

    marginBottom: 15,

  },

  categoryButton: {

    paddingHorizontal: 20,

    paddingVertical: 8,

    borderRadius: 20,

    marginRight: 10,

    backgroundColor: '#F0F0F0',

  },

  activeCategoryButton: {

    backgroundColor: '#4287f5',

  },

  categoryButtonText: {

    color: '#666',

  },

  activeCategoryButtonText: {

    color: '#FFFFFF',

  },

  categoriesScroll: {

    paddingLeft: 20,

    marginBottom: 20,

  },

  categoryCard: {

    width: 120,

    height: 160,

    marginRight: 15,

    borderRadius: 20,

    overflow: 'hidden',

  },

  categoryBackground: {

    flex: 1,

    justifyContent: 'flex-end',

    padding: 10,

  },

  categoryBackgroundImage: {

    borderRadius: 20,

  },

  categoryName: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  channelSection: {

    paddingHorizontal: 20,

  },

  channelHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  channelTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  viewAllText: {

    color: '#4287f5',

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

    marginRight: 15,

  },

  channelInfo: {

    flex: 1,

  },

  channelName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  subscriberCount: {

    fontSize: 14,

    color: '#666',

  },

  arrowButton: {

    padding: 5,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

    backgroundColor: '#FFFFFF',

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabLabel: {

    fontSize: 12,

    marginTop: 4,

    color: '#999',

  },

  activeTabLabel: {

    color: '#4287f5',

  },

});



export default SearchScreen;