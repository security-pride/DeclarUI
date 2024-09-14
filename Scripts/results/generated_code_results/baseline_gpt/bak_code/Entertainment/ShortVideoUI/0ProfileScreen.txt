import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="person-add" size={24} />
        </TouchableOpacity>
        <Text style={styles.username}>Jacob West</Text>
        <TouchableOpacity>
          <Icon name="more-vert" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <Text style={styles.profileHandle}>@jacob_w</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>14</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>38</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>91</Text>
          <Text style={styles.statLabel}>Likes</Text>
        </View>
      </View>

      <View style={styles.editProfileContainer}>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmarkButton}>
          <Icon name="bookmark-border" size={24} />
        </TouchableOpacity>
      </View>

      <Text style={styles.bioText}>Tap to add bio</Text>

      <View style={styles.separator} />

      <View style={styles.gridContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.gridImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.gridImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.gridImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.gridImage} />
      </View>
    </ScrollView>
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
    padding: 16,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileHandle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  editProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 32,
    marginBottom: 16,
  },
  editProfileButton: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 8,
  },
  bookmarkButton: {
    backgroundColor: 'transparent',
    padding: 12,
  },
  editProfileText: {
    fontSize: 16,
    fontWeight: '500',
  },
  bioText: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridImage: {
    width: '50%',
    height: 200,
  },
});

export default ProfileScreen;