import React, { useState } from 'react';

import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Switch, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const AddLocationsScreen = () => {

  const [isLocked, setIsLocked] = useState(false);



  const toggleLock = () => setIsLocked(previousState => !previousState);



  return (

    <View style={styles.container}>

      <ImageBackground source={require('../assets/snack-icon.png')} style={styles.backgroundImage}>

        <StatusBar barStyle="light-content" />

        <View style={styles.header}>

          <TouchableOpacity style={styles.menuButton}>

            <Icon name="menu" size={24} color="#fff" />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>Add location</Text>

          <TouchableOpacity style={styles.locationButton}>

            <Icon name="location-on" size={24} color="#fff" />

          </TouchableOpacity>

        </View>

        <View style={styles.content}>

          <View style={styles.lockContainer}>

            <Icon name="lock" size={24} color="#fff" />

            <Text style={styles.lockText}>Lock screen</Text>

            <Switch

              trackColor={{ false: "#767577", true: "#81b0ff" }}

              thumbColor={isLocked ? "#f5dd4b" : "#f4f3f4"}

              onValueChange={toggleLock}

              value={isLocked}

            />

          </View>

          <TouchableOpacity style={styles.addButton}>

            <Icon name="add" size={24} color="#fff" />

            <Text style={styles.addButtonText}>Click to add location</Text>

          </TouchableOpacity>

        </View>

      </ImageBackground>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

  },

  backgroundImage: {

    flex: 1,

    resizeMode: 'cover',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: 'rgba(0,0,0,0.5)',

  },

  menuButton: {

    padding: 8,

  },

  headerTitle: {

    color: '#fff',

    fontSize: 20,

    fontWeight: 'bold',

  },

  locationButton: {

    padding: 8,

  },

  content: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    padding: 16,

  },

  lockContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'rgba(0,0,0,0.5)',

    padding: 16,

    borderRadius: 8,

    marginBottom: 16,

  },

  lockText: {

    color: '#fff',

    marginLeft: 8,

    marginRight: 16,

  },

  addButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'rgba(0,0,0,0.5)',

    padding: 16,

    borderRadius: 8,

  },

  addButtonText: {

    color: '#fff',

    marginLeft: 8,

  },

});



export default AddLocationsScreen;