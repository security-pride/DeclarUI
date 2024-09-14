import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const pillData = [
  {
    name: 'Abilify',
    description: 'This medicine is a pink, round, tablet imprinted with "A-011 30".',
    image: require('../assets/snack-icon.png'),
  },
  {
    name: 'Abilify',
    description: 'This medicine is a white, round, tablet imprinted with "A-010 20".',
    image: require('../assets/snack-icon.png'),
  },
  {
    name: 'Abilify',
    description: 'This medicine is a yellow, round, tablet imprinted with "A-009 15".',
    image: require('../assets/snack-icon.png'),
  },
  {
    name: 'acamprosate CALCIUM',
    description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "435".',
    image: require('../assets/snack-icon.png'),
  },
];

const IdentifyResultScreen = () => {
  const navigation = useNavigation();

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress('ResultDetail')}>
      <Image source={item.image} style={styles.pillImage} />
      <View style={styles.textContainer}>
        <Text style={styles.pillName}>{item.name}</Text>
        <Text style={styles.pillDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Results</Text>
      <FlatList
        data={pillData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.footerButton} onPress={() => handlePress('PillIdentifier')}>
        <Text style={styles.footerButtonText}>Go to Pill Identifier</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  pillImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  pillName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pillDescription: {
    fontSize: 14,
    color: '#333',
  },
  footerButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default IdentifyResultScreen;