import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const ProfileScreen = () => {

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

      </View>

      <Image

        source={require('../assets/snack-icon.png')}

        style={styles.profileImage}

      />

      <View style={styles.potentialMatchBadge}>

        <Icon name="flash" size={16} color="#FFD700" />

        <Text style={styles.potentialMatchText}>Potential Match!</Text>

      </View>

      <View style={styles.profileInfo}>

        <Text style={styles.name}>Klee Gracia, 24</Text>

        <Icon name="checkmark-circle" size={20} color="#1DA1F2" />

      </View>

      <View style={styles.interestContainer}>

        <View style={styles.interestBadge}>

          <Text style={styles.interestText}>Running</Text>

        </View>

        <View style={styles.interestBadge}>

          <Text style={styles.interestText}>Outdoor</Text>

        </View>

        <View style={styles.interestBadge}>

          <Text style={styles.interestText}>Anime</Text>

        </View>

      </View>

      <Text style={styles.bio}>

        Hi there! I'm Gracia ☀️, a fun-loving adventurer looking for great connections.

      </Text>

      <View style={styles.actionButtons}>

        <TouchableOpacity style={styles.closeButton}>

          <Icon name="close" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.messageButton} onPress={() => navigation.navigate('Messages')}>

          <Icon name="chatbubble-outline" size={24} color="#FFF" />

          <Text style={styles.messageButtonText}>Start Conversation</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.likeButton}>

          <Icon name="heart-outline" size={24} color="#000" />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFF',

  },

  header: {

    paddingHorizontal: 16,

    paddingTop: 16,

  },

  profileImage: {

    width: '100%',

    height: 400,

    resizeMode: 'cover',

  },

  potentialMatchBadge: {

    position: 'absolute',

    top: 80,

    left: 16,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.7)',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 20,

  },

  potentialMatchText: {

    color: '#FFF',

    marginLeft: 4,

    fontSize: 14,

    fontWeight: '600',

  },

  profileInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    marginTop: 16,

  },

  name: {

    fontSize: 24,

    fontWeight: 'bold',

    marginRight: 8,

  },

  interestContainer: {

    flexDirection: 'row',

    paddingHorizontal: 16,

    marginTop: 12,

  },

  interestBadge: {

    backgroundColor: '#F0F0F0',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 16,

    marginRight: 8,

  },

  interestText: {

    fontSize: 14,

    color: '#333',

  },

  bio: {

    fontSize: 16,

    color: '#333',

    paddingHorizontal: 16,

    marginTop: 16,

  },

  actionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    marginTop: 24,

  },

  closeButton: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#F0F0F0',

    justifyContent: 'center',

    alignItems: 'center',

  },

  messageButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#000',

    paddingHorizontal: 20,

    paddingVertical: 12,

    borderRadius: 25,

  },

  messageButtonText: {

    color: '#FFF',

    marginLeft: 8,

    fontSize: 16,

    fontWeight: '600',

  },

  likeButton: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#F0F0F0',

    justifyContent: 'center',

    alignItems: 'center',

  },

});



export default ProfileScreen;