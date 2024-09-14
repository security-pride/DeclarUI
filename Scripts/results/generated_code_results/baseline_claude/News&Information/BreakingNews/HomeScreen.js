import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('猜你喜欢');



  const tabs = ['猜你喜欢', '热门', '视频', '同城', '突发重大', '最新资讯'];



  const newsItem = {

    title: '总统核定成立大法官提名审蔽小组 拟明日开会',

    source: 'UDN.COM',

    time: '33分钟',

  };



  const renderNewsItem = () => (

    <View style={styles.newsItem}>

      <View style={styles.newsContent}>

        <Text style={styles.newsTitle}>{newsItem.title}</Text>

        <View style={styles.newsInfo}>

          <Text style={styles.newsSource}>{newsItem.source}</Text>

          <Text style={styles.newsTime}> - {newsItem.time}</Text>

        </View>

      </View>

      <View style={styles.newsActions}>

        <TouchableOpacity style={styles.actionButton}>

          <Text>反应</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Text>评论</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Text>分享</Text>

        </TouchableOpacity>

      </View>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

        <Text style={styles.headerTitle}>突发新闻</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />

        </TouchableOpacity>

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>

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



      <View style={styles.locationContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />

        <Text style={styles.locationText}>选择您的城市</Text>

        <Text style={styles.dateText}>Mon, 15 M07 2024, 08:35</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.weatherIcon} />

      </View>



      <Image source={require('../assets/snack-icon.png')} style={styles.worldMap} />



      {renderNewsItem()}



      <Image source={require('../assets/snack-icon.png')} style={styles.adImage} />



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>新闻</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>话题墙</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>BELOUD</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>提醒</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>更多</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FFFFFF',

  },

  logo: {

    width: 30,

    height: 30,

    marginRight: 10,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    flex: 1,

  },

  searchIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  profileIcon: {

    width: 24,

    height: 24,

  },

  tabContainer: {

    flexDirection: 'row',

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  tab: {

    paddingHorizontal: 15,

  },

  selectedTab: {

    borderBottomWidth: 2,

    borderBottomColor: 'red',

  },

  tabText: {

    fontSize: 16,

  },

  selectedTabText: {

    color: 'red',

  },

  locationContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

  },

  locationIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  locationText: {

    fontSize: 14,

    flex: 1,

  },

  dateText: {

    fontSize: 12,

    color: '#888888',

    marginRight: 5,

  },

  weatherIcon: {

    width: 24,

    height: 24,

  },

  worldMap: {

    width: '100%',

    height: 150,

    resizeMode: 'cover',

  },

  newsItem: {

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  newsTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  newsInfo: {

    flexDirection: 'row',

  },

  newsSource: {

    fontSize: 12,

    color: '#888888',

  },

  newsTime: {

    fontSize: 12,

    color: '#888888',

  },

  newsActions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 10,

  },

  actionButton: {

    padding: 5,

  },

  adImage: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#EEEEEE',

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

  },

});



export default HomeScreen;