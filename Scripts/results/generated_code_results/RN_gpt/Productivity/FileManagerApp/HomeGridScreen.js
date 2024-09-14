import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const HomeGridScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="settings" size={24} />
        <View style={styles.navigation}>
          <TouchableOpacity>
            <Icon name="view-list" size={24} />
          </TouchableOpacity>
          <Text style={styles.sortText}>Name</Text>
          <Text style={styles.selectText}>Select</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.homeText}>Home</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={24} />
        </TouchableOpacity>
        <View style={styles.grid}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.gridItem}>
            <Text style={styles.gridItemText}>Photos & videos</Text>
            <Text style={styles.gridItemCount}>3471 Items</Text>
          </ImageBackground>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.gridItem}>
            <Text style={styles.gridItemText}>Favourite videos</Text>
            <Text style={styles.gridItemCount}>13 Items</Text>
          </ImageBackground>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.gridItem}>
            <Text style={styles.gridItemText}>Recently deleted</Text>
            <Text style={styles.gridItemCount}>13 Items</Text>
          </ImageBackground>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.gridItem}>
            <Text style={styles.gridItemText}>iTunes</Text>
            <Text style={styles.gridItemCount}>27 Items</Text>
          </ImageBackground>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.gridItemTall}>
            <Text style={styles.gridItemText}>Plant photoshoot</Text>
            <Text style={styles.gridItemDate}>25, Feb 2020</Text>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeGrid')}>
          <Icon name="home" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Recents')}>
          <Icon name="history" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeList')}>
          <Icon name="add-circle-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Connections')}>
          <Icon name="wifi" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="insert-chart" size={24} />
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
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    marginLeft: 10,
    fontSize: 16,
  },
  selectText: {
    marginLeft: 10,
    fontSize: 16,
  },
  body: {
    paddingHorizontal: 20,
  },
  homeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  searchIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    aspectRatio: 1,
    justifyContent: 'flex-end',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gridItemTall: {
    width: '100%',
    aspectRatio: 0.5,
    justifyContent: 'flex-end',
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gridItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  gridItemCount: {
    fontSize: 12,
    color: '#fff',
  },
  gridItemDate: {
    fontSize: 12,
    color: '#fff',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
  },
});

export default HomeGridScreen;