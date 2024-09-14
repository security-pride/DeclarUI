import React from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ExploreScreen = () => {

  const navigation = useNavigation();



  const categories = [

    { name: 'Meditate', color: '#E67E22' },

    { name: 'Sleep', color: '#8E44AD' },

    { name: 'Move', color: '#E91E63' },

    { name: 'Music', color: '#3498DB' },

    { name: 'Podcasts', color: '#F1C40F', icon: require('../assets/snack-icon.png') },

  ];



  const featuredItems = [

    { title: 'Politics Without Panic', color: '#FF69B4' },

    { title: 'Calming Everyday Anxiety', color: '#1E90FF' },

  ];



  const renderCategory = (category, index) => (

    <TouchableOpacity

      key={index}

      style={[styles.categoryButton, { backgroundColor: category.color }]}

    >

      <Text style={styles.categoryText}>{category.name}</Text>

      {category.icon && <Image source={category.icon} style={styles.categoryIcon} />}

    </TouchableOpacity>

  );



  const renderFeaturedItem = (item, index) => (

    <TouchableOpacity

      key={index}

      style={[styles.featuredItem, { backgroundColor: item.color }]}

    >

      <Text style={styles.featuredItemText}>{item.title}</Text>

      <Image source={require('../assets/snack-icon.png')} style={styles.featuredItemIcon} />

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <TextInput

          style={styles.searchInput}

          placeholder="Search exercises"

          placeholderTextColor="#6A7199"

        />

        <View style={styles.categoriesContainer}>

          {categories.map(renderCategory)}

        </View>

        <View style={styles.unlockSection}>

          <Text style={styles.unlockText}>Unlock the Headspace Library</Text>

          <TouchableOpacity style={styles.trialButton}>

            <Text style={styles.trialButtonText}>Start My Free Trial</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.featuredContainer}>

          {featuredItems.map(renderFeaturedItem)}

        </View>

      </ScrollView>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Today</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>Explore</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>子路</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#151C3B',

  },

  scrollContent: {

    padding: 20,

  },

  searchInput: {

    backgroundColor: '#1E2A59',

    borderRadius: 25,

    padding: 15,

    color: 'white',

    marginBottom: 20,

  },

  categoriesContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  categoryButton: {

    width: '48%',

    padding: 15,

    borderRadius: 15,

    marginBottom: 10,

    alignItems: 'center',

    justifyContent: 'center',

  },

  categoryText: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  categoryIcon: {

    width: 24,

    height: 24,

    position: 'absolute',

    right: 10,

    bottom: 10,

  },

  unlockSection: {

    backgroundColor: '#1E2A59',

    borderRadius: 15,

    padding: 20,

    alignItems: 'center',

    marginBottom: 20,

  },

  unlockText: {

    color: 'white',

    fontSize: 16,

    marginBottom: 10,

  },

  trialButton: {

    backgroundColor: '#3498DB',

    borderRadius: 25,

    paddingVertical: 12,

    paddingHorizontal: 20,

  },

  trialButtonText: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

  featuredContainer: {

    marginBottom: 20,

  },

  featuredItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    borderRadius: 15,

    padding: 15,

    marginBottom: 10,

  },

  featuredItemText: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  featuredItemIcon: {

    width: 30,

    height: 30,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#1E2A59',

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

  tabText: {

    color: '#6A7199',

    fontSize: 12,

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#3498DB',

  },

  activeTabText: {

    color: '#3498DB',

  },

});



export default ExploreScreen;