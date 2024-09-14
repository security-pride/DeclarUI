import React from 'react';

import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const downloadData = [

  {

    id: '1',

    title: 'Gift yourself this UI Kit and enjoy!',

    author: 'John Wiseberg',

    duration: '08:12',

    image: require('../assets/snack-icon.png'),

  },

  {

    id: '2',

    title: 'Make your Mess Your Message',

    author: 'Mendy Santiago',

    duration: '12:38',

    image: require('../assets/snack-icon.png'),

  },

  {

    id: '3',

    title: 'Meet Your Dreams and Make It Real',

    author: 'Maria Trofimova',

    duration: '09:46',

    image: require('../assets/snack-icon.png'),

  },

];



const DownloadItem = ({ item }) => (

  <View style={styles.itemContainer}>

    <Image source={item.image} style={styles.thumbnail} />

    <View style={styles.itemInfo}>

      <Text style={styles.itemTitle}>{item.title}</Text>

      <Text style={styles.itemAuthor}>{item.author}</Text>

    </View>

    <Text style={styles.itemDuration}>{item.duration}</Text>

  </View>

);



const DownloadsScreen = () => {

  const navigation = useNavigation();



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Downloads</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

      </View>

      <FlatList

        data={downloadData}

        renderItem={({ item }) => <DownloadItem item={item} />}

        keyExtractor={item => item.id}

        contentContainerStyle={styles.listContent}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1E1E1E',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    color: 'white',

  },

  profileImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  listContent: {

    paddingHorizontal: 20,

  },

  itemContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

    backgroundColor: '#2C2C2C',

    borderRadius: 10,

    padding: 10,

  },

  thumbnail: {

    width: 80,

    height: 60,

    borderRadius: 5,

  },

  itemInfo: {

    flex: 1,

    marginLeft: 10,

  },

  itemTitle: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

  itemAuthor: {

    color: '#999999',

    fontSize: 14,

    marginTop: 5,

  },

  itemDuration: {

    color: '#999999',

    fontSize: 12,

    position: 'absolute',

    top: 10,

    left: 15,

    backgroundColor: 'rgba(0,0,0,0.5)',

    padding: 2,

    borderRadius: 3,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    height: 60,

    backgroundColor: '#2C2C2C',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#999999',

  },

  activeTabIcon: {

    tintColor: 'white',

  },

});



export default DownloadsScreen;