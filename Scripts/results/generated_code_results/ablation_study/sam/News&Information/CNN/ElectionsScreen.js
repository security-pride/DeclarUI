import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const NewsItem = ({ title, time, subtitle }) => (

  <View style={styles.newsItem}>

    <Image source={require('../assets/snack-icon.png')} style={styles.newsImage} />

    <View style={styles.newsContent}>

      <Text style={styles.newsTitle}>{title}</Text>

      <Text style={styles.newsTime}>{time}</Text>

      {subtitle && <Text style={styles.newsSubtitle}>{subtitle}</Text>}

    </View>

  </View>

);



const ElectionsScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <Text style={styles.header}>Elections</Text>

      <ScrollView>

        <NewsItem 

          title="43 seconds of chaos: How the assassination attempt on Trump unfolded"

          time="5h ago"

        />

        <NewsItem 

          title="Minute-by-minute: Visual timeline of the Trump assassination attempt"

        />

        <NewsItem 

          title="'Let me get my shoes': What was said on stage in the seconds after Trump was shot"

        />

        <NewsItem 

          title="Gunman was a few hundred feet away from Trump, CNN analysis shows"

        />

        <View style={styles.videoItem}>

          <Icon name="play-circle-outline" size={24} color="#000" style={styles.videoIcon} />

          <Text style={styles.videoTitle}>

            'He's got a gun!': Listen to audio of rally attendees as gunman is spotted

          </Text>

        </View>

      </ScrollView>

      <View style={styles.navbar}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#000" />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>

          <Icon name="how-to-vote" size={24} color="#000" />

          <Text style={[styles.navText, styles.activeNavText]}>Elections</Text>

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

    fontSize: 24,

    fontWeight: 'bold',

    padding: 16,

  },

  newsItem: {

    flexDirection: 'column',

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

  newsTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  newsTime: {

    fontSize: 14,

    color: '#666',

    marginBottom: 4,

  },

  newsSubtitle: {

    fontSize: 16,

  },

  videoItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  videoIcon: {

    marginRight: 8,

  },

  videoTitle: {

    fontSize: 16,

    flex: 1,

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



export default ElectionsScreen;