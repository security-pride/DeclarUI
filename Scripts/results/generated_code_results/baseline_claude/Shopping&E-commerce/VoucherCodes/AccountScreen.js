import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const AccountScreen = () => {

  const navigation = useNavigation();



  const menuItems = [

    { icon: 'user', title: 'Personal details' },

    { icon: 'heart', title: 'Favourite brands' },

    { icon: 'mail', title: 'Communication preferences' },

    { icon: 'star', title: 'VIP rewards tracker', isNew: true },

    { icon: 'pound', title: 'Track transaction status' },

    { icon: 'gift', title: 'Gift card wallet' },

    { icon: 'code', title: 'Submit a code' },

  ];



  const renderMenuItem = (item, index) => (

    <TouchableOpacity

      key={index}

      style={styles.menuItem}

      onPress={() => navigation.navigate(item.title.replace(/\s+/g, ''))}

    >

      <Image source={{ uri: `../assets/${item.icon}.png` }} style={styles.menuIcon} />

      <Text style={styles.menuText}>{item.title}</Text>

      {item.isNew && <View style={styles.newBadge}><Text style={styles.newText}>New</Text></View>}

      <Text style={styles.arrow}>›</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerText}>Tailor your offers and access exciting rewards</Text>

        <TouchableOpacity style={styles.signInButton}>

          <Text style={styles.signInText}>Sign In</Text>

        </TouchableOpacity>

      </View>

      <ScrollView style={styles.menuContainer}>

        {menuItems.map(renderMenuItem)}

      </ScrollView>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={{ uri: '../assets/compass.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>Discover</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={{ uri: '../assets/search.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>Search</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={{ uri: '../assets/star.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>VIP</Text>

          <View style={styles.tabNewBadge}><Text style={styles.tabNewText}>NEW</Text></View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={{ uri: '../assets/user.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>Account</Text>

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

    backgroundColor: '#FFD700',

    padding: 20,

    alignItems: 'center',

  },

  headerText: {

    fontSize: 18,

    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 10,

  },

  signInButton: {

    backgroundColor: '#FFD700',

    paddingVertical: 10,

    paddingHorizontal: 20,

    borderRadius: 25,

    borderWidth: 2,

    borderColor: '#000',

  },

  signInText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  menuContainer: {

    flex: 1,

  },

  menuItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  menuIcon: {

    width: 24,

    height: 24,

    marginRight: 15,

  },

  menuText: {

    fontSize: 16,

    flex: 1,

  },

  newBadge: {

    backgroundColor: '#FFD700',

    borderRadius: 10,

    paddingHorizontal: 8,

    paddingVertical: 2,

    marginRight: 10,

  },

  newText: {

    fontSize: 12,

    fontWeight: 'bold',

  },

  arrow: {

    fontSize: 20,

    color: '#888',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  tabText: {

    fontSize: 12,

  },

  tabNewBadge: {

    position: 'absolute',

    top: -5,

    right: -15,

    backgroundColor: '#FFD700',

    borderRadius: 10,

    paddingHorizontal: 5,

    paddingVertical: 2,

  },

  tabNewText: {

    fontSize: 10,

    fontWeight: 'bold',

  },

});



export default AccountScreen;