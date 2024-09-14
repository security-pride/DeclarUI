import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';



const MenuScreen = ({ navigation }) => {

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

                <Icon name="ellipsis-horizontal" size={24} color="#1DA1F2" />

              </TouchableOpacity>

            </View>

          </View>

        </View>



        <View style={styles.profileInfo}>

          <Text style={styles.profileName}>Pixsellz</Text>

          <Text style={styles.profileHandle}>@pixsellz</Text>

          <View style={styles.followInfo}>

            <Text style={styles.followText}><Text style={styles.followCount}>216</Text> Following</Text>

            <Text style={styles.followText}><Text style={styles.followCount}>117</Text> Followers</Text>

          </View>

        </View>



        <View style={styles.menuItems}>

          <MenuItem icon="person-outline" text="Profile" />

          <MenuItem icon="list-outline" text="Lists" />

          <MenuItem icon="chatbubble-ellipses-outline" text="Topics" />

          <MenuItem icon="bookmark-outline" text="Bookmarks" />

          <MenuItem icon="flash-outline" text="Moments" />

        </View>



        <View style={styles.divider} />



        <TouchableOpacity style={styles.menuItem}>

          <Text style={styles.menuItemText}>Settings and privacy</Text>

        </TouchableOpacity>



        <TouchableOpacity style={styles.menuItem}>

          <Text style={styles.menuItemText}>Help Center</Text>

        </TouchableOpacity>

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="bulb-outline" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="qr-code-outline" size={24} color="#1DA1F2" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#1DA1F2" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const MenuItem = ({ icon, text }) => {
  const navigation = useNavigation();
  return (

  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(text)}>

    <Icon name={icon} size={24} color="black" style={styles.menuIcon} />

    <Text style={styles.menuItemText}>{text}</Text>

  </TouchableOpacity>

)};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: 'white',

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

    width: 30,

    height: 30,

    borderRadius: 15,

    marginLeft: 5,

  },

  moreButton: {

    marginLeft: 10,

  },

  profileInfo: {

    padding: 15,

  },

  profileName: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  profileHandle: {

    fontSize: 16,

    color: 'gray',

  },

  followInfo: {

    flexDirection: 'row',

    marginTop: 10,

  },

  followText: {

    marginRight: 15,

    fontSize: 16,

  },

  followCount: {

    fontWeight: 'bold',

  },

  menuItems: {

    borderTopWidth: 1,

    borderTopColor: '#e1e8ed',

  },

  menuItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#e1e8ed',

  },

  menuIcon: {

    marginRight: 15,

  },

  menuItemText: {

    fontSize: 18,

  },

  divider: {

    height: 10,

    backgroundColor: '#f5f8fa',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    height: 50,

    borderTopWidth: 1,

    borderTopColor: '#e1e8ed',

  },

});



export default MenuScreen;