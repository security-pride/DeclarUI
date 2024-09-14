import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    title: 'Ricardo',
    date: '15,Feb 2020',
    image: '../assets/snack-icon.png', // Replace with actual image path
  },
  {
    id: '2',
    title: 'Sand pot',
    date: '25,Feb 2020',
    image: '../assets/snack-icon.png', // Replace with actual image path
  },
  {
    id: '3',
    title: 'Subramani',
    date: '15,Feb 2020',
    image: '../assets/snack-icon.png', // Replace with actual image path
  },
  {
    id: '4',
    title: 'Ricardo',
    date: '15,Feb 2020',
    image: '../assets/snack-icon.png', // Replace with actual image path
  },
];

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
    <TouchableOpacity style={styles.moreIcon}>
      <Icon name="ellipsis-vertical" size={20} color="#000" />
    </TouchableOpacity>
  </View>
);

const RecentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recents</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 10,
  },
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: 'grey',
  },
  moreIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default RecentsScreen;