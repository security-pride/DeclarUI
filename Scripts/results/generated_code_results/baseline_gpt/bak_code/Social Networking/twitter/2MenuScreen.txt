import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>Pixsellz</Text>
          <Text style={styles.userHandle}>@pixsellz</Text>
          <View style={styles.followInfo}>
            <Text style={styles.followText}>216 Following</Text>
            <Text style={styles.followText}>117 Followers</Text>
          </View>
        </View>
        <View style={styles.moreOptions}>
          <Icon name="more-horizontal" size={24} color="black" />
        </View>
      </View>
      <View style={styles.menuItems}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={24} color="gray" />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="list" size={24} color="gray" />
          <Text style={styles.menuText}>Lists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="message-circle" size={24} color="gray" />
          <Text style={styles.menuText}>Topics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="bookmark" size={24} color="gray" />
          <Text style={styles.menuText}>Bookmarks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="zap" size={24} color="gray" />
          <Text style={styles.menuText}>Moments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings and privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Help Center</Text>
        </TouchableOpacity>
      </View>
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
    padding: 16,
    alignItems: 'center',
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userInfo: {
    flex: 1,
    marginLeft: 16,
  },
  username: {
    fontWeight: 'bold',
  },
  userHandle: {
    color: 'gray',
  },
  followInfo: {
    flexDirection: 'row',
    marginTop: 4,
  },
  followText: {
    marginRight: 16,
    color: 'gray',
  },
  moreOptions: {
    paddingLeft: 16,
  },
  menuItems: {
    marginTop: 32,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  menuText: {
    marginLeft: 16,
    fontSize: 16,
    color: 'black',
  },
});

export default MenuScreen;