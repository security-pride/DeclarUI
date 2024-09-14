import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';



const Tweet = ({ avatar, name, handle, content, time, comments, retweets, likes, onPress }) => (

  <TouchableOpacity onPress={onPress}>

    <View style={styles.tweet}>

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.tweetContent}>

        <View style={styles.tweetHeader}>

          <Text style={styles.name}>{name}</Text>

          <Text style={styles.handle}>{handle}</Text>

          <Text style={styles.time}>{time}</Text>

        </View>

        <Text style={styles.tweetText}>{content}</Text>

        <View style={styles.tweetActions}>

          <Icon name="message-circle" size={16} color="#657786" />

          <Text style={styles.actionText}>{comments}</Text>

          <Icon name="repeat" size={16} color="#657786" />

          <Text style={styles.actionText}>{retweets}</Text>

          <Icon name="heart" size={16} color="#657786" />

          <Text style={styles.actionText}>{likes}</Text>

          <Icon name="share" size={16} color="#657786" />

        </View>

      </View>

    </View>

  </TouchableOpacity>

);



const HomeScreen = ({ navigation }) => {

  const [tweets, setTweets] = useState([

    {

      id: '1',

      avatar: '../assets/snack-icon.png',

      name: 'Martha Craig',

      handle: '@craig_love',

      content: 'UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou',

      time: '12h',

      comments: '28',

      retweets: '5',

      likes: '21'

    },

    {

      id: '2',

      avatar: '../assets/snack-icon.png',

      name: 'Maximmilian',

      handle: '@maxjacobson',

      content: "Y'all ready for this next post?",

      time: '3h',

      comments: '46',

      retweets: '18',

      likes: '363'

    },

  ]);



  const handleTweetPress = () => {

    navigation.navigate('Profile');

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />

        </TouchableOpacity>

        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

        <TouchableOpacity>

          <Icon name="star" size={24} color="#1DA1F2" />

        </TouchableOpacity>

      </View>

      <FlatList

        data={tweets}

        renderItem={({ item }) => <Tweet {...item} onPress={handleTweetPress} />}

        keyExtractor={item => item.id}

      />

      <View style={styles.bottomNav}>

        <TouchableOpacity>

          <Icon name="home" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Trends')}>

          <Icon name="search" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="bell" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="mail" size={24} color="#657786" />

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

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#E1E8ED',

  },

  profileIcon: {

    width: 32,

    height: 32,

    borderRadius: 16,

  },

  logo: {

    width: 24,

    height: 24,

  },

  tweet: {

    flexDirection: 'row',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#E1E8ED',

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

  name: {

    fontWeight: 'bold',

    marginRight: 5,

  },

  handle: {

    color: '#657786',

    marginRight: 5,

  },

  time: {

    color: '#657786',

  },

  tweetText: {

    marginBottom: 10,

  },

  tweetActions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    width: '80%',

  },

  actionText: {

    color: '#657786',

    marginLeft: 5,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    padding: 10,

    borderTopWidth: 1,

    borderTopColor: '#E1E8ED',

  },

});



export default HomeScreen;