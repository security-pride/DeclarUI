import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { Feather, Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons';



const HomeScreen = () => {

  const [likes, setLikes] = useState({});



  const toggleLike = (id) => {

    setLikes(prevLikes => ({

      ...prevLikes,

      [id]: !prevLikes[id]

    }));

  };



  const renderTweet = (tweet) => (

    <View key={tweet.id} style={styles.tweetContainer}>

      <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

      <View style={styles.tweetContent}>

        <View style={styles.tweetHeader}>

          <Text style={styles.userName}>{tweet.user}</Text>

          {tweet.verified && <Ionicons name="checkmark-circle" size={16} color="#1DA1F2" />}

          <Text style={styles.userHandle}>{tweet.handle}</Text>

          <Text style={styles.tweetTime}>{tweet.time}</Text>

        </View>

        <Text style={styles.tweetText}>{tweet.text}</Text>

        {tweet.showThread && (

          <TouchableOpacity>

            <Text style={styles.showThread}>Show this thread</Text>

          </TouchableOpacity>

        )}

        <View style={styles.tweetActions}>

          <TouchableOpacity style={styles.actionButton}>

            <Feather name="message-circle" size={18} color="#657786" />

            <Text style={styles.actionText}>{tweet.comments}</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Feather name="repeat" size={18} color="#657786" />

            <Text style={styles.actionText}>{tweet.retweets}</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => toggleLike(tweet.id)}>

            <Feather name="heart" size={18} color={likes[tweet.id] ? '#E0245E' : '#657786'} />

            <Text style={styles.actionText}>{tweet.likes}</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Feather name="share" size={18} color="#657786" />

          </TouchableOpacity>

        </View>

      </View>

    </View>

  );



  const tweets = [

    {

      id: 1,

      user: 'Martha Craig',

      handle: '@craig_love',

      verified: false,

      time: '12h',

      text: 'UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou',

      comments: '28',

      retweets: '5',

      likes: '21',

      showThread: true,

    },

    {

      id: 2,

      user: 'Maximmilian',

      handle: '@maxjacobson',

      verified: false,

      time: '3h',

      text: 'Y'all ready for this next post?',

      comments: '46',

      retweets: '18',

      likes: '363',

      showThread: false,

    },

    {

      id: 3,

      user: 'Tabitha Potter',

      handle: '@mis_potter',

      verified: true,

      time: '14h',

      text: 'Kobe's passing is really sticking w/ me in a way I didn't expect. He was an icon, the kind of person who wouldn't die this way. My wife compared it to Princess Di's accident.\n\nBut the end can happen for anyone at any time, & I can't help but think of anything else lately.',

      comments: '7',

      retweets: '1',

      likes: '11',

      showThread: false,

    },

  ];



  return (

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

          <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

          <TouchableOpacity style={styles.sparklesButton}>

            <MaterialCommunityIcons name="star-four-points" size={24} color="#1DA1F2" />

          </TouchableOpacity>

        </View>

        {tweets.map(renderTweet)}

      </ScrollView>

      <TouchableOpacity style={styles.newTweetButton}>

        <Feather name="plus" size={24} color="white" />

      </TouchableOpacity>

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

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#E1E8ED',

  },

  profileImage: {

    width: 32,

    height: 32,

    borderRadius: 16,

  },

  logo: {

    width: 24,

    height: 24,

  },

  sparklesButton: {

    padding: 5,

  },

  tweetContainer: {

    flexDirection: 'row',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#E1E8ED',

  },

  tweetContent: {

    flex: 1,

    marginLeft: 10,

  },

  tweetHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  userName: {

    fontWeight: 'bold',

    marginRight: 5,

  },

  userHandle: {

    color: '#657786',

    marginRight: 5,

  },

  tweetTime: {

    color: '#657786',

  },

  tweetText: {

    marginBottom: 10,

  },

  showThread: {

    color: '#1DA1F2',

    marginBottom: 10,

  },

  tweetActions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  actionButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  actionText: {

    marginLeft: 5,

    color: '#657786',

  },

  newTweetButton: {

    position: 'absolute',

    right: 20,

    bottom: 20,

    backgroundColor: '#1DA1F2',

    width: 56,

    height: 56,

    borderRadius: 28,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

  },

});



export default HomeScreen;