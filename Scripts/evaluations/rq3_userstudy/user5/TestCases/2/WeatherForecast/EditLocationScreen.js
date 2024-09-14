import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const EditLocationScreen = () => {

  const navigation = useNavigation();

  const [isAutomaticDetection, setIsAutomaticDetection] = useState(true);



  const toggleAutomaticDetection = () => setIsAutomaticDetection(previousState => !previousState);



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#fff" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Edit location</Text>

      </View>



      <TouchableOpacity style={styles.addLocationButton} onPress={() => navigation.navigate('AddLocations')}>

        <Icon name="add" size={24} color="#fff" />

        <Text style={styles.addLocationText}>Add location</Text>

      </TouchableOpacity>



      <View style={styles.sectionHeader}>

        <Text style={styles.sectionHeaderText}>Current location</Text>

      </View>



      <View style={styles.automaticDetectionContainer}>

        <View style={styles.automaticDetectionLeft}>

          <Icon name="location-outline" size={24} color="#fff" />

          <Text style={styles.automaticDetectionText}>Automatic detection</Text>

        </View>

        <Switch

          trackColor={{ false: "#767577", true: "#81b0ff" }}

          thumbColor={isAutomaticDetection ? "#f5dd4b" : "#f4f3f4"}

          ios_backgroundColor="#3e3e3e"

          onValueChange={toggleAutomaticDetection}

          value={isAutomaticDetection}

        />

      </View>



      <View style={styles.footer}>

        <Text style={styles.footerText}>

          In some places, the function of automatic detection does not work well. For example:

          Found location is very far from your real location. In that case you can turn off

          automatic detection, then add your city manually by searching with name of your city

        </Text>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#0d2f4f',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    paddingTop: 40,

  },

  headerTitle: {

    color: '#fff',

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 16,

  },

  addLocationButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#1e4a6d',

    padding: 16,

    marginTop: 16,

  },

  addLocationText: {

    color: '#fff',

    fontSize: 16,

    marginLeft: 16,

  },

  sectionHeader: {

    backgroundColor: '#1a3c5a',

    padding: 16,

    marginTop: 16,

  },

  sectionHeaderText: {

    color: '#fff',

    fontSize: 16,

  },

  automaticDetectionContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  automaticDetectionLeft: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  automaticDetectionText: {

    color: '#fff',

    fontSize: 16,

    marginLeft: 16,

  },

  footer: {

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    padding: 16,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },

  footerText: {

    color: '#fff',

    fontSize: 12,

    textAlign: 'center',

  },

});



export default EditLocationScreen;