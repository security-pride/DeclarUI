import React, { useState } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const NewsScreen = () => {

  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('For You');



  const tabs = ['For You', 'Local', 'Top Stories', 'US'];



  const newsData = [

    {

      id: '1',

      source: 'The Associated Press',

      time: '4h',

      title: 'Argentina wins record 16th Copa America title, beats Colombia 1-0 after Messi gets hurt',

      likes: 178,

      dislikes: 47,

      comments: 9,

      image: require('../assets/snack-icon.png'),

    },

    {

      id: '2',

      source: 'Athlon Sports',

      time: '11h',

      title: 'Caitlin Clark Goes Viral for Dropping Player to Floor in Fever-Lynx',

      likes: 73,

      dislikes: 29,

      comments: 3,

      image: require('../assets/snack-icon.png'),

    },

    {

      id: '3',

      source: 'Southern Living',

      time: '6d',

      title: 'This 740-Square-Foot Bungalow Proves Just The Right Fit For A Family Of Seven',

      likes: 18,

      dislikes: 5,

      comments: 1,

      image: require('../assets/snack-icon.png'),

    },

    {

      id: '4',

      source: 'Moneywise',

      time: '22h',

      title: 'How big is the average Social Security check of a middle-class retiree?',

      likes: 113,

      dislikes: 86,

      comments: 64,

      image: require('../assets/snack-icon.png'),

    },

  ];



  const renderNewsItem = ({ item }) => (

    <View style={styles.newsItem}>

      <View style={styles.newsContent}>

        <View style={styles.newsHeader}>

          <Text style={styles.newsSource}>{item.source}</Text>

          <Text style={styles.newsTime}> · {item.time}</Text>

        </View>

        <Text style={styles.newsTitle}>{item.title}</Text>

        <View style={styles.newsStats}>

          <View style={styles.statItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.statIcon} />

            <Text style={styles.statText}>{item.likes}</Text>

          </View>

          <View style={styles.statItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.statIcon} />

            <Text style={styles.statText}>{item.dislikes}</Text>

          </View>

          <View style={styles.statItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.statIcon} />

            <Text style={styles.statText}>{item.comments}</Text>

          </View>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />

          </TouchableOpacity>

        </View>

      </View>

      <Image source={item.image} style={styles.newsImage} />

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <TextInput

            style={styles.searchInput}

            placeholder="Search news"

            placeholderTextColor="#666"

          />

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.micIcon} />

          </TouchableOpacity>

        </View>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.moreOptionsIcon} />

        </TouchableOpacity>

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>

        <TouchableOpacity style={styles.menuButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />

        </TouchableOpacity>

        {tabs.map((tab, index) => (

          <TouchableOpacity

            key={index}

            style={[styles.tab, selectedTab === tab && styles.selectedTab]}

            onPress={() => setSelectedTab(tab)}

          >

            <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>

          </TouchableOpacity>

        ))}

      </ScrollView>



      <Text style={styles.headlineTitle}>Headlines</Text>



      <FlatList

        data={newsData}

        renderItem={renderNewsItem}

        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}

      />



      <TouchableOpacity style={styles.seeMoreButton}>

        <Text style={styles.seeMoreText}>See more</Text>

      </TouchableOpacity>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Weather')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Weather</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Chat</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Tabs</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Apps')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Apps</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FFFFFF',

  },

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F5',

    borderRadius: 20,

    paddingHorizontal: 10,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  micIcon: {

    width: 20,

    height: 20,

  },

  moreOptionsIcon: {

    width: 24,

    height: 24,

  },

  tabsContainer: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

  },

  menuButton: {

    paddingHorizontal: 15,

  },

  menuIcon: {

    width: 24,

    height: 24,

  },

  tab: {

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 15,

    marginRight: 10,

  },

  selectedTab: {

    backgroundColor: '#4285F4',

  },

  tabText: {

    color: '#666',

  },

  selectedTabText: {

    color: '#FFFFFF',

  },

  headlineTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    padding: 15,

  },

  newsItem: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginBottom: 10,

  },

  newsContent: {

    flex: 1,

    marginRight: 10,

  },

  newsHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  newsSource: {

    fontWeight: 'bold',

  },

  newsTime: {

    color: '#666',

  },

  newsTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  newsStats: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  statItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginRight: 15,

  },

  statIcon: {

    width: 16,

    height: 16,

    marginRight: 5,

  },

  statText: {

    color: '#666',

  },

  moreIcon: {

    width: 20,

    height: 20,

  },

  newsImage: {

    width: 100,

    height: 100,

    borderRadius: 10,

  },

  seeMoreButton: {

    alignItems: 'center',

    padding: 15,

  },

  seeMoreText: {

    color: '#4285F4',

    fontWeight: 'bold',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    alignItems: 'center',

  },

  navIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  navText: {

    fontSize: 12,

    color: '#666',

  },

});



export default NewsScreen;