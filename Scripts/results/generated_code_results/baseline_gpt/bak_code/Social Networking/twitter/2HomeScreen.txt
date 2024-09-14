import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const tweets = [
  {
    id: '1',
    username: 'Martha Craig',
    handle: '@craig_love',
    time: '12h',
    likedBy: 'Kieron Dotson and Zack John',
    content: 'UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou',
    comments: 28,
    retweets: 5,
    likes: 21,
    profileImage: '../assets/snack-icon.png'
  },
  {
    id: '2',
    username: 'Maximmilian',
    handle: '@maxjacobson',
    time: '3h',
    likedBy: 'Zack John',
    content: 'y’all ready for this next post?',
    comments: 46,
    retweets: 18,
    likes: 363,
    profileImage: '../assets/snack-icon.png'
  },
  {
    id: '3',
    username: 'Tabitha Potter',
    handle: '@mis_potter',
    time: '14h',
    retweetedBy: 'Kieron Dotson',
    content: "Kobe’s passing is really sticking w/ me in a way I didn’t expect.\n\nHe was an icon, the kind of person who wouldn’t die this way. My wife compared it to Princess Di’s accident.",
    comments: 7,
    retweets: 1,
    likes: 11,
    profileImage: '../assets/snack-icon.png'
  },
  {
    id: '4',
    username: 'karennne',
    handle: '@karennne',
    time: '10h',
    likedBy: 'Zack John',
    content: "Name a show where the lead character is the worst character on the show I’ll go first: Sabrina Spellman",
    comments: 1906,
    retweets: 1249,
    likes: 7461,
    profileImage: '../assets/snack-icon.png'
  }
];

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.tweetContainer}>
      <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.likedByText}>{item.retweetedBy || `${item.likedBy} liked`}</Text>
        <Text style={styles.tweetHeader}>
          <Text style={styles.username}>{item.username} </Text>
          <Text style={styles.handle}>{item.handle} · {item.time}</Text>
        </Text>
        <Text style={styles.contentText}>{item.content}</Text>
        <View style={styles.interactionContainer}>
          <TouchableOpacity style={styles.interaction}>
            <Icon name="message-circle" size={16} color="gray" />
            <Text style={styles.interactionCount}>{item.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.interaction}>
            <Icon name="repeat" size={16} color="gray" />
            <Text style={styles.interactionCount}>{item.retweets}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.interaction}>
            <Icon name="heart" size={16} color="gray" />
            <Text style={styles.interactionCount}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="share-2" size={16} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tweetContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6ecf0',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  likedByText: {
    color: 'gray',
    fontSize: 12,
    marginBottom: 2,
  },
  tweetHeader: {
    flexDirection: 'row',
  },
  username: {
    fontWeight: 'bold',
  },
  handle: {
    color: 'gray',
    marginLeft: 5,
  },
  contentText: {
    marginVertical: 5,
  },
  interactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  interaction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactionCount: {
    marginLeft: 5,
    color: 'gray',
    fontSize: 12,
  },
});

export default HomeScreen;