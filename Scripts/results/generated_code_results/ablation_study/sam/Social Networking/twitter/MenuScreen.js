import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';



const MenuItem = ({ icon, title }) => (

  <TouchableOpacity style={styles.menuItem}>

    <Icon name={icon} size={24} color="#000" />

    <Text style={styles.menuItemText}>{title}</Text>

  </TouchableOpacity>

);



const MenuScreen = ({ navigation }) => {

  const profileInfo = {

    name: 'Pixsellz',

    handle: '@pixsellz',

    followingCount: 216,

    followerCount: 117,

  };



  const menuItems = [

    { icon: 'user', title: 'Profile' },

    { icon: 'list', title: 'Lists' },

    { icon: 'hash', title: 'Topics' },

    { icon: 'bookmark', title: 'Bookmarks' },

    { icon: 'zap', title: 'Moments' },

  ];



  return (

    <View style={styles.container}>

      <ScrollView>

        <TouchableOpacity style={styles.profileSection} onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

          <View style={styles.profileInfo}>

            <Text style={styles.profileName}>{profileInfo.name}</Text>

            <Text style={styles.profileHandle}>{profileInfo.handle}</Text>

          </View>

          <Icon name="chevron-down" size={24} color="#000" />

        </TouchableOpacity>

        <View style={styles.followInfo}>

          <Text style={styles.followText}>

            <Text style={styles.followCount}>{profileInfo.followingCount}</Text> Following

          </Text>

          <Text style={styles.followText}>

            <Text style={styles.followCount}>{profileInfo.followerCount}</Text> Followers

          </Text>

        </View>

        {menuItems.map((item, index) => (

          <MenuItem key={index} icon={item.icon} title={item.title} />

        ))}

        <TouchableOpacity style={styles.settingsOption}>

          <Text style={styles.settingsText}>Settings and privacy</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.helpOption}>

          <Text style={styles.helpText}>Help Center</Text>

        </TouchableOpacity>

      </ScrollView>

      <View style={styles.bottomNavigation}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="lightbulb" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="grid" size={24} color="#657786" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="home" size={24} color="#657786" />

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

  profileSection: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

  },

  profileImage: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  profileInfo: {

    flex: 1,

    marginLeft: 12,

  },

  profileName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  profileHandle: {

    fontSize: 14,

    color: '#657786',

  },

  followInfo: {

    flexDirection: 'row',

    padding: 16,

  },

  followText: {

    marginRight: 20,

    fontSize: 14,

  },

  followCount: {

    fontWeight: 'bold',

  },

  menuItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

  },

  menuItemText: {

    marginLeft: 16,

    fontSize: 16,

  },

  settingsOption: {

    padding: 16,

    borderTopWidth: 1,

    borderTopColor: '#E1E8ED',

  },

  settingsText: {

    fontSize: 16,

  },

  helpOption: {

    padding: 16,

  },

  helpText: {

    fontSize: 16,

  },

  bottomNavigation: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#E1E8ED',

    paddingVertical: 10,

  },

});



export default MenuScreen;