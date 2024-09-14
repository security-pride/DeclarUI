import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const ElectionsScreen = ({ navigation }) => {

  const newsItems = [

    {

      title: "43 seconds of chaos: How the assassination attempt on Trump unfolded",

      image: require('../assets/snack-icon.png'),

      time: "5h ago"

    },

    {

      title: "Minute-by-minute: Visual timeline of the Trump assassination attempt"

    },

    {

      title: "'Let me get my shoes': What was said on stage in the seconds after Trump was shot"

    },

    {

      title: "Gunman was a few hundred feet away from Trump, CNN analysis shows"

    },

    {

      title: "'He's got a gun!': Listen to audio of rally attendees as gunman is spotted",

      video: true

    }

  ];



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.time}>6:17</Text>

        <Icon name="cellular" size={16} color="black" />

        <Icon name="wifi" size={16} color="black" />

        <Icon name="battery-full" size={16} color="black" />

      </View>



      <Text style={styles.title}>Elections</Text>



      <ScrollView style={styles.content}>

        {newsItems.map((item, index) => (

          <TouchableOpacity key={index} style={styles.newsItem}>

            {index === 0 && (

              <Image source={item.image} style={styles.newsImage} />

            )}

            <View style={styles.newsTextContainer}>

              <Text style={styles.newsTitle}>{item.title}</Text>

              {item.time && <Text style={styles.newsTime}>{item.time}</Text>}

            </View>

            {item.video && (

              <View style={styles.videoLabel}>

                <Icon name="videocam" size={16} color="white" />

                <Text style={styles.videoText}>VIDEO</Text>

              </View>

            )}

          </TouchableOpacity>

        ))}

      </ScrollView>



      <View style={styles.navbar}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home-outline" size={24} color="gray" />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="flag" size={24} color="red" />

          <Text style={[styles.navText, styles.activeNavText]}>Elections</Text>

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

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    padding: 15,

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

    borderRadius: 8,

    marginBottom: 10,

  },

  newsTextContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-start',

  },

  newsTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    flex: 1,

  },

  newsTime: {

    fontSize: 12,

    color: 'gray',

    marginLeft: 10,

  },

  videoLabel: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'black',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 4,

    alignSelf: 'flex-start',

    marginTop: 5,

  },

  videoText: {

    color: 'white',

    marginLeft: 5,

    fontSize: 12,

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



export default ElectionsScreen;