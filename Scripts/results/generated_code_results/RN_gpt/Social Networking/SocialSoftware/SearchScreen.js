import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const UserDetails = ({ name, fullName, followers, onFollowPress }) => (
  <View style={styles.userContainer}>
    <View style={styles.userInfo}>
      <Text style={styles.username}>{name}</Text>
      <Text style={styles.fullName}>{fullName}</Text>
      <Text style={styles.followers}>{followers}</Text>
    </View>
    <Button title="Follow" onPress={onFollowPress} />
  </View>
);

const SearchScreen = ({ navigation }) => {
  const users = [
    { name: 'aura', fullName: 'Aura Brown', followers: '500 mil followers' },
    { name: 'rick', fullName: 'Rick Wright', followers: '500 mil followers' },
    { name: 'mike', fullName: 'Mike Torello', followers: '500 mil followers' },
    { name: 'theodore', fullName: 'Theodore T.C. Calvin', followers: '500 mil followers' },
    { name: 'kate', fullName: 'Kate Tanner', followers: '500 mil followers' },
    { name: 'thomas', fullName: 'Thomas Magnum', followers: '500 mil followers' },
    { name: 'april', fullName: 'April Curtis', followers: '500 mil followers' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#888"
      />
      <ScrollView>
        {users.map((user, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('UserProfile')}
          >
            <UserDetails
              name={user.name}
              fullName={user.fullName}
              followers={user.followers}
              onFollowPress={() => console.log('Follow pressed')}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
          <Image style={styles.navIcon} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image style={styles.navIcon} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
          <Image style={styles.navIcon} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Likes Button Pressed')}>
          <Image style={styles.navIcon} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image style={styles.navIcon} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    color: '#fff',
  },
  fullName: {
    fontSize: 16,
    color: '#aaa',
  },
  followers: {
    fontSize: 14,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  navIcon: {
    height: 24,
    width: 24,
  },
});

export default SearchScreen;