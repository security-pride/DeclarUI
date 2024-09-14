import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ElectionsScreen = () => {

  const navigation = useNavigation();



  const newsItems = [

    {

      id: 1,

      title: '43 seconds of chaos: How the assassination attempt on Trump unfolded',

      image: require('../assets/snack-icon.png'),

      time: '5h ago',

    },

    {

      id: 2,

      title: 'Minute-by-minute: Visual timeline of the Trump assassination attempt',

    },

    {

      id: 3,

      title: "'Let me get my shoes': What was said on stage in the seconds after Trump was shot",

    },

    {

      id: 4,

      title: 'Gunman was a few hundred feet away from Trump, CNN analysis shows',

    },

    {

      id: 5,

      title: "'He's got a gun!': Listen to audio of rally attendees as gunman is spotted",

      isVideo: true,

    },

  ];



  const renderNewsItem = (item) => (

    <TouchableOpacity key={item.id} style={styles.newsItem}>

      {item.image && (

        <Image source={item.image} style={styles.newsImage} />

      )}

      <View style={styles.newsContent}>

        <Text style={styles.newsTitle}>{item.title}</Text>

        {item.time && <Text style={styles.newsTime}>{item.time}</Text>}

        {item.isVideo && (

          <View style={styles.videoIndicator}>

            <Text style={styles.videoText}>VIDEO</Text>

          </View>

        )}

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <Text style={styles.header}>Elections</Text>

      <ScrollView style={styles.scrollView}>

        {newsItems.map(renderNewsItem)}

      </ScrollView>

      <View style={styles.navbar}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={[styles.navText, styles.activeNavText]}>Elections</Text>

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

    fontSize: 24,

    fontWeight: 'bold',

    padding: 16,

    backgroundColor: '#fff',

  },

  scrollView: {

    flex: 1,

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

  newsTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  newsTime: {

    fontSize: 14,

    color: '#666',

  },

  videoIndicator: {

    position: 'absolute',

    top: 0,

    left: 0,

    backgroundColor: 'rgba(0, 0, 0, 0.7)',

    padding: 4,

    borderRadius: 4,

  },

  videoText: {

    color: '#fff',

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



export default ElectionsScreen;