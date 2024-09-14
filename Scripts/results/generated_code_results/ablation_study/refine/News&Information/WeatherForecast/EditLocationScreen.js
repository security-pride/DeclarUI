import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Switch, StatusBar, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const EditLocationScreen = ({ navigation }) => {

  const [isAutoDetectionEnabled, setIsAutoDetectionEnabled] = useState(true);



  const toggleSwitch = () => setIsAutoDetectionEnabled(previousState => !previousState);



  return (

    <View style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Icon name="arrow-left" size={24} color="#fff" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Edit location</Text>

      </View>

      <ScrollView style={styles.content}>

        <TouchableOpacity style={styles.addLocationButton}>

          <Icon name="plus" size={24} color="#fff" />

          <Text style={styles.addLocationText}>Add location</Text>

        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Current location</Text>

        <View style={styles.locationItem}>

          <View style={styles.locationInfo}>

            <Icon name="map-marker-outline" size={24} color="#fff" style={styles.locationIcon} />

            <Text style={styles.locationText}>Automatic detection</Text>

          </View>

          <Switch

            trackColor={{ false: "#767577", true: "#81b0ff" }}

            thumbColor={isAutoDetectionEnabled ? "#f5dd4b" : "#f4f3f4"}

            ios_backgroundColor="#3e3e3e"

            onValueChange={toggleSwitch}

            value={isAutoDetectionEnabled}

          />

        </View>

        <Text style={styles.infoText}>

          In some places, the function of automatic detection does not work well. For example:

          Found location is very far from your real location. In that case you can turn off

          automatic detection, then add your city manually by searching with name of your city

        </Text>

      </ScrollView>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#0c3a5c',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    paddingTop: StatusBar.currentHeight + 16,

    backgroundColor: '#0f4c75',

  },

  backButton: {

    marginRight: 16,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#fff',

  },

  content: {

    flex: 1,

  },

  addLocationButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#1a6b9e',

    padding: 16,

    marginTop: 16,

    marginHorizontal: 16,

    borderRadius: 8,

  },

  addLocationText: {

    color: '#fff',

    fontSize: 16,

    marginLeft: 16,

  },

  sectionTitle: {

    fontSize: 16,

    color: '#bbb',

    marginTop: 24,

    marginBottom: 8,

    marginLeft: 16,

  },

  locationItem: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingVertical: 12,

    paddingHorizontal: 16,

    backgroundColor: '#1a6b9e',

  },

  locationInfo: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  locationIcon: {

    marginRight: 16,

  },

  locationText: {

    color: '#fff',

    fontSize: 16,

  },

  infoText: {

    color: '#bbb',

    fontSize: 14,

    marginTop: 16,

    marginHorizontal: 16,

    lineHeight: 20,

  },

});



export default EditLocationScreen;