import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeGridScreen = () => {

  const navigation = useNavigation();



  const renderGridItem = (title, items, image, isLarge = false) => (

    <View style={[styles.gridItem, isLarge && styles.gridItemLarge]}>

      <Image source={image} style={styles.gridItemImage} />

      <View style={styles.gridItemContent}>

        <Text style={styles.gridItemTitle}>{title}</Text>

        <Text style={styles.gridItemSubtitle}>{items} items</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Text style={styles.moreButtonText}>···</Text>

      </TouchableOpacity>

    </View>

  );



  return (

    <View style={styles.container}>

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



      <ScrollView contentContainerStyle={styles.gridContainer}>

        {renderGridItem('Photos & videos', 3471, require('../assets/snack-icon.png'))}

        {renderGridItem('Favourite videos', 13, require('../assets/snack-icon.png'))}

        <View style={styles.gridItem}>

          <View style={styles.iTunesGrid}>

            <Image source={require('../assets/snack-icon.png')} style={styles.iTunesImage} />

            <Image source={require('../assets/snack-icon.png')} style={styles.iTunesImage} />

            <Image source={require('../assets/snack-icon.png')} style={styles.iTunesImage} />

            <TouchableOpacity style={styles.iTunesAddButton}>

              <Text style={styles.iTunesAddButtonText}>+</Text>

            </TouchableOpacity>

          </View>

          <View style={styles.gridItemContent}>

            <Text style={styles.gridItemTitle}>iTunes</Text>

            <Text style={styles.gridItemSubtitle}>27 items</Text>

          </View>

          <TouchableOpacity style={styles.moreButton}>

            <Text style={styles.moreButtonText}>···</Text>

          </TouchableOpacity>

        </View>

        {renderGridItem('Recently deleted', 13, require('../assets/snack-icon.png'))}

        {renderGridItem('Plant photoshoot', 0, require('../assets/snack-icon.png'), true)}

      </ScrollView>



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

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F8F8F8',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingTop: 60,

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

    backgroundColor: '#E8E8E8',

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

  gridContainer: {

    padding: 8,

  },

  gridItem: {

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    margin: 8,

    padding: 16,

    flexDirection: 'row',

    alignItems: 'center',

  },

  gridItemLarge: {

    height: 200,

  },

  gridItemImage: {

    width: 60,

    height: 60,

    borderRadius: 10,

    marginRight: 16,

  },

  gridItemContent: {

    flex: 1,

  },

  gridItemTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  gridItemSubtitle: {

    fontSize: 14,

    color: '#999',

  },

  moreButton: {

    padding: 8,

  },

  moreButtonText: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  iTunesGrid: {

    width: 60,

    height: 60,

    flexDirection: 'row',

    flexWrap: 'wrap',

    marginRight: 16,

  },

  iTunesImage: {

    width: 28,

    height: 28,

    margin: 1,

    borderRadius: 5,

  },

  iTunesAddButton: {

    width: 28,

    height: 28,

    backgroundColor: '#F0F0F0',

    borderRadius: 5,

    justifyContent: 'center',

    alignItems: 'center',

  },

  iTunesAddButtonText: {

    fontSize: 20,

    color: '#999',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    backgroundColor: '#FFFFFF',

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



export default HomeGridScreen;