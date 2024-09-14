import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const categories = ['Top News', 'Your CNN', 'World', 'U.S. Politics', 'Business'];



  const newsItems = [

    {

      id: 1,

      title: 'Minute-by-minute: Visual timeline of the assassination attempt on Donald Trump',

      image: require('../assets/snack-icon.png'),

      time: '7h ago',

    },

    {

      id: 2,

      title: 'Biden condemns Trump shooting; authorities search for gunman\'s motive',

      type: 'LIVE UPDATES',

    },

    {

      id: 3,

      title: 'Watch Biden\'s entire Oval Office address',

      type: 'VIDEO',

    },

    {

      id: 4,

      title: 'A nation traumatized and a campaign transformed as Trump is set to reemerge',

      type: 'ANALYSIS',

    },

  ];



  const renderNewsItem = (item) => (

    <TouchableOpacity key={item.id} style={styles.newsItem}>

      {item.image && (

        <Image source={item.image} style={styles.newsImage} />

      )}

      <View style={styles.newsContent}>

        {item.type && (

          <Text style={[styles.newsType, item.type === 'LIVE UPDATES' && styles.liveUpdates]}>

            {item.type}

          </Text>

        )}

        <Text style={styles.newsTitle}>{item.title}</Text>

        {item.time && <Text style={styles.newsTime}>{item.time}</Text>}

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

        <TouchableOpacity onPress={() => {}}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        </TouchableOpacity>

      </View>

      <ScrollView style={styles.scrollView}>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>

          {categories.map((category, index) => (

            <TouchableOpacity

              key={index}

              style={[styles.category, index === 0 && styles.activeCategory]}

            >

              <Text style={[styles.categoryText, index === 0 && styles.activeCategoryText]}>

                {category}

              </Text>

            </TouchableOpacity>

          ))}

        </ScrollView>

        {newsItems.map(renderNewsItem)}

      </ScrollView>

      <View style={styles.navbar}>

        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Elections')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Elections</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Watch')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Watch</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Settings</Text>

        </TouchableOpacity>

      </View>

    </View>

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

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  logo: {

    width: 40,

    height: 40,

  },

  searchIcon: {

    width: 24,

    height: 24,

  },

  scrollView: {

    flex: 1,

  },

  categoriesScroll: {

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  category: {

    paddingHorizontal: 16,

    paddingVertical: 12,

  },

  activeCategory: {

    borderBottomWidth: 2,

    borderBottomColor: 'red',

  },

  categoryText: {

    fontSize: 16,

  },

  activeCategoryText: {

    color: 'red',

  },

  newsItem: {

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  newsImage: {

    width: '100%',

    height: 200,

    borderRadius: 8,

    marginBottom: 8,

  },

  newsContent: {

    flex: 1,

  },

  newsType: {

    fontSize: 12,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  liveUpdates: {

    color: 'red',

  },

  newsTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  newsTime: {

    fontSize: 14,

    color: '#666',

  },

  navbar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 8,

  },

  navItem: {

    alignItems: 'center',

  },

  activeNavItem: {

    borderTopWidth: 2,

    borderTopColor: 'red',

  },

  navIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  navText: {

    fontSize: 12,

  },

  activeNavText: {

    color: 'red',

  },

});



export default HomeScreen;