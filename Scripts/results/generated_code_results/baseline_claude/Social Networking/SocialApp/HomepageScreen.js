import React from 'react';

import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const HomepageScreen = () => {

  const navigation = useNavigation();



  const profiles = [

    { id: 1, name: 'My Story', image: '../assets/snack-icon.png' },

    { id: 2, name: 'Hasley', image: '../assets/snack-icon.png' },

    { id: 3, name: 'Javier', image: '../assets/snack-icon.png' },

    { id: 4, name: 'Natalie', image: '../assets/snack-icon.png' },

  ];



  const categories = ['All', 'Photography', 'Outdoor', 'Anime'];



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity>

          <Icon name="menu" size={24} color="#000" />

        </TouchableOpacity>

        <View style={styles.headerRight}>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="notifications-outline" size={24} color="#000" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="options-outline" size={24} color="#000" />

          </TouchableOpacity>

        </View>

      </View>



      <Text style={styles.title}>Forging New Bonds{'\n'}and Friendships</Text>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.profilesContainer}>

        {profiles.map((profile) => (

          <TouchableOpacity key={profile.id} style={styles.profileItem}>

            <Image source={profile.image} style={styles.profileImage} />

            <Text style={styles.profileName}>{profile.name}</Text>

          </TouchableOpacity>

        ))}

      </ScrollView>



      <View style={styles.searchContainer}>

        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search for a friend or partners"

          placeholderTextColor="#888"

        />

      </View>



      <Text style={styles.sectionTitle}>Recommend for You</Text>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>

        {categories.map((category, index) => (

          <TouchableOpacity

            key={index}

            style={[styles.categoryButton, index === 0 && styles.activeCategoryButton]}

          >

            <Text style={[styles.categoryText, index === 0 && styles.activeCategoryText]}>{category}</Text>

          </TouchableOpacity>

        ))}

      </ScrollView>



      <View style={styles.matchCard}>

        <Image source={{ uri: 'https://example.com/profile-image.jpg' }} style={styles.matchImage} />

        <View style={styles.matchInfo}>

          <Text style={styles.matchLabel}>Potential Match!</Text>

          <Text style={styles.matchName}>Klee Gracia, 24</Text>

          <Icon name="checkmark-circle" size={16} color="#4287f5" />

        </View>

      </View>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="compass-outline" size={24} color="#7c3aed" />

          <Text style={[styles.tabText, styles.activeTabText]}>Discover</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="heart-outline" size={24} color="#888" />

          <Text style={styles.tabText}>Likes</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="chatbubble-outline" size={24} color="#888" />

          <Text style={styles.tabText}>Messages</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="person-outline" size={24} color="#888" />

          <Text style={styles.tabText}>Profile</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

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

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingTop: 8,

  },

  headerRight: {

    flexDirection: 'row',

  },

  iconButton: {

    marginLeft: 16,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 16,

    marginLeft: 16,

  },

  profilesContainer: {

    paddingLeft: 16,

    marginTop: 16,

  },

  profileItem: {

    alignItems: 'center',

    marginRight: 16,

  },

  profileImage: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  profileName: {

    marginTop: 4,

    fontSize: 12,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    marginHorizontal: 16,

    marginTop: 16,

    paddingHorizontal: 12,

  },

  searchIcon: {

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginTop: 24,

    marginLeft: 16,

  },

  categoriesContainer: {

    paddingLeft: 16,

    marginTop: 12,

  },

  categoryButton: {

    paddingHorizontal: 16,

    paddingVertical: 8,

    borderRadius: 20,

    marginRight: 8,

    backgroundColor: '#f0f0f0',

  },

  activeCategoryButton: {

    backgroundColor: '#7c3aed',

  },

  categoryText: {

    fontSize: 14,

    color: '#888',

  },

  activeCategoryText: {

    color: '#fff',

  },

  matchCard: {

    margin: 16,

    borderRadius: 12,

    overflow: 'hidden',

  },

  matchImage: {

    width: '100%',

    height: 200,

  },

  matchInfo: {

    position: 'absolute',

    bottom: 16,

    left: 16,

  },

  matchLabel: {

    color: '#fff',

    fontSize: 12,

    fontWeight: 'bold',

    backgroundColor: 'rgba(0,0,0,0.6)',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 4,

  },

  matchName: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

    marginTop: 4,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabText: {

    fontSize: 12,

    marginTop: 4,

    color: '#888',

  },

  activeTabText: {

    color: '#7c3aed',

  },

});



export default HomepageScreen;