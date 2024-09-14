import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const EditLocationScreen = ({ navigation }) => {

  const [isAutoDetectionEnabled, setIsAutoDetectionEnabled] = useState(true);



  const toggleAutoDetection = () => setIsAutoDetectionEnabled(previousState => !previousState);



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')} style={styles.backButton}>

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



      <View style={styles.optionContainer}>

        <View style={styles.optionLeft}>

          <Icon name="location-outline" size={24} color="#fff" style={styles.optionIcon} />

          <Text style={styles.optionText}>Automatic detection</Text>

        </View>

        <Switch

          trackColor={{ false: "#767577", true: "#81b0ff" }}

          thumbColor={isAutoDetectionEnabled ? "#f5dd4b" : "#f4f3f4"}

          ios_backgroundColor="#3e3e3e"

          onValueChange={toggleAutoDetection}

          value={isAutoDetectionEnabled}

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

    backgroundColor: '#0e4c92',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    paddingTop: 40,

  },

  backButton: {

    marginRight: 16,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#fff',

  },

  addLocationButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#0a3d78',

    padding: 16,

    marginTop: 16,

  },

  addLocationText: {

    color: '#fff',

    fontSize: 18,

    marginLeft: 16,

  },

  sectionHeader: {

    backgroundColor: '#083464',

    padding: 16,

    marginTop: 16,

  },

  sectionHeaderText: {

    color: '#fff',

    fontSize: 16,

  },

  optionContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: '#0a3d78',

    padding: 16,

  },

  optionLeft: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  optionIcon: {

    marginRight: 16,

  },

  optionText: {

    color: '#fff',

    fontSize: 16,

  },

  footer: {

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    padding: 16,

    backgroundColor: '#083464',

  },

  footerText: {

    color: '#fff',

    fontSize: 14,

    lineHeight: 20,

  },

});



export default EditLocationScreen;