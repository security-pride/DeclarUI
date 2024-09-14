import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.image} />
      <TouchableOpacity style={styles.backButton}>
        <Icon name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={styles.badgeContainer}>
          <Icon name="bolt" size={16} color="gold" />
          <Text style={styles.badgeText}>Potential Match!</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Klee Gracia, 24</Text>
          <Icon name="check-circle" size={16} color="dodgerblue" />
        </View>
        <View style={styles.tagsContainer}>
          <Text style={styles.tag}>Running</Text>
          <Text style={styles.tag}>Outdoor</Text>
          <Text style={styles.tag}>Anime</Text>
        </View>
        <Text style={styles.bio}>
          Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="times" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.conversationButton}>
          <Text style={styles.conversationText}>Start Conversation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="heart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#141414',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  infoContainer: {
    padding: 20,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  badgeText: {
    color: 'white',
    marginLeft: 5,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  tag: {
    color: 'white',
    backgroundColor: '#303030',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  bio: {
    color: 'white',
    marginBottom: 20,
    lineHeight: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  actionButton: {
    backgroundColor: '#202020',
    borderRadius: 30,
    padding: 15,
  },
  conversationButton: {
    backgroundColor: '#303030',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  conversationText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileScreen;