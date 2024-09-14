import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/snack-icon.png')}
        style={styles.backgroundImage}
      >
        <Text style={styles.timeDisplay}>9:41</Text>

        <View style={styles.header}>
          <Text style={styles.tabLabel}>Following</Text>
          <Text style={styles.tabLabel}>|</Text>
          <Text style={styles.tabSelected}>For You</Text>
        </View>

        <View style={styles.videoContent}>
          <TouchableOpacity
            style={styles.commentButton}
            onPress={() => navigation.navigate('Comments')}
          >
            <Icon name="comment" size={30} color="#fff" />
            <Text style={styles.iconText}>578</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.likeButton}
            onPress={() => alert('Like button pressed')}
          >
            <Icon name="favorite" size={30} color="#fff" />
            <Text style={styles.iconText}>328.7K</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => navigation.navigate('Share')}
          >
            <Icon name="share" size={30} color="#fff" />
            <Text style={styles.iconText}>Share</Text>
          </TouchableOpacity>

          <ImageBackground
            source={require('../assets/snack-icon.png')}
            style={styles.musicDisk}
          />
        </View>

        <Text style={styles.userHandle}>@craig_love</Text>
        <Text style={styles.postDescription}>
          The most satisfying Job #fyp #satisfying #roadmarking
        </Text>

        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="home" size={30} color="#fff" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert('Search button pressed')}>
            <Icon name="search" size={30} color="#fff" />
            <Text style={styles.navText}>Discover</Text>
          </TouchableOpacity>

          <Button title="+" onPress={() => alert('Create button pressed')} />

          <TouchableOpacity onPress={() => navigation.navigate('Inbox')}>
            <Icon name="inbox" size={30} color="#fff" />
            <Text style={styles.navText}>Inbox</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Icon name="person" size={30} color="#fff" />
            <Text style={styles.navText}>Me</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  timeDisplay: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  tabLabel: {
    color: '#aaa',
    fontSize: 18,
    marginHorizontal: 5,
  },
  tabSelected: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  videoContent: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  commentButton: {
    marginBottom: 20,
  },
  likeButton: {
    marginBottom: 20,
  },
  shareButton: {
    marginBottom: 20,
  },
  iconText: {
    color: '#fff',
    textAlign: 'center',
  },
  musicDisk: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  userHandle: {
    color: '#fff',
    fontSize: 16,
  },
  postDescription: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#555',
    paddingVertical: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default HomeScreen;