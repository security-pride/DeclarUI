import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const RecentsScreen = () => {

  const navigation = useNavigation();



  const recentItems = [

    { id: '1', title: 'Ricardo', date: '15.Feb 2020', image: require('../assets/snack-icon.png'), type: 'fullWidth' },

    { id: '2', title: 'Sand pot', date: '25.Feb 2020', image: require('../assets/snack-icon.png'), type: 'video' },

    { id: '3', title: 'Ricardo', date: '15.Feb 2020', image: require('../assets/snack-icon.png'), type: 'regular' },

    { id: '4', title: 'Subramani', date: '15.Feb 2020', image: require('../assets/snack-icon.png'), type: 'fullWidth', liked: true },

    { id: '5', title: 'Untitled', date: '', image: require('../assets/snack-icon.png'), type: 'regular' },

  ];



  const renderItem = ({ item }) => (

    <View style={[styles.itemContainer, item.type === 'fullWidth' && styles.fullWidthItem]}>

      <Image source={item.image} style={[styles.itemImage, item.type === 'fullWidth' && styles.fullWidthImage]} />

      {item.type === 'video' && (

        <View style={styles.playButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />

        </View>

      )}

      {item.liked && (

        <View style={styles.likeIcon}>

          <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />

        </View>

      )}

      <View style={styles.itemInfo}>

        <Text style={styles.itemTitle}>{item.title}</Text>

        <Text style={styles.itemDate}>{item.date}</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Text style={styles.moreButtonText}>···</Text>

      </TouchableOpacity>

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />

        </TouchableOpacity>

        <View style={styles.headerRight}>

          <TouchableOpacity style={styles.headerButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.gridIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.headerButton}>

            <Text style={styles.headerButtonText}>Select</Text>

          </TouchableOpacity>

        </View>

      </View>



      <Text style={styles.title}>Recents</Text>



      <FlatList

        data={recentItems}

        renderItem={renderItem}

        keyExtractor={item => item.id}

        contentContainerStyle={styles.listContainer}

      />



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

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

  menuIcon: {

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

  gridIcon: {

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

  listContainer: {

    paddingHorizontal: 16,

  },

  itemContainer: {

    marginBottom: 16,

    borderRadius: 8,

    overflow: 'hidden',

  },

  fullWidthItem: {

    width: '100%',

  },

  itemImage: {

    width: '100%',

    height: 150,

    borderRadius: 8,

  },

  fullWidthImage: {

    height: 200,

  },

  playButton: {

    position: 'absolute',

    top: '50%',

    left: '50%',

    transform: [{ translateX: -20 }, { translateY: -20 }],

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    borderRadius: 20,

    padding: 10,

  },

  playIcon: {

    width: 20,

    height: 20,

    tintColor: 'white',

  },

  likeIcon: {

    position: 'absolute',

    top: 10,

    left: 10,

    backgroundColor: 'white',

    borderRadius: 15,

    padding: 5,

  },

  heartIcon: {

    width: 20,

    height: 20,

    tintColor: 'red',

  },

  itemInfo: {

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    padding: 10,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },

  itemTitle: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

  itemDate: {

    color: 'white',

    fontSize: 12,

  },

  moreButton: {

    position: 'absolute',

    top: 10,

    right: 10,

    padding: 5,

  },

  moreButtonText: {

    fontSize: 20,

    color: 'white',

    fontWeight: 'bold',

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



export default RecentsScreen;