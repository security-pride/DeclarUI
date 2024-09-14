import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Switch } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const AddLocationsScreen = () => {

  const navigation = useNavigation();

  const [isLockScreenEnabled, setIsLockScreenEnabled] = useState(false);



  const handleAddLocation = () => {

    // Logic to add location

  };



  const toggleLockScreen = () => {

    setIsLockScreenEnabled(previousState => !previousState);

  };



  return (

    <View style={styles.container}>

      <Image

        source={require('../assets/snack-icon.png')}

        style={styles.backgroundImage}

      />

      <View style={styles.overlay}>

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Icon name="menu-outline" size={24} color="#fff" />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>Add location</Text>

          <TouchableOpacity>

            <Icon name="location-outline" size={24} color="#fff" />

          </TouchableOpacity>

        </View>



        <View style={styles.lockScreenContainer}>

          <Icon name="lock-closed-outline" size={24} color="#fff" />

          <Text style={styles.lockScreenText}>Lock screen</Text>

          <Switch

            trackColor={{ false: "#767577", true: "#81b0ff" }}

            thumbColor={isLockScreenEnabled ? "#f5dd4b" : "#f4f3f4"}

            ios_backgroundColor="#3e3e3e"

            onValueChange={toggleLockScreen}

            value={isLockScreenEnabled}

          />

        </View>



        <TouchableOpacity style={styles.addButton} onPress={handleAddLocation}>

          <Icon name="add-outline" size={24} color="#fff" />

          <Text style={styles.addButtonText}>Click to add location</Text>

        </TouchableOpacity>

      </View>

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

    position: 'absolute',

    width: '100%',

    height: '100%',

  },

  overlay: {

    flex: 1,

    backgroundColor: 'rgba(0,0,0,0.2)',

    padding: 16,

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginTop: 40,

    marginBottom: 20,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#fff',

  },

  lockScreenContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

  },

  lockScreenText: {

    color: '#fff',

    marginLeft: 10,

    marginRight: 'auto',

  },

  addButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'rgba(255,255,255,0.3)',

    padding: 15,

    borderRadius: 8,

  },

  addButtonText: {

    color: '#fff',

    marginLeft: 10,

  },

});



export default AddLocationsScreen;