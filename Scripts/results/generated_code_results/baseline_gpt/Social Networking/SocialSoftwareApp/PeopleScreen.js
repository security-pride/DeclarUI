import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: '1',
    name: 'Martha Craig',
    time: '8 min',
    image: '../assets/snack-icon.png',
    active: true
  },
  {
    id: '2',
    name: 'Kieron Dotson',
    time: '10 min',
    image: '../assets/snack-icon.png',
    active: true
  },
  {
    id: '3',
    name: 'Zack John',
    time: null,
    image: '../assets/snack-icon.png',
    active: false
  },
  {
    id: '4',
    name: 'Jamie Franco',
    time: null,
    image: '../assets/snack-icon.png',
    active: false
  },
  {
    id: '5',
    name: 'Tabitha Potter',
    time: null,
    image: '../assets/snack-icon.png',
    active: false
  },
  {
    id: '6',
    name: 'Albert Lasker',
    time: '30 min',
    image: '../assets/snack-icon.png',
    active: true
  }
];

const PeopleScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        {item.time && <Text style={styles.time}>{item.time}</Text>}
      </View>
      {item.active && <Icon name="hand-right-outline" size={20} color="gray" style={styles.icon} />}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>People</Text>
        <View style={styles.headerIcons}>
          <Icon name="chatbubble-outline" size={24} color="black" style={styles.headerIcon} />
          <Icon name="person-add-outline" size={24} color="black" />
        </View>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#ccc"
      />
      <View style={styles.story}>
        <Icon name="add-circle-outline" size={24} color="black" />
        <View style={styles.storyText}>
          <Text style={styles.storyTitle}>Your story</Text>
          <Text style={styles.storySubtitle}>Add to your story</Text>
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <Text style={styles.recentlyActive}>RECENTLY ACTIVE</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  headerIcons: {
    flexDirection: 'row'
  },
  headerIcon: {
    marginRight: 16
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    height: 40
  },
  story: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  storyText: {
    marginLeft: 8
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  storySubtitle: {
    color: '#888'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  textContainer: {
    flex: 1,
    marginLeft: 12
  },
  name: {
    fontSize: 16
  },
  time: {
    color: '#888'
  },
  icon: {
    marginLeft: 8
  },
  recentlyActive: {
    marginTop: 16,
    marginBottom: 8,
    color: '#888',
    fontWeight: 'bold'
  }
});

export default PeopleScreen;