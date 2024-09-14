import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />

        </TouchableOpacity>

        <Image source={require('../assets/snack-icon.png')} style={styles.twitterIcon} />

        <TouchableOpacity>

          <Icon name="sparkles-outline" size={24} color="#1DA1F2" />

        </TouchableOpacity>

      </View>

      

      <ScrollView style={styles.content}>

        <TweetItem

          user="Martha Craig"

          handle="@craig_love"

          time="12h"

          content="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou"

          likes={21}

          retweets={5}

          comments={28}

        />

        

        <TweetItem

          user="Maximmilian"

          handle="@maxjacobson"

          time="3h"

          content="Y' all ready for this next post?"

          likes={363}

          retweets={18}

          comments={46}

        />

        

        <TweetItem

          user="Tabitha Potter"

          handle="@mis_potter"

          time="14h"

          content="Kobe's passing is really sticking w/ me in a way I didn't expect.\n\nHe was an icon, the kind of person who wouldn't die this way. My wife compared it to Princess Di's accident.\n\nBut the end can happen for anyone at any time, & I can't help but think of anything else lately."

          likes={11}

          retweets={1}

          comments={7}

        />

        

        <TweetItem

          user="karennne"

          handle="@karennne"

          time="10h"

          content="Name a show where the lead character is the worst character on the show I'll go Sabrina Spellman"

          likes={7461}

          retweets={1249}

          comments={1906}

        />

      </ScrollView>

      

      <TouchableOpacity style={styles.floatingButton}>

        <Icon name="add" size={30} color="white" />

      </TouchableOpacity>

      

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Icon name="search" size={24} color="gray" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Trends')}>

          <Icon name="trending-up" size={24} color="gray" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>

          <Icon name="menu" size={24} color="gray" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const TweetItem = ({ user, handle, time, content, likes, retweets, comments }) => (

  <View style={styles.tweetContainer}>

    <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

    <View style={styles.tweetContent}>

      <View style={styles.tweetHeader}>

        <Text style={styles.userName}>{user}</Text>

        <Text style={styles.userHandle}>{handle}</Text>

        <Text style={styles.tweetTime}>· {time}</Text>

      </View>

      <Text style={styles.tweetText}>{content}</Text>

      <View style={styles.tweetActions}>

        <TouchableOpacity style={styles.actionButton}>

          <Icon name="chatbubble-outline" size={16} color="gray" />

          <Text style={styles.actionText}>{comments}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Icon name="repeat-outline" size={16} color="gray" />

          <Text style={styles.actionText}>{retweets}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Icon name="heart-outline" size={16} color="gray" />

          <Text style={styles.actionText}>{likes}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Icon name="share-outline" size={16} color="gray" />

        </TouchableOpacity>

      </View>

    </View>

  </View>

);



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: 'white',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#e1e8ed',

  },

  profileIcon: {

    width: 30,

    height: 30,

    borderRadius: 15,

  },

  twitterIcon: {

    width: 30,

    height: 30,

  },

  content: {

    flex: 1,

  },

  tweetContainer: {

    flexDirection: 'row',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#e1e8ed',

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 10,

  },

  tweetContent: {

    flex: 1,

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

    color: 'gray',

  },

  tweetTime: {

    color: 'gray',

  },

  tweetText: {

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

    color: 'gray',

  },

  floatingButton: {

    position: 'absolute',

    right: 20,

    bottom: 70,

    backgroundColor: '#1DA1F2',

    width: 60,

    height: 60,

    borderRadius: 30,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    height: 50,

    borderTopWidth: 1,

    borderTopColor: '#e1e8ed',

  },

});



export default HomeScreen;