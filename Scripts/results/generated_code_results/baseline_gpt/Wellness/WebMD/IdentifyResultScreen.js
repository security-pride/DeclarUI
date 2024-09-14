import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    title: 'Abilify',
    description: 'This medicine is a pink, round, tablet imprinted with "A-011 30".',
    image: require('../assets/snack-icon.png'),
  },
  {
    id: '2',
    title: 'Abilify',
    description: 'This medicine is a white, round, tablet imprinted with "A-010 20".',
    image: require('../assets/snack-icon.png'),
  },
  {
    id: '3',
    title: 'Abilify',
    description: 'This medicine is a yellow, round, tablet imprinted with "A-009 15".',
    image: require('../assets/snack-icon.png'),
  },
  {
    id: '4',
    title: 'acamprosate CALCIUM',
    description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "435".',
    image: require('../assets/snack-icon.png'),
  },
  {
    id: '5',
    title: 'acamprosate CALCIUM',
    description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "569".',
    image: require('../assets/snack-icon.png'),
  },
  {
    id: '6',
    title: 'acamprosate CALCIUM',
    description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "77" and "1140".',
    image: require('../assets/snack-icon.png'),
  },
  {
    id: '7',
    title: 'acamprosate CALCIUM',
    description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "M AC".',
    image: require('../assets/snack-icon.png'),
  },
];

const IdentifyResultScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ResultDetail')}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Icon name="chevron-forward" size={20} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default IdentifyResultScreen;