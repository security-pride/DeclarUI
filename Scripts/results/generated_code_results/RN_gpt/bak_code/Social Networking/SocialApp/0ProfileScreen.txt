import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/snack-icon.png')} 
        style={styles.backgroundImage}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.overlay}>
          <Text style={styles.potentialMatchLabel}>⚡ Potential Match!</Text>
          <Text style={styles.profileName}>Klee Gracia, 24</Text>

          <View style={styles.interests}>
            <Text style={styles.interestTag}>Running</Text>
            <Text style={styles.interestTag}>Outdoor</Text>
            <Text style={styles.interestTag}>Anime</Text>
          </View>

          <Text style={styles.profileDescription}>
            Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.
          </Text>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton} onPress={() => navigation.goBack()}>
              <Icon name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Messages')}>
              <Text style={styles.startConversation}>Start Conversation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="heart" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backButton: {
    margin: 16,
  },
  overlay: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 16,
    margin: 16,
    alignItems: 'center',
  },
  potentialMatchLabel: {
    fontSize: 18,
    color: '#FFD700',
    marginBottom: 8,
  },
  profileName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  interests: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  interestTag: {
    backgroundColor: '#333',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
    color: '#fff',
  },
  profileDescription: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  actionButton: {
    backgroundColor: '#333',
    borderRadius: 32,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  startConversation: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;