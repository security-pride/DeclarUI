import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const people = [
  { id: '1', name: 'Martha Craig', avatar: '../assets/snack-icon.png' },
  { id: '2', name: 'Kieron Dotson', avatar: '../assets/snack-icon.png' },
  { id: '3', name: 'Zack John', avatar: '../assets/snack-icon.png' },
  { id: '4', name: 'Jamie Franco', avatar: '../assets/snack-icon.png' },
  { id: '5', name: 'Tabitha Potter', avatar: '../assets/snack-icon.png' },
];

const NewMessageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cancel} onPress={() => navigation.goBack()}>Cancel</Text>
        <Text style={styles.title}>New message</Text>
      </View>
      
      <View style={styles.toInputContainer}>
        <Text style={styles.toText}>To:</Text>
        <TextInput style={styles.textInput} placeholder="Type a name" />
      </View>
      
      <TouchableOpacity style={styles.groupContainer}>
        <Icon name="group" size={24} />
        <Text style={styles.groupText}>Create a New Group</Text>
        <Icon name="chevron-right" size={24} />
      </TouchableOpacity>
      
      <Text style={styles.peopleText}>ЛЮДИ</Text>
      
      <FlatList
        data={people}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.personContainer}>
            <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
            <Text style={styles.nameText}>{item.name}</Text>
          </View>
        )}
      />
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
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cancel: {
    color: '#007AFF',
    fontSize: 17,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  toInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  toText: {
    fontSize: 17,
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 17,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  groupText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 17,
  },
  peopleText: {
    marginTop: 16,
    marginLeft: 16,
    fontSize: 15,
    color: '#888',
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  nameText: {
    fontSize: 17,
  },
});

export default NewMessageScreen;