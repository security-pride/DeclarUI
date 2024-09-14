import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { Ionicons, Feather, MaterialCommunityIcons } from 'react-native-vector-icons';



const MenuScreen = ({ navigation }) => {

  const menuItems = [

    { icon: 'person-outline', text: 'Profile' },

    { icon: 'list-outline', text: 'Lists' },

    { icon: 'chatbubble-outline', text: 'Topics' },

    { icon: 'bookmark-outline', text: 'Bookmarks' },

    { icon: 'flash-outline', text: 'Moments' },

  ];



  return (

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

          <View style={styles.headerRight}>

            <View style={styles.profileImages}>

              <Image source={require('../assets/snack-icon.png')} style={styles.smallProfileImage} />

              <Image source={require('../assets/snack-icon.png')} style={styles.smallProfileImage} />

              <TouchableOpacity style={styles.moreButton}>

                <Ionicons name="ellipsis-horizontal" size={24} color="#1DA1F2" />

              </TouchableOpacity>

            </View>

          </View>

        </View>



        <Text style={styles.userName}>Pixsellz</Text>

        <Text style={styles.userHandle}>@pixsellz</Text>



        <View style={styles.followInfo}>

          <Text style={styles.followText}><Text style={styles.followCount}>216</Text> Following</Text>

          <Text style={styles.followText}><Text style={styles.followCount}>117</Text> Followers</Text>

        </View>



        {menuItems.map((item, index) => (

          <TouchableOpacity key={index} style={styles.menuItem}>

            <Ionicons name={item.icon} size={24} color="#14171A" />

            <Text style={styles.menuText}>{item.text}</Text>

          </TouchableOpacity>

        ))}



        <View style={styles.separator} />



        <TouchableOpacity style={styles.menuItem}>

          <Text style={styles.menuText}>Settings and privacy</Text>

        </TouchableOpacity>



        <TouchableOpacity style={styles.menuItem}>

          <Text style={styles.menuText}>Help Center</Text>

        </TouchableOpacity>

      </ScrollView>



      <View style={styles.footer}>

        <TouchableOpacity>

          <Ionicons name="bulb-outline" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Feather name="scanner" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <MaterialCommunityIcons name="home-variant" size={24} color="#1DA1F2" />

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

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 15,

  },

  profileImage: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  headerRight: {

    alignItems: 'flex-end',

  },

  profileImages: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  smallProfileImage: {

    width: 32,

    height: 32,

    borderRadius: 16,

    marginLeft: 8,

  },

  moreButton: {

    marginLeft: 8,

  },

  userName: {

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 15,

  },

  userHandle: {

    fontSize: 14,

    color: '#657786',

    marginLeft: 15,

    marginBottom: 10,

  },

  followInfo: {

    flexDirection: 'row',

    marginLeft: 15,

    marginBottom: 20,

  },

  followText: {

    marginRight: 20,

    color: '#657786',

  },

  followCount: {

    fontWeight: 'bold',

    color: '#14171A',

  },

  menuItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 15,

    paddingHorizontal: 15,

  },

  menuText: {

    marginLeft: 15,

    fontSize: 16,

  },

  separator: {

    height: 1,

    backgroundColor: '#E1E8ED',

    marginVertical: 10,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E1E8ED',

    paddingVertical: 10,

  },

});



export default MenuScreen;