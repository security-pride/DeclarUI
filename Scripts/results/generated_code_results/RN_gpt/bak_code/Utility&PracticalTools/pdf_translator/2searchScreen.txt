import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();

  const renderFileItem = () => (
    <View style={styles.fileItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
      <View style={styles.fileInfo}>
        <Text style={styles.fileTitle}>Travel plan_America.pdf</Text>
        <Text style={styles.fileDetails}>Oct 22,2022 98KB</Text>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Icon name="more-vert" size={24} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PDF file management</Text>
        <TouchableOpacity>
          <Icon name="search" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="sort" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search your files"
          placeholderTextColor="#ccc"
        />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={renderFileItem}
        keyExtractor={item => item.toString()}
      />
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('home')}
      >
        <Icon name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 20,
  },
  searchBarContainer: {
    margin: 10,
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  fileIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  fileInfo: {
    flex: 1,
  },
  fileTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fileDetails: {
    color: '#888',
  },
  menuButton: {
    padding: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;