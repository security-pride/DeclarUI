import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeListScreen = () => {

  const navigation = useNavigation();



  const listData = [

    { id: '1', title: 'Photos & video', items: '3471 items', icon: 'folder-red' },

    { id: '2', title: 'Recent videos', items: '13 items', icon: 'play-blue' },

    { id: '3', title: 'iTunes', items: '27 items', icon: 'itunes' },

    { id: '4', title: 'Recently deleted', items: '13 items', icon: 'folder-orange' },

    { id: '5', title: 'The Chainsmoker Closer', date: '28.Feb 2020', icon: 'album' },

    { id: '6', title: 'Plant photoshoot', date: '25.Feb 2020', icon: 'plant' },

    { id: '7', title: 'Quotes', date: '25.Feb 2020', icon: 'text' },

    { id: '8', title: 'Business management', date: '21.Feb 2020', icon: 'pdf' },

  ];



  const renderListItem = ({ item }) => (

    <TouchableOpacity style={styles.listItem}>

      <Image source={{ uri: `../assets/${item.icon}.png` }} style={styles.listItemIcon} />

      <View style={styles.listItemContent}>

        <Text style={styles.listItemTitle}>{item.title}</Text>

        <Text style={styles.listItemSubtitle}>{item.items || item.date}</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Text style={styles.moreButtonText}>···</Text>

      </TouchableOpacity>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.settingsIcon} />

        </TouchableOpacity>

        <View style={styles.headerRight}>

          <TouchableOpacity style={styles.headerButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.headerButton}>

            <Text style={styles.headerButtonText}>Name</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.headerButton}>

            <Text style={styles.headerButtonText}>Select</Text>

          </TouchableOpacity>

        </View>

      </View>



      <Text style={styles.title}>Home</Text>



      <View style={styles.searchContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search"

          placeholderTextColor="#999"

        />

      </View>



      <FlatList

        data={listData}

        renderItem={renderListItem}

        keyExtractor={item => item.id}

        contentContainerStyle={styles.listContainer}

      />



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingTop: 10,

    paddingBottom: 10,

  },

  settingsIcon: {

    width: 24,

    height: 24,

  },

  headerRight: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  headerButton: {

    marginLeft: 16,

  },

  headerIcon: {

    width: 24,

    height: 24,

  },

  headerButtonText: {

    fontSize: 16,

    color: '#007AFF',

  },

  title: {

    fontSize: 34,

    fontWeight: 'bold',

    marginLeft: 16,

    marginBottom: 16,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    borderRadius: 10,

    marginHorizontal: 16,

    paddingHorizontal: 10,

    marginBottom: 16,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  listContainer: {

    paddingHorizontal: 16,

  },

  listItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 12,

  },

  listItemIcon: {

    width: 40,

    height: 40,

    borderRadius: 8,

    marginRight: 16,

  },

  listItemContent: {

    flex: 1,

  },

  listItemTitle: {

    fontSize: 18,

    fontWeight: '500',

  },

  listItemSubtitle: {

    fontSize: 14,

    color: '#999',

  },

  moreButton: {

    padding: 8,

  },

  moreButtonText: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#999',

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

  },

  activeTabIcon: {

    tintColor: '#007AFF',

  },

});



export default HomeListScreen;