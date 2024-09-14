import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeListScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Settings" onPress={() => {}} />
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity onPress={() => {}}>
          <Image style={styles.searchIcon} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.item}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Photos & video</Text>
          <Text style={styles.subText}>3471 Items</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.menuIcon}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.item}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Recent videos</Text>
          <Text style={styles.subText}>13 Items</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.menuIcon}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.item}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>iTunes</Text>
          <Text style={styles.subText}>27 Items</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.menuIcon}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.item}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Recently deleted</Text>
          <Text style={styles.subText}>13 Items</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.menuIcon}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.item}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>The Chainsmoker Closer</Text>
          <Text style={styles.subText}>28,Feb 2020</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.menuIcon}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.item}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Plant photoshoot</Text>
          <Text style={styles.subText}>25,Feb 2020</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.menuIcon}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.item}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Quotes</Text>
          <Text style={styles.subText}>25,Feb 2020</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.menuIcon}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.item}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Business management</Text>
          <Text style={styles.subText}>21,Feb 2020</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.menuIcon}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Connections')}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeGrid')}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Recents')}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  subText: {
    fontSize: 12,
    color: '#888',
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
});

export default HomeListScreen;