import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </View>
      </View>
      <View style={styles.searchBarContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#999"
        />
        <Icon name="search" size={20} color="white" />
      </View>
      <Text style={styles.topSearchHeader}>Top Search</Text>
      <View style={styles.tagsContainer}>
        <Button
          title="Camp day"
          onPress={() => console.log('Camp day')}
          color="#444"
        />
        <Button
          title="Halloween"
          onPress={() => console.log('Halloween')}
          color="#444"
        />
        <Button
          title="Candy Challenge"
          onPress={() => console.log('Candy Challenge')}
          color="#444"
        />
        <Button
          title="Dancing"
          onPress={() => console.log('Dancing')}
          color="#444"
        />
        <Button
          title="Christmas"
          onPress={() => console.log('Christmas')}
          color="#444"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: 'white',
    fontSize: 18,
  },
  statusIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    color: 'white',
    padding: 10,
  },
  topSearchHeader: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});

export default SearchScreen;