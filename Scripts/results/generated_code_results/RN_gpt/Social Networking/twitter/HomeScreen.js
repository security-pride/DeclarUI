import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToProfileMenu = () => {
    navigation.navigate('Menu');
  };

  const openTrendsPage = () => {
    navigation.navigate('Trends');
  };

  const openUserProfilePage = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goToProfileMenu}>
          <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />
        </TouchableOpacity>
        <Icon name="twitter" size={30} color="skyblue" />
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Icon name="feather" size={25} color="skyblue" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="sliders" size={25} color="skyblue" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.feed}>
        <View style={styles.tweet}>
          <View style={styles.userIconContainer}>
            <Image source={require('../assets/snack-icon.png')} style={styles.userIcon} />
          </View>
          <View style={styles.tweetContent}>
            <Text style={styles.tweetHeader}>Kieron Dotson and Zack John liked</Text>
            <Text>Martha Craig @craig_love • 12h</Text>
            <Text style={styles.tweetText}>
              UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou
            </Text>
            <View style={styles.tweetActions}>
              <Text>28</Text>
              <Text>5</Text>
              <Text>21</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.threadLink}>Show this thread</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.tweet}>
          <View style={styles.userIconContainer}>
            <Image source={require('../assets/snack-icon.png')} style={styles.userIcon} />
          </View>
          <View style={styles.tweetContent}>
            <Text>Zack John liked</Text>
            <Text>Maximmilian @maxjacobson • 3h</Text>
            <Text>Y’all ready for this next post?</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.tweet}>
          <View style={styles.userIconContainer}>
            <Image source={require('../assets/snack-icon.png')} style={styles.userIcon} />
          </View>
          <View style={styles.tweetContent}>
            <Text>Kieron Dotson Retweeted</Text>
            <Text style={styles.tweetHeader}>Tabitha Potter @mis_potter • 14h</Text>
            <Text style={styles.tweetText}>
              Kobe’s passing is really sticking w/ me in a way I didn’t expect. He was an icon, the kind of person who wouldn’t die this way. My wife compared it to Princess Di’s accident.
            </Text>
            <Text style={styles.tweetText}>
              But the end can happen for anyone at any time, & I can’t help but think of anything else lately.
            </Text>
            <View style={styles.tweetActions}>
              <Text>7</Text>
              <Text>1</Text>
              <Text>11</Text>
            </View>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.tweet}>
          <View style={styles.userIconContainer}>
            <Image source={require('../assets/snack-icon.png')} style={styles.userIcon} />
          </View>
          <View style={styles.tweetContent}>
            <Text>Zack John liked</Text>
            <Text>karennne @karennne • 10h</Text>
            <Text>Name a show where the lead character is the worst character on the show I’ll go Sabrina Spellman</Text>
            <View style={styles.tweetActions}>
              <Text>1,906</Text>
              <Text>1,249</Text>
              <Text>7,461</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity onPress={openUserProfilePage}>
          <Icon name="home" size={30} color="skyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openTrendsPage}>
          <Icon name="search" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="mail" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.floatingButton}>
        <Icon name="feather" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerRight: {
    flexDirection: 'row',
  },
  feed: {
    flex: 1,
  },
  tweet: {
    flexDirection: 'row',
    padding: 10,
  },
  userIconContainer: {
    marginRight: 10,
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  tweetContent: {
    flex: 1,
  },
  tweetHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tweetText: {
    marginVertical: 5,
  },
  tweetActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
  },
  threadLink: {
    color: 'skyblue',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;