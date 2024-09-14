import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = ({ navigation }) => {

  const categories = ['Top News', 'Your CNN', 'World', 'U.S. Politics', 'Business'];



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.time}>6:15</Text>

        <Icon name="cellular" size={16} color="black" />

        <Icon name="wifi" size={16} color="black" />

        <Icon name="battery-full" size={16} color="black" />

      </View>



      <View style={styles.logoContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

        <TouchableOpacity style={styles.searchButton}>

          <Icon name="search" size={24} color="black" />

        </TouchableOpacity>

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>

        {categories.map((category, index) => (

          <TouchableOpacity key={index} style={styles.categoryButton}>

            <Text style={[styles.categoryText, index === 0 && styles.activeCategoryText]}>{category}</Text>

            {index === 0 && <View style={styles.activeIndicator} />}

          </TouchableOpacity>

        ))}

      </ScrollView>



      <ScrollView style={styles.content}>

        <View style={styles.newsItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.newsImage} />

          <Text style={styles.newsTitle}>Minute-by-minute: Visual timeline of the assassination attempt on Donald Trump</Text>

          <Text style={styles.newsTime}>7h ago</Text>

        </View>



        <View style={styles.liveUpdates}>

          <Text style={styles.liveUpdatesText}>LIVE UPDATES</Text>

          <Text style={styles.liveUpdatesTitle}>Biden condemns Trump shooting; authorities search for gunman's motive</Text>

        </View>



        <View style={styles.videoItem}>

          <Icon name="play-circle-outline" size={24} color="red" />

          <Text style={styles.videoText}>VIDEO</Text>

          <Text style={styles.videoTitle}>Watch Biden's entire Oval Office address</Text>

        </View>



        <View style={styles.analysisItem}>

          <Text style={styles.analysisText}>ANALYSIS</Text>

          <Text style={styles.analysisTitle}>A nation traumatized and a campaign transformed as Trump is set to reemerge</Text>

        </View>

      </ScrollView>



      <View style={styles.navbar}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home" size={24} color="red" />

          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Elections')}>

          <Icon name="flag-outline" size={24} color="gray" />

          <Text style={styles.navText}>Elections</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="play-circle-outline" size={24} color="gray" />

          <Text style={styles.navText}>Watch</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="person-outline" size={24} color="gray" />

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

    justifyContent: 'flex-end',

    alignItems: 'center',

    paddingHorizontal: 10,

    paddingTop: 10,

  },

  time: {

    marginRight: 5,

  },

  logoContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

  },

  logo: {

    width: 50,

    height: 50,

    resizeMode: 'contain',

  },

  searchButton: {

    padding: 5,

  },

  categoriesContainer: {

    flexDirection: 'row',

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  categoryButton: {

    paddingHorizontal: 15,

    paddingBottom: 5,

  },

  categoryText: {

    fontSize: 16,

  },

  activeCategoryText: {

    color: 'red',

    fontWeight: 'bold',

  },

  activeIndicator: {

    height: 3,

    backgroundColor: 'red',

    position: 'absolute',

    bottom: 0,

    left: 15,

    right: 15,

  },

  content: {

    flex: 1,

  },

  newsItem: {

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  newsImage: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

    borderRadius: 8,

    marginBottom: 10,

  },

  newsTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  newsTime: {

    fontSize: 12,

    color: 'gray',

  },

  liveUpdates: {

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  liveUpdatesText: {

    color: 'red',

    fontWeight: 'bold',

    marginBottom: 5,

  },

  liveUpdatesTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  videoItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  videoText: {

    color: 'red',

    fontWeight: 'bold',

    marginLeft: 5,

  },

  videoTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginLeft: 10,

  },

  analysisItem: {

    padding: 15,

  },

  analysisText: {

    fontWeight: 'bold',

    marginBottom: 5,

  },

  analysisTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  navbar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    marginTop: 5,

    color: 'gray',

  },

  activeNavText: {

    color: 'red',

  },

});



export default HomeScreen;