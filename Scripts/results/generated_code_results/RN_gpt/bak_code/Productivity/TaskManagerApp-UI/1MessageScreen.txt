import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageScreen = () => {
  const navigation = useNavigation();

  const navigateTo = (screenId) => {
    navigation.navigate(screenId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Message</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.userAvatar} />
      </View>
      <TextInput style={styles.searchBar} placeholder="Search ..." />
      <View style={styles.contactItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View style={styles.contactText}>
          <Text style={styles.contactName}>Jonathan D. Dye</Text>
          <Text style={styles.contactMessage}>Hello</Text>
        </View>
        <Text style={styles.contactTime}>Now</Text>
      </View>
      <View style={styles.contactItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View style={styles.contactText}>
          <Text style={styles.contactName}>Charles L. Wenner</Text>
          <Text style={styles.contactMessage}>Its need urgently</Text>
        </View>
        <Text style={styles.contactTime}>10:00 am</Text>
      </View>
      <View style={styles.contactItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View style={styles.contactText}>
          <Text style={styles.contactName}>Luther K. Cusack</Text>
          <Text style={styles.contactMessage}>Check this design</Text>
        </View>
        <Text style={styles.contactTime}>04:00 pm</Text>
      </View>
      <View style={styles.contactItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View style={styles.contactText}>
          <Text style={styles.contactName}>Devignedge UI Design T.</Text>
          <Text style={styles.contactMessage}>Hello, Manik are you there?</Text>
        </View>
        <Text style={styles.contactTime}>Yesterday</Text>
      </View>
      <View style={styles.contactItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View style={styles.contactText}>
          <Text style={styles.contactName}>Gloria G. Johnson</Text>
          <Text style={styles.contactMessage}>Hi Nik</Text>
        </View>
        <Text style={styles.contactTime}>3 day</Text>
      </View>
      <View style={styles.contactItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View style={styles.contactText}>
          <Text style={styles.contactName}>Madge T. Crews</Text>
          <Text style={styles.contactMessage}>Check it</Text>
        </View>
        <Text style={styles.contactTime}>04 Sep</Text>
      </View>
      <View style={styles.contactItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View style={styles.contactText}>
          <Text style={styles.contactName}>Rosemary J. Strickland</Text>
          <Text style={styles.contactMessage}></Text>
        </View>
        <Text style={styles.contactTime}>03 Sep</Text>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigateTo('AddTask')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Board')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Dashboard')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.addButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Task')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBar: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactText: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  contactMessage: {
    color: '#6F6F6F',
  },
  contactTime: {
    color: '#6F6F6F',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#3C4477',
    paddingHorizontal: 20,
  },
  bottomNavIcon: {
    width: 30,
    height: 30,
  },
  addButton: {
    width: 50,
    height: 50,
    marginTop: -10,
  },
});

export default MessageScreen;