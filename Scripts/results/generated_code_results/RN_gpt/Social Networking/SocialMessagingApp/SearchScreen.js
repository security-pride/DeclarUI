import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Icon name="arrow-back" size={20} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
        />
      </View>

      <View style={styles.filtersContainer}>
        <Button title="Chats" onPress={() => {}} />
        <Button title="Photos" onPress={() => {}} />
        <Button title="Videos" onPress={() => {}} />
      </View>

      <View style={styles.recentSearchesContainer}>
        <Text style={styles.headerText}>Recent searches</Text>
        <TouchableOpacity>
          <Text style={styles.clearAllText}>Clear all</Text>
        </TouchableOpacity>
      </View>

      {['Designers', 'Dasha Taran', 'Billie Eillish'].map((term, index) => (
        <View key={index} style={styles.searchItemContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>{term}</Text>
          <TouchableOpacity>
            <Icon name="close" size={20} />
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.keyboardContainer}>
        <View style={styles.keyboardRow}>
          {'QWERTYUIOP'.split('').map(letter => (
            <Text key={letter} style={styles.key}>{letter}</Text>
          ))}
        </View>
        <View style={styles.keyboardRow}>
          {'ASDFGHJKL'.split('').map(letter => (
            <Text key={letter} style={styles.key}>{letter}</Text>
          ))}
        </View>
        <View style={styles.keyboardRow}>
          <TouchableOpacity>
            <Icon name="arrow-up" size={20} />
          </TouchableOpacity>
          {'ZXCVBNM'.split('').map(letter => (
            <Text key={letter} style={styles.key}>{letter}</Text>
          ))}
          <TouchableOpacity>
            <Icon name="backspace" size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.keyboardRow}>
          <TouchableOpacity>
            <Icon name="happy-outline" size={20} />
          </TouchableOpacity>
          <Text style={styles.spaceBar}>space</Text>
          <TouchableOpacity>
            <Icon name="mic-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 8,
    padding: 8,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  recentSearchesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearAllText: {
    color: 'red',
  },
  searchItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  keyboardContainer: {
    marginTop: 20,
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  key: {
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: 'center',
  },
  spaceBar: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: 'center',
  },
});

export default SearchScreen;