import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const NewsItem = ({ title, time, type, isVideo }) => (

  <View style={styles.newsItem}>

    <Image source={require('../assets/snack-icon.png')} style={styles.newsImage} />

    <View style={styles.newsContent}>

      {type && <Text style={styles.newsType}>{type}</Text>}

      <Text style={styles.newsTitle}>{title}</Text>

      <Text style={styles.newsTime}>{time}</Text>

      {isVideo && (

        <View style={styles.videoIndicator}>

          <Icon name="play-circle-outline" size={18} color="#fff" />

          <Text style={styles.videoText}>VIDEO</Text>

        </View>

      )}

    </View>

  </View>

);



const HomeScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

        <Icon name="search" size={24} color="#000" />

      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>

        <Text style={[styles.category, styles.activeCategory]}>Top News</Text>

        <Text style={styles.category}>Your CNN</Text>

        <Text style={styles.category}>World</Text>

        <Text style={styles.category}>U.S. Politics</Text>

        <Text style={styles.category}>Business</Text>

      </ScrollView>

      <ScrollView>

        <NewsItem 

          title="Minute-by-minute: Visual timeline of the assassination attempt on Donald Trump"

          time="7h ago"

        />

        <NewsItem 

          type="LIVE UPDATES"

          title="Biden condemns Trump shooting; authorities search for gunman's motive"

        />

        <NewsItem 

          title="Watch Biden's entire Oval Office address"

          isVideo

        />

        <NewsItem 

          type="ANALYSIS"

          title="A nation traumatized and a campaign transformed as Trump is set to reemerge"

        />

      </ScrollView>

      <View style={styles.navbar}>

        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>

          <Icon name="home" size={24} color="#f00" />

          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Elections')}>

          <Icon name="how-to-vote" size={24} color="#000" />

          <Text style={styles.navText}>Elections</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="ondemand-video" size={24} color="#000" />

          <Text style={styles.navText}>Watch</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>

          <Icon name="person" size={24} color="#000" />

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

  },

  logo: {

    width: 40,

    height: 40,

  },

  categories: {

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

    paddingVertical: 8,

  },

  category: {

    fontSize: 16,

    marginHorizontal: 12,

    paddingVertical: 4,

  },

  activeCategory: {

    color: '#f00',

    borderBottomWidth: 2,

    borderBottomColor: '#f00',

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

  newsType: {

    color: '#f00',

    fontWeight: 'bold',

    marginBottom: 4,

  },

  newsTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  newsTime: {

    color: '#666',

  },

  videoIndicator: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'rgba(0,0,0,0.6)',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 4,

    position: 'absolute',

    top: 8,

    left: 8,

  },

  videoText: {

    color: '#fff',

    marginLeft: 4,

    fontSize: 12,

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

  navText: {

    fontSize: 12,

  },

  activeNavItem: {

    borderTopWidth: 2,

    borderTopColor: '#f00',

  },

  activeNavText: {

    color: '#f00',

  },

});



export default HomeScreen;