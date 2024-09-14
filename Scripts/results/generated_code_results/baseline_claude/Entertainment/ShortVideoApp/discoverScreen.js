import React from 'react';

import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CategoryButton = ({ title, color }) => (

  <TouchableOpacity style={[styles.categoryButton, { backgroundColor: color }]}>

    <Text style={styles.categoryButtonText}>{title}</Text>

  </TouchableOpacity>

);



const VideoItem = ({ views, imageSource }) => (

  <View style={styles.videoItem}>

    <Image source={imageSource} style={styles.videoThumbnail} />

    <View style={styles.viewsContainer}>

      <Text style={styles.viewsText}>{views}</Text>

    </View>

  </View>

);



const DiscoverScreen = () => {

  const navigation = useNavigation();



  const categories = [

    { title: 'All', color: '#FF4D67' },

    { title: 'Challenge', color: '#FF8A00' },

    { title: 'Entertainment', color: '#3B82F6' },

    { title: 'Dance', color: '#8B5CF6' },

  ];



  const hotVideos = [

    { id: '1', views: '420.8K', image: require('../assets/snack-icon.png') },

    { id: '2', views: '316.0K', image: require('../assets/snack-icon.png') },

    { id: '3', views: '180.6K', image: require('../assets/snack-icon.png') },

  ];



  const featuredVideos = [

    { id: '4', image: require('../assets/snack-icon.png') },

    { id: '5', image: require('../assets/snack-icon.png') },

    { id: '6', image: require('../assets/snack-icon.png') },

  ];



  return (

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.searchContainer}>

          <TextInput

            style={styles.searchInput}

            placeholder="Search"

            placeholderTextColor="#666"

          />

        </View>



        <Image

          source={require('../assets/snack-icon.png')}

          style={styles.bannerImage}

        />



        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>

          {categories.map((category, index) => (

            <CategoryButton key={index} title={category.title} color={category.color} />

          ))}

        </ScrollView>



        <View style={styles.sectionContainer}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Hot 🔥</Text>

            <TouchableOpacity>

              <Text style={styles.seeAllText}>See all</Text>

            </TouchableOpacity>

          </View>

          <FlatList

            data={hotVideos}

            renderItem={({ item }) => <VideoItem views={item.views} imageSource={item.image} />}

            keyExtractor={item => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>



        <View style={styles.sectionContainer}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Featured ✨</Text>

            <TouchableOpacity>

              <Text style={styles.seeAllText}>See all</Text>

            </TouchableOpacity>

          </View>

          <FlatList

            data={featuredVideos}

            renderItem={({ item }) => <VideoItem imageSource={item.image} />}

            keyExtractor={item => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabText, styles.activeTabText]}>Discover</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <View style={styles.addButton}>

            <Text style={styles.addButtonText}>+</Text>

          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Activity</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Profile</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

  },

  searchContainer: {

    padding: 10,

  },

  searchInput: {

    backgroundColor: '#333',

    borderRadius: 20,

    padding: 10,

    color: '#fff',

  },

  bannerImage: {

    width: '100%',

    height: 150,

    resizeMode: 'cover',

  },

  categoriesContainer: {

    paddingVertical: 10,

  },

  categoryButton: {

    paddingHorizontal: 20,

    paddingVertical: 8,

    borderRadius: 20,

    marginHorizontal: 5,

  },

  categoryButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  sectionContainer: {

    marginTop: 20,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 10,

    marginBottom: 10,

  },

  sectionTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeAllText: {

    color: '#666',

  },

  videoItem: {

    marginRight: 10,

  },

  videoThumbnail: {

    width: 150,

    height: 200,

    borderRadius: 10,

  },

  viewsContainer: {

    position: 'absolute',

    bottom: 10,

    left: 10,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    borderRadius: 10,

    paddingHorizontal: 5,

    paddingVertical: 2,

  },

  viewsText: {

    color: '#fff',

    fontSize: 12,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#111',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#666',

  },

  tabText: {

    color: '#666',

    fontSize: 12,

    marginTop: 4,

  },

  activeTab: {

    backgroundColor: '#222',

    borderRadius: 20,

    paddingHorizontal: 20,

    paddingVertical: 5,

  },

  activeTabIcon: {

    tintColor: '#FF4D67',

  },

  activeTabText: {

    color: '#FF4D67',

  },

  addButton: {

    backgroundColor: '#FF4D67',

    width: 40,

    height: 40,

    borderRadius: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  addButtonText: {

    color: '#fff',

    fontSize: 24,

    fontWeight: 'bold',

  },

});



export default DiscoverScreen;