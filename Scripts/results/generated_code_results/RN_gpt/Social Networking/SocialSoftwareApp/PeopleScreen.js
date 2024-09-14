import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Button, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For icons

const PeopleScreen = ({ navigation }) => {
  const peopleData = [
    { name: 'Martha Craig', active: true },
    { name: 'Kieron Dotson', lastActive: '8 min' },
    { name: 'Zack John', lastActive: '10 min' },
    { name: 'Jamie Franco', active: true },
    { name: 'Tabitha Potter', lastActive: '19 min' }
  ];
  
  const recentlyActiveData = [
    { name: 'Albert Lasker', lastActive: '30 min' }
  ];

  const navigateToIntro = (person) => {
    navigation.navigate('Intro', { person });
  };

  const navigateToChat = (person) => {
    navigation.navigate('Chats', { person });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>People</Text>
        <View style={styles.headerIcons}>
          <Icon name="chatbubbles-outline" size={25} style={styles.icon} />
          <Icon name="person-add-outline" size={25} style={styles.icon} />
        </View>
      </View>
      <TextInput style={styles.searchBar} placeholder="Search" />
      <TouchableOpacity style={styles.addStoryOption}>
        <Icon name="add-circle-outline" size={40} style={styles.addStoryIcon} />
        <View style={styles.addStoryText}>
          <Text style={styles.addStoryTitle}>Your story</Text>
          <Text style={styles.addStorySubtitle}>Add to your story</Text>
        </View>
      </TouchableOpacity>
      {peopleData.map((person, index) => (
        <TouchableOpacity key={index} style={styles.personRow} onPress={() => navigateToIntro(person.name)}>
          <ImageBackground style={styles.personImage} source={require('../assets/snack-icon.png')}>
            {person.lastActive && <Text style={styles.statusTime}>{person.lastActive}</Text>}
            {person.active && <View style={styles.activeIndicator} />}
          </ImageBackground>
          <Text style={styles.personName}>{person.name}</Text>
          <Button title="👋" onPress={() => navigateToChat(person.name)} />
        </TouchableOpacity>
      ))}
      <Text style={styles.recentlyActiveTitle}>RECENTLY ACTIVE</Text>
      {recentlyActiveData.map((person, index) => (
        <TouchableOpacity key={index} style={styles.personRow} onPress={() => navigateToIntro(person.name)}>
          <ImageBackground style={styles.personImage} source={require('../assets/snack-icon.png')}>
            <Text style={styles.statusTime}>{person.lastActive}</Text>
          </ImageBackground>
          <Text style={styles.personName}>{person.name}</Text>
          <Button title="👋" onPress={() => navigateToChat(person.name)} />
        </TouchableOpacity>
      ))}
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
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 8,
  },
  searchBar: {
    height: 40,
    margin: 12,
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  addStoryOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  addStoryIcon: {
    marginRight: 16,
  },
  addStoryText: {
    justifyContent: 'center',
  },
  addStoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addStorySubtitle: {
    color: '#888',
  },
  personRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  personImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  personName: {
    flex: 1,
    fontSize: 16,
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  statusTime: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: 2,
    borderRadius: 3,
    fontSize: 10,
  },
  recentlyActiveTitle: {
    marginHorizontal: 16,
    marginVertical: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
  },
});

export default PeopleScreen;