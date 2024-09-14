import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  { id: '1', title: 'Photos & video', items: '3471 Items', icon: require('../assets/snack-icon.png') },
  { id: '2', title: 'Recent videos', items: '13 Items', icon: require('../assets/snack-icon.png') },
  { id: '3', title: 'iTunes', items: '27 Items', icon: require('../assets/snack-icon.png') },
  { id: '4', title: 'Recently deleted', items: '13 Items', icon: require('../assets/snack-icon.png') },
  { id: '5', title: 'The Chainsmoker Closer', date: '28,Feb 2020', icon: require('../assets/snack-icon.png') },
  { id: '6', title: 'Plant photoshoot', date: '25,Feb 2020', icon: require('../assets/snack-icon.png') },
  { id: '7', title: 'Quotes', date: '25,Feb 2020', icon: require('../assets/snack-icon.png') },
  { id: '8', title: 'Business management', date: '21,Feb 2020', icon: require('../assets/snack-icon.png') },
];

const HomeListScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        {item.items && <Text style={styles.subtitle}>{item.items}</Text>}
        {item.date && <Text style={styles.subtitle}>{item.date}</Text>}
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Icon name="ellipsis-vertical" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
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
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  searchButton: {
    padding: 8,
  },
  list: {
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: '#888',
  },
  moreButton: {
    padding: 8,
  },
});

export default HomeListScreen;