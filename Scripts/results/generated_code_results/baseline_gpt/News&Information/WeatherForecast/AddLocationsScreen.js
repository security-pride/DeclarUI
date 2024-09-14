import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddLocationsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={30} color="#000" />
        <Text style={styles.headerTitle}>Add location</Text>
        <Icon name="location-outline" size={30} color="#000" />
      </View>
      
      <View style={styles.lockScreen}>
        <Icon name="lock-closed-outline" size={20} color="#000" />
        <Text style={styles.lockScreenText}>Lock screen</Text>
        <View style={styles.radioButton}>
          <View style={styles.radioButtonSelected} />
        </View>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Icon name="add" size={20} color="#fff" />
        <Text style={styles.addButtonText}>Click to add location</Text>
      </TouchableOpacity>

      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E8E6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lockScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  lockScreenText: {
    marginLeft: 10,
    fontSize: 16,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  radioButtonSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5a5a5a',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  addButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  image: {
    flex: 1,
    width: '100%',
  },
});

export default AddLocationsScreen;