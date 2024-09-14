import React from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MessageScreen = () => {
  const messages = [
    { id: '1', name: 'Jonathan D. Dye', message: 'Hello', time: 'Now', avatar: require('../assets/snack-icon.png') },
    { id: '2', name: 'Charles L. Wenner', message: 'Its need urgently', time: '10:00 am', avatar: require('../assets/snack-icon.png') },
    { id: '3', name: 'Luther K. Cusack', message: 'Check this design', time: '04 Sep', avatar: require('../assets/snack-icon.png') },
    { id: '4', name: 'Devignedge UI Design T.', message: 'Hello, Manik are you there?', time: 'Yesterday', avatar: require('../assets/snack-icon.png') },
    { id: '5', name: 'Gloria G. Johnson', message: 'Hi Nik', time: '3 day', avatar: require('../assets/snack-icon.png') },
    { id: '6', name: 'Madge T. Crews', message: 'Check it', time: '04 Sep', avatar: require('../assets/snack-icon.png') },
    { id: '7', name: 'Rosemary J. Strickland', message: 'Hello', time: '03 Sep', avatar: require('../assets/snack-icon.png') }
  ];

  const renderMessage = ({ item }) => (
    <View style={styles.messageContainer}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.messageTextContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{item.time}</Text>
        <View style={styles.statusDot} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Message</Text>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search ..."
          style={styles.searchInput}
        />
        <Icon name="search-outline" size={20} color="#C4C4C4" style={styles.searchIcon} />
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.fabButton}>
        <Icon name="add-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FF',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 10,
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    marginLeft: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageTextContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  message: {
    fontSize: 14,
    color: '#7E7E7E',
  },
  timeContainer: {
    alignItems: 'center',
  },
  time: {
    fontSize: 14,
    color: '#7E7E7E',
  },
  statusDot: {
    width: 10,
    height: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    marginTop: 5,
  },
  fabButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#FF6C44',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default MessageScreen;